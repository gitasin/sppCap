using {pg as Group} from '../../../../db/cds/pg/md/PG_MD_CATEGORY_ITEM-model';

namespace pg;

service MdCategoryItem {
    entity Md_Category_Item as projection on Group.Md_Category_Item;
}