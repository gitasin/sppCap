namespace pg;	
	
entity Mi_Item_Category {	
  key tenant_id : String(5)  not null;	
  key category_code : String(40)  not null;	
    parent_category_code : String(40)  ;	
    description : String(300)  ;	
    local_create_date : DateTime  not null;	
    local_update_date : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_date : DateTime  not null;	
    system_update_date : DateTime  not null;	
}	