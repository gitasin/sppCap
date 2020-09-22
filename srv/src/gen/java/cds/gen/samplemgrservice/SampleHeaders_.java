package cds.gen.samplemgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Long;
import java.lang.String;
import java.util.function.Function;

@CdsName("SampleMgrService.SampleHeaders")
public interface SampleHeaders_ extends StructuredType<SampleHeaders_> {
  String CDS_NAME = "SampleMgrService.SampleHeaders";

  ElementRef<String> cd();

  ElementRef<Long> header_id();

  ElementRef<String> name();

  SampleDetails_ details();

  SampleDetails_ details(Function<SampleDetails_, CqnPredicate> filter);
}
