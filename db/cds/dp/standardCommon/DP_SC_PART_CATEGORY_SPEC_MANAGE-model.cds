namespace dp;	
using { User } from '@sap/cds/common';	
using {dp.Sc_Part_Category_Spec_Manage as Category_Spec_Manage} from '../standardCommon/DP_SC_PART_CATEGORY_SPEC_MANAGE-model';	
	
entity Sc_Part_Category_Spec_Manage {	
  key tenent_id : String(5)  not null;	
  key operation_type : String(10)  not null;	
  key operation_code : String(10)  not null;	
  key category_code : String(200)  not null;	
  key spec_code : String(200)  not null;	
    seq : Decimal default 0 ;	
    detail_flag : Boolean  ;	
    search_condition_flag : Boolean  ;	
    class_code : String(200)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}