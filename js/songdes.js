/**
 * Created by hxsd on 2017/07/03.
 */
$(function(){
    var src=$('.singing .songpic').attr('src');
   $('.songbg').css("backgroundImage","url("+src+")");
    $('.si').append('<img src='+src+'>');

});