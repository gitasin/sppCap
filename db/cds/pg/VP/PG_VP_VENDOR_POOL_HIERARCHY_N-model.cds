namespace pg;

entity Vp_Vendor_Pool_Hierarchy_N {
  key tenant_id : String(30);
   vendor_pool_class_code : String(100);
   supplier_group_name : String(100);
   group_detail_desc : String(4000);
   organization_name : String(240);
   evaluation_operation_unit_code : String(20);
   leveling_seq_no : Integer64;
   high_classification_code : String(50);
   use_flag : String(1);
   sort_order_no : Integer64;
}