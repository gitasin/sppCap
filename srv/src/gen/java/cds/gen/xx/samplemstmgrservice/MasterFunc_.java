package cds.gen.xx.samplemstmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleMstMgrService.MasterFunc")
public interface MasterFunc_ extends StructuredType<MasterFunc_> {
  String CDS_NAME = "xx.SampleMstMgrService.MasterFunc";

  ElementRef<Long> master_id();

  ElementRef<String> cd();

  ElementRef<String> name();
}
