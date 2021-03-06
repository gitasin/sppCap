namespace dp;	
using { User } from '@sap/cds/common';
using {dp.Sc_Spec_Name_Lov as Spec_Name_Lov} from '../standardCommon/DP_SC_SPEC_NAME_LOV-model';	
	
entity Sc_Spec_Name_Lov {	
  key tenent_id : String(5)  not null;	
    company_code : String(10)  ;	
    operation_type : String(200)  ;	
    operation_code : String(200)  ;	
  key spec_value_list_code : String(10)  not null;	
    spec_value_list_name : String(2000)  ;	
    spec_value_code : String(200)  not null;	
    spec_value_name : String(2000)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}