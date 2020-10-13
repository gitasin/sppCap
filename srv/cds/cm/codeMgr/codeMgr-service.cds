
using { cm as codeMgr } from '../../../../db/cds/cm/codeMgr/CM_CODE_LNG-model';

service CodeMgrService {

    entity CodeMasters as projection on codeMgr.Code_Mst;
    entity CodeDetails as projection on codeMgr.Code_Dtl;
    entity CodeLanguages as projection on codeMgr.Code_Lng;

}
