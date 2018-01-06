<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>手提课-活到老学到老</title>
<meta http-equiv="content-type" content="text/htm" charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta mame="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta name="keywords" content="2017考研,四六级考试,思维导图,学前,公务员考试,小学,初中,高中,考研专业课,考研公共课,高考,微商,中考,艺考,托福考试,雅思考试,法语口语" />
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="<%=path%>/css/public.css" />
<style type="text/css">
	.smzf{
		width: 750px;
		height: 700px;
		margin: 70px auto;
		background: #fff;
		padding-top: 20px;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		box-shadow: 1px 0px 13px rgba(0,0,0,.2);
		-webkit-box-shadow: 1px 0px 13px rgba(0,0,0,.2);
		-moz-box-shadow: 1px 0px 13px rgba(0,0,0,.2);
		-o-box-shadow: 1px 0px 13px rgba(0,0,0,.2);
	}
	h5,h6{
		width: 100%;
		height: 30px;
		line-height: 30px;
		padding: 0 20px;
		font-weight: normal;
		margin-bottom: 10px;
	}
	h6{
		margin-bottom: 100px;
		border-bottom: 1px solid rgba(0,0,0,.3);
	}
	h5 i{
		float: left;
		width: 120px;
		height: 30px;
	}
	h5 i a{
		display: block;
	}
	h5 i img{
		width: 120px;
		height: 30px;
	}
	h5 em{
		float: left;
		font-size: 16px;
	}
    h6 span{
    	float: left;
    	line-height: 30px;
    }
    h6 span:last-child{
    	float: right;
    }
    .smzf p{
    	width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #666;
		padding: 0 20px;
		margin-bottom: 10px;
		text-align: center;
	}
	.wxsm{
		width: 260px;
		height: auto;
		margin: 0 auto;
	}
	
	.wxsm img{
		width: 260px;
	}
	.wxsm .zfimg{
		width: 260px;
		height: 260px;
	}
	.wxsm .zfsm{
		width: 260px;
		height: 86px;
	}
	.zfokmask{
		display: none;
		width: 100%;
		height: 100%;
		background: #fff;
		opacity: 0;
		position: fixed;
		position: -ms-device-fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.zfok{
		display: none;
		width: 220px;
		height: 160px;
		background: url(<%=path%>/img/zfok.png) no-repeat center;
		position: fixed;
		position: -ms-device-fixed;
		left: 50%;
		top: 50%;
		margin-left: -110px;
		margin-top: -80px;
		z-index: 20;
		opacity: 1;
		-webkit-opacity: 1;
	}
</style>
</head>
<body>
<div class="wrap">
	<div class="navheader clearfix">
		<div class="header clearfix">
			<!--logo-->
			<div class="logo" style="padding-top: 10px;">
				<a href="<%=path%>/getmenuindex" class="navbar-brand" style="padding-top: 10px;"><img src="<%=path%>/img/icon/logo-xin.png" style="width:120px;height： 30px;" /></a>
			</div>
			
			<!--登录注册-->
			<ul class="nav-login">
				<li class="nav-dlzc"><a href="javascript:;" style="color: #fff;"></a></li>
				
				<c:if test="${!empty u.headUrl}">
				<li><a href="<%=path%>/views/personal.jsp"><img alt="" src="${u.headUrl}" style="width: 40px;height: 40px;border-radius: 50%;-webkit-border-radius: 50%;"></a></li>
				<li><a href="${pageContext.request.contextPath}/loginSession">退出</a></li></c:if>
				 <c:if test="${!empty u.telephone&&!empty u.nickName&&empty u.headUrl}">				
				<li ><a href="<%=path%>/views/personal.jsp"  >${u.nickName}</a></li>
				<li  ><a href="${pageContext.request.contextPath}/loginSession"  >退出</a></li></c:if>		
				<c:if test="${!empty u.telephone&&empty u.nickName&&empty u.headUrl}">				
				<li  ><a href="<%=path%>/views/personal.jsp" >${u.telephone}</a></li>				
				<li ><a href="${pageContext.request.contextPath}/loginSession">退出</a></li></c:if> 
			</ul>
		</div>
	</div>
	<div class="smzf">
		<h5>
			<i class="logo">
				<a href="<%=path%>/getmenuindex">
					<img src="<%=path%>/img/icon/logo-black.png"/>
				</a>
			</i>
			<em>收银台</em>
		</h5>
		<h6>
			<span>订单提交成功，请尽快付款！订单号：${ordernum }</span>
			<span>实付金额：￥<strong style="color: #d21213;">${pric }</strong></span>
		</h6>
		<p>距离订单失效还有<strong style="color: #d21213;">3</strong>秒...</p>
		<div class="wxsm">
			<img src="pcorder?vipso=${vipso }&seriesID=${seriesID }&pric=${pric }&ordernum=${ordernum }&check=${check }" class="zfimg" />
			<img src="<%=path%>/img/zfsm.png" class="zfsm" />
			
			<input type="hidden" value="${ordernum }" id="onum"/>
			
		</div>
	</div>
	<div class="footer">
		<div class="content">
			<div class="con footer-con" style="width: 1200px;">
				<div class="section">
					<div class="footer_left">
						<a href="<%=path%>/views/about/about.jsp">关于我们</a>
						<a href="<%=path%>/views/about/cooperation.jsp">联系我们</a>
						<a href="<%=path%>/views/about/propaganda.jsp">产品宣传片</a>
					</div>
					<!--<div class="footer_right">
						<a href="javascript:;">sub</a>
						<a href="javascript:;">sub</a>
						
					</div>-->
				</div>
				<div class="section">
					<a href="http://www.miitbeian.gov.cn">
					    <p class="copy">&copy; shoutike.com 京ICP备16043579号-1</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="zfokmask"></div>
<div class="zfok"></div>
</body>
</html>
<script type="text/javascript" src="<%=path%>/jscript/jquery-2.0.3.js" ></script>
<script type="text/javascript">
var curWwwPath=window.document.location.href;
var pathName=window.document.location.pathname;
var pos=curWwwPath.indexOf(pathName);
var localhostPaht=curWwwPath.substring(0,pos);
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
var path=localhostPaht+projectName;

var ordernum=$('#onum').attr("value");
var jssec = 180;

var timerajax = setInterval(function(){
		$.ajax({
			type:"get",
			url:"selvippay",
			data: {
				outtradeno: ordernum
			},
			async:true,
			success: function(msg){
				if(msg == 'yes'){
					clearInterval(timerajax);
					$('.zfokmask').show();
					$('.zfok').show();
					$('.zfok').animate({
						opacity: '0'
					},4000,function(){
					    $('.zfok').css('opacity','1');
					    $('.zfok').css('-webkit-opacity','1');
					    $('.zfokmask').hide();
					    $('.zfok').hide();
					 window.location.href=''+path+'/getmenuindex';
					});
				}else{
					//alert('未支付成功...');
				}
			},
			error: function(){
				alert('服务器开小差了，工程师正快马加鞭解决...');
			}
		});
},3000);

changes();
function changes() {
    $('.smzf p strong').html(jssec);
	//如果过了3秒  订单失效
	jssec--;
	if (jssec > -1) {
	    timer = setTimeout('changes()', 1000);//调用自身实现
	
	}
	else {
	    clearInterval(timerajax);
	    clearTimeout(timer);
	    alert('订单失效，跳转错误页面...');
	    window.location.href=''+path+'/views/wxsmzfsb.jsp';
	}
	console.log(jssec);
	
}
</script>
