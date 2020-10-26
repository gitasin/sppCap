using { cm as timeZoneMgr } from '../../../../db/cds/cm/timeZoneMgr/CM_TIME_ZONE-model';

namespace cm;

service TimeZoneMgrService {

    entity Message as projection on timeZoneMgr.Time_Zone;

}