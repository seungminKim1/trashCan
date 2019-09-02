package com.chungrim.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.chungrim.vo.AdminVO;

@Repository
public class AdminDAOImpl implements AdminDAO {
	@Inject
	private SqlSession sqlSession;
	
	private static final String Namespace = "com.chungrim.mapper.adminMapper";
	
	@Override
	public AdminVO selectAdminInfo() throws Exception {
		return sqlSession.selectOne(Namespace+".selectAdminInfo");
	}
}
