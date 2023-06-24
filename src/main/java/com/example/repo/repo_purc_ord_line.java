package com.example.repo;

import com.example.model.purchase_order_line;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface repo_purc_ord_line extends JpaRepository<purchase_order_line,String>
{
  String Q3="delete from purchase_request  where id_pr_req in ?1";
  @Modifying
  @Query(value =Q3 ,nativeQuery = true)
  int hapusdataAll(List<String> id_purc_req);

  String Q4="update purchase_order_line set po_number =? where pr_number = ? ";
  @Modifying
  @Transactional
  @Query(value =Q4 ,nativeQuery = true)
  int add_po(String po_number,String pr_number);
}
