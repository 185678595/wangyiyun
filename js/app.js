/**
 * Created by hxsd on 2017/06/26.
 */

//获取参数
function getUrl(){
    var url=window.location.href;
    var data=url.split('?')[1];
    var arr=data.split('&');
    var params={};
    for (var i=0;i<arr.length;i++){
        params[arr[i].split('=')[0]]=arr[i].split('=')[1]
    }

    return params;
}
//获取模块名
function getM(){
    var url=window.location.href;
    var p=url.split('#')[1];
    if (p){
        p=p.split('?')[0];
        return p
    }else{
        return false
    }
}
//加载模块
function router(m,container){
    var container=container||$('.share');
    $.ajax({
        url:"view/"+m+".html",
        success:function(res){
            container.html(res)
        }
    });
    loadjs(m)
}

//加载JS文件
function loadjs(m){
    $.ajax({
        url:"js/"+m+".js"
    })
}

$(function(){
    router('hello');

    setTimeout(function(){

        router("tab");
        router("audio",$(".global"));

        $('.global').hide();
    },2000);
    window.onresize=function(){

        if (document.documentElement.clientWidth<960)   document.documentElement.style.fontSize=document.documentElement.clientWidth/3.2+'px';
    }
});

