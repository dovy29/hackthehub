package com.hackthehiub.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hackthehiub.demo.pojo.Car;
import com.hackthehiub.demo.pojo.Response;

@Controller
public class IndexController {
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return "index.html";
    }
	
	@ResponseBody
	@RequestMapping(value = "/data", method = RequestMethod.GET)
	public Response data() {
		
		Car car = new Car();
		Response response = new Response();
		response.getCarlist().add(car);
		
		return response;

    }
}
