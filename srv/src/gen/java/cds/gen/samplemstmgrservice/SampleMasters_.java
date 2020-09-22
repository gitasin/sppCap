package cds.gen.samplemstmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("SampleMstMgrService.SampleMasters")
public interface SampleMasters_ extends StructuredType<SampleMasters_> {
  String CDS_NAME = "SampleMstMgrService.SampleMasters";

  ElementRef<Long> master_id();

  ElementRef<String> cd();

  ElementRef<String> name();

  ElementRef<String> attr1();
}
