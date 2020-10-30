using { dp as partCategory } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CATEGORY-model';
using { dp as partClass } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CLASS-model';
using { dp as partCategoryClass } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CATEGORY_CLASS-model';

namespace dp;
@path : '/dp.PartBasisService'
service PartBasisService {

    entity ScPartCategory as projection on partCategory.Sc_Part_Category;
    entity ScPartClass as projection on partClass.Sc_Part_Class;
    entity ScPartCategoryClass as projection on partClass.Sc_Part_Category_Class;

    /* 간단 View */
    view PartCategoryListView as
    select 
        key ca.operation_code,
        key ca.category_code,
        ca.parent_category_code,
        ca.seq,
        ca.category_name,
        ca.desc,
        ca.status_code
    from partCategory.Sc_Part_Category as ca
    ;

}
