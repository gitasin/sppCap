//using { dp as yyyyPlanActual } from '../../../../db/cds/dp/standardCommon/DP_SC_YYYY_PLAN_ACTUAL-model';
using { dp as planActualSum } from '../../../../db/cds/dp/standardCommon/DP_SC_PLAN_ACTUAL_SUM-model';
//using { dp as planActualSumHis } from '../../../../db/cds/dp/standardCommon/DP_SC_PLAN_ACTUAL_SUM_HIS-model';
namespace dp;
@path : '/dp.ScPlanActualService'
service ScPlanActualService {

//   entity YyyyPlanActual as projection on yyyyPlanActual.Yyyy_Plan_Actual;
    entity ScPlanActualSum as projection on scPlanActualSum.Sc_Plan_Actual_Sum;
//    entity ScPlanActualSumHis as projection on scPlanActualSumHis.Sc_Plan_Actual_Sum_His;

    // 간단한 Currency와 Currency Lang View 생성
    view CurrencyView as
    select 
        key sc.operation_code,
        key sc.category_code,
        key sc.sc_type,
        key sc.yyyy,
        sc.progress_status,
        sc.jan,
        sc.feb,
        sc.mar,
        sc.apr,
        sc.may,
        sc.jun,
        sc.jul,
        sc.aug,
        sc.sep,
        sc.oct,
        sc.nov,
        sc.dec
    from scPlanActualSum.Sc_Plan_Actual_Sum as sc
//    join yyyyPlanActual.Yyyy_Plan_Actual as yy 
//    on sc.tenant_id = yy.tenant_id and sc.operation_code = yy.operation_code and sc.yyyy = yy.yyyy and sc.sc_tpye = yy.sc_type
    ;

}