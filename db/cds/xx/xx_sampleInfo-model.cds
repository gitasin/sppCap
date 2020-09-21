namespace xx;

entity Sample_Master {
  key master_id : Integer64;
  cd : String;
  name: String;
}


entity Sample_Detail {
  key detail_id : Integer64;
  master_id : Integer64;
  cd : String;
  name: String;
}