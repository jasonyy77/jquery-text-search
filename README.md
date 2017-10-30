# jquery-text-search 
基于 zhangxinxu 的代码修改. 他的个人网站: http://www.zhangxinxu.com/

# 修改内容 
1. 使用正则表达式过滤字符串
2. 去掉一些没啥用的提示

# 使用方法 
```
var keyword_reg_list = [  // 要增加匹配,就在这里写正则即可.
    /\\\s+n/g,  // \n中间多个空格
    /[\uFF00-\uFFFF]/g,  // 全角符号
    /\s%|%\s/g,  // %两遍有空格
    /\s\$|\$\s/g,  // $两遍有空格
    /[^\\]'/g,  // 单引号前面没有反斜杠
    /\#[0-9\s]*\s[0-9\s]*;/g,  // &#123;这样的字符串. &死活匹配不上,有问题. 只匹配了#123;这些字符串前面有空格的情况.
];

$("#xml_content").textSearch(keyword_reg_list, {markColor: "magenta"});
```
