package cds.gen.xx.samplegrpmgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleGrpMgrService.SampleGroups")
public interface SampleGroups extends CdsData {
  String CD = "cd";

  String GROUP_ID = "group_id";

  String NAME = "name";

  String getCd();

  void setCd(String cd);

  @CdsName(GROUP_ID)
  Long getGroupId();

  @CdsName(GROUP_ID)
  void setGroupId(Long groupId);

  String getName();

  void setName(String name);

  static SampleGroups create() {
    return Struct.create(SampleGroups.class);
  }
}
