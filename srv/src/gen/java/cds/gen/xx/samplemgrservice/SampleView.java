package cds.gen.xx.samplemgrservice;

import com.sap.cds.CdsData;
import com.sap.cds.Struct;
import com.sap.cds.ql.CdsName;
import java.lang.Long;
import java.lang.String;

@CdsName("xx.SampleMgrService.SampleView")
public interface SampleView extends CdsData {
  String DETAIL_NAME = "detail_name";

  String HEADER_ID = "header_id";

  String HEADER_CD = "header_cd";

  String DETAIL_CD = "detail_cd";

  String HEADER_NAME = "header_name";

  String DETAIL_ID = "detail_id";

  @CdsName(DETAIL_NAME)
  String getDetailName();

  @CdsName(DETAIL_NAME)
  void setDetailName(String detailName);

  @CdsName(HEADER_ID)
  Long getHeaderId();

  @CdsName(HEADER_ID)
  void setHeaderId(Long headerId);

  @CdsName(HEADER_CD)
  String getHeaderCd();

  @CdsName(HEADER_CD)
  void setHeaderCd(String headerCd);

  @CdsName(DETAIL_CD)
  String getDetailCd();

  @CdsName(DETAIL_CD)
  void setDetailCd(String detailCd);

  @CdsName(HEADER_NAME)
  String getHeaderName();

  @CdsName(HEADER_NAME)
  void setHeaderName(String headerName);

  @CdsName(DETAIL_ID)
  Long getDetailId();

  @CdsName(DETAIL_ID)
  void setDetailId(Long detailId);

  static SampleView create() {
    return Struct.create(SampleView.class);
  }
}
