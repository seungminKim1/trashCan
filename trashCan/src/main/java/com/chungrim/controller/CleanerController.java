package com.chungrim.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.CleanerService;
import com.chungrim.vo.CleanerVO;


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
}

