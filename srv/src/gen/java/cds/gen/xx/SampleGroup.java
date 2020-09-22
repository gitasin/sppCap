package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Group")
public interface SampleGroup extends CdsData {
  String CD = "cd";

  String GRP_ID = "grp_id";

  String NAME = "name";

  String getCd();

  void setCd(String cd);

  @CdsName(GRP_ID)
  Long getGrpId();

  @CdsName(GRP_ID)
  void setGrpId(Long grpId);

  String getName();

  void setName(String name);

  static SampleGroup create() {
    return Struct.create(SampleGroup.class);
  }
}
