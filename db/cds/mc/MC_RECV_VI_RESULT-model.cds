namespace mc;

entity Recv_VI_Result {
  key  subsdr_cd : String(8);
  key  au_cd : String(3);
  key  part_no : String(40);
  key  txn_date : Date;
  key  splyr_site_cd : String(15);
  key  mkt_cd : String(10);
   ln_type_cd : String(10);
   po_type_cd : String(10);
   smpl_flag : Boolean;
   recv_type_cd : String(10);
   vmi_flag : Boolean;
   tnttv_unit_price_flag : Boolean;
   txn_currency_cd    : String(3);
   recv_unit_price     : Decimal;
   txn_yyyymm : String(6);
   currency_cnvt_date : Date;
   item_type_cd : String(10);
   inv_org_cd : String(10);
   maker_cd : String(40);
   recv_qty : Date;
   recv_amt : Decimal;
   tlc_recv_amt : Decimal;
   krw_recv_amt : Decimal;
   usd_recv_amt : Decimal;
   base_unit_price : Decimal;
   base_currency_cd : String(3);
   base_tlc_xrate : Decimal;
   base_txn_currency_tlc_xrate : Decimal;
   rslt_tlc_xrate : Decimal;
   tlc_base_amt : Decimal;
   krw_base_amt  : Decimal;
   usd_base_amt : Decimal;
   tlc_unit_price_chg_amt : Decimal;
   krw_unit_price_chg_amt : Decimal;
   usd_unit_price_chg_amt : Decimal;
   tlc_xrate_diff_amt : Decimal;
   krw_xrate_diff_amt : Decimal;
   usd_xrate_diff_amt : Decimal;
   krw_consld_xrate_diff_amt : Decimal;
   usd_consld_xrate_diff_amt : Decimal;
   creation_date : Date;
   creation_usr_id : String(30);
   last_upd_date : Date;
   last_upd_usr_id : String(30);
   test : String(10);
}
