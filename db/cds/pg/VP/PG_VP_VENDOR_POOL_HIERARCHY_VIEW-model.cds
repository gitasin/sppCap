namespace pg;

@cds.persistence.exists 
entity Vp_Vendor_Pool_Hierarchy_View {
   key TENANT_ID											:String;
   key VENDOR_POOL_CLASS_CODE					:String;
       SUPPLIER_GROUP_NAME						:String;
       GROUP_DETAIL_DESC							:String	;
       ORGANIZATION_NAME							:String;
       EVALUATION_OPERATION_UNIT_CODE :String;
       LEVELING_SEQ_NO								:Integer64;
       HIGH_CLASSIFICATION_CODE				:String	;
       SORT_ORDER_NO									:Integer64;
       USE_FLAG												:String;
       PARENT_ID											:Integer64;
       NODE_ID												:Integer64;
       hierarchy_rank                 :Integer64;
       hierarchy_tree_size            :Integer64;
       hierarchy_parent_rank          :Integer64;
       hierarchy_level                :Integer64;
       hierarchy_root_rank            :Integer64;
       hierarchy_is_cycle             :Integer64;
       hierarchy_is_orphan            :Integer64;
}