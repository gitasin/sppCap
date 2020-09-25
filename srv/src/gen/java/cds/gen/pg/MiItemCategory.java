package cds.gen.pg;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.String;

@CdsName("pg.Mi_Item_Category")
public interface MiItemCategory extends CdsData {
  String CATEGORY_NAME = "category_name";

  String CATEGORY_CODE = "category_code";

  String PARENT_CODE = "parent_code";

  @CdsName(CATEGORY_NAME)
  String getCategoryName();

  @CdsName(CATEGORY_NAME)
  void setCategoryName(String categoryName);

  @CdsName(CATEGORY_CODE)
  String getCategoryCode();

  @CdsName(CATEGORY_CODE)
  void setCategoryCode(String categoryCode);

  @CdsName(PARENT_CODE)
  String getParentCode();

  @CdsName(PARENT_CODE)
  void setParentCode(String parentCode);

  static MiItemCategory create() {
    return Struct.create(MiItemCategory.class);
  }
}
