package cds.gen.samplemstmgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.ql.CdsName;
import java.lang.Integer;
import java.lang.String;

@CdsName("SampleMstMgrService.masterFunc")
public interface MasterFunc extends CdsData {
  String CD = "CD";

  String MASTER_ID = "MASTER_ID";

  String NAME = "NAME";

  @CdsName(CD)
  String getCd();

  @CdsName(CD)
  void setCd(String cd);

  @CdsName(MASTER_ID)
  Integer getMasterId();

  @CdsName(MASTER_ID)
  void setMasterId(Integer masterId);

  @CdsName(NAME)
  String getName();

  @CdsName(NAME)
  void setName(String name);
}
