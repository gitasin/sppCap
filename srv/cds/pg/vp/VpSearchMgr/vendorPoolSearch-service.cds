using { pg as vpSearchView } from '../../../../../db/cds/pg/vp/PG_VENDOR_POOL_SEARCH_VIEW-model';

namespace pg;

service MiItemMasterMgrService {
    entity vPSearchView as projection on vpSearchView.Vendor_Pool_Search_View;
}
