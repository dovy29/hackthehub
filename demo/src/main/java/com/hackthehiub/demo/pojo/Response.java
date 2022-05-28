package com.hackthehiub.demo.pojo;

import java.util.ArrayList;
import java.util.List;

public class Response {
	
	private List<Car> carlist = new ArrayList<Car>();
	public List<Car> getCarlist() {
		return carlist;
	}
	public void setCarlist(List<Car> carlist) {
		this.carlist = carlist;
	}
	public String getEvidenceImage() {
		return evidenceImage;
	}
	public void setEvidenceImage(String evidenceImage) {
		this.evidenceImage = evidenceImage;
	}
	private String evidenceImage = "https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/license+plate.png";

}
