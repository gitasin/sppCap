package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Mgr_View")
public interface SampleMgrView_ extends StructuredType<SampleMgrView_> {
  String CDS_NAME = "xx.Sample_Mgr_View";

  ElementRef<String> detail_name();

  ElementRef<Long> header_id();

  ElementRef<String> header_cd();

  ElementRef<String> detail_cd();

  ElementRef<Long> detail_id();

  ElementRef<String> header_name();
}
