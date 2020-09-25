package cds.gen.sp;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("sp.Vendor_Pool_Old")
public interface VendorPoolOld extends CdsData {
  String TENANT_ID = "tenant_id";

  String SUPPLIER_GROUP_NAME = "supplier_group_name";

  String ATTRI3 = "attri3";

  String ORGANIZATION_NAME = "organization_name";

  String SORT_ORDER_NO = "sort_order_no";

  String GROUP_DETAIL_DESC = "group_detail_desc";

  String ATTR2 = "attr2";

  String ATTR1 = "attr1";

  String VENDOR_POOL_CLASS_CODE = "vendor_pool_class_code";

  String HIGH_CLASSIFICATION_CODE = "high_classification_code";

  String EVALUATION_OPERATION_UNIT_CODE = "evaluation_operation_unit_code";

  String LEVELING_SEQ_NO = "leveling_seq_no";

  String USE_FLAG = "use_flag";

  @CdsName(TENANT_ID)
  String getTenantId();

  @CdsName(TENANT_ID)
  void setTenantId(String tenantId);

  @CdsName(SUPPLIER_GROUP_NAME)
  String getSupplierGroupName();

  @CdsName(SUPPLIER_GROUP_NAME)
  void setSupplierGroupName(String supplierGroupName);

  String getAttri3();

  void setAttri3(String attri3);

  @CdsName(ORGANIZATION_NAME)
  String getOrganizationName();

  @CdsName(ORGANIZATION_NAME)
  void setOrganizationName(String organizationName);

  @CdsName(SORT_ORDER_NO)
  Long getSortOrderNo();

  @CdsName(SORT_ORDER_NO)
  void setSortOrderNo(Long sortOrderNo);

  @CdsName(GROUP_DETAIL_DESC)
  String getGroupDetailDesc();

  @CdsName(GROUP_DETAIL_DESC)
  void setGroupDetailDesc(String groupDetailDesc);

  String getAttr2();

  void setAttr2(String attr2);

  String getAttr1();

  void setAttr1(String attr1);

  @CdsName(VENDOR_POOL_CLASS_CODE)
  String getVendorPoolClassCode();

  @CdsName(VENDOR_POOL_CLASS_CODE)
  void setVendorPoolClassCode(String vendorPoolClassCode);

  @CdsName(HIGH_CLASSIFICATION_CODE)
  String getHighClassificationCode();

  @CdsName(HIGH_CLASSIFICATION_CODE)
  void setHighClassificationCode(String highClassificationCode);

  @CdsName(EVALUATION_OPERATION_UNIT_CODE)
  String getEvaluationOperationUnitCode();

  @CdsName(EVALUATION_OPERATION_UNIT_CODE)
  void setEvaluationOperationUnitCode(String evaluationOperationUnitCode);

  @CdsName(LEVELING_SEQ_NO)
  Long getLevelingSeqNo();

  @CdsName(LEVELING_SEQ_NO)
  void setLevelingSeqNo(Long levelingSeqNo);

  @CdsName(USE_FLAG)
  String getUseFlag();

  @CdsName(USE_FLAG)
  void setUseFlag(String useFlag);

  static VendorPoolOld create() {
    return Struct.create(VendorPoolOld.class);
  }
}
