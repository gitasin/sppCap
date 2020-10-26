using {pg as Group1} from '../../../../db/cds/pg/md/PG_MD_CATEGORY_ID-model';
using {pg as Group2} from '../../../../db/cds/pg/md/PG_MD_CATEGORY_ITEM-model';

namespace pg;

// VP별 Category 설정
service MdCategoryId {
    entity Md_Category_Id as projection on Group1.Md_Category_Id;
}


// VP별 Category의 관리항목
service MdCategoryItem {
    entity Md_Category_Item as projection on Group2.Md_Category_Item;
}
