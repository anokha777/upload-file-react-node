package org.puneet.uploadfile.controller;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.puneet.uploadfile.payload.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class FileUpload {

	public static String EXTERNAL_FILE_PATH = System.getProperty("user.dir") + "/uploads/";
//	private static String EXTERNAL_FILE_PATH = "C:/uploads/";
	
	@PostMapping("/upload")
	public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
		String fileName = "";
		try {
//		String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHHmmss-"));
	    fileName =  file.getOriginalFilename();

	    // folderPath here
	    String folderPath = EXTERNAL_FILE_PATH;
	    String filePath = folderPath + "/" + fileName;

	    // Copies Spring's multipartfile inputStream to /uploads/ (absolute path)
	    Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);

	    return new ResponseEntity<Object>(new ApiResponse(true, "/uploads/"+fileName), HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Object>(new ApiResponse(false, "File not uploaded, please try after some time!"), HttpStatus.OK);
		}
      
  }
}
