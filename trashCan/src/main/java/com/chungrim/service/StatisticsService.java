package com.chungrim.service;

import java.util.List;

import com.chungrim.vo.StatisticsVO;

public interface StatisticsService {
	
	// 일별 통계  View
	public List<StatisticsVO> dayView() throws Exception;
	
	// 일별 통계 View 어제 최대값 
	public StatisticsVO dayMax() throws Exception;
	
	// 일별 통계 View selectBox Month
	public List<StatisticsVO> daySelectMonth() throws Exception;
	
	// 일별 통계 View selectBox Day
	public List<StatisticsVO> daySelectDay(String day) throws Exception;
	
	// 일별 통계 View SelectBox Place
	public List<StatisticsVO> daySelectPlace(String date) throws Exception;
	
	// 일별 통계 View Place 최대값 
	public StatisticsVO dayViewPlaceMax(String date) throws Exception;
	
	// 일별 통계 View SelectBox Detail
	public List<StatisticsVO> daySelectDetail(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View Detail 최대값 
	public StatisticsVO dayViewDetailMax(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View SelectBox Floor
	public List<StatisticsVO> daySelectFloor(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View Floor 최대값 
	public StatisticsVO dayViewFloorMax(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View SelectBox Gender
	public List<StatisticsVO> daySelectGender(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View Detail 최대값 
	public StatisticsVO dayViewGenderMax(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View SelectBox All
	public List<StatisticsVO> daySelectAll(StatisticsVO statisticsVO) throws Exception;
	
	// 일별 통계 View All 최대값 
	public StatisticsVO dayViewAllMax(StatisticsVO statisticsVO) throws Exception;

}
