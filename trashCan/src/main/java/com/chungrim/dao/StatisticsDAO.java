package com.chungrim.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.chungrim.vo.*;


@Repository
public class StatisticsDAO {
	@Inject
	private SqlSession sqlSession;

	private static final String Namespace = "com.chungrim.mapper.StatisticsMapper";
	
	// 일별 통계  View
	public List<StatisticsVO> dayView() throws Exception {
		
		return sqlSession.selectList(Namespace + ".dayView");
	}
	
	// 일별 통계 View 어제 최대값 
	public StatisticsVO dayMax() throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayMax");
	}
	
	// 일별 통계 View selectBox Month
	public List<StatisticsVO> daySelectMonth() throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectMonth");
	}
	
	// 일별 통계 View selectBox Day
	public List<StatisticsVO> daySelectDay(String day) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectDay", day);
	}
	
	// 일별 통계 View SelectBox Place
	public List<StatisticsVO> daySelectPlace(String date) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectPlace", date);
	}
	
	// 일별 통계 View Place 최대값 
	public StatisticsVO dayViewPlaceMax(String date) throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayViewPlaceMax", date);
	}
	
	// 일별 통계 View SelectBox Detail
	public List<StatisticsVO> daySelectDetail(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectDetail", statisticsVO);
	}
	
	// 일별 통계 View Detail 최대값 
	public StatisticsVO dayViewDetailMax(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayViewDetailMax", statisticsVO);
	}
	
	// 일별 통계 View SelectBox Floor
	public List<StatisticsVO> daySelectFloor(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectFloor", statisticsVO);
	}
	
	// 일별 통계 View Floor 최대값 
	public StatisticsVO dayViewFloorMax(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayViewFloorMax", statisticsVO);
	}
	
	// 일별 통계 View SelectBox Gender
	public List<StatisticsVO> daySelectGender(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectGender", statisticsVO);
	}
	
	// 일별 통계 View Detail 최대값 
	public StatisticsVO dayViewGenderMax(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayViewGenderMax", statisticsVO);
	}
	
	// 일별 통계 View SelectBox All
	public List<StatisticsVO> daySelectAll(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectList(Namespace + ".daySelectAll", statisticsVO);
	}
	
	// 일별 통계 View All 최대값 
	public StatisticsVO dayViewAllMax(StatisticsVO statisticsVO) throws Exception {
		
		return sqlSession.selectOne(Namespace + ".dayViewAllMax", statisticsVO);
	}
}
