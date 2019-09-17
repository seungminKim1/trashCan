package com.chungrim.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TestController {
	
	public void printLog() throws Exception {
		SimpleDateFormat format1 = new SimpleDateFormat ( "yyyy-MM-dd HH:mm:ss");
		Date time = new Date();
		String time1 = format1.format(time);
		
		//AdminVO admin = service.selectAdminInfo();
		
		System.out.println(time1);
	}
	
}
