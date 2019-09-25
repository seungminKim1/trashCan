package com.chungrim.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.chungrim.dao.StatisticsDAO;
import com.chungrim.vo.StatisticsVO;

@Service
public class StatisticsServiceImpl implements StatisticsService {
	
	@Inject 
	private StatisticsDAO StatisticsDAO;
	
	@Override // 일별 통계   View
	public List<StatisticsVO> dayView() throws Exception {

		return StatisticsDAO.dayView();
	}
	
	@Override // 일별 통계 최대값 가져오기
	public StatisticsVO dayMax() throws Exception {
		
		return StatisticsDAO.dayMax();
	}
	
	@Override // 일별 통계  selectBox Month 가져오기
	public List<StatisticsVO> daySelectMonth() throws Exception {
		
		return StatisticsDAO.daySelectMonth();
	}
	
	@Override // 일별 통계  selectBox Day 가져오기
	public List<StatisticsVO> daySelectDay(String day) throws Exception {
		
		return StatisticsDAO.daySelectDay(day);
	}
	
	@Override // 일별 통계 View SelectBox Place 가져오기 및 Place 일별 통계
	public List<StatisticsVO> daySelectPlace(String date) throws Exception {
		
		return StatisticsDAO.daySelectPlace(date);
	}
	
	@Override // 일별 통계 View SelectBox Place 가져오기 및 Place 일별 통계 최대값 
	public StatisticsVO dayViewPlaceMax(String date) throws Exception {
		
		return StatisticsDAO.dayViewPlaceMax(date);
	}

	@Override // 일별 통계 View SelectBox Detail 가져오기 및 Detail 일별 통계
	public List<StatisticsVO> daySelectDetail(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.daySelectDetail(statisticsVO);
	}

	@Override // 일별 통계 View SelectBox Detail 가져오기 및 Detail 일별 통계 최대값 
	public StatisticsVO dayViewDetailMax(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.dayViewDetailMax(statisticsVO);
	}
	
	@Override // 일별 통계 View SelectBox Floor 가져오기 및 Floor 일별 통계
	public List<StatisticsVO> daySelectFloor(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.daySelectFloor(statisticsVO);
	}

	@Override // 일별 통계 View SelectBox Floor 가져오기 및 Floor 일별 통계 최대값 
	public StatisticsVO dayViewFloorMax(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.dayViewFloorMax(statisticsVO);
	}
	
	@Override // 일별 통계 View SelectBox Gender 가져오기 및 Gender 일별 통계
	public List<StatisticsVO> daySelectGender(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.daySelectGender(statisticsVO);
	}

	@Override // 일별 통계 View SelectBox Gender 가져오기 및 Gender 일별 통계 최대값 
	public StatisticsVO dayViewGenderMax(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.dayViewGenderMax(statisticsVO);
	}
	
	@Override // 일별 통계 View SelectBox All
	public List<StatisticsVO> daySelectAll(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.daySelectAll(statisticsVO);
	}
	
	@Override // 일별 통계 View SelectBox All 일별 통계 최대값 
	public StatisticsVO dayViewAllMax(StatisticsVO statisticsVO) throws Exception {
		
		return StatisticsDAO.dayViewAllMax(statisticsVO);
	}
}
