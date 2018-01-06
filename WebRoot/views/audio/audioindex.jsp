<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<meta http-equiv="content-type" content="text/htm" charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta mame="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta name="keywords" content="shoutike" />
<meta name="description" content="shoutike" />
<link rel="stylesheet" href="<%=path %>/content/bootstrap.min.css" />
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="<%=path %>/css/public.css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/content/ion.calendar.css" />
<link rel="stylesheet" type="text/css" href="<%=path %>/css/audio/audioindex.css"/>
<link rel="stylesheet" type="text/css" href="<%=path %>/css/pagepublic.css"/>
</head>
<body>
<div class="wrap" style="background: #efefef;">
<%@include file="../../headermp.jsp"%>
	<!--countent-->
	<div class="wrapper">
		<!--banner-->
		<div class="content audio-banner boxshow">
			<div class="con" style="padding: 0;">
				<div class="banner">
					<div class="banner-con">
						<ul>
							<li><a href="javascript:;"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	    
	    <!--课文朗读-->
	    <div class="content audio-kc" style="background: none;">
			<div class="con">
				<div class="section" id="stk-sec-b">
					<div class="m_pos boxshow">
						<div class="stk-head clearfix">
							<h3>课文朗读</h3>
							<strong id="subkwld" value="1"><a href="javascript:;">查看所有</a></strong>
						</div>
						<div class="stk-body">
							<div class="tabs clearfix" id="kwld-left">
								<ul class="tabs_con">
								<!--<li>
										<a href="javascript:;">
											<div class="kc">
												<div class="kctop">
													<img class="lazy" alt="" width="136" height="136" data-original="img/example.jpg" src="<%=path %>/img/pic03.jpg" />
												</div>
								                <div class="kcmask"></div>
								                <div class="audio-btn"></div>
											</div>
											<div class="texts">
												<div class="titles ellipsis">部编版语文一年级上</div>
												<div class="kcsm">
													<p>
														<span></span>
														<span>43543</span>
													</p>
												</div>
											</div>
										</a>
									</li>-->
								</ul>
							</div>
						</div>
						
					</div>
					<div class="m_right boxshow">
						<div class="right_title">
							<h4>课文朗读</h4>
						</div>
						<div class="right_con">
							<ol id="kwld">
								<li>
									<a href="javascript:;">
										<span>1</span>
										<p class="ellipsis">部编版语文一年级上</p>
									</a>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>	
		</div>
	    <!--课外读物-->
	    <div class="content audio-kc" style="margin-bottom: 50px;">
			<div class="con">
				<div class="section" id="stk-sec-c">
					<div class="m_pos">
						<div class="stk-head">
							<h3>课外读物</h3>
							<strong id="subkwdw" value="3"><a href="javascript:;">查看所有</a></strong>
						</div>
						<div class="stk-body">
							<div class="tabs clearfix" id="kwdw-left">
								
							</div>
						</div>
					</div>
					<div class="m_right">
						<div class="right_title">
							<h4>课文朗读</h4>
						</div>
						<div class="right_con">
							<ol id="kwdw">
								<li>
									<a href="javascript:;">
										<i></i>
										<p class="ellipsis">部编版语文一年级上</p>
									</a>
								</li>
							</ol>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		<!--音频详情页面-->
		<div class="audio_sub" id="audio_sub">
			<div class="sub_nav boxshow">
				<div class="sub_cen">
					<a class="fl_active" value="0" href="javascript:;">全部</a>
					<a value="1" href="javascript:;">课文朗读</a>
					<a value="3" href="javascript:;">课外读物</a>
				</div>
			</div>
			<div class="sub_sec">
				<div class="sec section boxshow">
					<div class="sub_audio m_pos">
						<ul class="tabs_con clearfix" id="subitems">
							<!-- <li>
								<a href="javascript:;">
									<div class="kc">
										<div class="kctop">
											<img class="lazy" alt="" width="136" height="136" data-original="img/example.jpg" src="<%=path %>/img/pic03.jpg" />
										</div>
						                <div class="kcmask"></div>
						                <div class="audio-btn"></div>
									</div>
									<div class="texts">
										<div class="titles ellipsis">部编版语文一年级上</div>
										<div class="kcsm">
											<p>
												<span></span>
												<span>43543</span>
											</p>
										</div>
									</div>
								</a>
							</li> -->
							
						</ul>
						<div class="pagerwrap">
	    			    	<ul class="pagebox clearfix" id="paypage">
	    			    		<!--  
	    			    		<li>首页</li>
	    			    		<li>上一页</li>
	    			    		<li class="pageItem pageItemactive">1</li>
	    			    		<li class="pageItem">2</li>
	    			    		<li class="pageItem">3</li>
	    			    		<li class="pageItem">4</li>
	    			    		<li>下一页</li>
	    			    		<li>尾页</li>
	    			    		-->
	    			    	</ul>
	    			    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>
