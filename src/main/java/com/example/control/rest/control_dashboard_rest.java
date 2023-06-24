package com.example.control.rest;

import com.example.model.dashboard_query;
import com.example.repo.repo_dashboard_query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class control_dashboard_rest
{
        @Autowired
        private repo_dashboard_query redas;

        @RequestMapping(path="/dashboardQueryAll", method= RequestMethod.GET)
        public List<dashboard_query> getdashboardAll()
        {
            return (List)this.redas.findAll();
        }

    @PostMapping("/NewQuery")
    @ResponseBody()
    public void NewQuery(dashboard_query d)
    {
        this.redas.save(d);
    }

    }


