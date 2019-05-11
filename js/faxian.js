$(function(){
	var index=0;
	var width=$('.section1>ul>li').width();
	var lb=null;
	var s=$("#a>span").text("+");
	var z=$("#b>span").text("+");
	var c=$("#c>span").text("+");
	var v=$("#e>span").text("+");
	lb=function(){
		index=index >1 ?0:index;
		$(".section1>ul").stop().animate({left:-width*index},500);
		$(".section1>.xb>ul>li").eq(index).css("background","orangered").siblings().css("background","#D4D4D4")
	}
	var time=null;
	time=setInterval(function(){
		index ++;
		lb();
	},1500)
	
	$(".section1").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(function(){
		index ++;
		lb();
	},1000)
	})
	
	$(".section1>.xb>ul>li").click(function(){
		index=$(this).index();
		lb();
	})
	$(".header3>ul>li").click(function(){
		$(this).eq(index).css("border-bottom","0.3rem solid orange").siblings().css("border-bottom","0")
	})
	$("#a").click(function(){
		$(this).css("background","orangered")
		$(this).css("color","white")
		$(s).text("✓")
	})
	$("#b").click(function(){
		$(this).css("background","orangered")
		$(this).css("color","white")
		$(z).text("✓")
	})
	$("#c").click(function(){
		$(this).css("background","orangered")
		$(this).css("color","white")
		$(c).text("✓")
	})
	$("#e").click(function(){
		$(this).css("background","orangered")
		$(this).css("color","white")
		$(v).text("✓")
	})
})