package com.chungrim.controller;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.chungrim.service.MappingService;
import com.chungrim.vo.CleanerVO;
import com.chungrim.vo.MappingVO;
import com.chungrim.vo.RaspberrypiVO;


@Controller
@RequestMapping("/mapping/*")
public class MappingController {
	
		@Autowired 
		private MappingService mappingService;
		
		@RequestMapping("")
		public String home(Model model) throws Exception {
			List<RaspberrypiVO> pilist = new ArrayList<RaspberrypiVO>();
			List<CleanerVO> clist = new ArrayList<CleanerVO>();
			pilist = mappingService.selectPI();
			clist = mappingService.selectClean();
			model.addAttribute("piList", pilist);
			model.addAttribute("cList", clist);
			return "mapping/mapHome";
		}
		
		@RequestMapping(value = "reg", method = { RequestMethod.POST })
		@ResponseBody
		public int reg( @RequestParam(value = "piValues[]")List<String> piValues,
						@RequestParam(value = "cleanID")String cleanID) throws Exception {
			int success = 0;
			MappingVO mapVO = new MappingVO();
			
			for (String str : piValues) {
				mapVO.setRaspberrypiIp(str); 
				mapVO.setCleanerId(cleanID);
				success = mappingService.insertMap(mapVO);
			}
			
			if(success == 1) {
				success = 0;
				for (String str:piValues)
					success = mappingService.mapComp(str);
			}
			return success;
		}
		
		@RequestMapping(value = "mappingList")
		public String mapList(Model model) throws Exception{
			List<MappingVO> maplist = new ArrayList<MappingVO>();
			maplist = mappingService.selectMap();
			model.addAttribute("maplist",maplist);
			return "mapping/mapList";
		}
		
		@RequestMapping(value = "delete" , method = {RequestMethod.POST})
		@ResponseBody
		public int delete(@RequestParam(value = "deleteValues[]")List<String> deleteValues,HttpServletResponse response) throws Exception {
			int success = 0;
			for(String str : deleteValues) {
				success = mappingService.deleteMap(str);
			}
			if (success > 0) 
				for(String str : deleteValues) {
					success = 0;
					success = mappingService.updateMap(str);
				}
			return success;
		}
}