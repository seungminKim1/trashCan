package com.chungrim.dao;

import java.util.*;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.chungrim.vo.RaspberrypiVO;

@Repository
public class RaspberrypiDAO {
	@Inject
	private SqlSession sqlSession;

	private static final String Namespace = "com.chungrim.mapper.RaspberrypiMapper";

	// Place 가져오기
	public List<RaspberrypiVO> getPlaceList() throws Exception {

		return sqlSession.selectList(Namespace + ".placeList");
	}

	// Detail 가져오기
	public List<RaspberrypiVO> getDetailList(int fkPlaceSeq) throws Exception {

		return sqlSession.selectList(Namespace + ".detailList", fkPlaceSeq);
	}

	// Floor 가져오기
	public List<RaspberrypiVO> getFloorList() throws Exception {

		return sqlSession.selectList(Namespace + ".floorList");
	}

	// Gender 가져오기
	public List<RaspberrypiVO> getGenderList() throws Exception {

		return sqlSession.selectList(Namespace + ".genderList");
	}

	// 라즈베리파이IP 등록
	public boolean insertRaspberrypi(RaspberrypiVO piVO) throws Exception {
		int result = sqlSession.insert(Namespace + ".insertRaspberrypi", piVO);
		boolean success = false;

		if (result > 0) {
			success = true;
			return success;
		} else {
			return success;
		}
	}

	// 라즈베리파이 관리(리스트) 가져오기
	public List<RaspberrypiVO> getPiList() throws Exception {

		return sqlSession.selectList(Namespace + ".piList");
	}

	// 라즈베리파이 정보 가져오기
	public RaspberrypiVO getPiInfomation(String ip) throws Exception {

		return sqlSession.selectOne(Namespace + ".piInfomaion", ip);
	}
	
	// 라즈베리파이 상태 값 변경
	public boolean updateRaspberrypi(RaspberrypiVO piVO) throws Exception {
		int update = sqlSession.update(Namespace + ".updateRaspberrypi", piVO);
		boolean success = false;

		if (update > 0) {
			success = true;
			return success;
		} else {
			return success;
		}
	}
}
