namespace dp;	
using { User } from '@sap/cds/common';	
using {dp.Sc_Part_Class as Part_Class} from '../standardCommon/DP_SC_PART_CLASS-model';	
	
entity Sc_Part_Class {	
  key tenent_id : String(5)  not null;	
  key operation_type : String(10)  not null;	
  key operation_code : String(10)  not null;	
  key class_code : String(200)  not null;	
    parent_class_code : String(200)  ;	
    seq : Decimal default 0 ;	
    class_name : String(2000)  ;	
    desc : String(2000)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}