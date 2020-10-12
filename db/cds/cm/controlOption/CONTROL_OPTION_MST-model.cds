namespace cm;

entity CONTROL_OPTION_MST {

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

    @Comment: '제어옵션명'
    CONTROL_OPTION_NAME: String(240);
    @Comment: '시작일자'
    START_DATE: Date not null;
    @Comment: '종료일자'
    END_DATE: Date not null;
    @Comment: '사이트여부'
    SITE_YN: Boolean not null;
    @Comment: '회사여부'
    COMPANY_YN: Boolean not null;
    @Comment: '롤여부'
    ROLE_YN: Boolean not null;
    @Comment: '조직여부'
    ORGANIZATION_YN: Boolean not null;
    @Comment: '사용자여부'
    USER_YN: Boolean not null;
    
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