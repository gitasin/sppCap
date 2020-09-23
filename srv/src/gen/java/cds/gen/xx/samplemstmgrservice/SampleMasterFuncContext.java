package cds.gen.xx.samplemstmgrservice;

import com.sap.cds.ql.CdsName;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.EventName;
import java.lang.String;
import java.util.Collection;

@EventName("SampleMasterFunc")
public interface SampleMasterFuncContext extends EventContext {
  String CD = "CD";

  String CDS_NAME = "SampleMasterFunc";

  @CdsName(CD)
  String getCd();

  @CdsName(CD)
  void setCd(String cd);

  void setResult(Collection<MasterFunc> result);

  Collection<MasterFunc> getResult();

  static SampleMasterFuncContext create() {
    return EventContext.create(SampleMasterFuncContext.class, null);
  }
}
