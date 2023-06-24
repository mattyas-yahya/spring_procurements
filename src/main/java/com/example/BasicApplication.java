package com.example;

import com.example.model.Users;
import com.example.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

//@EnableEurekaClient

public class BasicApplication {
	@Autowired
	UserRepository urepository;

	public static void main(String[] args)
	{
	  StringBuilder sbr = new StringBuilder();
	  sbr.append("this is mini banner ");
    sbr.append("and this is simple banner");
    System.out.println(sbr);
		SpringApplication.run(BasicApplication.class, args);

	}
	@Bean
	public CommandLineRunner AddNew()
	{
		return (args) ->
		{

			Users u1 = new Users();
			Users u2 = new Users();
			Users u3 = new Users();
		//	ir.save(i);

			u1.setId(1);
			u1.setEmail("matt@gmail.com");
			u1.setPassword("$2a$10$AWNF6r2.v8B/5tdcEjQDAOGa5NteluxbwGhcrHlxyhZw3q3EhikFC");
			u1.setName("mattyas");
			u1.setLastName("mattyas");
			u1.setActive(1);
			u1.setRole("ROLE_USER");
			u1.setLink("");

			u2.setId(2);
			u2.setEmail("vanilla@gmail.com");
			u2.setPassword("$2a$10$LuJTXLNBA93v8LTuio63l.0J07dCxqJtc3Tf2/Hct1dhat5UX4C5K");
			u2.setName("vanilla");
			u2.setLastName("vanilla");
			u2.setActive(1);
			u2.setRole("ENDPOINT_ADMIN");
			u2.setLink("");

			u3.setId(3);
			u3.setEmail("jasperadmin@gmail.com");
			u3.setPassword("$2a$10$rh98R7rcaIsC6ATP9ldzhuLpk9uiQv/DRxItISCSoQAvaTZziDQFm");
			u3.setName("jasperadmin");
			u3.setLastName("jasperadmin");
			u3.setActive(1);
			u3.setRole("ROLE_ADMIN");
			u3.setLink("");


			urepository.save(u1);
			urepository.save(u2);
			urepository.save(u3);


		};
	}
}
//insert into tr_bom (kode_bom,kode,nama,quantity_per_series)
//select kode_bom,kode,nama,quantity_per_series from master_bom where kode_bom='kursi' ;
//rumus bom

//SELECT *,(quantity_per_series*t_finish_goods) as t_consum FROM belajar.jurnal_bom;
//
//
//  insert into jurnal_bom  (kode_jurnal_bom,kode_bom,kode,nama,quantity_per_series)
//  select b.kode_jurnal_bom, a.kode_bom,a.kode,a.nama,a.quantity_per_series
//  from  master_bom a,  header_bom b where a.kode_bom='kursi' and b.kode_jurnal_bom='J001' ;
//
//  update jurnal_bom set consume=2 where kode_jurnal_bom='J001';
