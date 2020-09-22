using {xx as Master} from '../../../db/cds/xx/sampleMstMgr/XX_SAMPLE_MASTER-model';

service SampleMstMgrService {
    entity SampleMasters as projection on Master.Sample_Master;

    action SampleMasterFunc (CD: String) returns array of SampleMasters;

}