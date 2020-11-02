using { pg as vpSearchView } from '../../../../../db/cds/pg/vp/PG_VENDOR_POOL_SEARCH_VIEW-model';

namespace pg;
<<<<<<< HEAD

service MiItemMasterMgrService {
    entity vPSearchView as projection on vpSearchView.Vendor_Pool_Search_View;
=======
@path : '/pg.VpSearchService'
service VpSearchService {

    entity VPSearchView as projection on vpSearchView.Vendor_Pool_Search_View;

>>>>>>> b29e4687eabaf1138632d8d405354efba424ad8c
}
