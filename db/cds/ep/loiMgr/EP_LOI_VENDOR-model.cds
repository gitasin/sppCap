namespace ep;	

using { ep as dtl } from './EP_LOI_DTL-model';

entity Loi_Vendor {	
  key tenant_id : Association to dtl.Loi_Dtl { tenant_id };	
  key company_code : Association to dtl.Loi_Dtl { company_code };	
  key loi_write_number : Association to dtl.Loi_Dtl { loi_write_number };	
  key loi_item_number : Association to dtl.Loi_Dtl { loi_item_number };	
  key vendor_code : String(15)  not null;	
    vendor_pool_code : String(30)  ;	
    rmks : String(3000)  ;	
    local_create_dtm : DateTime  not null;	
    local_update_dtm : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm : DateTime  not null;	
}	