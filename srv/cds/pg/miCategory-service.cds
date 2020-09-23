using {pg as Group} from '../../../db/cds/pg/mi/PG_MI_ITEM_CATEGORY-module';

namespace pgxx;
service MiCategoryService {
    entity MiCategory as projection on Group.Mi_Item_Category;
}