using { dp as moldSpec } from '../../../../db/cds/dp/moldMgt/DP_MOLD_SPEC-model';

namespace dp;
@path : '/dp.DetailSpecEntryService'
service DetailSpecEntryService {

    entity MoldSpec as projection on moldSpec.Mold_Spec;
}
