using {xx} from '../../../db/cds/xx/xx_sampleInfo-model';

service SampleInfoService {
    entity SampleMaster as projection on xx.Sample_Master;
    entity SampleDetail as projection on xx.Sample_Detail;
}