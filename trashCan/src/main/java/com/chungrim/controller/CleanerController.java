package com.chungrim.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.CleanerService;
import com.chungrim.vo.CleanerVO;
import com.chungrim.vo.RaspberrypiVO;

@Controller
public class CleanerController {
	@Inject
	private CleanerService cleanerService;

	@RequestMapping(value = "cleaner/cleanerList.do")
	public ModelAndView cleanerList() throws Exception {
		List<CleanerVO> cleanerVO = new ArrayList<CleanerVO>();
		cleanerVO = cleanerService.cleanerList();
		ModelAndView mav = new ModelAndView();

		if (cleanerVO != null) {
			mav.setViewName("cleaner/cleanerList");
			mav.addObject("cleaner", cleanerVO);
		} else {
			mav.setViewName("main/mainMenu");
		}
		return mav;
	}

	@RequestMapping(value = "cleaner/cleanerDelete.do")
	public ModelAndView deleteCleanerInfo(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		String id = request.getParameter("id");	
		int x = cleanerService.deleteCleaner(id);
		
		if (x > 0) {
			System.out.println("성공");
			mav.setViewName("main/main");
		} else {
			mav.setViewName("cleaner/cleanerList");
		}
		return mav;
	}
	
	@RequestMapping(value = "/cleaner/cleanerLicenseUpdate.do")
	public String updateForm(HttpServletRequest request) throws Exception {
	String result = "";
//	ModelAndView mav = new ModelAndView();
	CleanerVO cleanerVO = new CleanerVO();
	
	cleanerVO.setCleanerId(request.getParameter("id"));
	
	int update = cleanerService.cleanerLicenseUpdate(cleanerVO);
		if (update >0) {
//			mav.setViewName("cleaner/cleanerLicense");
//			mav.addObject("cleaner", cleanerVO);
			result = "redirect:cleanerList.do";
		} else {
			result = "redirect:cleanerLicense.do";
		}
		return result;
	}
	
	@RequestMapping(value = "/cleaner/cleanerLicenseList.do")
	public ModelAndView cleanerLicenseForm() throws Exception {
		List<CleanerVO> cleanerVO = new ArrayList<CleanerVO>();
		cleanerVO = cleanerService.cleanerLicenseList();	
		ModelAndView mav = new ModelAndView();

		if (cleanerVO != null) {
			mav.setViewName("cleaner/cleanerLicense");
			mav.addObject("cleaner", cleanerVO);
		} else {
			mav.setViewName("main/mainMenu");
		}
		return mav;
	}
	
	@RequestMapping(value = "cleaner/cleanerInsert.do")
	public ModelAndView insertCleanerInfo(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		CleanerVO clv = new CleanerVO();
		
		clv.setCleanerId(request.getParameter("cleanerId"));
		clv.setCleanerPassword(request.getParameter("cleanerPassword"));
		clv.setCleanerName(request.getParameter("cleanerName"));
		clv.setCleanerPhone(request.getParameter("cleanerPhone"));
		
		int x = cleanerService.insertCleaner(clv);

		if (x > 0) {
			System.out.println("성공");
			mav.setViewName("main/main");
		} else {
			mav.setViewName("cleaner/cleanerList");
		}
		return mav;
	}
	
	@RequestMapping(value = "/cleaner/cleanerForm.do")
	public String registerForm() throws Exception {

		return "cleaner/cleanerForm";
	}

}

