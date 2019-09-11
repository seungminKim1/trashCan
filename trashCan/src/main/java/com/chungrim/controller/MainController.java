package com.chungrim.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping("/main/*") // 모든 Mapping은 /main/을 상속
@Controller
public class MainController {

	// 메인 화면
	@RequestMapping(value = "main.do")
	public String main() throws Exception {
	
		return "main/main";
	}
}
