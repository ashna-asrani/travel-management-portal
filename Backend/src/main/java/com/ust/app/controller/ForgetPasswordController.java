package com.ust.app.controller;

import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.ust.app.entity.User;
import com.ust.app.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class ForgetPasswordController {
	int OTP;
	@Autowired
	private UserService userService;
	private PasswordEncoder passwordEncoder;

	@PostMapping("/forgetPassword")
	@ResponseBody
	public ResponseEntity<?> forgetPassword(@RequestParam("email") String email) {
		System.out.println("hello controller");
		System.out.println("Email::" + email);
		User inDbUser = userService.findByEmail(email);
		if (inDbUser != null) {
			Random rnd = new Random();
			OTP = rnd.nextInt(999999);
			System.out.println(OTP);
			{
				System.out.println("Sending mail");
				return new ResponseEntity<>(HttpStatus.OK);
			}
		} else {
			System.out.println("NO USER FOUND with " + email);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
//    @PostMapping("/vetifyOTP/{userOTP}")
//    public ResponseEntity<?> verifyOTP(@PathVariable("userOTP") int userOTP) {
//        if (OTP == userOTP) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }

	@PostMapping("/verifyOTP")
	@ResponseBody
	public ResponseEntity<?> verifyOTP(@RequestParam("otp") String otp) {
		System.out.println("otp::" + otp);
		int intOTP = Integer.valueOf(otp);
		System.out.println("Int otp:" + intOTP);
		if (OTP == intOTP) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

	@PutMapping("/changePassword")
	public ResponseEntity<?> changePassword(@RequestParam("password") String password,
			@RequestParam("confirmPassword") String confirmPassword,
			@RequestParam("forgotPasswordEmail") String forgotPasswordEmail) {

		System.out.println("password:" + password);
		System.out.println("conpwd:" + confirmPassword);
		System.out.println("forgotPasswordEmail" + forgotPasswordEmail);
		User existingUser = userService.findByEmail(forgotPasswordEmail);
		System.out.println(existingUser);
		System.out.println(password.equals(confirmPassword));
		if (password.equals(confirmPassword) && existingUser != null) {
			existingUser.setPassword(password);
			userService.saveUser(existingUser);
			return new ResponseEntity<>(HttpStatus.OK);

		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}
}