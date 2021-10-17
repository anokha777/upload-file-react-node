package org.puneet.uploadfile;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfiguration implements WebMvcConfigurer {

	private final long MAX_AGE_SECS = 3600;

	@Override
	@CrossOrigin
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins("http://localhost:3000", "http://localhost:8080", "http://15.206.85.17:8080",
						"http://15.206.85.17", "http://procashwallet.tk", "http://15.206.85.17:80",
						"http://procashwallet.ml", "http://192.168.0.3:3000", "http://192.168.0.3:8080")
				.allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE").maxAge(MAX_AGE_SECS);
	}
}