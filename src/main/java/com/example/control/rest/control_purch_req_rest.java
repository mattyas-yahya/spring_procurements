  package com.example.control.rest;

  import com.example.model.*;
  import com.example.model.purchase_request;
  import com.example.repo.*;
  import com.example.repo.repo_purc_req;
  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.http.ResponseEntity;
  import org.springframework.transaction.annotation.Transactional;
  import org.springframework.validation.BindingResult;
  import org.springframework.web.bind.annotation.*;

  import javax.validation.Valid;
  import java.util.Arrays;
  import java.util.List;


  //rest controller untuk membuat pr header dan pr line

  @CrossOrigin
  @RestController
  public class control_purch_req_rest
  {
  @Autowired
  private repo_purc_req rpr;

  @Autowired
  private repo_purc_req_line rprl;

  @Autowired
  private repo_purc_ord_line rpol;

  private static final Logger LOGGER = LoggerFactory.getLogger(control_purch_req_rest.class);


  @RequestMapping(path="/PR_All", method= RequestMethod.GET)
  public List<purchase_request> getPurc_reqAll()
  {
  return (List)this.rpr.findAll();
  }

  @PostMapping("/PRSave")
  @ResponseBody()
  public purchase_request create_purc_req(@Valid purchase_request pr, BindingResult bindingResult)
  {
  if (bindingResult.hasErrors()) {
  LOGGER.error("masuk ke sini");
  }
  return rpr.save(pr);
  }

  @DeleteMapping("/PRDelete")
  @Transactional
  @ResponseBody()
  public ResponseEntity<purchase_request> Delete_purc_req(@RequestParam("id_pr_req")  String[] id_purc_req,  purchase_request pr)
  {
  rpr.hapusdataAll(Arrays.asList(id_purc_req));
  return ResponseEntity.ok().build();
  }



  @RequestMapping(path="/PRL_All", method= RequestMethod.GET)
  public List<purchase_request_line> getPurcL_reqAll()
  {
  return (List)this.rprl.findAll();
  }


  @PostMapping("/PRLSave")
  @ResponseBody()
  public void create_purcl_req(@Valid purchase_request_line prl, purchase_order_line pol, BindingResult bindingResult)
  {
  if (bindingResult.hasErrors()) {
  LOGGER.error("masuk ke sini");
  }
   rprl.save(prl);
   rpol.save(pol);
  }



  // @RequestMapping(path="/HPR_validate", method= RequestMethod.GET)
  // public List<purchase_request> getHPR_validate()
  // {
  //   return (List)this.rhp.findByValidate();
  // }

  // @RequestMapping(path="/HPR_Post", method= RequestMethod.GET)
  // public List<purchase_request> getHPR_Post()
  // {
  //   return (List)this.rhp.findByPost();
  // }



  // @DeleteMapping("/HPRDelete")
  // @Transactional
  // @ResponseBody()
  // public ResponseEntity<purchase_request> Delete_Hpurc_req(@RequestParam("id_header_pr")  String[] id_header_pr,  header_pr hpr)
  // {
  //   rhp.hapusdataAll(Arrays.asList(id_header_pr));
  //   return ResponseEntity.ok().build();
  // }

  }


