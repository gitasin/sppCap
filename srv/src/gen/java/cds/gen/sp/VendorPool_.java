package cds.gen.sp;

import com.sap.cds.ql.CdsName;
import com.sap.cds.ql.ElementRef;
import com.sap.cds.ql.StructuredType;
import java.lang.Long;
import java.lang.String;

@CdsName("sp.Vendor_Pool")
public interface VendorPool_ extends StructuredType<VendorPool_> {
  String CDS_NAME = "sp.Vendor_Pool";

  ElementRef<String> tenant_id();

  ElementRef<String> vendor_pool_class_code();

  ElementRef<String> high_classification_code();

  ElementRef<String> supplier_group_name();

  ElementRef<String> evaluation_operation_unit_code();

  ElementRef<String> organization_name();

  ElementRef<Long> leveling_seq_no();

  ElementRef<Long> sort_order_no();

  ElementRef<String> group_detail_desc();

  ElementRef<String> use_flag();
}
