package com.chungrim.service;

import java.util.List;
import com.chungrim.vo.CleanerVO;

public interface CleanerService {
	
	public List<CleanerVO> cleanerList() throws Exception;
	
	public int deleteCleaner(String id) throws Exception;
}
