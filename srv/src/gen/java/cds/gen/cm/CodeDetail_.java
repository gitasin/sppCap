package cds.gen.cm;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.String;

@CdsName("cm.Code_Detail")
public interface CodeDetail_ extends StructuredType<CodeDetail_> {
  String CDS_NAME = "cm.Code_Detail";

  ElementRef<String> cd();

  ElementRef<String> name();
}
