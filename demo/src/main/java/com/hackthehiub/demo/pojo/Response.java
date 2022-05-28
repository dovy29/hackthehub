package com.hackthehiub.demo.pojo;

import java.util.ArrayList;
import java.util.List;

public class Response {
	
	private List<Car> carlist = new ArrayList<Car>();
	private List<String> evidenceImageList = new ArrayList<String>();
	private String evidenceVideo = "https://hackthehub-crash-videos.s3.us-west-2.amazonaws.com/2022-05-28_11-35-59.mp4";
	
	public List<Car> getCarlist() {
		return carlist;
	}
	public void setCarlist(List<Car> carlist) {
		this.carlist = carlist;
	}
	public List<String> getEvidenceImageList() {
		return evidenceImageList;
	}
	public void setEvidenceImageList(List<String> evidenceImageList) {
		this.evidenceImageList = evidenceImageList;
	}
	public String getEvidenceVideo() {
		return evidenceVideo;
	}
	public void setEvidenceVideo(String evidenceVideo) {
		this.evidenceVideo = evidenceVideo;
	}

}
