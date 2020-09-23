package lg.sppCap.handlers.xx;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.sap.cds.Result;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.CdsService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;

import cds.gen.xx.samplemgrservice.*;


@Component
@ServiceName("SampleMgrService")
public class SampleMgr implements EventHandler {

    //  @Before, @On, @After
    //@After(event = CdsService.EVENT_READ, entity = "SampleInfoService.SampleMaster")
    //public void afterReadSampleMaster(CdsReadEventContext context) {
    @After(event = CdsService.EVENT_READ, entity = SampleHeaders_.CDS_NAME)
    public void afterReadSampleMaster(List<SampleHeaders> sampleHeaders) {
        
        for(SampleHeaders sampleHeader : sampleHeaders){
            sampleHeader.setName("Name : " + sampleHeader.getName());
        }

        //Result v_result = context.getResult();

        //System.out.println(v_result.rowCount());

        //System.out.println(v_result.toString());
        //System.out.println(v_result.toJson().toString());

        //CqnSelect select = context.getCqn();
        //context.setResult(Collections.emptyList());
        //Result result = context.getResult();
        
        //context.setResult(products.values());


    }


}