using {pg as Group} from '../../../db/cds/pg/mi/PG_MI_ITEM_MASTER-model';

namespace pg;
service MiItemMasterService {
    entity MiItemMaster as projection on Group.Mi_Item_Master;
}