//当前项目绝对路径
var curWwwPath=window.document.location.href;
var pathName=window.document.location.pathname;
var pos=curWwwPath.indexOf(pathName);
var localhostPaht=curWwwPath.substring(0,pos);
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);		
var path=localhostPaht+projectName;
//------我的订单-------//
//初始化默认显示当前为第一页
pageAjax('1');
//点击分页效果
$('#paypage').on('click','.list',function(){
	if($(this).hasClass('pageItemDisable')) {
		return false;
	}else if($(this).hasClass('pageItemactive')){
		return false;
	}else{
		var $id = $(this).attr('data-page');
		//console.log($id);
		pageAjax($id);
	}
});
//根据点击的分页码 请求数据 生成订单内容
function pageAjax(id){
	$.ajax({
		type:"get",
		//url: 'http://www.shoutike.com/selorderandk?startpage='+id,
		url: 'http://localhost:8080/STK/selorderandk?startpage='+id,
		async:true,
		dataType: 'json',
		
		success: function(data){
		    /**
		     * 获得服务器返回的信息。
		     * 可以做具体的业务处理。
		     */
		    //alert('标题：ID： ' + json.title + ' ，背景： ' + json.bg + '。');
		    //console.log(data);
		    //生成分页
		    pageCreate(data.pageInfo,$('#paypage'));
		    //生成课程模块
		    var kcArry = data.pageInfo.list;
		    createLi(kcArry,$('#mypay'));
		},
		error: function(){
		    alert('服务器离家出走了。。。。。');
	    }
	});
}

//-------我的订单---------//

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

//根据数据和分页生成课程模块 订单
function createLi(arry,name){
	name.empty();
	$('<div class="rows"><ul class="table-head"><li class="head-kc">购买课程</li><li class="head-money">金额</li><li class="head-staus">状态</li><li class="head-handle">操作</li><li class="head-geren">资料送达</li></ul></div>').appendTo(name);
	$.each(arry,function(i,val){
		$('<div class="rows"><div class="thead"><h4 class="orders-num">订单号：'+arry[i].outtradeno+'</h4><p class="orders-time">下单时间：'+arry[i].createTime+'</p><p class="orders-time">失效时间：'+arry[i].overtime+'</p></div><div class="tbody"><ul class="tbody-mykc"><li class="head-kc"><span>'+arry[i].seriesid.title+'</span></li><li class="head-money"><span>￥119.90</span></li><li class="head-staus"><span>购买成功</span><br /></li><li class="head-handle"></li><li class="head-geren"></li></ul></div></div>').appendTo(name);
	});
	
}


//------我的收藏------//
scloader();
function scloader(){
	//初始化默认显示当前为第一页
	pageAjaxscjl('1');
	//点击分页效果
	$('#scjlpage').on('click','.list',function(){
		if($(this).hasClass('pageItemDisable')) {
			return false;
		}else if($(this).hasClass('pageItemactive')){
			return false;
		}else{
			var $id = $(this).attr('data-page');
			//console.log($id);
			pageAjaxscjl($id);
		}
	});
	//根据点击的分页码 请求数据 生成收藏记录内容
	function pageAjaxscjl(id){
		$.ajax({
			type:"get",
			url:'http://localhost:8080/STK/selectColl?startpage='+id,
			async:true,
			dataType: 'json',
			success: function(data){
			    /**
			     * 获得服务器返回的信息。
			     * 可以做具体的业务处理。
			     */
			    //alert('标题：ID： ' + json.title + ' ，背景： ' + json.bg + '。');
			    //console.log(data);
			    //生成分页
			    pageCreate(data.pageInfo,$('#scjlpage'));
			    //生成课程模块
			    var kcArry = data.pageInfo.list;
			    createLishouc(kcArry,$('#myscjl'));
			},
			error: function(){
			    alert('服务器离家出走了。。。。。');
		    }
		});
	}
}
function createLishouc(arry,name){
	name.empty();
	$.each(arry,function(i,val){
		$('<li class="myrecords"><div class="records-img"><img src="../cover/'+arry[i].picURL+'" width="200" height="124" /></div><div class="records-texts"><div class="records-title"><h2>'+arry[i].title+'</h2><span class="cursor glyphicon glyphicon-trash" id="close" onclick="deleteColl(this);" value="'+arry[i].uid+'" send="'+arry[i].vid+'"></span></div><div class="records-now"></div><div class="cursor golearn-btn" onclick="fromplay(this);" value="'+arry[i].id+'" send="'+arry[i].vid+'">继续学习</div><p class="colect">上次学习时间：<span>'+arry[i].addtimes+'</span></p></div></li>').appendTo(name);
	});
	
}


