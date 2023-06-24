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
public class purchase_request
{
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  @Column(name = "id_pr_req", unique = true, nullable = false)
  String id_pr_req;

  String pr_number;

  String name;

  @DateTimeFormat(pattern = "yyyy-MM-dd")
  @Column(name="request_date", nullable=true)
  @Temporal(TemporalType.DATE)
  private Date request_date;

  @DateTimeFormat(pattern = "yyyy-MM-dd")
  @Column(name="date_required", nullable=true)
  @Temporal(TemporalType.DATE)
  private Date date_required;

  String departemen;

  String requester;

}
