package cds.gen.sampleservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("SampleService.Samples")
public interface Samples_ extends StructuredType<Samples_> {
  String CDS_NAME = "SampleService.Samples";

  ElementRef<String> cd();

  ElementRef<String> name();

  ElementRef<Long> id();
}
