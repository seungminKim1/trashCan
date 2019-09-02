package com.chungrim.controller;

import java.util.Locale;
import java.util.logging.Logger;

import javax.inject.Inject;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.chungrim.service.AdminService;
import com.chungrim.vo.AdminVO;

@Controller
public class AdminController {
	
//private static final Logger logger = (Logger) LoggerFactory.getLogger(AdminController.class);
//    
//    @Inject
//    private AdminService adminService;
//    
//    /**
//     * Simply selects the home view to render by returning its name.
//     */
//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String home(Locale locale, Model model) throws Exception{
// 
//        logger.info("home");
//        AdminVO adminVO = adminService.selectAdminInfo();
//        
//        model.addAttribute("adminVO", adminVO);
//        
//        return "home";
//    }
}
