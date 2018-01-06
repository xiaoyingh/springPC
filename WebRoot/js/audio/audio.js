var curWwwPath=window.document.location.href;
var pathName=window.document.location.pathname;
var pos=curWwwPath.indexOf(pathName);
var localhostPaht=curWwwPath.substring(0,pos);
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	
var path=localhostPaht+projectName;
//页面初始化
init();
function init(){
	$.ajax({
	type: "get",
	async: true,//异步请求
        url: "http://www.shoutike.com/STK/mpindex",
        dataType: "jsonp",
        jsonp: "callback",//一般默认为:callback
        jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function(json){
            /**
             * 获得服务器返回的信息。
             * 可以做具体的业务处理。
             */            
            var kwldLeft = json.mptextread;
            var kwdwLeft = json.mphobbyread;
            var kwld = json.mpplaytotalbytext;
            var kwdw = json.mpplaytotalbyhobby;
            kwTo(kwldLeft,$('#kwld-left'));
            kwTo(kwdwLeft,$('#kwdw-left'));
            kwtjTo(kwld,$('#kwld'));
            kwtjTo(kwdw,$('#kwdw'));
            
        },
        error: function(){
            alert('error404 404。。。');
        }
    });
    
}
//-----事件----------//

//音频模块鼠标移入效果
audioMove($('#kwld-left'));
audioMove($('#kwdw-left'));

//音频模块点击播放效果
audioPlay($('#kwld-left'),'.audio-btn');
audioPlay($('#kwdw-left'),'.audio-btn');
audioPlay($('#kwld'),'a');
audioPlay($('#kwdw'),'a');

//点击模块进入音频二级页面
audioSubpage($('#kwld-left'),'.kcmask');

//头部 点击推荐和分类效果
var subindex = '';
$('#audio-tj').on('click',function(){
	$(this).addClass('head-active');
	$(this).next().removeClass('head-active');
	$('.audio-banner').show();
	$('.audio-kc').show();
	$('#audio_sub').hide();
});
$('#audio-fl').on('click',function(){
	//点击分类到二级页面效果 传参
	subindex = $(this).attr('value');
	subclick(subindex);
	//二级页面后 给对于的导航 添加焦点
	$('.sub_cen a').each(function(){
		//一级页面点击进入二级页面时 跟对应的导航 添加焦点
		$('.sub_cen a').removeClass('fl_active');
	});
	$('.sub_cen a').eq(0).addClass('fl_active');
});

//点击课文朗读的查看更多
$('#subkwld').on('click',function(){
	//点击分类到二级页面效果 传参
	subindex = $(this).attr('value');
	subclick(subindex);
	//二级页面后 给对于的导航 添加焦点
	$('.sub_cen a').each(function(){
		//一级页面点击进入二级页面时 跟对应的导航 添加焦点
		$('.sub_cen a').removeClass('fl_active');
	});
	$('.sub_cen a').eq(1).addClass('fl_active');
});

//点击课外读物的查看更多
$('#subkwdw').on('click',function(){
	//点击分类到二级页面效果 传参
	subindex = $(this).attr('value');
	subclick(subindex);
	//二级页面后 给对于的导航 添加焦点和点击效果
	$('.sub_cen a').each(function(){
		//一级页面点击进入二级页面时 跟对应的导航 添加焦点
		$('.sub_cen a').removeClass('fl_active');
		if($(this).attr('value')== subindex){
			$(this).addClass('fl_active');
			//alert($(this).html());
		}
	});

});

//二级页面 导航点击效果
subnavclick();
function subnavclick(){
	$('.sub_cen a').each(function(){
		//点击二级页面导航效果
		$(this).on('click',function(){
			$('.sub_cen a').removeClass('fl_active');
		    $(this).addClass('fl_active');
		    subindex = $(this).attr('value');
		    subclick(subindex);
	    });
	});
}


//-------函数---------//

//推荐封装函数 第一个参数 数据 第二个参数需要放的位置
function kwtjTo(arry,name){
	name.empty();
	$.each(arry, function(i,val) {
    	$('<li value="'+arry[i].id+'"><a href="javascript:;"><span>'+(i+1)+'</span><p class="ellipsis">'+arry[i].title+'</p></a></li>').appendTo(name);
    });
}

