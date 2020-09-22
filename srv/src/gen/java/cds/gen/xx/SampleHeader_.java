package cds.gen.xx;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import com.sap.cds.ql.cqn.CqnPredicate;
import java.lang.Long;
import java.lang.String;
import java.util.function.Function;

@CdsName("xx.Sample_Header")
public interface SampleHeader_ extends StructuredType<SampleHeader_> {
  String CDS_NAME = "xx.Sample_Header";

  ElementRef<String> cd();

  ElementRef<Long> header_id();

  ElementRef<String> name();

  SampleDetail_ details();

  SampleDetail_ details(Function<SampleDetail_, CqnPredicate> filter);
}
