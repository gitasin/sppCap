namespace xx;

entity Sample_Header {
  key header_id : Integer64;
  cd : String;
  name: String;
  attr1: String;
}


entity Sample_Line {
  key line_id : Integer64;
  header_id : Integer64;
  cd : String;
  name: String;
}