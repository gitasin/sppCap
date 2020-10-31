
using { pg as MiItemMasterMgr } from '../../../../db/cds/pg/mi/PG_MI_ITEM_MASTER-model';

namespace pg;
service MiItemMasterMgrService {

    entity Mi_Item_Master as projection on MiItemMasterMgr.Mi_Item_Master;
    entity Mi_Item_Category as projection on MiItemMasterMgr.Mi_Item_Category;

}