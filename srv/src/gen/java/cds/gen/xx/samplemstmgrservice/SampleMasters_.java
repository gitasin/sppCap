package cds.gen.xx.samplemstmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleMstMgrService.SampleMasters")
public interface SampleMasters_ extends StructuredType<SampleMasters_> {
  String CDS_NAME = "xx.SampleMstMgrService.SampleMasters";

  ElementRef<Long> master_id();

  ElementRef<String> cd();

  ElementRef<String> name();
}
