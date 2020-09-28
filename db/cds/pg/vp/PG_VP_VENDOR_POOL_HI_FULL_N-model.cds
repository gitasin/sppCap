namespace pg;

entity VP_VENDOR_POOL_HI_FULL_N
 {
  key tenant_id                         :     String(30)  ;
  key vendor_pool_class_code            :     String(100) ;
  supplier_group_name               :     String(100) ;
  group_detail_desc                 :     String(4000);
  organization_name                 :     String(240) ;
  evaluation_operation_unit_code    :     String(20)  ;
  leveling_seq_no                   :     Integer64   ;
  high_classification_code          :     String(50)  ;
  sort_order_no                     :     Integer64   ;
  full_sort_order_no                :     String(200) ;
  use_flag                          :     String(1)   ;
  full_group_code                   :     String(500) ;
  full_group_name                   :     String(500) ;
  display_full_group_name           :     String(500) ;
  group_code_level_1                :     String(100) ;
  group_code_level_2                :     String(100) ;
  group_code_level_3                :     String(100) ;
  group_code_level_4                :     String(100) ;
  group_code_level_5                :     String(100) ;
  group_name_level_1                :     String(100) ;
  group_name_level_2                :     String(100) ;
  group_name_level_3                :     String(100) ;
  group_name_level_4                :     String(100) ;
  group_name_level_5                :     String(100) ;
 }