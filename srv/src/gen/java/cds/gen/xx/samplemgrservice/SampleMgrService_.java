package cds.gen.xx.samplemgrservice;

import com.sap.cds.ql.CdsName;
import java.lang.Class;
import java.lang.String;

@CdsName("xx.SampleMgrService")
public interface SampleMgrService_ {
  String CDS_NAME = "xx.SampleMgrService";

  Class<SampleHeaders_> SAMPLE_HEADERS = SampleHeaders_.class;

  Class<SampleViewCondition_> SAMPLE_VIEW_CONDITION = SampleViewCondition_.class;

  Class<SampleDetails_> SAMPLE_DETAILS = SampleDetails_.class;

  Class<SampleMgrView_> SAMPLE_MGR_VIEW = SampleMgrView_.class;

  Class<SampleView_> SAMPLE_VIEW = SampleView_.class;
}
