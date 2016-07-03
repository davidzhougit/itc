// JavaScript Document

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        clickEvent = "tap";
    } else {
        clickEvent = "click";
    }

//竞彩足球选号页相关JS
$(function() {
	//竞彩足球玩法切换
	$(".jcClassify").on("click",function(e){
		e.stopPropagation();
		$(".gameTab").toggle();
		$(".kjTab").hide();
		if(!$(this).children().hasClass("downArrow")){
				$(this).children().addClass("downArrow");
			}else{
				$(".jcClassify").children().removeClass("downArrow");
				$(this).children().addClass("upArrow");
			}
	});
	$(document).on("click",function(e){
		e.stopPropagation();
		$(".gameTab").slideUp();
		$(".jcClassify").children().removeClass("downArrow");
	});
	$(".gameTab li").on("click",function(){
		$(".jcClassify").html($(this).children("span").text()+"<i class='ltcIcon upArrow'></i>");
		$(this).addClass("tabCurrent").siblings().removeClass("tabCurrent");
	});
	$(".gameTab li").on("click",function(){
		$(".kjClassify").html($(this).children("span").text()+"-开奖"+"<i class='ltcIcon upArrow'></i>");
		$(this).addClass("tabCurrent").siblings().removeClass("tabCurrent");
	});
	
	//开奖日期筛选弹框
	$(".date").on("click",function(e){
		e.stopPropagation();
		$(".kjTab").toggle();
		$(".gameTab").hide();
	});
	$(document).on("click",function(e){
		e.stopPropagation();
		$(".kjTab").slideUp();
	});
	$(".kjTab li").on("click",function(){
		$(this).addClass("tabCurrent").siblings().removeClass("tabCurrent");
	});
	
	
	//比分直播弹框
	$(".bfzbMenu").on("click",function(e){
		e.stopPropagation();
		$(".bfzbTab").toggle();
		if(!$(this).children().hasClass("downArrow")){
				$(this).children().addClass("downArrow");
			}else{
				$(".bfzbMenu").children().removeClass("downArrow");
				$(this).children().addClass("upArrow");
			}
	});
	$(document).on("click",function(e){
		e.stopPropagation();
		$(".bfzbTab").slideUp();
		$(".bfzbMenu").children().removeClass("downArrow");
	});
	$(".bfzbTab li").on("click",function(){
		$(".bfzbMenu").html($(this).text()+"<i class='ltcIcon upArrow'></i>");
		$(this).addClass("tabCurrent").siblings().removeClass("tabCurrent");
	});
	
	$(".nofocusIcon").on("click",function(){
		$(this).toggleClass("focusIcon");
	});
	$(".listRefresh").on("click",function(){
		$(this).removeClass('refreshRotate');
		setTimeout(function(){$(".listRefresh").addClass("refreshRotate");},1)
	});
	
	//开奖分类切换
	$(".gameTab li").on("click",function(){
		var w=this.id.replace("kj","");	
		$(".kjList").each(function(){  
	      if($(this).attr("kj")==w)
	      {  
	     $(this).show();
		 $(this).siblings(".kjList").hide();
	      }
	    });
	});
	
	//竞彩足球选中效果
	$(".jcList li .jcListOn .jcListTd").on("click",function(){
		if(!$(this).hasClass("jcListTdSelected")){
				$(this).addClass("jcListTdSelected");
			}else{
				$(this).removeClass("jcListTdSelected");
			}
		});
	$(".jcList li .dgxdszTr .jcListTd span").on("click",function(){
		if(!$(this).hasClass("jcListTdSelected")){
				$(this).addClass("jcListTdSelected");
			}else{
				$(this).removeClass("jcListTdSelected");
			}
		});
	$(".jcList li .jcListOn .jchhggxdsz .jchhggName").on("click",function(){
		if(!$(this).hasClass("jcListTdSelected")){
				$(this).addClass("jcListTdSelected");
			}else{
				$(this).removeClass("jcListTdSelected");
			}
		});
	$(".jcList li .jcListOn .jchhggNum").on("click",function(){
		if(!$(this).hasClass("jcListTdSelected")){
				$(this).removeClass("jcListTdSelected");
			}else{
				$(this).removeClass("jcListTdSelected");
			}
		});
	$(".jcContentTop .betbtn").on("click",function(){
		if(!$(this).hasClass("jcListTdSelected")){
				$(this).addClass("jcListTdSelected");
			}else{
				$(this).removeClass("jcListTdSelected");
			}
		});	
		
	//赛事分析
	$(".jcListOn .jcListTh").on("click",function(){
		var jcListIndex=$(this).parent().parent().parent().index();
		var $jcList=$(".analySection").eq(jcListIndex);
		if($jcList.is(":hidden")){
				$(".analySection").eq(jcListIndex).slideDown();
			}else{
				$(".analySection").eq(jcListIndex).slideUp();
			}				
	});
	
	//比赛过滤选中效果
	$(".filterSelect01 li").on("click",function(){			
			if($(this).hasClass("tabCurrent")){//当前已选中
				$(this).removeClass("tabCurrent");
			}else{
				$(".filterSelect01 li").removeClass("tabCurrent");
				$(this).addClass("tabCurrent");
			}
		})
	$(".filterSelect02 li").on("click",function(){			
			if($(this).hasClass("tabCurrent")){//当前已选中
				$(this).removeClass("tabCurrent");
			}else{
				$(".filterSelect02 li").removeClass("tabCurrent");
				$(this).addClass("tabCurrent");
			}
		})
	$(".filterSelect03 li").on("click",function(){			
		if(!$(this).hasClass("tabCurrent")){
				$(this).addClass("tabCurrent");
			}else{
				$(this).removeClass("tabCurrent");
			}
		})
		
	//比赛过滤全选
	$(".allSelect").on("click",function(){	
		$(".filterSelect03 li").addClass("tabCurrent");
		})
		
	//比赛过滤反选
	$(".deleteSelect").on("click",function(){	
		$(".filterSelect03 li").removeClass("tabCurrent");
		})
		
	//清空选中状态
	$(".deleteIcon").on("click",function(){	
		$(".jcList li .jcListContent .jcListTd").removeClass("jcListTdSelected");
		})		
	
	//赛事分析赔率弹框
	$(".jcAnaly").on("click",function(e){
		e.stopPropagation();
		if($(".plPop").is(":hidden")){
				$(".plPop").slideDown();
			}else{
				$(".plPop").slideUp();
			}				
	});
	$(document).on("click",function(e){
		e.stopPropagation();
		$(".plPop").slideUp();		
	});	
	
	//赛事分析排名弹框
	$(".jcAnalyThead").on("click",function(e){
		e.stopPropagation();
        $(".plPop").hide();
		if($(".pmTable").is(":hidden")){
				$(".pmTable").slideDown();
			}else{
				$(".pmTable").slideUp();
			}				
	});
	$(document).on("click",function(e){
		e.stopPropagation();
		$(".pmTable").slideUp();		
	});
	
	//赛事分析菜单切换
	$(".tab li").on("click",function(){
		var w=this.id.replace("tab","");	
		$(this).addClass("tabSelected");
		$(this).siblings(".tab li").removeClass("tabSelected");
		$(".jcAnalysisList,.gamedetail").each(function(){  
	      if($(this).attr("analy")==w)
	      {  
	     $(this).show();
		 $(this).siblings(".gamedetail").hide();
	      }
	    });
	});
	
	//订单确认菜单切换
	$(".hmLable li").on("click",function(){
		var w=this.id.replace("hmLable","");	
		$(this).children().addClass("radioIconSelect");
		$(this).siblings(".hmLable li").children().removeClass("radioIconSelect");
		$(".hmContent").each(function(){  
	      if($(this).attr("hm")==w)
	      {  
	     $(this).show();
	      }else{
			  $(this).hide();
			  }
	    });
	});
	
	$(".secretSet li").on("click",function(){			
				$(this).addClass("tabSelected");		
				$(this).siblings().removeClass("tabSelected");
		})
	
})


