package com.chungrim.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.chungrim.vo.CleanerVO;
import com.chungrim.vo.MappingVO;
import com.chungrim.vo.RaspberrypiVO;

@Repository
public class MappingDAO {
	@Autowired
	private SqlSession sqlSession;

	private static final String Namespace = "com.chungrim.mapper.MappingMapper";
	public List<RaspberrypiVO> selectPI() {
		// TODO Auto-generated method stub
		return sqlSession.selectList(Namespace+".selectPI");
	}

	public  List<CleanerVO> selectClean() {
		// TODO Auto-generated method stub
		return sqlSession.selectList(Namespace+".selectClean");
	}

	public int insertMap(MappingVO mapVO) {
		// TODO Auto-generated method stub
		return sqlSession.insert(Namespace+".insertMap", mapVO);
	}

	public int mapComp(String string) {
		// TODO Auto-generated method stub
		return sqlSession.update(Namespace+".mapComp",string);
	}

	public List<MappingVO> selectMap() {
		// TODO Auto-generated method stub
		return sqlSession.selectList(Namespace+".selectMap");
	}

	public int deleteMap(String str) {
		// TODO Auto-generated method stub
		return sqlSession.delete(Namespace+".deleteMap",str);
	}

	public int updateMap(String str) {
		// TODO Auto-generated method stub
		return sqlSession.update(Namespace+".updateMap",str);
	}

	
}
