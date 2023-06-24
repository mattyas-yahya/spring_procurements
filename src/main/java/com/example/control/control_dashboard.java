package com.example.control;

import com.example.model.dashboard;
import com.example.repo.repo_dashboard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class control_dashboard
{
    @Autowired
    private repo_dashboard redas;

    @RequestMapping(value={"/dashboard"})
    public String dashboard()
    {
        return "dashboard/dashboard";
    }

    @GetMapping({"/dashboard"})
    public String dashboard_form(Model model)
    {
        model.addAttribute("dashboard", new dashboard());
        return "dashboard/dashboard";
    }

//    @RequestMapping(value={"d_komit"},  method = RequestMethod.POST, params={"d_action=d_simpan"})
//    public String simpan(Departemen de)
//    {
//         this.remen.save(de);
//            return "redirect:/Departemen";
//    }
//



  @RequestMapping(value={"dashboard_komit"},  method = RequestMethod.POST, params={"dashboard_action=dashboard_simpan"})
  public String simpan(dashboard dash)
  {
    this.redas.save(dash);
    return "redirect:/dashboard";
  }




//    @RequestMapping(value={"d_komit"}, method= RequestMethod.POST, params={"d_action=d_ubah"})
//    public String ubah(@RequestParam("kode") String kode, Model model, Account de)
//    {
//        model.addAttribute("Account", this.rec.findById(kode));
//        this.rec.save(de);
//        return "redirect:/Account";
//    }

//  @Transactional
//    @RequestMapping(value={"ac_komit"}, method=RequestMethod.POST, params={"ac_action=ac_hapus"})
//      public String hapus(@RequestParam("id_dept") String[] idde,Model model,Departemen de)
//    {
//
//   //   this.rec.hapusdata(Arrays.asList(idde));
//        return "redirect:/Departemen";
//    }
}
