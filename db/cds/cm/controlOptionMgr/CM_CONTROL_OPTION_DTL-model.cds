namespace cm;

using { User } from '@sap/cds/common';
using { cm as mst } from './CM_CONTROL_OPTION_MST-model';

entity Control_Option_Dtl {
    
    key tenant_id: String(5) not null @title: '테넌트ID';
    key control_option_code: String(30) @title: '제어옵션코드';
<<<<<<< HEAD
=======
    
    parent: Association to master.Control_Option_Mst
        on parent.tenant_id = tenant_id 
        and parent.control_option_code = control_option_code;
>>>>>>> 94bb3a584268ec877edf39bcd3c7e9526490c526

    ref: Composition of mst.Control_Option_Mst
        on ref.tenant_id = tenant_id 
        and ref.company_code = company_code 
        and ref.control_option_code = control_option_code;
    
    key control_option_level_code: String(30) not null @title: '제어옵션레벨코드';
    key control_option_level_val: String(100) not null @title: '제어옵션레벨값';
    control_option_val: String(100) not null @title: '제어옵션값';

    local_create_dtm: DateTime not null @title: '로컬등록시간';
    local_update_dtm: DateTime not null @title: '로컬수정시간';
    create_user_id: User not null @cds.on.insert: $user @title: '등록사용자ID';
    update_user_id: User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID';
    system_create_dtm: DateTime not null @cds.on.insert: $now @title: '시스템등록시간';
    system_update_dtm: DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간';
    
}