using { dp as scYyyyPlanActual } from '../../../../db/cds/dp/standardCommon/DP_SC_YYYY_PLAN_ACTUAL-model';
using { dp as scPlanActualSum } from '../../../../db/cds/dp/standardCommon/DP_SC_PLAN_ACTUAL_SUM-model';
//using { dp as planActualSumHis } from '../../../../db/cds/dp/standardCommon/DP_SC_PLAN_ACTUAL_SUM_HIS-model';
namespace dp;
@path : '/dp.ScPlanActualService'
service ScPlanActualService {

    entity ScYyyyPlanActual as projection on scYyyyPlanActual.Sc_Yyyy_Plan_Actual;
    entity ScPlanActualSum as projection on scPlanActualSum.Sc_Plan_Actual_Sum;
//    entity ScPlanActualSumHis as projection on scPlanActualSumHis.Sc_Plan_Actual_Sum_His;

    // 표준화공용화 계획 View
    view scPlanView as
    select 
        key sc.tenent_id,
        key sc.operation_code,
        key sc.category_code,
        key sc.sc_type,
        key sc.yyyy,
        yy.progress_status,
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
    join scYyyyPlanActual.Sc_Yyyy_Plan_Actual as yy 
    on sc.tenent_id = yy.tenent_id and sc.company_code = yy.company_code and sc.operation_code = yy.operation_code
     and sc.yyyy = yy.yyyy
    ;

}