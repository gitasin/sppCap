using {xx as Master} from '../../../db/cds/xx/sampleMstMgr/XX_SAMPLE_MASTER-model';
using {xx as MasterF} from '../../../db/cds/xx/sampleMstMgr/XX_SAMPLE_MASTER_FUNC-model';

namespace xx;
service SampleMstMgrService {
    entity SampleMasters as projection on Master.Sample_Master;

    /*
    type masterFunc{
        MASTER_ID: Integer;
        CD: String;
        NAME: String;
    }

    action SampleMasterFunc (CD: String) returns array of masterFunc;
    */

    /*
    @cds.persistence.exists
    entity SAMPLE_MASTER_FUNC (CD : String) {
        key cd : String;
            cd_nm : String;
    }

    view SampleMasterFunc2(CD: String) as select from SAMPLE_MASTER_FUNC(CD: :CD);
    */


    // DB Object로 생성된 function을 model-cds로 entity를 만들고 사용하는 경우
    entity MasterFunc(CD : String) as select from MasterF.Sample_Master_Func(CD: :CD);

}