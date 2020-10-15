namespace cm;

using { cm as mst } from './CM_CODE_MST-model';

entity Code_Dtl {
    
    @Comment: '테넌트ID'
    key tenant_id: String(4) not null;
    @Comment: '회사코드'
    key company_code: String(10) not null;
    @Comment: '그룹코드'
    key group_code: String(30) NOT NULL;
    
    ref: Association to mst.Code_Mst
        on ref.tenant_id = tenant_id 
        and ref.company_code = company_code 
        and ref.group_code = group_code;

    @Comment: '코드'
    key code: String(30) NOT NULL;

    @Comment: '코드설명'
    code_description: String(240) NOT NULL;
    @Comment: '정렬번호'
    sort_no: Decimal NOT NULL;
    @Comment: '시작일'
    start_date: Date NOT NULL;
    @Comment: '종료일'
    end_date: Date NOT NULL;
    
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