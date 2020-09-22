package cds.gen.xx;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.Sample_Detail")
public interface SampleDetail extends CdsData {
  String CD = "cd";

  String HEADER_ID = "header_id";

  String NAME = "name";

  String DETAIL_ID = "detail_id";

  String getCd();

  void setCd(String cd);

  @CdsName(HEADER_ID)
  Long getHeaderId();

  @CdsName(HEADER_ID)
  void setHeaderId(Long headerId);

  String getName();

  void setName(String name);

  @CdsName(DETAIL_ID)
  Long getDetailId();

  @CdsName(DETAIL_ID)
  void setDetailId(Long detailId);

  static SampleDetail create() {
    return Struct.create(SampleDetail.class);
  }
}