<div class="audio_wrap">
	<div class="audio_con">
		<div class="audio_key">
			<div class="prev_btn cursor" id="prev_btn"></div>
        	<div class="playing_btn cursor" id="playing_btn"></div>
        	<div class="next_btn cursor" id="next_btn"></div>
        	<div class="audio_img" id="audio_img"><img src="<%=path %>/img/audio/audioxs.jpg"/></div>
			<div class="process">
				<div class="audio_title" id="audio_title"></div>
	            <span class="audio_time" id="currentTime">00:00/00:00</span>
	            <div id="process-bar" class="scroll cursor">
	                <div id="process-all" class="process-all"></div>
	                <div id="process-cur" class="process-cur">
	                    <em id="cur-btn" class="cur-btn"></em>
	                </div>
	                <div id="process-ready" class="process-ready"></div>
	            </div>
	        </div>
            <div class="music_menu cursor" id="music_menu" data-onoff="false"></div>
            <div class="loop cursor" id="loop" data-onoff="false"></div>
            <div class="volume" id="volume">
            	<i class="vol_img"></i>
            	<div id="vol-bar" class="scroll cursor">
	                <div id="vol-all" class="process-all"></div>
	                <div id="vol-cur" class="process-cur">
	                    <em id="vol-btn" class="cur-btn"></em>
	                </div>
	                <div id="vol-ready" class="process-ready"></div>
	            </div>
            </div>
		</div>
		<div class="audio_list">
			<div class="list_title">
				<h5>播放列表</h5>
				<p class="lbclose cursor" id="lbclose">隐藏</p>
			</div>
			<div class="list_cen">
				<div class="items setscrollbar">
					<ul id="items">
						<!--<li class="list_active">
							<h6 class="ellipsis"></h6>
						</li>-->
						
					</ul>
				</div>
				<div class="lrc_mask">
					<div class="lrc_wrap">
						<ul class="setscrollbar">
							<li></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		<div class="audio" style="display: none;">
			<input type="hidden" value='' id='previd' />
			<input type="hidden" value='' id='nextid' />
			<input type="hidden" value='' id='nowid' />
			<audio src="" id="audio"></audio>
		</div>
	</div>
</div>

<!--登录注册页面-->
<%@include file="../../footer.jsp"%>

<div class="login-mask"></div>
</body>
</html>
<script type="text/javascript" src="<%=path %>/jscript/jquery-2.0.3.js"></script>
<script type="text/javascript" src="<%=path %>/jscript/jquery.cookie.js"></script>
<!--日期和三级城市联动的代码-->
<script type="text/javascript" src="<%=path %>/jscript/moment.min.js"></script>
<script type="text/javascript" src="<%=path %>/jscript/moment.zh-cn.js"></script>
<script type="text/javascript" src="<%=path %>/jscript/ion.calendar.min.js"></script>
<script type="text/javascript" src="<%=path %>/jscript/area.js"></script>
<!--顶部菜单移入移出效果的代码-->
<script type="text/javascript" src="<%=path %>/js/public.js"></script>
<!--登录注册找回密码 补充资料的代码-->

<script type="text/javascript" src="<%=path %>/js/login-public.js"></script>
<script type="text/javascript" src="<%=path %>/js/audio/audio.js"></script>
<script type="text/javascript">
	
	//日期调用
$('.date').each(function(){
	$(this).ionDatePicker({
		lang: 'zh-cn',
		format: 'YYYY-MM-DD'
	});
	
});


//三级联动 城市
var Gid  = document.getElementById ;
var showArea = function(){
	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	

	Gid('s_city').value + " - 县/区" + 

	Gid('s_county').value + "</h3>"
}

//Gid('s_county').setAttribute('onchange','showArea()');
</script>
