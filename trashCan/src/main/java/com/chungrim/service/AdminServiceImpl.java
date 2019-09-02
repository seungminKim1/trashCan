package com.chungrim.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.chungrim.dao.AdminDAO;
import com.chungrim.vo.AdminVO;

@Service
public class AdminServiceImpl implements AdminService{
	@Inject
	private AdminDAO adminDAO;
	
	@Override
	public AdminVO selectAdminInfo() throws Exception {
		return adminDAO.selectAdminInfo();
	}
}
