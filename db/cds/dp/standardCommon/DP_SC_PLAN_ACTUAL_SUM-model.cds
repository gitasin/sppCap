namespace dp;	
using { User } from '@sap/cds/common';	
using {dp.Sc_Plan_Actual_Sum as Plan_Actual_Sum} from '../standardCommon/DP_SC_PLAN_ACTUAL_SUM-model';	
	
entity Sc_Plan_Actual_Sum {	
  key tenent_id : String(5)  not null;	
  key company_code : String(10)  not null;	
  key operation_type : String(10)  not null;	
  key operation_code : String(10)  not null;	
  key category_code : String(200)  not null;	
  key sc_type : String(10)  not null;	
  key yyyy : String(4)  not null;	
    progress_status : String(20)  ;	
    jan : Decimal default 0 ;	
    feb : Decimal default 0 ;	
    mar : Decimal default 0 ;	
    apr : Decimal default 0 ;	
    may : Decimal default 0 ;	
    jun : Decimal default 0 ;	
    jul : Decimal default 0 ;	
    aug : Decimal default 0 ;	
    sep : Decimal default 0 ;	
    oct : Decimal default 0 ;	
    nov : Decimal default 0 ;	
    dec : Decimal default 0 ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;
}