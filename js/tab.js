/**
 * Created by hxsd on 2017/06/27.
 */
function load(m){
    var m=m||"fashion";
    router(m,$('.tabcontainer'));
}
$(function(){
    load();
    $('.tabbar li').click(function(){
        $(this).addClass('active').siblings().removeClass();
        switch ($(this).index())
        {
            case 0:
                load("fashion");break;
            case 1:
                load("songlist");break;
            case 2:
                load("charts");break;
            case 3:
                load("hotsinger");break
        }

    });
});


