$(document).ready(function(){
    $('.color_choose input').on('click', function(){
        var bagcolour=$(this).attr('data-image');
        $('.active').removeClass('active');
        $('.left-column img[data-image='+bagcolour+']').addClass('active');
        $(this).addClass('active');
    });
});