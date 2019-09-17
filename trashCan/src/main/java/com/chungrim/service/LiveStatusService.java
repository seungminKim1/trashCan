package com.chungrim.service;

import java.util.List;

import com.chungrim.vo.LiveStatusVO;

public interface LiveStatusService {
	public List<LiveStatusVO> mainList() throws Exception;
	
	public List<LiveStatusVO> placeOpt() throws Exception;
	
	public List<LiveStatusVO> placeList(int placeSeq) throws Exception;
	
	public List<LiveStatusVO> detailOpt(int placeSeq) throws Exception;
	
	public List<LiveStatusVO> detailList(int detailSeq) throws Exception;
}
