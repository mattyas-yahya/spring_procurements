package com.example.repo;

import com.example.model.purchase_request_line;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface repo_purc_req_line extends JpaRepository<purchase_request_line,String>
{
  String Q3="delete from purchase_request  where id_pr_req in ?1";
  @Modifying
  @Query(value =Q3 ,nativeQuery = true)
  int hapusdataAll(List<String> id_purc_req);
}
