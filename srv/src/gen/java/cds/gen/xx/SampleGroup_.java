package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Group")
public interface SampleGroup_ extends StructuredType<SampleGroup_> {
  String CDS_NAME = "xx.Sample_Group";

  ElementRef<String> cd();

  ElementRef<Long> grp_id();

  ElementRef<String> name();
}
