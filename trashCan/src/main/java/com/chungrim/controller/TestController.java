package com.chungrim.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class TestController {
	
	public void printLog() throws Exception {
		
		final String apiKey = "AAAA5h6zWnQ:APA91bFT9n0y6fysSy0w2O4zDyPPqpk7k93I6LJCbIdcUpVveSYRZ_bIcf0pTGOPEUvRKAT62T6QmOJCqtXnUQ0yMUWm1QwyNPW4O8_iXKZdA7WAtVFfBYi1YAJgp-s_Xx-VmXegq__0";
        URL url = new URL("https://fcm.googleapis.com/fcm/send");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "key=" + apiKey);
        conn.setDoOutput(true);
        
        String input = "{\"notification\" : {\"title\" : \" 쓰레기통 \", \"body\" : \"비워 호진이형\"}, \"to\":\"cr1mRlZqw4M:APA91bGznaw747wUuZkfU_31yP57WW0324V2U9Dg33NNq7LyvYiS4xDB4qmumwmh2kLYQuicpEzfnGJ8E6lRfk53qdrT9v0E7WZJzz70_Luqj2gDqtuw6mCPBW89z-sFTdsGEREsHS5k\"}";
        OutputStream os = conn.getOutputStream();
        
        // 서버에서 날려서 한글 깨지는 사람은 아래처럼  UTF-8로 인코딩해서 날려주자
        os.write(input.getBytes("UTF-8"));
        os.flush();
        os.close();

        int responseCode = conn.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Post parameters : " + input);
        System.out.println("Response Code : " + responseCode);
        
        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        // print result
        System.out.println(response.toString());
        
	}
	
}
