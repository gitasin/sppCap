package cds.gen.samplemgrservice;

import com.sap.cds.ql.CdsName;
import java.lang.Class;
import java.lang.String;

@CdsName("SampleMgrService")
public interface SampleMgrService_ {
  String CDS_NAME = "SampleMgrService";

  Class<SampleDetails_> SAMPLE_DETAILS = SampleDetails_.class;

  Class<SampleHeaders_> SAMPLE_HEADERS = SampleHeaders_.class;
}
