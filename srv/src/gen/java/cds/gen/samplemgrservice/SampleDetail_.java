package cds.gen.samplemgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("SampleMgrService.SampleDetail")
public interface SampleDetail_ extends StructuredType<SampleDetail_> {
  String CDS_NAME = "SampleMgrService.SampleDetail";

  ElementRef<String> cd();

  ElementRef<Long> header_id();

  ElementRef<String> name();

  ElementRef<Long> detail_id();
}
