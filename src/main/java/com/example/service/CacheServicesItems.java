//package com.example.service;
//
//import com.example.model.Items;
//import com.example.repo.repo_items;
//import com.example.repo_cache.repo_items_cache;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cache.annotation.Cacheable;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Slf4j
//@Service
//public class CacheServicesItems implements repo_items_cache
//{
//@Autowired
//  repo_items reits;
//  @Override
//  @Cacheable(value = "Items")           // it will cache result and key name will be "employees"
//  public List<Items> findAllCache()
//  {
//    System.out.println("caching......."+reits.findAll());
//    return reits.findAll();
//  }
//
//
//
//}
