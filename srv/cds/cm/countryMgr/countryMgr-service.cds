using { cm as country } from '../../../../db/cds/cm/countryMgr/CM_COUNTRY-model';
using { cm as countryLng } from '../../../../db/cds/cm/countryMgr/CM_COUNTRY_LNG-model';
namespace cm;

service CountryMgrService {

    entity Currency as projection on country.Country;
    entity CurrencyLng as projection on countryLng.Country_Lng;

}
