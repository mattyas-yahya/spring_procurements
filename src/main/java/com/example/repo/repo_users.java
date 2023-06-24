package com.example.repo;

import com.example.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
public interface repo_users extends JpaRepository<Users,Integer>
{
}
