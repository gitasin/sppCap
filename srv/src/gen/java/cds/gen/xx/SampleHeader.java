package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;
import java.util.List;
import java.util.Map;

@CdsName("xx.Sample_Header")
public interface SampleHeader extends CdsData {
  String CD = "cd";

  String HEADER_ID = "header_id";

  String NAME = "name";

  String DETAILS = "details";

  String getCd();

  void setCd(String cd);

  @CdsName(HEADER_ID)
  Long getHeaderId();

  @CdsName(HEADER_ID)
  void setHeaderId(Long headerId);

  String getName();

  void setName(String name);

  List<SampleDetail> getDetails();

  void setDetails(List<? extends Map<String, ?>> details);

  static SampleHeader create() {
    return Struct.create(SampleHeader.class);
  }
}
