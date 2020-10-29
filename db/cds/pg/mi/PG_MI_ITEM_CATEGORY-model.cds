namespace pg;	
<<<<<<< HEAD
using {User} from '@sap/cds/common';	
	
entity Mi_Item_Category {	
  key tenant_id : String(5)  not null  @title: '테넌트ID';	
  key category_code : String(40)  not null  @title: 'Category Code';	
    parent_category_code : String(40)    @title: '상위 Category Code';	
    description : String(300)    @title: '설명';	
    local_create_date : DateTime  ;	
    local_update_date : DateTime  ;	
    create_user_id : User not null @cds.on.insert: $user  ;	
    update_user_id : User not null @cds.on.insert: $user @cds.on.update: $user @title: '변경사용자ID'  ;	
    system_create_date : DateTime not null @cds.on.insert: $now @title: '시스템등록시간'  ;	
    system_update_date : DateTime not null @cds.on.insert: $now  @cds.on.update: $now @title: '시스템수정시간'  ;
=======
	
entity Mi_Item_Category {	
  key tenant_id : String(5)  not null;	
  key category_code : String(40)  not null;	
    parent_category_code : String(40)  ;	
    description : String(300)  ;	
    local_create_date : DateTime  not null;	
    local_update_date : DateTime  not null;	
    create_user_id : String(50)  not null;	
    update_user_id : String(50)  not null;	
    system_create_date : DateTime  not null;	
    system_update_date : DateTime  not null;	
>>>>>>> b95afea2e1d8fa436b7cdaa3d2b04cd64332d678
}	