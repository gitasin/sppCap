package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample")
public interface Sample_ extends StructuredType<Sample_> {
  String CDS_NAME = "xx.Sample";

  ElementRef<String> cd();

  ElementRef<String> name();

  ElementRef<Long> id();
}
