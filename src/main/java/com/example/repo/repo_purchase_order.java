package com.example.repo;

import com.example.model.purchase_order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface repo_purchase_order extends JpaRepository<purchase_order,String>
{
  String Q3="delete from purchase_order  where id_purchase_order in ?1";
  @Modifying
  @Query(value =Q3 ,nativeQuery = true)
  int hapusdataAll(List<String> id_purchase_order);
}
