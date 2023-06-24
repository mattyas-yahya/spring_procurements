package com.example.control;

import com.example.model.purchase_request;
import com.example.repo.repo_purc_req;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class control_purc_req
{
    @Autowired
    private repo_purc_req rpr;

    @RequestMapping(value={"/purchase_request"})
    public String Spurc_req()
    {
        return "purchase_request/purchase_request";
    }

    @GetMapping({"/purchase_request"})
    public String purc_req_form(Model model )
    {
        model.addAttribute("purchase_request", new purchase_request());
      return "purchase_request/purchase_request";
    }


}
