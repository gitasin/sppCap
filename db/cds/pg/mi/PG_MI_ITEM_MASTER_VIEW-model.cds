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
namespace pg;

@cds.persistence.exists
entity Mi_Item_Master_View {
<<<<<<< HEAD
    key tenant_id : String;	
    key mi_item_code : String;	
    category_code : String;
=======
    key tenant_id : String;
    key   mi_item_code : String;
       category_code : String;
       use_flag : Boolean;
       description : String;
    key   language_code : String;
       category_name : String;
       local_create_date : DateTime;
       local_update_date : DateTime;
       create_user_id : String;
       update_user_id : String;
       system_create_date : DateTime;
       system_update_date : DateTime;
>>>>>>> b29e4687eabaf1138632d8d405354efba424ad8c
}