package com.example.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@Data
@Entity
public class purchase_request_line
{
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  @Column(name = "id_pr_req_line", unique = true, nullable = false)
  String id_pr_req_line;

  String pr_number;

  String requester;

  String item_number;

  String product_name;

  int qty;

  String UOM;

  String note;

}
