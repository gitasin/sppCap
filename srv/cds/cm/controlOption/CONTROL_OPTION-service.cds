namespace cm;

using cm from '../../../../db/cds/cm/controlOption/CONTROL_OPTION_DTL-model';

@path: '/cm/control-option-management'
service ControlOptionManagementService {

    entity Master as projection on cm.CONTROL_OPTION_MST;
    entity Detail as projection on cm.CONTROL_OPTION_DTL;

}
