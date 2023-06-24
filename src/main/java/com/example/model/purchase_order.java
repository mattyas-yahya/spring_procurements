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
public class purchase_order
{
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  @Column(name = "id_purchase_order", unique = true, nullable = false)
  String id_purchase_order;

String po_number;
  @DateTimeFormat(pattern = "yyyy-MM-dd")
  @Column(name="create_date", nullable=true)
  @Temporal(TemporalType.DATE)
  private Date create_date;
  String created_by;
}
