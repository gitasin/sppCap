package cds.gen.cm;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.String;

@CdsName("cm.Code_Detail")
public interface CodeDetail extends CdsData {
  String CD = "cd";

  String NAME = "name";

  String getCd();

  void setCd(String cd);

  String getName();

  void setName(String name);

  static CodeDetail create() {
    return Struct.create(CodeDetail.class);
  }
}
