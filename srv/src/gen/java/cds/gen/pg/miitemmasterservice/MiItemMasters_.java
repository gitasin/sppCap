package cds.gen.pg.miitemmasterservice;

import cds.gen.pg.MiItemCategory_;
import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Boolean;
import java.lang.String;
import java.util.function.Function;

@CdsName("pg.MiItemMasterService.MiItemMasters")
public interface MiItemMasters_ extends StructuredType<MiItemMasters_> {
  String CDS_NAME = "pg.MiItemMasterService.MiItemMasters";

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
