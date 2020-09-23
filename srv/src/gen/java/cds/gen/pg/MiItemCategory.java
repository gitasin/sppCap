package cds.gen.pg;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.String;

@CdsName("pg.Mi_Item_Category")
public interface MiItemCategory extends CdsData {
  String CATEGORY_CODE = "category_code";

  String CATEGORY_DESC = "category_desc";

  String PARERNT_CODE = "parernt_code";

  @CdsName(CATEGORY_CODE)
  String getCategoryCode();

  @CdsName(CATEGORY_CODE)
  void setCategoryCode(String categoryCode);

  @CdsName(CATEGORY_DESC)
  String getCategoryDesc();

  @CdsName(CATEGORY_DESC)
  void setCategoryDesc(String categoryDesc);

  @CdsName(PARERNT_CODE)
  String getParerntCode();

  @CdsName(PARERNT_CODE)
  void setParerntCode(String parerntCode);

  static MiItemCategory create() {
    return Struct.create(MiItemCategory.class);
  }
}
