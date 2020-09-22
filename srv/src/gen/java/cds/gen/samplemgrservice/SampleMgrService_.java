package cds.gen.samplemgrservice;

import com.sap.cds.ql.CdsName;
import java.lang.Class;
import java.lang.String;

@CdsName("SampleMgrService")
public interface SampleMgrService_ {
  String CDS_NAME = "SampleMgrService";

  Class<SampleHeaders_> SAMPLE_HEADERS = SampleHeaders_.class;

  Class<SampleDetail_> SAMPLE_DETAIL = SampleDetail_.class;
}
