namespace cm;	
	
entity Currency_Lng {	
  key tenant_id : String(4)  not null;	
  key currency_code : String(30)  not null;	
  key language_code : String(30)  ;	
    currency_code_name : String(240)  ;	
    currency_code_desc : String(300)  not null;	
    currency_prefix : String(30)  ;	
    currency_suffix : String(30)  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
    system_update_dtm : DateTime  not null;	
}	