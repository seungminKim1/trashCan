package com.chungrim.controller;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.RaspberrypiService;
import com.chungrim.vo.RaspberrypiVO;

@Controller
public class RaspberrypiController {

	@Inject
	private RaspberrypiService piService;

	// 라즈베리파이 등록 Form
	@RequestMapping(value = "/raspberrypi/RegisterForm.do")
	public ModelAndView registerForm() throws Exception {
		List<RaspberrypiVO> place = new ArrayList<RaspberrypiVO>();
		List<RaspberrypiVO> floor = new ArrayList<RaspberrypiVO>();
		List<RaspberrypiVO> gender = new ArrayList<RaspberrypiVO>();
		floor = piService.getFloorList();
		gender = piService.getGenderList();
		place = piService.getPlaceList();
		ModelAndView mav = new ModelAndView();

		mav.setViewName("raspberrypi/raspberrypiRegisterForm");
		mav.addObject("place", place);
		mav.addObject("gender", gender);
		mav.addObject("floor", floor);

		return mav;
	}

	// selectBox Detail 가져오기
	@RequestMapping(value = "/raspberrypi/detailList.do")
	public @ResponseBody List<RaspberrypiVO> detailList(@RequestParam(value = "fkPlaceSeq") Integer fkPlaceSeq) throws Exception {
		List<RaspberrypiVO> detail = piService.getDetailList(fkPlaceSeq);
		return detail;
	}

	// 라즈베리파이 등록
	@RequestMapping(value = "/raspberrypi/Insert.do", method = RequestMethod.POST)
	public ModelAndView insertRaspberrypi(HttpServletRequest request) throws Exception {
		boolean success;
		RaspberrypiVO piVO = new RaspberrypiVO();
		
		piVO.setRaspberrypiIp(request.getParameter("raspberrypiIP"));
		piVO.setFloorSeq(Integer.parseInt(request.getParameter("floor")));
		piVO.setDetailSeq(Integer.parseInt(request.getParameter("detail")));
		piVO.setPlaceSeq(Integer.parseInt(request.getParameter("place")));
		piVO.setGenderNum(Integer.parseInt(request.getParameter("gender")));
		
		success = piService.insertRaspberrypi(piVO);
		ModelAndView mav = new ModelAndView();

		if (success == true) {
			mav.setViewName("raspberrypi/registerIndex");
			mav.addObject("msg", "insertSuccess");
		} else {
			mav.setViewName("raspberrypi/registerIndex");
			mav.addObject("msg", "insertFail");
		}
		return mav;
	}
	
	// 라즈베리파이 관리(리스트)
	@RequestMapping(value = "/raspberrypi/Management.do")
	public ModelAndView piList() throws Exception {
		List<RaspberrypiVO> raspberrypi = new ArrayList<RaspberrypiVO>();
		raspberrypi = piService.getPiList();
		ModelAndView mav = new ModelAndView();

		mav.setViewName("raspberrypi/raspberrypiManagement");
		mav.addObject("raspberrypi", raspberrypi);

		return mav;
	}
	
	// 라즈베리파이 정보 가져오기
	@RequestMapping(value = "/raspberrypi/infomation.do", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView piInfomation(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		String ip = request.getParameter("ip");
		RaspberrypiVO piVO = new RaspberrypiVO();
		
		piVO = piService.getPiInfomation(ip);

		mav.setViewName("raspberrypi/raspberrypiStatus");
		mav.addObject("raspberrypi", piVO);
		
		return mav;
	}
	
	// 라즈베리파이 상태 값 수정
	@RequestMapping(value = "/raspberrypi/update.do",  method = RequestMethod.POST)
	public ModelAndView piUpdate(HttpServletRequest request) throws Exception {
		ModelAndView mav = new ModelAndView();
		RaspberrypiVO piVO = new RaspberrypiVO();
		
		piVO.setRaspberrypiIp(request.getParameter("ip"));
		piVO.setRaspberrypiStatus(request.getParameter("status"));
		
		boolean update;
		
		System.out.println(piVO);
		
		update = piService.updateRaspberrypi(piVO);
		
		if (update == true) {
			mav.setViewName("raspberrypi/registerIndex");
			mav.addObject("msg", "updateSuccess");
			mav.addObject("raspberrypi", piVO);
			System.out.println(piVO);
		} else {
			mav.setViewName("raspberrypi/registerIndex");
			mav.addObject("msg", "updateFail");
			mav.addObject("raspberrypi", piVO);
		}
		
		return mav;
	}
}
