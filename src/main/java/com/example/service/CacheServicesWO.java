//package com.example.service;
//
//import com.example.model.work_orders;
//import com.example.repo_cache.repo_wo_cache;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cache.annotation.Cacheable;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Slf4j
//@Service
//public class CacheServicesWO implements repo_wo_cache
//{
//@Autowired
//repo_wo_cache rw;
//
//  @Override
//  @Cacheable(value = "Cache_WO")           // it will cache result and key name will be "employees"
//  public List<work_orders> findByVerifiedCache() {
//    System.out.println("caching wo.......");
//    return rw.findByVerifiedCache();
//  }
//}
