package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by imdadareeph.
 */

@Controller
public class DashboardController {

	@RequestMapping(value={"/", "/index","/dashboard/index"})
    public String index() {
        return "dashboard/index";
    }
    
    @RequestMapping(value={"/dashboard/index2", "/index2"})
    public String index2() {
        return "dashboard/index2";
    }

    
}
