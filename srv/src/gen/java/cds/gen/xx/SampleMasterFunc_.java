package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Master_Func")
public interface SampleMasterFunc_ extends StructuredType<SampleMasterFunc_> {
  String CDS_NAME = "xx.Sample_Master_Func";

  ElementRef<Long> master_id();

  ElementRef<String> cd();

  ElementRef<String> name();
}
