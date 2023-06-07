package com.ust.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ust.app.entity.User;
import com.ust.app.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		User  user = userRepository.findByEmail(email);
		if(user==null)
		{
			throw new UsernameNotFoundException("Email not registered");
		}
	
	return new CustomUserDetails(user);
	}
}

