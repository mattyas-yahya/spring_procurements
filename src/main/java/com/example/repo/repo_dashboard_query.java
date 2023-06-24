package com.example.repo;

import com.example.model.dashboard_query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface repo_dashboard_query extends JpaRepository<dashboard_query,String>
{
//    String Q0="select pembuatan, ANYselect pembuatan, ANY_VALUE(ko_VALUE(kode),sum(total) as total_biaya from cost_doc group by pembuatan  ";
//
    String Q12="select name_query from dashboard_query where name_query = sumcost ";
  @Modifying
  @Transactional
  @Query(value =Q12 ,nativeQuery = true)
  String  values_sumCost ();
}
