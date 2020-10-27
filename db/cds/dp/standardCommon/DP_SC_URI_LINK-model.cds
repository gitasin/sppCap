namespace dp;	
using {dp.Sc_Uri_Link as ULink} from '../standardCommon/DP_SC_URI_LINK-model';	
	
entity Sc_Uri_Link {	
  key tenent_id : String(5)  not null;	
    company_code : String(10)  ;	
  key uri_code : String(10)  not null;	
    uri_name : Decimal(2000)  ;	
    uri_type : String(10)  ;	
    target_system : String(2000)  ;	
    desc : String(2000)  ;	
    call_key1 : String(2000)  ;	
    call_key2 : String(2000)  ;	
    call_key3 : String(2000)  ;	
    call_key4 : String(2000)  ;	
    call_key5 : String(2000)  ;	
    use_yn : Boolean default 0 ;	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;	
}