/**
 * Created by hxsd on 2017/06/27.
 */
var server = "http://musicapi.duapp.com/api.php";


function getPlaylist(num,callback){
    function isCache(){
        if (new Date().getTime()-localStorage.time >= 3*1000) {return false}
        if(localStorage.data){ return true;}
        return false;
    }
    if(isCache()){
        var no=JSON.parse(localStorage.data);
        callback(no.playlists)
    }else{

        var limit=num;
        $.ajax({
            url: server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
            //url:"data/topPlayList.json",
            success:function(res){
                localStorage.time=new Date().getTime();
                localStorage.data=JSON.stringify(res);
                callback(res.playlists)
            }

        })
    }
}
$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {

        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        // 如果需要分页器
        pagination: '.swiper-pagination'
    });
});



getPlaylist(9,function(data){
    var $songsheet=$('.songsheet');

    for (var i=0;i<data.length;i++){
        var $template=$($('#template').html());
        $template.find('a').attr('href',"#detali?id="+data[i].id);
        $template.find('.common').html(data[i].playCount);
        $template.find('img').attr('src',data[i].coverImgUrl);
        $template.find('p').html(data[i].name);
        $songsheet.append($template)
    }
});

