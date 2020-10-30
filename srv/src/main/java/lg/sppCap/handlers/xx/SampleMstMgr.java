package lg.sppCap.handlers.xx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.sap.cds.reflect.CdsModel;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.cds.CdsCreateEventContext;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;
import com.sap.cds.services.persistence.PersistenceService;
import com.sap.cds.services.request.ParameterInfo;
import com.sap.cds.services.request.UserInfo;

@Component
@ServiceName("SampleMstMgrService")
public class SampleMstMgr implements EventHandler {

    @Autowired
    private PersistenceService db;

    @Autowired
    private JdbcTemplate jdbc;

    /*
     * @Before(event = "SampleMasters") public void beforeSampleMasters(EventContext
     * context) { String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')"; }
     * 
     * @On(event = "SampleMasters") public void onSampleMasters(EventContext
     * context) { String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')"; }
     * 
     * @After(event = "SampleMasters") public void afterSampleMasters(EventContext
     * context) { String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')"; }
     */



    @Before(event = "SelectProc")
    public void actionBeforeSelectProc(EventContext context) {

        ParameterInfo prams = context.getParameterInfo();
        UserInfo userInfo = context.getUserInfo();

        String v_sql = "CALL XX_SAMPLE_MASTER_SELECT_PROC(CD => ?,O_TABLE => ?)";

        //Map<Object, Map<String, Object>> products = new HashMap<>();

        //Object myResult = null;
        //context.put("result", myResult);
        //context.setCompleted();
        //context.setResult(context.getResult());
        //context.setResult(products.values());

        //SampleMasterProcType data = null;

        //return data;
    }

/*
    @On(event = "SelectProc")
    public void actionSelectProc(EventContext context) {

        ParameterInfo prams = context.getParameterInfo();
        UserInfo userInfo = context.getUserInfo();

        String v_sql = "CALL XX_SAMPLE_MASTER_SELECT_PROC(CD => ?,O_TABLE => ?)";

        Map<Object, Map<String, Object>> products = new HashMap<>();

        Object myResult = null;
        //context.put("result", myResult);
        context.setCompleted();
        //context.setResult(context.getResult());
        //context.setResult(products.values());

        //SampleMasterProcType data = null;

        //return data;
    }
*/



}