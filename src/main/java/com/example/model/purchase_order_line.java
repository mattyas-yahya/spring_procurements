package com.example.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.function.IntConsumer;

@NoArgsConstructor
@Data
@Entity
public class purchase_order_line
{
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  @Column(name = "id_po_line", unique = true, nullable = false)
  String id_po_line;

  String po_number;

  String pr_number;

  String item_number;

  String product_name;

  int qty;

  String UOM;

  String note;

  int unit_price;

  int subtotal;


}
