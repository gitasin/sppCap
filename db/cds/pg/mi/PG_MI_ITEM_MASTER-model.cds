namespace pg;	
using { User } from '@sap/cds/common';		
using { pg as mst } from './PG_MI_ITEM_CATEGORY-model';	
	
entity Mi_Item_Master {	
  key tenant_id : String(5)  not null;	
  key mi_item_code : String(40)  not null;	
    category_code : String(40)  not null;	
    use_flag : Boolean default 'TRUE' not null;	
    local_create_date : DateTime  not null;	
    local_update_date : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_date : DateTime  not null;	
    system_update_date : DateTime  not null;	
  ref: Association to mst.Mi_Item_Category on ref.tenant_id = tenant_id and	
                                              ref.category_code = category_code;	
}	
