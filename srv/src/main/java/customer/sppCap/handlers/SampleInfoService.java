package customer.sppCap.handlers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.sap.cds.Result;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.CdsService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;

import cds.gen.sampleinfoservice.SampleMaster_;
import cds.gen.sampleinfoservice.SampleMaster;;

@Component
@ServiceName("SampleInfoService")
public class SampleInfoService implements EventHandler {

    //  @Before, @On, @After
    //@After(event = CdsService.EVENT_READ, entity = "SampleInfoService.SampleMaster")
    //public void afterReadSampleMaster(CdsReadEventContext context) {
    @After(event = CdsService.EVENT_READ, entity = SampleMaster_.CDS_NAME)
    public void afterReadSampleMaster(List<SampleMaster> sampleMasters) {
        
        for(SampleMaster sampleMaster : sampleMasters){
            sampleMaster.setName("Name : " + sampleMaster.getName());
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