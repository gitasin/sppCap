namespace cm;	
	
entity Currency {	
  key tenant_id : String(4)  not null;	
  key currency_code : String(30)  not null;	
    effective_start_date : DateTime  ;	
    effective_end_date : DateTime  ;	
    use_yn : Boolean  not null;	
    scale : Decimal  ;	
    extension_scale : Decimal  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
    system_update_dtm : DateTime  not null;	
}	