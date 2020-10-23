namespace ep;	
	
entity Ep_Loi_Vendor {	
  key tenant_id : String(4)  not null;	
  key company_code : String(10)  not null;	
  key loi_write_number : String(100)  not null;	
  key loi_item_number : String(100)  not null;	
  key vendor_code : String(15)  not null;	
    vendor_pool_code : String(30)  ;	
    rmks : String(3000)  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
}	