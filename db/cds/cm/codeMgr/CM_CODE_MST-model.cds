namespace cm;

entity Code_Mst {
    
    @Comment: '테넌트ID'
    key tenant_id: String(10) not null;
    @Comment: '회사코드'
    key company_code: String(12) not null;
    @Comment: '체인코드'
    key chain_code: String(30) not null;
    @Comment: '프로세스코드'
    key process_code: String(30) not null;
    @Comment: '그룹코드'
    key group_code: String(30) NOT NULL;
    
    @Comment: '그룹명'
    group_name: String(240) NOT NULL;
    @Comment: '그룹설명'
    group_description: String NOT NULL;
    @Comment: '사용여부'
    use_yn: Boolean NOT NULL;
    
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