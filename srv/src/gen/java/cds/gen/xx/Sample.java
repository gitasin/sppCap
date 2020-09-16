package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample")
public interface Sample extends CdsData {
  String CD = "cd";

  String NAME = "name";

  String ID = "id";

  String getCd();

  void setCd(String cd);

  String getName();

  void setName(String name);

  Long getId();

  void setId(Long id);

  static Sample create() {
    return Struct.create(Sample.class);
  }
}
