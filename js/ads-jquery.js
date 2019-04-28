$(document).ready(function(e) {
	$('#ads-float #ads-nav button').click(function(){
		var txt = $('#ads-nav button').text();
        $('#ads-main').slideToggle();
        
        if(txt == 'Tắt quảng cáo'){
            $('#ads-nav button').text('Bật quảng cáo');
        }else{
            $('#ads-nav button').text('Tắt quảng cáo');
        }
	});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    },
    items:5,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});