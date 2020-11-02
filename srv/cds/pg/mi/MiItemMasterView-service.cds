using { pg as MiItemMasterView } from '../../../../db/cds/pg/mi/PG_MI_ITEM_MASTER_VIEW-model';

namespace pg;
service MiItemMasterViewService {

    entity Mi_Item_Master_View as projection on MiItemMasterView.Mi_Item_Master_View;

}