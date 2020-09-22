package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Master")
public interface SampleMaster extends CdsData {
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

  static SampleMaster create() {
    return Struct.create(SampleMaster.class);
  }
}
