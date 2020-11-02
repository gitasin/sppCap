using { pg as vpSearchView } from '../../../../../db/cds/pg/vp/PG_VENDOR_POOL_SEARCH_VIEW-model';

namespace pg;
@path : '/pg.VpSearchService'
service VpSearchService {

    entity VPSearchView as projection on vpSearchView.Vendor_Pool_Search_View;

}
