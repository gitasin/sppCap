package cds.gen.pg;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Boolean;
import java.lang.String;
import java.util.function.Function;

@CdsName("pg.Mi_Item_Master")
public interface MiItemMaster_ extends StructuredType<MiItemMaster_> {
  String CDS_NAME = "pg.Mi_Item_Master";

  ElementRef<String> uom();

  ElementRef<String> terms();

  ElementRef<String> category_code();

  ElementRef<Boolean> use();

  ElementRef<String> currency();

  ElementRef<String> exchange();

  ElementRef<String> sourcing_group();

  MiItemCategory_ details();

  MiItemCategory_ details(Function<MiItemCategory_, CqnPredicate> filter);

  ElementRef<String> mi_item_name();

  ElementRef<String> exchange_uom();

  ElementRef<String> mi_item_code();

  ElementRef<String> manage_period();
}
