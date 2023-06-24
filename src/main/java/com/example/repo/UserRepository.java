package com.example.repo;

import com.example.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<Users, Long>
{
    Users findByEmail(String email);
    Users findByName(String name);


    String Q="select link from user where name=? ";
    @Query(value = Q,nativeQuery = true)
    Users findByLiQ(String name);


}