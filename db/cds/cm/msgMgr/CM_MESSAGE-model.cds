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
  	
}	
