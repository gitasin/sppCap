package cds.gen.pg;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.String;

@CdsName("pg.Mi_Item_Category")
public interface MiItemCategory_ extends StructuredType<MiItemCategory_> {
  String CDS_NAME = "pg.Mi_Item_Category";

  ElementRef<String> category_name();

  ElementRef<String> category_code();

  ElementRef<String> parent_code();
}
