using {pg.Mi_Item_Category as Category} from './PG_MI_ITEM_CATEGORY-model';
namespace pg;

entity Mi_Item_Master {
  key mi_item_code : String;
   mi_item_name : String;
   currency : String;
   uom : String;
   exchange : String;
   terms : String;
   sourcing_group : String;
   category_code : String;
   exchange_uom : String;
   manage_period : String;
   use           : Boolean;
  //details: Association to many Category on details.category_code = category_code;
}