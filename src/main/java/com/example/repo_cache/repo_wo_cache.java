//package com.example.repo_cache;
//
//import com.example.model.work_orders;
//import org.springframework.data.jpa.repository.Query;
//
//import java.util.List;
//
//public interface repo_wo_cache
//{
//
//  String xx ="SELECT * FROM work_orders where status_pekerjaan <> 'End_Job' and status_pekerjaan <> 'Costing'";
//  @Query(value = xx,nativeQuery = true)
//  List<work_orders> findByVerifiedCache();
//}
