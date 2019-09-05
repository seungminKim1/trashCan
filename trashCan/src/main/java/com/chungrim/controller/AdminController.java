package com.chungrim.controller;


import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.AdminService;
import com.chungrim.vo.AdminVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class AdminController {

	@Inject
	private AdminService adminService;

	// 로그인 폼
	@RequestMapping(value = "/")
	public String index() throws Exception {

		return "administrator/adminLoginForm";
	}

	// 로그인 처리
	@RequestMapping(value = "/adminLogin.do")
	public ModelAndView adminLogin(@ModelAttribute AdminVO adminVO) throws Exception {
		adminVO = adminService.adminLogin(adminVO);
		ModelAndView mav = new ModelAndView();
		
		if (adminVO != null) {
			mav.setViewName("main/main");
		} else {
			mav.setViewName("administrator/adminIndex");
		}
		return mav;
	}
}
