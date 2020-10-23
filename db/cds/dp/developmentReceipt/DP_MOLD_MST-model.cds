namespace dp;

using { User } from '@sap/cds/common';

entity Mold_Mst {
    
	key tenent_id :               String(4)	 not null  @title:	'테넌트ID (LGE : 2000)';
	affiliate_code :              String(4)  not null  @title:	'관계사 지사코드';
	key org_code :                String(3)	 not null  @title:	'사업부코드';
	item_id :                     Integer64	 not null  @title:	'도번 id';
	part_no :                     String(50) not null  @title:	'품번(도번)명';
	item_seq :                    Integer64	 not null  @title:	'차수 ( 1호 금형, 2호 금형.....)';
	description :                 String(200)		   @title:	'품명';
	model :                       String(50)		   @title:	'모델';
	assets_no :                   String(30)		   @title:	'자산번호';
	old_assets_no :               String(45)	       @title:	'이전자산번호';
	item_type :                   String(10)	       @title:	'금형구분 : pd / md / rub /...(imdm_code 테이블에서 관리함)';
	prod_type :                   String(30)           @title:	'제작 구분 ( n : 신작, r : 노후대체,k : 저장품) / [b:백업,f:fdm,m:mock-up,n:신작,s:간이금형]';
	offline_bid_flag :            String(1)	           @title:	'공개입찰여부';
	e_d_type :                    String(1)		       @title:	'수출/내수 구분 ( e: 수출, d: 내수 )';
	first_prod_date :             String(8)		       @title:	'초품일 ( 견적시 : d+몇일 )';
	complete_date :               String(8)		       @title:	'제작 완료일 ( 견적시 : d + 몇일 )';
	budget_report_no :            String(20)	       @title:	'집행품의번호';
	budget_report_date :          String(8)		       @title:	'집행품의완료일';
	budget_amount :               Decimal	           @title:	'gbms 가용예산금액';
	currency :                    String(3)	           @title:	'통화코드';
	target_amount :               Decimal		       @title:	'목표가(tobe - 집행가)';
	estimate_end_date :           String(10)		   @title:	'견적요청 완료일(due date)';
	item_update_flag :            String(1)		       @title:	'item수정여부(개발의뢰접수여부)';
	import_flag :                 String(1)		       @title:	'y:도입,n:내수';
	costtable_flag :              String(1)		       @title:	'costtable사용여부';
	estimate_report_no :          String(20)		   @title:	'견적 요청 품의 번호';
	estimate_report_date :        String(8)	           @title:	'견적 품의완료일( = 업체에 견적요청일 )';
	v_select_cancel_report_no :   String(20)           @title:	'업체선정 취소 품의 번호';
	v_select_cancel_report_date : String(8)            @title:	'업체선정취소 품의 최종승인일자';
	v_select_cancel_reason :      String(200)	       @title:	'업체선정취소 사유';
	v_select_remarks :            String(1000)		   @title:	'업체선정비고';
	vend_select_report_no :       String(20)		   @title:	'견적 업체 선정표 품의 번호';
	vend_select_report_date :     String(8)		       @title:	'발주품의 최종승인일';
	confirm_amount :              Decimal			   @title:	'견적완료금액';
	order_vendor_id :             Integer64			   @title:	'발주처(제작업체) id';
	order_amount :                Decimal		       @title:	'발주금액';
	order_nego_status :           String(1)		       @title:	'발주금액 nego status(임시저장:c, lge 금액제시:l, 업체 금액제시:v, 업체합의 :a, 발주:o)';
	order_report_no :             String(20)		   @title:	'발주 품의 번호';
	order_report_date :           String(8)		       @title:	'발주 품의완료일( = 업체에 제작요청일 )';
	order_no :                    String(15)	       @title:	'발주서 no';
	order_concurrent_yn :         String(1)		       @title:	'동시발주 유무(y:동시발주, n(or null):요청발주)';
	invest_cost_type :            String(1)		       @title:	'투자/경비 구분 ( 투자:i, 경비:c )';
	project_code :                String(13)	       @title:	'project code';
	invest_code :                 String(12)	       @title:	'투자코드';
	invest_seq :                  String(3)	           @title:	'투자 항번';
	exec_seq :                    String(3)	           @title:	'집행 항번';
	order_seq :                   String(2)	           @title:	'발주 항번';
    
    local_create_dtm: DateTime not null @title: '로컬등록시간';
    local_update_dtm: DateTime not null @title: '로컬수정시간';
    create_user_id: User not null @cds.on.insert: $user @title: '등록사용자ID';
    update_user_id: User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID';
    system_create_dtm: DateTime not null @cds.on.insert: $now @title: '시스템등록시간';
    system_update_dtm: DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간';

}