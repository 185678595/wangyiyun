/**
 * Created by hxsd on 2017/06/28.
 */

function getplaylist(id,callback){
    $.ajax({
        url:"https://api.imjad.cn/cloudmusic?type=playlist&id="+id,
        success:function(res){
            callback(res.playlist.tracks,res)
        }
    })
}

function isCollected(id){
    var list=JSON.parse(localStorage.collection);
    if (list[id]&&list[id].isCollected){
        return true
    }else{
        return false
    }
}

(function(){
    var id=getUrl().id;

    $('.songlist-top #goback').click(function(){
        router("tab");
    });

getplaylist(id,function(data,rd){
    var bgImg=rd.playlist.coverImgUrl;
    var ar=rd.playlist.creator.nickname;

    $('.blbg').css("background-image","url("+bgImg+")");

    $('.songlist-top .cvr').css("background-image","url("+bgImg+")");
    $('.songlist-top .cnt h2').html(rd.playlist.name);
    $('.songlist-top .cnt .art span').text(rd.playlist.creator.nickname);
    $('.songlist-top .cnt .art .avade').attr('src',rd.playlist.creator.avatarUrl);

    for (var i=0;i<data.length;i++){
        var music=data[i];
        var $li=$($('.songtemplate').html());

        $li.find('.songname').html(data[i].name);
        $li.find('.index').html(i+1);
        $li.find('.ar').html(data[i].ar[0].name);

        $li.appendTo($('#songlist'));
        $li.data("music",music).click(function () {
            $('.global').show();
            musicController.play($(this).data("music"))
        }).find('img').click(function(){
            //if(isCollected($(this).parent().data("music"))){}
            if($(this).attr()){



/*                if (localStorage.collection){
                    //console.log(localStorage.collection)
                }else{
                    console.log($li.data("music"));

                    localStorage.collection={};
                    var list=localStorage.collection;
                    list[music.id]={"name":music.name,"art":$(this).data("music").ar[0].name,"isCollected":true}
                }
                localStorage.collection=JSON.stringify(list)*/

            }
            else{

            }
            return false;
        })
    }
})
})();
