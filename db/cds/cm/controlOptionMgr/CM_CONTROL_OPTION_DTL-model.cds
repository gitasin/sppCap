namespace cm;

using { cm as mst } from './CM_CONTROL_OPTION_MST-model';

entity Control_Option_Dtl {
    
    @Comment: '테넌트ID'
    key tenant_id: String(10) not null;
    @Comment: '회사코드'
    key company_code: String(12) not null;
    @Comment: '체인코드'
    key chain_code: String(30) not null;
    @Comment: '프로세스코드'
    key process_code: String(30) not null;
    @Comment: '제어옵션코드'
    key control_option_code: String(30);

    ref: Association to mst.Control_Option_Mst
        on ref.tenant_id = tenant_id 
        and ref.company_code = company_code 
        and ref.chain_code = chain_code 
        and ref.process_code = process_code 
        and ref.control_option_code = control_option_code;
    
    @Comment: '제어옵션레벨코드'
    key control_option_level_code: String(30) not null;
    @Comment: '제어옵션레벨값'
    key control_option_level_val: String(100) not null;
    @Comment: '제어옵션값'
    control_option_val: String(100) not null;

    @Comment: '로컬등록시간'
    local_create_dtm: DateTime not null;
    @Comment: '로컬수정시간'
    local_update_dtm: DateTime not null;
    @Comment: '등록사용자ID'
    create_user_id: String(50) not null;
    @Comment: '변경사용자ID'
    update_user_id: String(50) not null;
    @Comment: '시스템등록시간'
    system_create_dtm: DateTime not null;
    @Comment: '시스템수정시간'
    system_update_dtm: DateTime not null;
    
}