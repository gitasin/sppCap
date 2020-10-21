namespace dp;	
//using {dp.Sc_Part_Category_Class as Class} from '../standardCommon/DP_SC_PART_CATEGORY_CLASS-model';	
	
entity Sc_Part_Category_Class {	
  key tenent_id : String(4)  not null;	
    company_code : String(10)  ;	
    operation_type : String(200)  ;	
    operation_code : String(200)  ;	
  key category_code : String(200)  not null;	
  key class_code : String(200)  not null;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : String(50)  ;	
    update_user_id : String(50)  ;	
    system_create_date : DateTime  ;	
    system_update_date : DateTime  ;	
}