using { dp as partCategory } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CATEGORY-model';
using { dp as partClass } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CLASS-model';
using { dp as partCategoryClass } from '../../../../db/cds/dp/standardCommon/DP_SC_PART_CATEGORY_CLASS-model';
namespace dp;

service PartBasisService {

    entity ScPartCategory as projection on partCategory.Sc_Part_Category;
    entity ScPartClass as projection on partClass.Sc_Part_Class;
    entity ScPartCategoryClass as projection on partClass.Sc_Part_Category_Class;

    /* 간단한 Currency와 Currency Lang View 생성
    view PartCategoryClassListView as
    select 
        key c.tenant_id,
        key c.currency_code,
        c.effective_start_date,
        c.effective_end_date,
        c.use_yn,
        c.scale,
        c.extension_scale,
        l.language_code,
        l.currency_code_name,
        l.currency_code_desc,
        l.currency_prefix,
        l.currency_suffix,
        l.local_create_dtm
    from currency.Currency as c 
    left join currencyLng.Currency_Lng as l 
    on c.tenant_id = l.tenant_id and c.currency_code = l.currency_code
    ;
    */
}
