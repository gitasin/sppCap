namespace cm;

using { cm as cm } from './CONTROL_OPTION_MST-model';

entity CONTROL_OPTION_DTL {
    
    @Comment: '테넌트ID'
    key TENANT_ID: String(10) not null;
    @Comment: '회사코드'
    key COMPANY_CODE: String(12) not null;
    @Comment: '체인코드'
    key CHAIN_CODE: String(30) not null;
    @Comment: '프로세스코드'
    key PROCESS_CODE: String(30) not null;
    @Comment: '제어옵션코드'
    key CONTROL_OPTION_CODE: String(30);

    k: Association to cm.CONTROL_OPTION_MST 
        on k.TENANT_ID = TENANT_ID 
        and k.COMPANY_CODE = COMPANY_CODE 
        and k.CHAIN_CODE = CHAIN_CODE 
        and k.PROCESS_CODE = PROCESS_CODE 
        and k.CONTROL_OPTION_CODE = CONTROL_OPTION_CODE;
    
    @Comment: '제어옵션레벨코드'
    key CONTROL_OPTION_LEVEL_CODE: String(240);
    @Comment: '제어옵션레벨값'
    key CONTROL_OPTION_LEVEL_VAL: Date not null;
    @Comment: '제어옵션값'
    CONTROL_OPTION_VAL: Date not null;

    @Comment: '로컬등록시간'
    LOCAL_CREATE_DATE: DateTime not null;
    @Comment: '로컬수정시간'
    LOCAL_UPDATE_DATE: DateTime not null;
    @Comment: '등록사용자ID'
    CREATE_USER_ID: String(50) not null;
    @Comment: '변경사용자ID'
    UPDATE_USER_ID: String(50) not null;
    @Comment: '시스템등록시간'
    SYSTEM_CREATE_DATE: DateTime not null;
    @Comment: '시스템수정시간'
    SYSTEM_UPDATE_DATE: DateTime not null;
    
}