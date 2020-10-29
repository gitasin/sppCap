namespace ep;	
	
entity Loi_Publish {	
    key tenant_id : String(5)  not null;	
    key company_code : String(10)  not null;	
    key loi_publish_number : String(100)  not null;	
    loi_publish_ttl : String(100)  ;	
    progress_status_code : String(30)  ;	
    vendor_code : String(15)  ;	
    format_id : String(100)  ;	
    offline_yn : Boolean  ;	
    contract_date : String(8)  ;	
    additional_condition_desc : String(1000)  ;	
    attach_group_number : String(100)  ;	
    approve_number : String(100)  ;	
    purchase_manager_id : String(50)  ;	
    purchase_department_code : String(30)  ;	
    publish_date : String(8)  ;	
    rmks : String(3000)  ;	
    operation_org_type_code : String(30)  ;	
    operation_org_code : String(30)  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
    system_update_dtm : DateTime  not null;	
}	