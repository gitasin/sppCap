namespace pg;	
using { User } from '@sap/cds/common';	
using { pg as mst } from './PG_MI_ITEM_MASTER-model';	
	
entity Mi_Market_Price {	
  key tenant_id : String(5)  not null;	
  key mi_item_code : String(40)  not null;	
  key currency : String(10)  not null;	
  key unit : String(10)  not null;	
  key info_site : String(10)  not null;	
  key terms : String(10)  not null;	
  key mi_date : Date  not null;	
    mi_amt : Decimal(10,10)  not null;	
    local_create_date : DateTime  not null;	
    local_update_date : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_date : DateTime  not null;	
    system_update_date : DateTime  not null;	
  ref: Association to mst.Mi_Item_Master on ref.tenant_id = tenant_id and
                                            ref.mi_item_code = mi_item_code;	
  	
	
}	
