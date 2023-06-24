package com.example.service;

import com.example.model.Users;
import com.example.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService
{

    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository,BCryptPasswordEncoder bCryptPasswordEncoder)
    {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    public Users findUserName(String name)
    {
        return userRepository.findByName(name);
    }

    public Users saveUser(Users users)
    {
        users.setPassword(bCryptPasswordEncoder.encode(users.getPassword()));
        users.setActive(users.getActive());
        users.setRole(users.getRole());
        return userRepository.save(users);
    }

}