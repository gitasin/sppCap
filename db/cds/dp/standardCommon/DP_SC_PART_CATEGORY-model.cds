namespace dp;	
using { User } from '@sap/cds/common';	
using {dp.Sc_Part_Category as Part_Category} from '../standardCommon/DP_SC_PART_CATEGORY-model';	
	
entity Sc_Part_Category {	
  key tenent_id : String(5)  not null;	
    company_code : String(10)  ;	
    operation_type : String(200)  ;	
    operation_code : String(200)  ;	
  key category_code : String(200)  not null;	
    parent_category_code : String(200)  ;	
    seq : Decimal default 0 ;	
    category_name : String(2000)  ;	
    category_name_kor : String(2000)  ;	
    desc : String(2000)  ;	
    status_code : String(10)  ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}