# jquery-text-search 
基于 zhangxinxu 的代码修改. 他的个人网站: http://www.zhangxinxu.com/

# 修改内容 
1. 使用正则表达式过滤字符串
2. 去掉一些没啥用的提示

# 使用方法 
```
var keyword_reg_list = [
    /\\\s+n/g,
];

$("选择器").textSearch(keyword_reg_list, {markColor: "magenta"});
```
