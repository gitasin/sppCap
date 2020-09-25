package cds.gen.xx.samplemgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleMgrService.SampleView")
public interface SampleView_ extends StructuredType<SampleView_> {
  String CDS_NAME = "xx.SampleMgrService.SampleView";

  ElementRef<String> detail_name();

  ElementRef<Long> header_id();

  ElementRef<String> header_cd();

  ElementRef<String> detail_cd();

  ElementRef<String> header_name();

  ElementRef<Long> detail_id();
}