//推荐封装函数 第一个参数 数据 第二个参数需要放的位置
//反引号
/*
function kwTo(arry,name){
	$.each(arry, function(i,val) {
    	$(`<ul class="tabs_con">
			<li value="${arry[i].id}">
				<a href="javascript:;">
					<div class="kc">
						<div class="kctop">
							<img class="lazy" alt="" width="136" height="136" src="http://www.shoutike.com/STK/cover/${arry[i].picURL}" />
						</div>
		                <div class="kcmask"></div>
		                <div class="audio-btn"></div>
					</div>
					<div class="texts">
						<div class="titles ellipsis">${arry[i].title}</div>
						<div class="kcsm">
							<p>
								<span></span>
								<span>${arry[i].clickRate}</span>
							</p>
						</div>
					</div>
				</a>
			</li>
		</ul>`).appendTo(name);
    });
}*/
//字符串拼接
function kwTo(arry,name){
	name.empty();
	$.each(arry, function(i,val) {
    	$('<ul class="tabs_con"><li value="'+arry[i].id+'"><a href="javascript:;"><div class="kc"><div class="kctop"><img class="lazy" alt="" width="136" height="136" src="http://www.shoutike.com/STK/cover/'+arry[i].picURL+'" /></div><div class="kcmask"></div><div class="audio-btn"></div></div><div class="texts"><div class="titles ellipsis">'+arry[i].title+'</div><div class="kcsm"><p><span></span><span>'+arry[i].clickRate+'</span></p></div></div></a></li></ul>').appendTo(name);
    });
}

//循环生成播放列表 给默认播放标题添加焦点
function menuList(arry,nowid,name){
	name.empty();
	$.each(arry, function(i,val) {
    	$('<li class="list '+(nowid==arry[i].id?'list_active':'')+'" value="'+arry[i].id+'"><h6 class="ellipsis">'+arry[i].title+'</h6></li>').appendTo(name);
    });
}

//生成字幕
function lyric(lyric){
	$('.lrc_wrap ul').empty();
	var lrc = lyric.split('，');
    for (var i = 0; i < lrc.length; i++) {
        $('<li>').html(lrc[i]==''?'&nbsp':lrc[i]).appendTo($('.lrc_wrap ul'));
    }
}

//音频模块移入移出函数
function audioMove(obj){
	obj.on("mouseover",'.tabs_con',function(){
		$(this).find('li').addClass('audio-active');
	});
	obj.on("mouseout",'.tabs_con',function(){
		$(this).find('li').removeClass('audio-active');
	});
}

//点击音频封面 播放音频函数
function audioPlay(obj,ele){
	obj.on("click",ele,function(){
		var indexid = $(this).parents('li').attr('value');
		//播放数据请求
		audioAjax(indexid);
	});
	
}
//音频播放系列的数据请求
function audioAjax(id){
	$.ajax({
		type: "get",
		async: true,
        url: "http://www.shoutike.com/STK/mpplayjson?seriesID="+id,
        dataType: "jsonp",
        jsonp: "callback",//一般默认为:callback
//      jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function(json){
            /**
             * 获得服务器返回的信息。
             * 可以做具体的业务处理。
             */
            
            var nowobj = json.itemvo;
            var nowattr = json.lsvideo;
            //console.log(json);
            $('#previd').attr('value',json.topid);
            $('#nextid').attr('value',json.nextid);
            $('#nowid').attr('value',json.nowserid);
            $('#audio_img img').attr('src','http://www.shoutike.com/STK/cover/'+json.bg);
            $('#audio_title').html(json.title);
            $('#audio').attr('src','http://oss.shoutike.com/'+nowobj.videoURL);
            //生成字幕
            lyric(nowobj.des);
            //生成列表
            menuList(nowattr,nowobj.id,$('#items'));
            //点击请求到数据后 立刻播放 默认播放第一小节
            player.play();
            fntimer();
            $('#playing_btn').css('background','url('+path+'/img/audio/audio_icon.png) no-repeat');
		    $('#playing_btn').css('background-position','-52px 0px');
		    $('#playing_btn').css('-webkit-background-position','-52px 0px');
		    isPlaying = true;
        },
        error: function(){
            alert('服务器离家出走了。。。。。');
        }
	});
}


