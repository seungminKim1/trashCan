package com.chungrim.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.LiveStatusService;
import com.chungrim.vo.LiveStatusVO;



@Controller
public class LiveStatusController {
	
	@Inject
	private LiveStatusService LiveStatusService;
	
	@RequestMapping(value = "/livestatus/")
	public ModelAndView registerForm() throws Exception {
		List<LiveStatusVO> list = new ArrayList<LiveStatusVO>();
		List<LiveStatusVO> optlist = new ArrayList<LiveStatusVO>();
		list = LiveStatusService.mainList();
		optlist = LiveStatusService.placeOpt();
		
		ModelAndView mav = new ModelAndView();

		mav.setViewName("livestatus/livestatus");
		mav.addObject("list",list);
		mav.addObject("place",optlist);

		return mav;
	}
	
	@RequestMapping(value="/livestatus/selectOpt.do")
	public @ResponseBody List<LiveStatusVO> selectOpt(@RequestParam(value = "placeSeq") Integer placeSeq) throws Exception {
		List<LiveStatusVO> detail = LiveStatusService.detailOpt(placeSeq);
		return detail;
	}
	
	@RequestMapping(value = "/livestatus/mainList.do")
	public @ResponseBody List<LiveStatusVO> mainList() throws Exception {
		List<LiveStatusVO> detail = LiveStatusService.mainList();
		return detail;
	}
	
	@RequestMapping(value = "/livestatus/selectList.do")
	public @ResponseBody List<LiveStatusVO> selectList(@RequestParam(value = "placeSeq") Integer placeSeq) throws Exception {
		List<LiveStatusVO> detail = LiveStatusService.placeList(placeSeq);
		return detail;
	}
	
	@RequestMapping(value="/livestatus/selectList_detail.do")
	public @ResponseBody List<LiveStatusVO> selectList_detail(@RequestParam(value = "detailSeq") Integer detailSeq) throws Exception {
		List<LiveStatusVO> detail = LiveStatusService.detailList(detailSeq);
		return detail;
	}
}
