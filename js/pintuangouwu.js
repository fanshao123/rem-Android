$(function(){
	$("section>.sc1>span>a").click(function(){
		$(this).addClass("y").parent().siblings().children().removeClass("y");
	})
	$("section>.sc1>span>.aaa").click(function(){
		$("section>.aa").show();
		$("section>.bb").hide();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.bbb").click(function(){
		$("section>.aa").hide();
		$("section>.bb").show();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.ccc").click(function(){
		$("section>.aa").hide();
		$("section>.cc").show();
		$("section>.bb").hide();
		$("section>.dd").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.ddd").click(function(){
		$("section>.aa").hide();
		$("section>.dd").show();
		$("section>.cc").hide();
		$("section>.bb").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.eee").click(function(){
		$("section>.aa").hide();
		$("section>.ee").show();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.bb").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.fff").click(function(){
		$("section>.aa").hide();
		$("section>.ff").show();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.bb").hide();
		$("section>.ee").hide();
		$("section>.hh").hide();
		$("section>.gg").hide();
	})
	$("section>.sc1>span>.ggg").click(function(){
		$("section>.aa").hide();
		$("section>.gg").show();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.bb").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.hh").hide();
	})
	$("section>.sc1>span>.hhh").click(function(){
		$("section>.aa").hide();
		$("section>.hh").show();
		$("section>.cc").hide();
		$("section>.dd").hide();
		$("section>.bb").hide();
		$("section>.ee").hide();
		$("section>.ff").hide();
		$("section>.gg").hide();
	})

//	固定标题定位
//var scr=$(document).scrollTop();
//if(scr>=400){
//	$('.sc1').animate({top:scr},30);
//  }
//  else{$('.sc1').animate({top:600},0)
//}
//})
	
	
	
})
