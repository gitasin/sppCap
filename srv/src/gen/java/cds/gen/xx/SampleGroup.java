package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Boolean;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Group")
public interface SampleGroup extends CdsData {
  String CD = "cd";

  String GROUP_ID = "group_id";

  String NAME = "name";

  String USE_FLAG = "use_flag";

  String getCd();

  void setCd(String cd);

  @CdsName(GROUP_ID)
  Long getGroupId();

  @CdsName(GROUP_ID)
  void setGroupId(Long groupId);

  String getName();

  void setName(String name);

  @CdsName(USE_FLAG)
  Boolean getUseFlag();

  @CdsName(USE_FLAG)
  void setUseFlag(Boolean useFlag);

  static SampleGroup create() {
    return Struct.create(SampleGroup.class);
  }
}
