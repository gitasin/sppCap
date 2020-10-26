using { cm as hrEmployeeMgr } from '../../../../db/cds/cm/hrEmployeeMgr/CM_HR_EMPLOYEE-model';

namespace cm;

service HrEmployeeMgrService {

    entity HrEmployee as projection on hrEmployeeMgr.Hr_Employee; 

}