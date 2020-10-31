
using { pg as MiItemMasterMgr } from '../../../../db/cds/pg/mi/PG_MI_ITEM_MASTER-model';
using { pg as MiItemMasterView } from '../../../../db/cds/pg/mi/PG_MI_ITEM_MASTER_VIEW-model';

namespace pg;
service ControlOptionMgrService {

    entity Mi_Item_Master as projection on MiItemMasterMgr.Mi_Item_Master;
    entity Mi_Item_Category as projection on MiItemMasterMgr.Mi_Item_Category;
    entity Mi_Item_Master_View as projection on MiItemMasterView.Mi_Item_Master_View;

}