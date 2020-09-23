using {xx as Group} from '../../../db/cds/xx/sampleGrpMgr/XX_SAMPLE_GROUP-model';

namespace xx;
service SampleGrpMgrService {
    entity SampleGroups as projection on Group.Sample_Group;
}
