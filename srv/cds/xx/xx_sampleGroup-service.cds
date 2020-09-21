using {xx} from '../../../db/cds/xx/xx_sampleGroup-model.cds';

service SampleGroupService {
    entity SampleHeader as projection on xx.Sample_Header;
    entity SampleLine as projection on xx.Sample_Line;
}