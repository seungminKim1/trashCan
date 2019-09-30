<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/mapping/mapHome.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
	<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-3.3.1.min.js"/>"></script>
	
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content" id = "content">
					<div class="mappingContainer">
						<div class = "mappingContent" id = "mappingContent">
							<h1>매핑 등록</h1>
							<p>라즈베리파이</p>
								<table class = "mappingTable">
									<thead>
										<tr>
											<td><input type = "checkbox" id = "checkAll"></td>
											<td>라즈베리파이IP</td>
											<td>장소</td>
											<td>디테일</td>
											<td>층</td>
											<td>남/여</td>
										</tr>
									<thead>
									<tbody>
											<c:if test="${fn:length(piList) >0 }">
												<c:forEach items = "${piList }" var = "item">
													<tr>
														<td><input type = "checkbox" class = "piBox" name = "piIP" value = "${item.raspberrypiIp}"></td>
														<td>${item.raspberrypiIp}</td>
														<td>${item.placeName}</td>
														<td>${item.detailName}</td>
														<td>${item.floorName}</td>
														<td>${item.genderName}</td>
													</tr>
												</c:forEach>
											</c:if>
									</tbody>
								</table>
								<p>cleaner</p>
								<table class = "mappingTable">
									<thead>
										<tr>
											<td></td>
											<td>아이디</td>
											<td>이름</td>
											<td>연락처</td>
										</tr>
									</thead>
									<tbody>
											<c:if test="${fn:length(cList) >0 }">
												<c:forEach items = "${cList }" var = "item">
													<tr>
														<td><input type = "checkbox" name = "cleanID" value = "${item.cleanerId}"></td>
														<td>${item.cleanerId}</td>
														<td>${item.cleanerName}</td>
														<td>${item.cleanerPhone}</td>
													</tr>
												</c:forEach>
											</c:if>
									</tbody>
								</table>
							<input type = "button" value = "등록" id = "submit" onclick = "javascript:fnGetdata()" >
						</div>
					</div>
				</div>
			</div>
		</c:when>
		<c:otherwise>
			<script type="text/javascript">
				window.location.href="<c:url value='/'/>"	
			</script>
		</c:otherwise>
	</c:choose>
</body>
<script type="text/javascript">
	//checkAll
	$(function(){
		$("#checkAll").click(function(){
			if($("#checkAll").prop("checked")){
				$("input[name=piIP]").prop("checked",true);
			}else{
				$("input[name=piIP]").prop("checked",false);
			}
		})
	});
	function fnGetdata(){
		var piArray =[];
		var cleanID = $('input:checkbox[name=cleanID]:checked').val() ;
        $('input:checkbox[name=piIP]:checked').each(function(i) { 
            piArray.push($(this).val());
        })
        
     	console.log(piArray);
	        $.ajax({
	        	url: '/mapping/reg'
	        	,type : 'post'
	        	,dataType : 'json'
	        	,data: {
	        		piValues: piArray,
	        		cleanID : cleanID
	        	},
	        	complete:function(data) {
	        		alert("매핑 성공");
	        		window.location.href = '/mapping/';
	        	},
	        	error : function(xhr, status, error) {
	                 alert("에러발생");
	                 window.location.href = '/mapping/';
	           }
        });
    }
	
</script>