//---二级页面相关---//
//进入二级页面的效果
function subclick(value){
	$('#audio-fl').addClass('head-active');
	$('#audio-fl').prev().removeClass('head-active');
	$('.audio-banner').hide();
	$('.audio-kc').hide();
	$('#audio_sub').show();
	//默认显示第一页
	navSubpageajax(value,'1');
	//二级页面音频模块的 鼠标移入效果和点击播放音频效果
    subMove($('#subitems'));
    audioPlay($('#subitems'),'.audio-btn');
}
//二级页面 音频模块移入移出效果
function subMove(obj){
	obj.on("mouseover",'.item',function(){
		$(this).addClass('audio-active');
	});
	obj.on("mouseout",'.item',function(){
		$(this).removeClass('audio-active');
	});
}
//
//点击音频模块 进入音频二级页面
function audioSubpage(obj,ele){
	obj.on("click",ele,function(){
		var indexid = $(this).parents('li').attr('value');
		
	});
}

//生成二级页面音频模块
function subpageTo(arry,name){
	$.each(arry, function(i,val) {
		
    	$('<li class="item" value="'+arry[i].id+'"><a href="javascript:;"><div class="kc"><div class="kctop"><img class="lazy" alt="" width="136" height="136" src="http://www.shoutike.com/STK/cover/'+arry[i].picURL+'" /></div><div class="kcmask"></div><div class="audio-btn"></div></div><div class="texts"><div class="titles ellipsis">'+arry[i].title+'</div><div class="kcsm"><p><span></span><span>'+arry[i].clickRate+'</span></p></div></div></a></li>').appendTo(name);
    });
}
//显示二级页面音频带分页 (第一个参数代表二级页面的分类 第二个参数代表当前二级页面的 第几个分页)
function navSubpageajax(value,id){
	$.ajax({
	    type: "get",
	    async: true,
        url: "http://www.shoutike.com/STK/mpsort?id="+value+"&startpage="+id,
        dataType: "jsonp",
        jsonp: "callback",//一般默认为:callback
        jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function(json){
            /**
             * 获得服务器返回的信息。
             * 可以做具体的业务处理。
             */
            console.log(json);
            
            $('#subitems').empty();
            pageCreate(json.pageInfo,$('#paypage'));
            //生成音频课程模块
		    var kcArry = json.pageInfo.list;
		    subpageTo(kcArry,$('#subitems'));
        },
        error: function(){
            alert('error404 404。。。');
        }
    });
}
//点击分页效果
pageClick();
function pageClick(){
	$('#paypage').on('click','.list',function(){
		if($(this).hasClass('pageItemDisable')) {
			return false;
		}else if($(this).hasClass('pageItemactive')){
			return false;
		}else{
			var $id = $(this).attr('data-page');
			navSubpageajax(subindex,$id);
		}
	});
}
//根据数据生成分页
function pageCreate(data,name){
	name.empty();
	var strfirst = '<li class="list '+(data.isFirstPage?'pageItemDisable':'pageItem')+'" data-page="1">首页</li>';
	var strprev = '<li class="list '+(data.isFirstPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.prePage+'">上一页</li>';
    name.append(strfirst);
    name.append(strprev);
	var strnext = '<li class="list '+(data.isLastPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.nextPage+'">下一页</li>';
	var strlast = '<li class="list '+(data.isLastPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.pages+'">尾页</li>';
	var arry = data.navigatepageNums;
	$.each(arry,function(i,val){
		var items = '<li class="list '+(data.pageNum==arry[i]?'pageItemactive':'pageItem')+'" data-page="'+arry[i]+'">'+arry[i]+'</li>';
		name.append(items);
	});
	name.append(strnext);
	name.append(strlast);
	
}


//-------音频播放器------//
//初始化
var timer;
var isPlaying = false; //音频播放状态 true播放中 默认为播放
var $width = 0; //进度条的宽度
var $widthvol = 0;
var slider = $('#process-all').width(); //进度条总宽度 可移动的范围是（0-300px）
var volslider = $('#vol-all').width();
var curmargin = 6;//进度条圆点本身的margin-left
var player = $("#audio")[0]; /*jquery对象转换成js对象*/
var playingBtn = document.getElementById('playing_btn');

//音量初始化 根据默认音量值 初始化音量组件
//player.volume = 0.5;
$('#vol-cur').css('width',player.volume*volslider+'px');
$('#vol-btn').css('left',player.volume*volslider+'px');
//暂停效果
playingBtn.addEventListener('click',function bindEvent(){
	if($('#audio').attr('src')==''){
      return;
    }
    if (isPlaying){ /*如果已经播放*/
   	    player.pause();/*暂停*/
        clearInterval(timer);
        this.style.background = 'url('+path+'/img/audio/audio_icon.png) no-repeat';
        this.style.backgroundPosition = '0px 0px';
        this.style.webkitBackgroundPosition = '0px 0px';
        isPlaying = false;
	    return isPlaying;
        
    }else {
        player.play(); /*播放*/
        fntimer();
        this.style.background = 'url('+path+'/img/audio/audio_icon.png) no-repeat';
        this.style.backgroundPosition = '-52px 0px';
        this.style.webkitBackgroundPosition = '-52px 0px';
        isPlaying = true;
        return isPlaying;
    }
});

//进度条移动
fnslider();
 //点击播放条
$('#process-bar').on('click',function (e) {
    if($('#audio').attr('src')==''){
      return;
    }
    var time=e.offsetX/slider*player.duration;
    player.currentTime=time;
})
$('#cur-btn').on('click',function (e) {
    e.stopPropagation();
});
//拖动进度条 改变播放进度
function fnslider(){
	$('#cur-btn').on('mousedown',function(e){
		if($('#audio').attr('src')==''){
	      return;
	    }
		var disx = 0;
	    var movedisx = 0;
	    var nowtime = 0;
	    var nowleft = $width;
		clearInterval(timer);
		//点击圆点时 当前的left值
		disx = e.pageX;
		$('.audio_key').on('mousemove',function(e){
			//鼠标或者手指移动的距离
			movedisx = e.pageX;
			$width  = movedisx - disx + nowleft;
	        curmove();
		});
		$('.audio_key').on('mouseup',function(e){
			//鼠标手指抬起时 设置改变当前播放时间
			player.currentTime = ($width/slider*player.duration);
			//console.log(player.currentTime,$width/slider*player.duration);
			if('fastSeek' in player){
			    player.fastSeek($width/slider*player.duration);//改变audio.currentTime的值
			    console.log(player.currentTime);
			}else if(player.seekable.start(0)<= $width/slider*player.duration <=player.seekable.end(0)){
				//获得第一个以秒计的音频可寻址范围（部分）：
				player.currentTime = $width/slider*player.duration;
			}else{
				//如果以上都不满足 就设置播放时间为缓冲到最大位置的时间
				//player.buffered表示音频已缓冲部分的
				player.currentTime = player.buffered.end(player.buffered.length-1);
			}
			fntimer();
			$('.audio_key').off('mousemove');
			$('.audio_key').off('mouseup');
		});
		
	});
	
}
/*
//拖动播放条
$('#cur-btn').on('mousedown',function () {
	console.log(player.currentTime);
    $(document).on('mousemove',function (e) {
        var regulate=$('#process-bar');
        e.preventDefault();
        
        var left=(e.clientX-regulate.offset().left-$('#cur-btn').width()/2).toFixed(0);
        
        if(left<0||left>regulate.width()){
            return;
        }
        player.currentTime=(left/slider)*player.duration;
    })
    $(document).on('mouseup',function () {
        $(this).off('mousemove');
        $(this).off('mouseup');
    })
});

$(player).on('timeupdate',function () {
    var percent=player.currentTime/player.duration*slider;
    $('#process-cur').css('width',percent+'px');
    $('#cur-btn').css('left',percent+'px');
});
*/

//鼠标移动时 进度条和当前播放时间的状态
function curmove(){
	if($width < 0)$width = 0;
	if($width > slider)$width = slider;
	$('#process-cur').css('width',$width+'px');
    $('#cur-btn').css('left',$width+'px');
    //根据移动的距离计算出需要播放的当前时间
    nowtime = $width/slider*player.duration;
    var alltime = sToM(player.duration);
    $('#currentTime').html(sToM(nowtime)+'/'+alltime);
}

//------改变音量------//
//点击音量条调节音量
$('#vol-bar').on('click',function (e) {
    player.volume=e.offsetX/$(this).width();
})
$('#vol-btn').on('click',function (e) {
    e.stopPropagation();
});

//拖动改变音量
$('#vol-btn').on('mousedown',function () {
    $(document).on('mousemove',function (e) {
        var regulate=$('#vol-bar');
        e.preventDefault();
        var left=(e.clientX-regulate.offset().left-curmargin).toFixed(0);
        if(left<0||left>regulate.width()){
            return;
        }
        player.volume=left/volslider;
    });
    $(document).on('mouseup',function () {
        $(this).off('mousemove');
    });
})
  //音量界面操作
$('#audio').on('volumechange',function () {
    //var percent=(this.volume/1.*100).toFixed(2)+'%';
    var percent=this.volume*volslider;
    $('#vol-btn').css('left',percent+'px');
    $('#vol-cur').css('width',percent+'px');
//  if(this.volume===0){
//    $('.volume_icon').addClass('volume_mute');
//  }else{
//    $('.volume_icon').removeClass('volume_mute');
//  }
});

//每隔一秒获取当前播放时间 放到页面
function fntimer(){
	timer = setInterval(function(){
		//当前时间转成分秒
		var nowtime = sToM(player.currentTime);
		var alltime = sToM(player.duration);
		$('#currentTime').html(nowtime+'/'+alltime);
		//进度条
		$width = player.currentTime/player.duration*slider;
		$('#process-cur').css('width',$width+'px');
		$('#cur-btn').css('left',$width+'px');
		if(player.currentTime == player.duration){
			clearInterval(timer);
			var nextId = $('#nextid').attr('value');
	        var nowId = $('#nowid').attr('value');
	        var $id = nowId+'&id='+nextId;
	        audioAjax($id);
		}
	},1000);
}

//下一系列音频
$('#next_btn').on('click',function(){
	if($('#audio').attr('src')==''){
      return;
    }
	var nextId = $('#nextid').attr('value');
	var nowId = $('#nowid').attr('value');
	var $id = nowId+'&id='+nextId;
	audioAjax($id);
});

//上一系列音频
$('#prev_btn').on('click',function(){
	if($('#audio').attr('src')==''){
      return;
    }
	var prevId = $('#previd').attr('value');
	var nowId = $('#nowid').attr('value');
	var $id = nowId+'&id='+prevId;
	audioAjax($id);
});

//将秒换算成分钟 换算后放入相应标签里函数
function sToM (sec) {
	var m=Math.floor(sec/60);
	var s=Math.floor(sec%60);
	var time = toZero(m)+':'+toZero(s)
	return time;
}
//补零函数
function toZero(n){
    return n<10? '0'+n:''+n;
}

//音频列表隐藏收起
$('#music_menu').on('click',function(){
	if($(this).attr('data-onoff')=='false'){
		$(this).attr('data-onoff','true');
		$('.audio_list').slideDown();
	}else{
		$(this).attr('data-onoff','false');
		$('.audio_list').slideUp();
	}
});
//点击隐藏播放列表
$('#lbclose').on('click',function(){
	$('#music_menu').attr('data-onoff','false');
	$('.audio_list').slideUp();
});

//循环播放
$('#loop').on('click',function(){
	if($(this).attr('data-onoff')=='false'){
		$(this).attr('data-onoff','true');
		$('#audio').attr('loop','loop');
		$(this).addClass('looping');
	}else{
		$(this).attr('data-onoff','false');
		$('#audio').removeAttr('loop');
		$(this).removeClass('looping');
	}
});

//点击音频播放列表
$('#items').on('click','.list',function(){
	if($('#audio').attr('src')==''){
      return;
    }
	clearInterval(timer);
	var clickId = $(this).attr('value');
    var nowId = $('#nowid').attr('value');
    var $id = nowId+'&id='+clickId;
    audioAjax($id);
});
