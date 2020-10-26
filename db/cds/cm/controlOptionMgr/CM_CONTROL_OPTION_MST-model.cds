namespace cm;

using { User } from '@sap/cds/common';

entity Control_Option_Mst {

    key tenant_id: String(4) not null @title: '테넌트ID';
    key company_code: String(10) not null @title: '회사코드';
    key control_option_code: String(30) @title: '제어옵션코드';

    chain_code: String(30) not null @title: '체인코드';
    control_option_name: String(240) @title: '제어옵션명';
    start_date: Date not null @title: '시작일자';
    end_date: Date not null @title: '종료일자';
    site_yn: Boolean not null @title: '사이트여부';
    company_yn: Boolean not null @title: '회사여부';
    role_yn: Boolean not null @title: '롤여부';
    organization_yn: Boolean not null @title: '조직여부';
    user_yn: Boolean not null @title: '사용자여부';
    
    local_create_dtm: DateTime not null @title: '로컬등록시간';
    local_update_dtm: DateTime not null @title: '로컬수정시간';
    create_user_id: User not null @cds.on.insert: $user @title: '등록사용자ID';
    update_user_id: User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID';
    system_create_dtm: DateTime not null @cds.on.insert: $now @title: '시스템등록시간';
    system_update_dtm: DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간';
    
}