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
		return "index";
	}

	@ResponseBody
	@RequestMapping(value = "/data", method = RequestMethod.GET)
	public Response data() {
		Car car = new Car();
		car.setJson("{"
	+ "\"registrationNumber\": \"AU11RKO\","
	+ "\"taxStatus\": \"Untaxed\","
	+ "\"taxDueDate\": \"2017-12-25\","
	+ "\"artEndDate\": \"2007-12-25\","
	+ "\"motStatus\": \"No details held by DVLA\","
	+ "\"motExpiryDate\": \"2008-12-25\","
	+ "\"make\": \"FORD\","
	+ "\"monthOfFirstDvlaRegistration\": \"2011-11\","
	+ "\"monthOfFirstRegistration\": \"2012-12\","
	+ "\"yearOfManufacture\": 2004,"
	+ "\"engineCapacity\": 1796,"
	+ "\"co2Emissions\": 0,\r\n"
	+ "\"fuelType\": \"PETROL\","
	+ "\"markedForExport\": true,"
	+ "\"colour\": \"Grey\","
	+ "\"typeApproval\": \"N1\","
	+ "\"wheelplan\": \"2 AXLE RIGID BODY\","
	+ "\"revenueWeight\": 1820,"
	+ "\"realDrivingEmissions\": \"1\","
	+ "\"dateOfLastV5CIssued\": \"2016-12-25\","
	+ "\"euroStatus\": \"Euro 5\""
	+ "}");
		Response response = new Response();
		response.getCarlist().add(car);
		
		Car car2 = new Car();
		car2.setJson("{"
	+ "\"registrationNumber\": \"AU11RKO\","
	+ "\"taxStatus\": \"Untaxed\","
	+ "\"taxDueDate\": \"2023-01-01\","
	+ "\"artEndDate\": \"2007-12-25\","
	+ "\"motStatus\": \"No details held by DVLA\","
	+ "\"motExpiryDate\": \"2008-12-25\","
	+ "\"make\": \"HONDA\","
	+ "\"monthOfFirstDvlaRegistration\": \"2011-11\","
	+ "\"monthOfFirstRegistration\": \"2012-12\","
	+ "\"yearOfManufacture\": 2017,"
	+ "\"engineCapacity\": 108,"
	+ "\"co2Emissions\": 0,\r\n"
	+ "\"fuelType\": \"PETROL\","
	+ "\"markedForExport\": true,"
	+ "\"colour\": \"Grey\","
	+ "\"typeApproval\": \"N1\","
	+ "\"wheelplan\": \"2 WHEEL\","
	+ "\"revenueWeight\":  Not available,"
	+ "\"realDrivingEmissions\": \"1\","
	+ "\"dateOfLastV5CIssued\": \"2016-12-25\","
	+ "\"euroStatus\": \"Not available\""
	+ "}");
		response.getCarlist().add(car);
		response.getCarlist().add(car2);
		response.getEvidenceImageList().add("https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/license+plate.png");
		response.getEvidenceImageList().add("https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/license+plate+2.png");
		response.getEvidenceImageList().add("https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/license+plate+3.png");
		response.getEvidenceImageList().add("https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/licence+plate+4.png");
		return response;
    }
}
