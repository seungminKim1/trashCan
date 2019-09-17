package com.chungrim.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.chungrim.vo.LiveStatusVO;

@Repository
public class LiveStatusDAO {
	@Inject
	private SqlSession sqlSession;
	
	private static final String Namespace = "com.chungrim.mapper.LiveStatusMapper";
	
	public List<LiveStatusVO> mainList() throws Exception{
		return sqlSession.selectList(Namespace + ".mainList");
	}
	
	public List<LiveStatusVO> placeOpt() throws Exception{
		return sqlSession.selectList(Namespace + ".selectOpt");
	}
	
	public List<LiveStatusVO> placeList(int placeSeq) throws Exception{
		return sqlSession.selectList(Namespace + ".selectList",placeSeq);
	}
	
	public List<LiveStatusVO> detailOpt(int placeSeq) throws Exception{
		return sqlSession.selectList(Namespace + ".selectOpt_detail",placeSeq);
	}
	
	public List<LiveStatusVO> detailList(int detailSeq) throws Exception{
		return sqlSession.selectList(Namespace + ".selectList_detail",detailSeq);
		
	}
}
