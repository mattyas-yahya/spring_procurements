package com.example.control;

import com.example.model.purchase_order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class control_purchase_order
{
    @RequestMapping(value={"/purchase_order"}) public String form_purchase_order()  {return "purchase_order/purchase_order"; }

    @GetMapping({"/purchase_order"})public String po(Model model ){ model.addAttribute("purchase_order", new purchase_order());return "purchase_order/purchase_order"; }

}
