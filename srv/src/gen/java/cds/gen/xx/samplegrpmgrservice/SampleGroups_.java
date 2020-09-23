package cds.gen.xx.samplegrpmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Boolean;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleGrpMgrService.SampleGroups")
public interface SampleGroups_ extends StructuredType<SampleGroups_> {
  String CDS_NAME = "xx.SampleGrpMgrService.SampleGroups";

  ElementRef<String> cd();

  ElementRef<Long> group_id();

  ElementRef<String> name();

  ElementRef<Boolean> use_flag();
}
