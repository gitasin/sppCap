package cds.gen.samplemgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;
import java.util.List;
import java.util.Map;

@CdsName("SampleMgrService.SampleHeaders")
public interface SampleHeaders extends CdsData {
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

  List<SampleDetails> getDetails();

  void setDetails(List<? extends Map<String, ?>> details);

  static SampleHeaders create() {
    return Struct.create(SampleHeaders.class);
  }
}
