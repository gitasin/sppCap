namespace dp;	
using {dp.Sc_Part_Class as Class} from '../standardCommon/DP_SC_PART_CLASS-model';	
	
entity Sc_Part_Class {	
  key tenent_id : String(4)  not null;	
    company_code : String(10)  ;	
    operation_type : String(200)  ;	
    operation_code : String(200)  ;	
    operation_code2 : String(200)  ;	
  key class_code : String(200)  not null;	
    parent_class_code : String(200)  ;	
    seq : Decimal(9) default 0 ;	
    class_name : String(2000)  ;	
    class_name_kor : String(2000)  ;	
    desc : String(2000)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : String(50)  ;	
    update_user_id : String(50)  ;	
    system_create_date : DateTime  ;	
    system_update_date : DateTime  ;	
}	