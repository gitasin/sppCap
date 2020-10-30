using { cm as msgMgr } from '../../../../db/cds/cm/msgMgr/CM_MESSAGE-model';

namespace cm;

service MsgMgrService {

    entity Message as projection on msgMgr.Message;

}