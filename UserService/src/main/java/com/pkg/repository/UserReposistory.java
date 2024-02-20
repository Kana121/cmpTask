package com.pkg.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pkg.model.UserDtls;

public interface UserReposistory extends JpaRepository<UserDtls, Long> {
	
	Optional<UserDtls> findByEmail(String email);

}
