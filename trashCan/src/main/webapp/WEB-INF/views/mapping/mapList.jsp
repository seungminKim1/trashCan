<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
				<div class="content">
					<div class="mappingContainer">
						<div class = "mappingContent">
							<h1>매핑조회</h1>
								<table class = "mappingTable">
									<thead>
										<tr>
											<td><input type = "checkbox" id = "checkAll"></td>
											<td>라즈베리파이IP</td>
											<td>사용자ID</td>
											<td>매핑일자</td>
										</tr>
									</thead>
									<tbody>
											<c:if test="${fn:length(maplist) >0 }">
												<c:forEach items = "${maplist }" var = "item">
													<tr>
														<td><input type = "checkbox" class = "mapBox" name = "mapList" value = "${item.raspberrypiIp}"></td>
														<td>${item.raspberrypiIp}</td>
														<td>${item.cleanerId}</td>
														<td><fmt:formatDate value = "${item.mappingDate}" pattern = "yyyy.MM.dd" /></td>
														
													</tr>
												</c:forEach>
											</c:if>
									</tbody>
								</table>
							<input type = "button" value = "삭제" id = "delete" onclick = "fnGetdata()">
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
	function fnGetdata(){
		var piArray =[];
        $('input:checkbox[name=mapList]:checked').each(function(i) { 
            piArray.push($(this).val());
        })
        
     	console.log(piArray);
	        $.ajax({
	        	url: '/mapping/delete'
	        	,type : 'post'
	        	,dataType : 'json'
	        	,data: {
	        		deleteValues: piArray,
	        	},
	        	complete:function(data) {
	        		alert("삭제성공");
	        		window.location.href = '/mapping/mappingList';
	        	},
	        	error : function(xhr, status, error) {
	                 alert("에러발생");
	                 window.location.href = '/mapping/mappingList';
	           }
        });
    }
	$(function(){
		$("#checkAll").click(function(){
			if($("#checkAll").prop("checked")){
				$("input[name=mapList]").prop("checked",true);
			}else{
				$("input[name=mapList]").prop("checked",false);
			}
		})
	});
</script>