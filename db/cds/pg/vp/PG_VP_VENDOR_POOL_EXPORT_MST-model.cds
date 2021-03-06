namespace pg;	
 
using util from '../../util/util-model';

entity Vp_Vendor_Pool_Export_Mst {	
    key tenant_id : String(5) not null @title: '테넌트ID';
    key company_code : String(10) not null @title: '회사코드';
    key operation_org_type_code : String(30) not null @title: '운영조직유형코드';
    key operation_org_code : String(30) not null @title: '운영조직코드';
    key vendor_pool_code : String(30) not null @title: '협력사풀코드';
    vendor_pool_local_name : String(240) @title: '협력사풀로칼명';
    vendor_pool_english_name : String(240) @title: '협력사풀영문명';
    repr_department_code : String(40) @title: '대표부서코드';
    evaluation_operation_unit_code : String(30) @title: '평가운영단위코드';
    inp_type_code : String(30) @title: 'I&P유형코드';
    mtlmob_base_code : String(30) @title: '물동기준코드';
    regular_evaluation_flag : Boolean @title: '정기평가여부';
    industry_class_code : String(30) @title: '산업분류코드';
    sd_exception_flag : Boolean @title: '공급업체발굴예외여부';
    vendor_pool_exception_flag : Boolean @title: '협력사풀예외여부';
    site_internal_rate : Decimal @title: '사이트내부비율';
    site_external_rate : Decimal @title: '사이트외부비율';
    equipment_grade_code : String(30) @title: '장비등급코드';
    equipment_type_code : String(30) @title: '장비유형코드';
    vendor_pool_use_flag : Boolean @title: '협력사풀사용여부';
    vendor_pool_desc : String(1000) @title: '협력사풀설명';
    vendor_pool_history_desc : String(1000) @title: '협력사풀이력설명';
    parent_vendor_pool_code : String(30) @title: '상위협력사풀코드';
    leaf_flag : Boolean @title: '리프여부';
    level_number : Decimal @title: '레벨번호';
    mark_sequence : Decimal @title: '표시순번';
    vendor_pool_path_sequence : Decimal @title: '협력사풀경로순번';
    vendor_pool_path_code : String(100) @title: '협력사풀경로코드';
    vendor_pool_path_name : String(240) @title: '협력사풀경로명';
    vendor_pool_mark_name : String(240) @title: '협력사풀표시명';
    vendor_pool_level1_code : String(30) @title: '협력사풀레벨1코드';
    vendor_pool_level2_code : String(30) @title: '협력사풀레벨2코드';
    vendor_pool_level3_code : String(30) @title: '협력사풀레벨3코드';
    vendor_pool_level4_code : String(30) @title: '협력사풀레벨4코드';
    vendor_pool_level5_code : String(30) @title: '협력사풀레벨5코드';
    vendor_pool_level1_name : String(240) @title: '협력사풀레벨1명';
    vendor_pool_level2_name : String(240) @title: '협력사풀레벨2명';
    vendor_pool_level3_name : String(240) @title: '협력사풀레벨3명';
    vendor_pool_level4_name : String(240) @title: '협력사풀레벨4명';
    vendor_pool_level5_name : String(240) @title: '협력사풀레벨5명';
}

extend Vp_Vendor_Pool_Export_Mst with util.Managed;