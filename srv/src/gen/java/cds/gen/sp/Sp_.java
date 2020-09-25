package cds.gen.sp;

import com.sap.cds.ql.CdsName;
import java.lang.Class;
import java.lang.String;

@CdsName("sp")
public interface Sp_ {
  String CDS_NAME = "sp";

  Class<VendorPool_> VENDOR_POOL = VendorPool_.class;

  Class<VendorPoolOld_> VENDOR_POOL_OLD = VendorPoolOld_.class;
}
