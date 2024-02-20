package com.pkg.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pkg.model.UserDtls;
import com.pkg.repository.UserReposistory;
import com.pkg.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserReposistory reposistory;

	@Override
	
	public String signUp(UserDtls user) {
	    Optional<UserDtls> existingUserOpt = reposistory.findByEmail(user.getEmail());
	    if (existingUserOpt.isPresent()) {
	        return "User account already exists.";
	    } else {
	        try {
	            reposistory.save(user);
	            return "User added successfully.";
	        } catch (Exception e) {
	            return "Failed to add user: " + e.getMessage();
	        }
	    }
	}

	
}
