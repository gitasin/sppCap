package cds.gen.pg;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Boolean;
import java.lang.String;
import java.util.List;
import java.util.Map;

@CdsName("pg.Mi_Item_Master")
public interface MiItemMaster extends CdsData {
  String UOM = "uom";

  String TERMS = "terms";

  String CATEGORY_CODE = "category_code";

  String USE = "use";

  String CURRENCY = "currency";

  String EXCHANGE = "exchange";

  String SOURCING_GROUP = "sourcing_group";

  String DETAILS = "details";

  String MI_ITEM_NAME = "mi_item_name";

  String EXCHANGE_UOM = "exchange_uom";

  String MI_ITEM_CODE = "mi_item_code";

  String MANAGE_PERIOD = "manage_period";

  String getUom();

  void setUom(String uom);

  String getTerms();

  void setTerms(String terms);

  @CdsName(CATEGORY_CODE)
  String getCategoryCode();

  @CdsName(CATEGORY_CODE)
  void setCategoryCode(String categoryCode);

  Boolean getUse();

  void setUse(Boolean use);

  String getCurrency();

  void setCurrency(String currency);

  String getExchange();

  void setExchange(String exchange);

  @CdsName(SOURCING_GROUP)
  String getSourcingGroup();

  @CdsName(SOURCING_GROUP)
  void setSourcingGroup(String sourcingGroup);

  List<MiItemCategory> getDetails();

  void setDetails(List<? extends Map<String, ?>> details);

  @CdsName(MI_ITEM_NAME)
  String getMiItemName();

  @CdsName(MI_ITEM_NAME)
  void setMiItemName(String miItemName);

  @CdsName(EXCHANGE_UOM)
  String getExchangeUom();

  @CdsName(EXCHANGE_UOM)
  void setExchangeUom(String exchangeUom);

  @CdsName(MI_ITEM_CODE)
  String getMiItemCode();

  @CdsName(MI_ITEM_CODE)
  void setMiItemCode(String miItemCode);

  @CdsName(MANAGE_PERIOD)
  String getManagePeriod();

  @CdsName(MANAGE_PERIOD)
  void setManagePeriod(String managePeriod);

  static MiItemMaster create() {
    return Struct.create(MiItemMaster.class);
  }
}
