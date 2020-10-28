namespace pg;	
	
entity Mi_Item_Category_Lng {	
  key tenant_id : String(5)  not null;	
  key category_code : String(40)  not null;	
  key language_code : String(30)  not null;	
    category_name : String(240)  not null;	
    local_create_date : DateTime  not null;	
    local_update_date : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_date : DateTime  not null;	
    system_update_date : DateTime  not null;	
  	
}	
