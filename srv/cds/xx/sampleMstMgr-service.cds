using {xx as Master} from '../../../db/cds/xx/sampleMstMgr/XX_SAMPLE_MASTER-model';

service SampleMstMgrService {
    entity SampleMasters as projection on Master.Sample_Master;

    type masterFunc{
        MASTER_ID: Integer;
        CD: String;
        NAME: String;
    }

    action SampleMasterFunc (CD: String) returns array of masterFunc;

}