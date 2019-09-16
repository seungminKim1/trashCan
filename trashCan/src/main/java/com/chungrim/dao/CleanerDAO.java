package com.chungrim.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
import com.chungrim.vo.CleanerVO;

@Repository
public class CleanerDAO {

	@Inject
	private SqlSession sqlSession;
	
	private static final String Namespace = "com.chungrim.mapper.cleanerMapper";
	
	// 
	public List<CleanerVO> cleanerList() throws Exception{
	
		return sqlSession.selectList(Namespace+".cleanerList");
		
	}
	public int cleanerDelete(String id) throws Exception{
		/*
		 * int x = 0; boolean state= false;
		 * x=sqlSession.delete(Namespace+".cleanerDelete",id); if(x>0) { state= true;
		 * return state; } else { return state; }
		 */
		return sqlSession.delete(Namespace+".cleanerDelete",id);
	}

}
