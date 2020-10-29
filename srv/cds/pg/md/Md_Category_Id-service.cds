using {pg as Group} from '../../../../db/cds/pg/md/PG_MD_CATEGORY_ID-model';

namespace pg;

service MdCategoryId {
    entity Md_Category_Id as projection on Group.Md_Category_Id;
}