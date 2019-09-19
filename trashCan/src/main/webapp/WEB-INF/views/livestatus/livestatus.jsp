<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/statistics/livestatus.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
	<!-- RawGit CDN chart.css -->
	<link rel="stylesheet" href="https://cdn.rawgit.com/theus/chart.css/v1.0.0/dist/chart.css" />
	<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-3.3.1.min.js"/>"></script>
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="livestatusContainer">
						<div class = "livestatusContent">
							<select id="place" name="place">
								<option>--장소선택--</option>
								<c:forEach var="place" items="${place}" varStatus="status">	
									<option value="${place.placeSeq}">${place.placeName}</option>
								</c:forEach>
							</select>
							<select name="detail" id="detail">
								<option>--세부장소선택--</option>
							</select>
							<div>
								<c:if test="${list != null}">
									<div  id="chart">
										<c:forEach var="list" items="${list }" varStatus="status">
										<div class="charts charts--vertical">
											<div class="charts__chart chart--p${list.trashAmount } chart--green"></div>
											<div>${list.raspberrypiIp }</div>
										</div>
										</c:forEach>
									</div>
								</c:if>
							</div>
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
	$(function() {
		$('#place').change( function(){
			if ($("#place option:selected").text() == "--장소선택--") {
				$("#detail").find('option').remove();
				$("#detail").append("<option>" + "--세부장소선택--" + "</option>");
				
				$("#chart > *").remove();
				
				$.ajax({
					url : 'mainList.do',
					type : 'post',
					dataType : 'json',
					success : function(data){
						for ( i = 0; i < data.length; i++) {
							$("#chart").append("<div class='charts charts--vertical'><div class='charts__chart chart--p" + data[i].trashAmount +" chart--green'></div><div>" + data[i].raspberrypiIp +"</div></div>");
						}
					},error:function(request,status,error){
				    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				   	}
				});
				
			} else {
				var placeSeq = $("#place option:selected").val();
				 
				$.ajax({
					url : 'selectOpt.do',
					data : {placeSeq : placeSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#detail").find('option').remove();
						$("#detail").append("<option>" + "--세부장소선택--" + "</option>");
						
						for (i = 0; i < data.length; i++) {
							$("#detail").append("<option value =" + data[i].detailSeq + ">" + data[i].detailName + "</option>")
						}
						
						$("#chart > *").remove();
						
						$.ajax({
							url : 'selectList.do',
							data : {placeSeq : placeSeq},
							type : 'post',
							dataType : 'json',
							success : function(data){
								for ( l = 0; l < data.length; l++) {
									$("#chart").append("<div class='charts charts--vertical'><div class='charts__chart chart--p" + data[l].trashAmount +" chart--green'></div><div>" + data[l].raspberrypiIp +"</div></div>");
								}
							},error:function(request,status,error){
						    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
						   	}
						});
						
					} else {
						$("#detail").find('option').remove();
						$("#detail").append("<option>" + "--세부장소선택--" + "</option>");
					}
					console.log(data.length);
				    },error:function(request,status,error){
				    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				   	}
				});
			}
		});
		$("#detail").change( function(){
			if ($("#detail option:selected").text() == "--세부장소선택--") {
				var placeSeq = $("#place option:selected").val();
				$("#chart > *").remove();
				
				$.ajax({
					url : 'selectList.do',
					data : {placeSeq : placeSeq},
					type : 'post',
					dataType : 'json',
					success : function(data){
						for ( i = 0; i < data.length; i++) {
							$("#chart").append("<div class='charts charts--vertical'><div class='charts__chart chart--p" + data[i].trashAmount +" chart--green'></div><div>" + data[i].raspberrypiIp +"</div></div>");
						}
					},error:function(request,status,error){
				    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				   	}
				});
				
			}else{
				var detailSeq = $("#detail option:selected").val();
				$("#chart > *").remove();
				
				$.ajax({
					url : 'selectList_detail.do',
					data : {detailSeq : detailSeq},
					type : 'post',
					dataType : 'json',
					success : function(data){
						for ( i = 0; i < data.length; i++) {
							$("#chart").append("<div class='charts charts--vertical'><div class='charts__chart chart--p" + data[i].trashAmount +" chart--green'></div><div>" + data[i].raspberrypiIp +"</div></div>");
						}
					},error:function(request,status,error){
				    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				   	}
				});
			}
		});
	});
</script>
</html>