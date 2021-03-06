/************************************************
  1. namespace
  - 모듈코드 소문자로 작성
  - 소모듈 존재시 대모듈.소모듈 로 작성
  2. entity
  - 대문자로 작성
  - 테이블명 생성을 고려하여 '_' 추가
  3. 컬럼(속성)
  - 소문자로 작성
  4. .hdbview, .hdbfunction 등으로 이미 생성된 DB Object 사용시
  entity 위에 @cds.persistence.exists 명시
*************************************************/
namespace dp;
using { User } from '@sap/cds/common';
using util from '../../../util/util-model';
using {dp.Dc_Part_List as Part_List} from './DP_DC_PART_LIST-model';

entity Dc_Part_List {
    key tenant_id: String(5) not null @title: '테넌트ID';
    key model_code: String(50) not null @title: '모델코드';
    key item_number: String(50) not null @title: '품목번호';
    operation_type: String(200) @title: '구매운영조직유형';
    operation_code: String(200) @title: '구매운영조직코드';
    organization_id: Integer @title: 'ORGANIZATION ID';
    item_id: Integer @title: '품목ID';
    item_name: String(200) @title: '품목명';
    item_desc: String(1000) @title: '품목설명';
    item_type: String(10) @title: '품목TYPE';
    quantity: Integer @title: '소요량';
    uom_code: String(10) @title: 'UOM코드';
    new_old_flag: String(1) @title: 'NEW(N)/OLD(O) 구분';
    quality_approve_flag: Boolean @title: '부품인정여부';
    po_price_exist_flag: Boolean @title: '단가유무';
    currency_code: String(5) @title: '통화코드';
    purchase_empno: String(20) @title: '구매담당자사번';
    cmdt_code: String(10) @title: 'COMMODITY CODE';
    maker_code: String(10) @title: 'MAKER CODE';
    vendor_id: Integer @title: 'VENDOR ID';
    vendor_site_code: String(10) @title: 'VENDOR SITE CODE';
    source_type: String(1) @title: 'I(Import)/L(Local)/D(Domestic)';
    bom_type: String(1) @title: 'Bom Type(MBOM/EBOM 구분)';
}

  extend Dc_Part_List with util.Managed;