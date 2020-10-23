namespace ep;	
	
entity Ep_Loi_Dtl {	
  key tenant_id : String(4)  not null;	
  key company_code : String(10)  not null;	
  key loi_write_number : String(100)  not null;	
  key loi_item_number : String(100)  not null;	
    item_line_number : Integer64  ;	
    item_code : String(40)  ;	
    item_name : String(240)  ;	
    request_qty : Decimal  ;	
    unt : String(30)  ;	
    request_amt : Decimal  ;	
    currency_code : String(30)  ;	
    spec_desc : String(1000)  ;	
    plant_code : String(30)  ;	
    delivery_request_date : String(8)  ;	
    loi_selection_number : String(100)  ;	
    loi_publish_number : String(100)  ;	
    rfq_number : String(100)  ;	
    rfq_item_number : String(100)  ;	
    contract_number : String(100)  ;	
    contract_item_number : String(100)  ;	
    po_number : String(100)  ;	
    po_item_number : String(100)  ;	
    rmks : String(3000)  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
    system_update_dtm : DateTime  not null;	
}	