namespace dp;	
using { User } from '@sap/cds/common';	
using {dp.Sc_Yyyy_Plan_Actual as Yyyy_Plan_Actual} from '../standardCommon/DP_SC_YYYY_PLAN_ACTUAL-model';	
	
entity Sc_Yyyy_Plan_Actual {	
  key tenent_id : String(5)  not null;	
  key company_code : String(10)  not null;	
  key operation_type : String(10)  not null;	
  key operation_code : String(10)  not null;	
  key yyyy : String(4)  not null;	
    yyyy_plan_summary : String(2000)  ;	
    planner : String(200)  ;	
    remark : String  ;	
    plan_attachments : String(2000)  ;	
    actual_attachments : String(2000)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}