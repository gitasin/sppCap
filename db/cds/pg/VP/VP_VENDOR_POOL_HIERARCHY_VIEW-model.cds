namespace pg;

@cds.persistence.exists 
entity VP_VENDOR_POOL_HIERARCHY_VIEW {
   key TENANT_ID											:String;
   key VENDOR_POOL_CLASS_CODE					:String;
       SUPPLIER_GROUP_NAME						:String;
       GROUP_DETAIL_DESC							:String	;
       ORGANIZATION_NAME							:String;
       EVALUATION_OPERATION_UNIT_CODE :String;
       LEVELING_SEQ_NO								:Integer;
       HIGH_CLASSIFICATION_CODE				:String	;
       SORT_ORDER_NO									:Integer;
       USE_FLAG												:String;
       PARENT_ID											:Integer;
       NODE_ID												:Integer;
       hierarchy_rank                 :Integer;
       hierarchy_tree_size            :Integer;
       hierarchy_parent_rank          :Integer;
       hierarchy_level                :Integer;
       hierarchy_root_rank            :Integer;
       hierarchy_is_cycle             :Integer;
       hierarchy_is_orphan            :Integer;
}