//-----我的播放历史记录-----//
//初始化默认显示当前为第一页
pageAjaxbfjl('1');
//点击分页效果
$('#bfjlpage').on('click','.list',function(){
	if($(this).hasClass('pageItemDisable')) {
		return false;
	}else if($(this).hasClass('pageItemactive')){
		return false;
	}else{
		var $id = $(this).attr('data-page');
		console.log($id);
		pageAjaxbfjl($id);
	}
});
//根据点击的分页码 请求数据 生成订单内容
function pageAjaxbfjl(id){
	$.ajax({
		type:"get",
		url:'http://localhost:8080/STK/selectPlay?startpage='+id,
		async:true,
		dataType: 'json',
		success: function(data){
		    /**
		     * 获得服务器返回的信息。
		     * 可以做具体的业务处理。
		     */
		    //alert('标题：ID： ' + json.title + ' ，背景： ' + json.bg + '。');
		    //console.log(data);
		    //生成分页
			bfjlpageCreate(data.pageInfo,$('#bfjlpage'));
		    //生成课程模块
		    var kcArry = data.pageInfo.list;
		    createLiold(kcArry,$('#mybfjl'));
		},
		error: function(){
		    alert('服务器离家出走了。。。。。');
	    }
	});
}
//根据数据生成分页 播放记录
function bfjlpageCreate(data,name){
	name.empty();
	var strfirst = '<li class="list '+(data.isFirstPage?'pageItemDisable':'pageItem')+'" data-page="1">首页</li>';
	var strprev = '<li class="list '+(data.isFirstPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.prePage+'">上一页</li>';
    name.append(strfirst);
    name.append(strprev);
	var strnext = '<li class="list '+(data.isLastPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.nextPage+'">下一页</li>';
	var strlast = '<li class="list '+(data.isLastPage?'pageItemDisable':'pageItem')+'"  data-page="'+data.pages+'">尾页</li>';
	var arry = data.navigatepageNums;
	$.each(arry,function(i,val){
		var items = '<li class="list '+(data.pageNum==arry[i]?'pageItemactive':'pageItem')+'" data-page="'+arry[i]+'" style="display:'+(arry[i]>10?'none':'inline-block')+'">'+arry[i]+'</li>';
		name.append(items);
		
	});
	name.append(strnext);
	name.append(strlast);
	
}

function createLiold(arry,name){
	name.empty();
	$.each(arry,function(i,val){
	    $('<li class="myrecords"><div class="records-img"><img src="../cover/'+arry[i].picURL+'" width="200" height="124" /></div><div class="records-texts"><div class="records-title"><h2>'+arry[i].title+'</h2></div><div class="records-now">已学习到第'+arry[i].sort+'集</div><div class="cursor golearn-btn toplay-btn" onclick="fromplay(this);" value="'+arry[i].id+'" send="'+arry[i].vid+'">继续学习</div><p>上次学习时间：<span>'+arry[i].addtimes+'</span></p></div></li>').appendTo(name);
	});
	
}

//----点击收藏和播放记录的继续学习------//
//点击继续学习进入播放页面fromplay();
function fromplay(obj){
	var SID=$(obj).attr("value");
	var id=$(obj).attr("send");
	var uid=$("#uid").val();
	 $.ajax({  
		 
		 url:"http://localhost:8080/STK/selectID?sid="+SID,
           type: "POST",  
           success:function(data){  
        	   //alert(data);
        	   if(data==true){
        		   $.post("http://localhost:8080/STK/selectHelpCode?uid="+uid,"",function(date){
        			  //alert(date+"444");
        			   if(date==true){
        			    window.location.href = "http://localhost:8080/STK/ffpplay?seriesID="+SID+"&id="+id;

	        	   }else{
	                 window.location.href = "http://localhost:8080/STK/play?seriesID="+SID+"&id="+id;
	        	   }  
        		   });
        	   }else{
	                 window.location.href = "http://localhost:8080/STK/play?seriesID="+SID+"&id="+id;

        	   }
        	   }  
    });
	
}
//删除收藏记录
function deleteColl(obj){
	var uid=$(obj).attr("value");
	var vid=$(obj).attr("send");
	 $.ajax({  
		 url:"http://localhost:8080/STK/deleteCollect?uid="+uid+"&vid="+vid,
           type: "POST",  
           success:function(data){  
        	   getCollect();
        	   scloader();
              }  
    });
}









