package com.ust.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ust.app.jwtfilter.JwtFilter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
    @Autowired
    private JwtFilter jwtFilter;

	@Bean
	AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(new BCryptPasswordEncoder());

		return provider;

	}
	
	 @Bean
	    public AuthenticationManager authenticationManagerBean() throws Exception {
	        return super.authenticationManagerBean();
	    }

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
//		http.cors().disable();
//		http.headers().disable();
		http.cors(); 
		http.csrf().disable().authorizeRequests().antMatchers("/authenticate","/register","/vetifyOTP/*").permitAll()
		.antMatchers("/getFlightBySrcAndDest/*","/getFlightDetails","/getTrainDetails","/getTrainBySrcAndDest/*","/profile","/addPassenger")
		.hasAnyAuthority("USER","ADMIN")
		.antMatchers("/addTrains","/addFlights","/getUserDetails")
		.hasAuthority("ADMIN")
		.antMatchers("/addBooking")
		.hasAuthority("USER")
		.antMatchers("/forgetPassword","/verifyOTP","/changePassword").permitAll()
		.anyRequest()
		.authenticated()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		
		
		
		

//		http.csrf().disable();
//		http.cors().disable();
//		http.headers().disable();
//		
//		http.authorizeRequests()
//			.antMatchers("/register")
//			.permitAll()
//			.antMatchers("/getFlightBySrcAndDest/*","/getFlightDetails","/getTrainDetails","/getTrainBySrcAndDest/*","/profile","/addPassenger")
//			.hasAnyAuthority("USER","ADMIN")
//			.antMatchers("/addTrains","/addFlights","/getUserDetails")
//			.hasAnyAuthority("ADMIN")
//			.anyRequest()
//			.authenticated()
////			.and()
////			.httpBasic();
//			.and().formLogin().loginPage("http://localhost:3000/login").loginProcessingUrl("process_login").defaultSuccessUrl("/homepage.html", true)
//			.and().logout().permitAll();
//		
	}

}
