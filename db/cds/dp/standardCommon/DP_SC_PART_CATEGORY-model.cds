namespace dp;	
	
entity Sc_Part_Category {	
  key tenent_id : String(4)  not null;	
    company_code : String(10)  ;	
    operation_type : String(200)  ;	
    operation_code : String(200)  ;	
  key category_code : String(200)  not null;	
    parent_category_code : String(200)  ;	
    seq : Decimal default 0 ;	
    category_name : String(2000)  ;	
    category_name_kor : String(2000)  ;	
    desc : String(2000)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : String(50)  ;	
    update_user_id : String(50)  ;	
    system_create_date : DateTime  ;	
    system_update_date : DateTime default 'current_timestamp' ;	
}	