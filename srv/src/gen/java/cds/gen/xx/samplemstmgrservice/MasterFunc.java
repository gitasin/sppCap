package cds.gen.xx.samplemstmgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleMstMgrService.MasterFunc")
public interface MasterFunc extends CdsData {
  String MASTER_ID = "master_id";

  String CD = "cd";

  String NAME = "name";

  @CdsName(MASTER_ID)
  Long getMasterId();

  @CdsName(MASTER_ID)
  void setMasterId(Long masterId);

  String getCd();

  void setCd(String cd);

  String getName();

  void setName(String name);

  static MasterFunc create() {
    return Struct.create(MasterFunc.class);
  }
}
