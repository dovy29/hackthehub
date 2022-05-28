package com.hackthehiub.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.rekognition.RekognitionClient;
import software.amazon.awssdk.services.rekognition.model.GetLabelDetectionRequest;
import software.amazon.awssdk.services.rekognition.model.GetLabelDetectionResponse;
import software.amazon.awssdk.services.rekognition.model.RekognitionException;
import software.amazon.awssdk.services.rekognition.model.S3Object;
import software.amazon.awssdk.services.rekognition.model.StartLabelDetectionRequest;
import software.amazon.awssdk.services.rekognition.model.StartLabelDetectionResponse;
import software.amazon.awssdk.services.rekognition.model.Video;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

		try {
			Region region = Region.US_WEST_2; // Ireland
			RekognitionClient rekClient = RekognitionClient.builder().region(region).build();

			S3Object s3Obj = S3Object.builder().bucket("hackthehub-crash-videos").name("2022-05-28_11-28-24.mp4")
					.build();

			Video vidOb = Video.builder().s3Object(s3Obj).build();

			StartLabelDetectionRequest labelDetectionRequest = StartLabelDetectionRequest.builder()
					.jobTag("DetectingLabels")
					// .notificationChannel(channel)
					.video(vidOb).minConfidence(50F).build();

			StartLabelDetectionResponse labelDetectionResponse = rekClient.startLabelDetection(labelDetectionRequest);
			String startJobId = labelDetectionResponse.jobId();
			System.out.println(startJobId);

			boolean ans = true;
			String status = "";
			int yy = 0;
			while (ans) {

				GetLabelDetectionRequest detectionRequest = GetLabelDetectionRequest.builder().jobId(startJobId)
						.maxResults(10).build();

				GetLabelDetectionResponse result = rekClient.getLabelDetection(detectionRequest);
				status = result.jobStatusAsString();

				if (status.compareTo("SUCCEEDED") == 0)
					ans = false;
				else
					System.out.println(yy + " status is: " + status);

				Thread.sleep(1000);
				yy++;
			}

			System.out.println(startJobId + " status is: " + status);

		} catch (RekognitionException | InterruptedException e) {
			e.getMessage();
			System.exit(1);
		}

	}

}
