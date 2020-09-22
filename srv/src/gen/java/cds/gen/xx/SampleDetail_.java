package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Detail")
public interface SampleDetail_ extends StructuredType<SampleDetail_> {
  String CDS_NAME = "xx.Sample_Detail";

  ElementRef<String> cd();

  ElementRef<Long> header_id();

  ElementRef<String> name();

  ElementRef<Long> detail_id();
}
