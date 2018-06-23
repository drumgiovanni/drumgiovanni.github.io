$(function(){
    
    $('#About').hide();
    $('#Background').hide();
    $('#Hobby').hide();
    $('#Portfolio').hide();
    $('footer').hide();

    
    $('.hd-li').hover(function(){
        $(this).css('opacity','0.6');
    }, function(){
        $(this).css('opacity','1');
    });
    
    $(".hd-img").rotate({bind:{
        click: function(){
            $(this).rotate({
                angle: 0,
                animateTo:360
        })
            }
    }});
    $(window).scroll(function(){
        var scroll_count = $(document).scrollTop();
        console.log(scroll_count);
        if (scroll_count >= 77) {
            $('#About').fadeIn(1000);
        }
        if(scroll_count >= 300) {
            $('#Background').fadeIn(1000);
        }
        if(scroll_count >= 200 && scroll_count < 400) {
            $('#About h2').css('background-color','navy');
            $('#About h2').css('color','white');
        } else {
            $('#About h2').css('background-color','transparent');
            $('#About h2').css('color','black');
        }
        
        if(scroll_count >= 400 && scroll_count < 725) {
            $('#Background h2').css('background-color','navy');
            $('#Background h2').css('color','white');
        } else {
            $('#Background h2').css('background-color','transparent');
            $('#Background h2').css('color','black');
        }

        if(scroll_count >= 740) {
            $('#Hobby').fadeIn(1000);
        }

        if(scroll_count >= 890 && scroll_count < 1290) {
            $('#Hobby h2').css('background-color','navy');
            $('#Hobby h2').css('color','white');
        } else {
            $('#Hobby h2').css('background-color','transparent');
            $('#Hobby h2').css('color','black');
        }

        if(scroll_count >= 1150) {
            $('#Portfolio').fadeIn(1000);
            $('footer').fadeIn(1250);
        }

        if(scroll_count >= 1290 && scroll_count < 2500) {
            $('#Portfolio h2').css('background-color','navy');
            $('#Portfolio h2').css('color','white');
        } else {
            $('#Portfolio h2').css('background-color','transparent');
            $('#Portfolio h2').css('color','black');
        }

        if(scroll_count>=1580) {
            $('#shiftgn').css('margin','20px 3px 30px 0');
            $('#shiftgn').css('box-shadow', '4px 4px 6px gray');
        }
        if(scroll_count>=2242 || scroll_count< 1580) {
            $('#shiftgn').css('margin','20px auto');
            $('#shiftgn').css('box-shadow','none');
            
        }
        if(scroll_count>=2242) {
            $('#hfin').css('margin','20px 3px 30px 0');
            $('#hfin').css('box-shadow','4px 4px 6px gray');
        }

        if(scroll_count>=2710 || scroll_count<2242) {
            $('#hfin').css('margin','20px auto');
            $('#hfin').css('box-shadow','none');
        }
        if(scroll_count>=2710) {
            $('#pfin').css('margin','20px 3px 30px 0');
            $('#pfin').css('box-shadow','4px 4px 6px gray');
        }
        if(scroll_count<2710) {
            $('#pfin').css('margin','20px auto');
            $('#pfin').css('box-shadow','none');
        }
    })
});

