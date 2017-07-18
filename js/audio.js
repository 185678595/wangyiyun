/**
 * Created by hxsd on 2017/06/28.
 */
var musicController = {
    server: "http://musicapi.duapp.com/api.php",
    play: function (music) {
        $.ajax({
            url: this.server + "?type=url&id=" + music.id,
            async: true,
            success: function (res) {
                var audio = $('audio').get(0);

                $('.songpic').attr('src', music.al.picUrl).click(function(){
                    router('songdes');
                });
                $('.singing .info .sn').html(music.name);
                $('.singing .info .ar').html(music.ar[0].name);
                audio.src = res.data[0].url;
                $('#playbtn').click(function () {
                    if ($(this).hasClass('music_play')) {
                        $(this).removeClass().addClass('music_pause');
                        audio.pause();
                        $('.disco').css({
                            transform:"rotateZ(-20deg)"
                        });
                        $('.songimg').css('animation-play-state','paused')
                    }
                    else if ($(this).hasClass('music_pause')) {
                        $(this).removeClass().addClass('music_play');
                        audio.play();
                        $('.disco').css({
                            transform:"rotateZ(0deg)"
                        });
                        $('.songimg').css('animation-play-state','running')
                    }
                })

            }
        })
    }
};
$('.range').mouseup(function () {
    console.log($(this).val())
});


