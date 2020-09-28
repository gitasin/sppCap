namespace pg;

@cds.persistence.exists
entity Vp_Vendor_Pool_Full_Hierarchy_View {
    key  tenant_id : String; 
    key  vendor_pool_class_code : String; 
      supplier_group_name : String; 
      group_detail_desc : String; 
      organization_name : String; 
      evaluation_operation_unit_code : String; 
      leveling_seq_no : Integer64; 
      high_classification_code : String; 
      sort_order_no : Integer64; 
      sort_order_no_path : String; 
      use_flag : String; 
      node_id_path : String; 
      node_name_path : String; 
      display_full_group_name : String; 
      group_code_level_1 : String; 
      group_code_level_2 : String; 
      group_code_level_3 : String; 
      group_code_level_4 : String; 
      group_code_level_5 : String; 
      group_name_level_1 : String; 
      group_name_level_2 : String; 
      group_name_level_3 : String; 
      group_name_level_4 : String; 
      group_name_level_5 : String; 
}