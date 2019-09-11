package com.chungrim.service;

import java.util.*;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.chungrim.dao.RaspberrypiDAO;
import com.chungrim.vo.RaspberrypiVO;

@Service
public class RaspberrypiServiceImpl implements RaspberrypiService {

	@Inject
	private RaspberrypiDAO RaspberrypiDAO;

	@Override // Place 가져오기
	public List<RaspberrypiVO> getPlaceList() throws Exception {

		return RaspberrypiDAO.getPlaceList();
	}

	@Override // Detail 가져오기
	public List<RaspberrypiVO> getDetailList(int fkPlaceSeq) throws Exception {

		return RaspberrypiDAO.getDetailList(fkPlaceSeq);
	}

	@Override // Floor 가져오기
	public List<RaspberrypiVO> getFloorList() throws Exception {

		return RaspberrypiDAO.getFloorList();
	}

	@Override // Gender 가져오기
	public List<RaspberrypiVO> getGenderList() throws Exception {

		return RaspberrypiDAO.getGenderList();
	}

	@Override // 라즈베리파이IP등록
	public boolean insertRaspberrypi(RaspberrypiVO piVO) throws Exception {

		return RaspberrypiDAO.insertRaspberrypi(piVO);
	}

	@Override // 라즈베리파이 관리(리스트) 가져오기
	public List<RaspberrypiVO> getPiList() throws Exception {
		
		return RaspberrypiDAO.getPiList();
	}
	
	@Override // 라즈베리파이 정보 가져오기
	public RaspberrypiVO getPiInfomation(String ip) throws Exception {
		
		return RaspberrypiDAO.getPiInfomation(ip);
	}

	@Override
	public boolean updateRaspberrypi(RaspberrypiVO piVO) throws Exception {
		
		return RaspberrypiDAO.updateRaspberrypi(piVO);
	}
}
