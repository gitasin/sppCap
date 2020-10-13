namespace cm;

entity Control_Option_Mst {

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

    @Comment: '제어옵션명'
    control_option_name: String(240);
    @Comment: '시작일자'
    start_date: Date not null;
    @Comment: '종료일자'
    end_date: Date not null;
    @Comment: '사이트여부'
    site_yn: Boolean not null;
    @Comment: '회사여부'
    company_yn: Boolean not null;
    @Comment: '롤여부'
    role_yn: Boolean not null;
    @Comment: '조직여부'
    organization_yn: Boolean not null;
    @Comment: '사용자여부'
    user_yn: Boolean not null;
    
    @Comment: '로컬등록시간'
    local_create_date: DateTime not null;
    @Comment: '로컬수정시간'
    local_update_date: DateTime not null;
    @Comment: '등록사용자ID'
    create_user_id: String(50) not null;
    @Comment: '변경사용자ID'
    update_user_id: String(50) not null;
    @Comment: '시스템등록시간'
    system_create_date: DateTime not null;
    @Comment: '시스템수정시간'
    system_update_date: DateTime not null;
    
}