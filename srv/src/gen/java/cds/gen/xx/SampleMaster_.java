package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Master")
public interface SampleMaster_ extends StructuredType<SampleMaster_> {
  String CDS_NAME = "xx.Sample_Master";

  ElementRef<Long> master_id();

  ElementRef<String> cd();

  ElementRef<String> name();

  ElementRef<String> attr1();
}
