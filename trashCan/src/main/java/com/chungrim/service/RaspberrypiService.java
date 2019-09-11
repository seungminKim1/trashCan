package com.chungrim.service;

import java.util.*;

import com.chungrim.vo.RaspberrypiVO;

public interface RaspberrypiService {

	// Place 가져오기
	public List<RaspberrypiVO> getPlaceList() throws Exception;

	// Detail 가져오기
	public List<RaspberrypiVO> getDetailList(int fkPlaceSeq) throws Exception;

	// Floor 가져오기
	public List<RaspberrypiVO> getFloorList() throws Exception;

	// Gender 가져오기
	public List<RaspberrypiVO> getGenderList() throws Exception;

	// 라즈베리파이IP 등록
	public boolean insertRaspberrypi(RaspberrypiVO piVO) throws Exception;
	
	// 라즈베리파이 관리(리스트) 가져오기
	public List<RaspberrypiVO> getPiList() throws Exception;
	
	// 라즈베리파이 정보 가져오기
	public RaspberrypiVO getPiInfomation(String ip) throws Exception;
	
	// 라즈베리파이 상태 값 수정
	public boolean updateRaspberrypi(RaspberrypiVO piVO) throws Exception;
}
