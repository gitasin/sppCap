using {xx.Sample_Header as Header} from './XX_SAMPLE_HEADER-model';
namespace xx;

@Comment : 'Sample용 테이블'
entity Sample_Detail {       // comment
  @Comment : 'detail_id'
  key detail_id : Integer64;
  @Comment : 'header_id'
  header_id : Integer64;
  @Comment : 'cd'
  cd : String;
  @Comment : 'name'
  name: String;
}
