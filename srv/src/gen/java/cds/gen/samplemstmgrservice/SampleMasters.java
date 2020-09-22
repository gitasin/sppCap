package cds.gen.samplemstmgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("SampleMstMgrService.SampleMasters")
public interface SampleMasters extends CdsData {
  String MASTER_ID = "master_id";

  String CD = "cd";

  String NAME = "name";

  String ATTR1 = "attr1";

  @CdsName(MASTER_ID)
  Long getMasterId();

  @CdsName(MASTER_ID)
  void setMasterId(Long masterId);

  String getCd();

  void setCd(String cd);

  String getName();

  void setName(String name);

  String getAttr1();

  void setAttr1(String attr1);

  static SampleMasters create() {
    return Struct.create(SampleMasters.class);
  }
}
