package com.chungrim.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.StatisticsService;
import com.chungrim.vo.StatisticsVO;

@Controller
public class MainController {

	@Inject
	private StatisticsService statisticsService;
	
	// 메인화면  + 일별 통계  View
	@RequestMapping(value = "/main/statisticsDayMain.do")
	public ModelAndView dayView() throws Exception {
		List<StatisticsVO> dayView = new ArrayList<StatisticsVO>();
		ModelAndView mav = new ModelAndView();
		
		StatisticsVO dayMax = statisticsService.dayMax();
		dayView = statisticsService.dayView();
		
		mav.setViewName("main/statisticsDayMain");
		mav.addObject("dayView", dayView);
		mav.addObject("dayMax", dayMax);
		
		return mav;
	}
}
