<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<title>main</title>
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main.css" />">
	<link href="<c:url value="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"/>" rel="stylesheet">
</head>
<body>
	<div class="wrap">
		<div class="menu">
			<div class="menu_header">
				<a href="<c:url value='/main/main.do'/>">ADMIN HOME</a>
			</div>
			<div class="menu_div">
				<p>RASPBERRYPI</p>
				<p><a href="<c:url value='/raspberrypi/raspberrypiRegisterForm.do'/>">register</a></p>
				<p><a href="<c:url value='/raspberrypi/raspberrypiManagement.do'/>">management</a></p>
			</div>
			<div class="menu_div">
				<p>CLEANER</p>
				<p><a>management</a></p>
				<p><a>request to join</a></p>
			</div>
			<div class="menu_mapping">
				<p>MAPPING</p>
				<p><a>mapping</a></p>
			</div>
			<div class="menu_div">
				<p>STATISTICS</p>
				<p><a>live</a></p>
				<p><a>daily</a></p>
				<p><a>monthly</a></p>
			</div>
		</div>	
	</div>
</body>
</html>