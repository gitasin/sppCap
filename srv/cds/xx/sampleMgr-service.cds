using {xx as Header} from '../../../db/cds/xx/sampleMgr/XX_SAMPLE_HEADER-model';
using {xx as Detail} from '../../../db/cds/xx/sampleMgr/XX_SAMPLE_DETAIL-model';

service SampleMgrService {
    entity SampleHeaders as projection on Header.Sample_Header;
    entity SampleDetails as projection on Detail.Sample_Detail;
}