//弹出框JS
$(function(){
	$(".cancelBtn,.sureBtn").on("click",function(){
		$(".popBox").hide(function(){ $("#screen").hide();
		});
		return false;
	});
	
	$('.jcbfTr .jcListTd,.jcAnalyThead').on("click",function(){
		var h = $(document).height();
	    var w=this.id.replace("popboxLink","");	
		
		
	  $(".popBox").each(function(){  
			if($(this).attr("nex")==w)
		{
		$('#screen').css({ 'height': h });	
		$('#screen').show();
		$(this).center();
		$(this).fadeIn();
		}
	  });
		return false;
	});
	
});
jQuery.fn.center = function(loaded) {
	var obj = this;
	body_width = parseInt($(window).width());
	body_height = parseInt($(window).height());
	block_width = parseInt(obj.width());
	block_height = parseInt(obj.height());
	
	left_position = parseInt((body_width/2) - (block_width/2)  + $(window).scrollLeft());
	if (body_width<block_width) { left_position = 0 + $(window).scrollLeft(); };
	
	top_position = parseInt((body_height/2) - (block_height/2) + $(window).scrollTop());
	if (body_height<block_height) { top_position = 0 + $(window).scrollTop(); };
	
	if(!loaded) {
		
		obj.css({'position': 'absolute'});
		obj.css({ 'top': top_position, 'left': left_position });
		$(window).bind('resize', function() { 
			obj.center(!loaded);
		});
		$(window).bind('scroll', function() { 
			obj.center(!loaded);
		});
		
	} else {
		obj.stop();
		obj.css({'position': 'absolute'});
		obj.animate({ 'top': top_position }, 200, 'linear');
	}
}
