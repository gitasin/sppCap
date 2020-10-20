namespace cm;	
	
entity Message {	
  @comment: '테넌트ID'
  key tenant_id : String(4)  not null;	
  @Comment: '메시지코드'
  key message_code : String(30)  not null;
  @Comment: '언어코드'
  key language_code : String(30)  not null;	
    chain_code : String(30)  not null;	
    message_type_code : String(30)  not null;	
    message_contents : String(1000)  not null;	
        local_create_dtm: DateTime not null;	
    local_update_dtm: DateTime not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_dtm: DateTime not null;	
    system_update_dtm: DateTime not null;	
}	


