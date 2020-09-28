using {xx as Header} from '../../../db/cds/xx/sampleMgr/XX_SAMPLE_HEADER-model';
using {xx as Detail} from '../../../db/cds/xx/sampleMgr/XX_SAMPLE_DETAIL-model';
using {xx as MgrView} from '../../../db/cds/xx/sampleMgr/XX_SAMPLE_MGR_VIEW-model';


namespace xx;
service SampleMgrService {
    entity SampleHeaders as projection on Header.Sample_Header;
    entity SampleDetails as projection on Detail.Sample_Detail;

    // DB Object로 생성된 View를 조회 하는 경우 (model-cds가 존재해야함)
    view SampleMgrView as select from MgrView.Sample_Mgr_View;

    // model-cds의 entity를 join 하여 간단한 view 생성
    view SampleView as select from Header.Sample_Header as h left join Detail.Sample_Detail as d on h.header_id = d.header_id {
        key h.header_id
       ,key h.cd as header_cd
       ,h.name as header_name
       ,d.detail_id
       ,d.cd as detail_cd
       ,d.name as detail_name
    };

    // parameter를 필수로 받는 view
    view SampleViewCondition (header_cd: String, detail_cd: String) as 
    select h.header_id
          ,h.cd as header_cd
          ,h.name as header_name
          ,key d.detail_id
          ,d.cd as detail_cd
          ,d.name as detail_name
    from Header.Sample_Header as h 
    left join Detail.Sample_Detail as d on h.header_id = d.header_id
    where h.cd = :header_cd
    and   d.cd = :detail_cd
    ;


}
