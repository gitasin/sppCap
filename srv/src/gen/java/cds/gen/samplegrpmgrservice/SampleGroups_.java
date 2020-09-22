package cds.gen.samplegrpmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("SampleGrpMgrService.SampleGroups")
public interface SampleGroups_ extends StructuredType<SampleGroups_> {
  String CDS_NAME = "SampleGrpMgrService.SampleGroups";

  ElementRef<String> cd();

  ElementRef<Long> group_id();

  ElementRef<String> name();
}
