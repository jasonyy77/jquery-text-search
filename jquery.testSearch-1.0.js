// by zhangxixnu 2010-06-21  welcome to visit my personal website http://www.zhangxinxu.com/
// textSearch.js v1.0 文字，关键字的页面纯客户端搜索
// 2010-06-23 修复多字母检索标签破碎的问题
// 2010-06-29 修复页面注释显示的问题
// 2013-05-07 修复继续搜素关键字包含之前搜索关键字没有结果的问题
// 不论何种情况，务必保留作者署名。


(function($){
	$.fn.textSearch = function(keyword_reg_list,options){
		var defaults = {
			divFlag: true,
			divStr: " ",
			markClass: "",
			markColor: "red",
			nullReport: true,
			callback: function(){
				return false;
			}
		};
		var sets = $.extend({}, defaults, options || {}), clStr;
		if(sets.markClass){
			clStr = "class='"+sets.markClass+"'";
		}else{
			clStr = "style='color:"+sets.markColor+";'";
		}

		//对前一次高亮处理的文字还原
		$("span[rel='mark']").each(function() {
			var text = document.createTextNode($(this).text());
			$(this).replaceWith($(text));
		});

		$(this).each(function(){
			var t = $(this);
			var v_html = t.html();
			//删除注释
			v_html = v_html.replace(/<!--(?:.*)\-->/g,"");

			//将HTML代码支离为HTML片段和文字片段，其中文字片段用于正则替换处理，而HTML片段置之不理
			var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
			var select_html_content_array = v_html.match(tags);
			$.each(select_html_content_array, function(i, select_html_content){
				if(!/<(?:.|\s)*?>/.test(select_html_content)){//非标签
					//开始执行替换
					$.each(keyword_reg_list,function(index, reg){
						var reg_result = reg.exec(select_html_content);
						if(reg_result !== null){
							//正则替换
							select_html_content = select_html_content.replace(reg,"♂$&♀");
							return;
						}
					});
					select_html_content = select_html_content.replace(/♂/g,"<mark "+clStr+">").replace(/♀/g,"</mark>");
					select_html_content_array[i] = select_html_content;
				}
			});
			//将支离数组重新组成字符串
			var new_html = select_html_content_array.join("");

			$(this).html(new_html);
			//执行回调函数
			sets.callback();
		});
	};
})(jQuery);