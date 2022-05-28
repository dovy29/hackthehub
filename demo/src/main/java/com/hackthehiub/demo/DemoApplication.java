package com.hackthehiub.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.amazonaws.services.rekognition.model.DetectTextRequest;
import com.amazonaws.services.rekognition.model.DetectTextResult;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.TextDetection;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.rekognition.RekognitionClient;
import software.amazon.awssdk.services.rekognition.model.GetLabelDetectionRequest;
import software.amazon.awssdk.services.rekognition.model.GetLabelDetectionResponse;
import software.amazon.awssdk.services.rekognition.model.Label;
import software.amazon.awssdk.services.rekognition.model.LabelDetection;
import software.amazon.awssdk.services.rekognition.model.RekognitionException;
//import software.amazon.awssdk.services.rekognition.model.S3Object;
import com.amazonaws.services.rekognition.model.S3Object;
import software.amazon.awssdk.services.rekognition.model.StartLabelDetectionRequest;
import software.amazon.awssdk.services.rekognition.model.StartLabelDetectionResponse;
import software.amazon.awssdk.services.rekognition.model.Video;

import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		try {
			Region region = Region.US_WEST_2; // Ireland
			//RekognitionClient rekClient = RekognitionClient.builder().region(region).build();
			//RekognitionClient rekClient = RekognitionClient.builder().region(region).build();
			AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.standard().withRegion("us-west-2").build();
			
			DetectTextRequest request = new DetectTextRequest()
					.withImage(new Image().withS3Object(new com.amazonaws.services.rekognition.model.S3Object()
							.withName("license plate.png").withBucket("hackthehub-crash-videos")));
			
			DetectTextResult result = rekognitionClient.detectText(request);
	        List<TextDetection> textDetections = result.getTextDetections();
	        
	        for(TextDetection textDetection : textDetections) {
	        	String numberPlate = textDetection.getDetectedText();
	        }
	        
	        System.out.println(textDetections);

			/*S3Object s3Obj = S3Object.builder().bucket("hackthehub-crash-videos").name("2022-05-28_11-28-24.mp4")
					.build();*/
			
			/*S3Object s3Obj = S3Object.builder().bucket("hackthehub-crash-videos").name("license plate.png")
			.build();*/

			//Video vidOb = Video.builder().s3Object(s3Obj).build();

			/*StartLabelDetectionRequest labelDetectionRequest = StartLabelDetectionRequest.builder()
					.jobTag("DetectingLabels")
					// .notificationChannel(channel)
					.video(vidOb).minConfidence(50F).build();*/
			
	


			/*StartLabelDetectionResponse labelDetectionResponse = rekClient.startLabelDetection(labelDetectionRequest);
			String startJobId = labelDetectionResponse.jobId();
			System.out.println(startJobId);

			boolean ans = true;
			String status = "";
			int yy = 0;
			while (ans) {

				GetLabelDetectionRequest detectionRequest = GetLabelDetectionRequest.builder().jobId(startJobId)
						.build();

				GetLabelDetectionResponse result = rekClient.getLabelDetection(detectionRequest);
				status = result.jobStatusAsString();

				if (status.compareTo("SUCCEEDED") == 0) {
					ans = false;

					List<LabelDetection> numberPlate = new ArrayList<LabelDetection>();
					for (LabelDetection detection : result.labels()) {
						Label label = detection.label();
						if (label.name().equals("License Plate")) {
							numberPlate.add(detection);
						}
					}
					result.labels();
				} else {
					System.out.println(yy + " status is: " + status);

					Thread.sleep(1000);
					yy++;
				}
			}

			System.out.println(startJobId + " status is: " + status);
			rekClient.close();*/

		} catch (RekognitionException e) {
			e.getMessage();
			System.exit(1);
		}
	}

}
