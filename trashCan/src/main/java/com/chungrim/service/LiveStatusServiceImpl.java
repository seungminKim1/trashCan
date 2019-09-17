package com.chungrim.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.chungrim.dao.LiveStatusDAO;
import com.chungrim.vo.LiveStatusVO;

@Service
public class LiveStatusServiceImpl implements LiveStatusService{
	@Inject
	private LiveStatusDAO LiveStatusDAO;
	
	@Override
	public List<LiveStatusVO> mainList() throws Exception{
		return LiveStatusDAO.mainList();
	}
	
	@Override
	public List<LiveStatusVO> placeOpt() throws Exception{
		return LiveStatusDAO.placeOpt();
	}
	
	@Override
	public List<LiveStatusVO> placeList(int placeSeq) throws Exception{
		return LiveStatusDAO.placeList(placeSeq);
	}
	
	@Override
	public List<LiveStatusVO> detailOpt(int placeSeq) throws Exception{
		return LiveStatusDAO.detailOpt(placeSeq);
	}
	
	@Override
	public List<LiveStatusVO> detailList(int detailSeq) throws Exception{
		return LiveStatusDAO.detailList(detailSeq);
	}

}
