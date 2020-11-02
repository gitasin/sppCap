package lg.sppCap.handlers.xx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.sap.cds.reflect.CdsModel;
import com.sap.cds.services.EventContext;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;
import com.sap.cds.services.persistence.PersistenceService;

@Component
@ServiceName("SampleMstMgrService")
public class SampleMstMgr implements EventHandler {

	@Autowired
    private PersistenceService db;
    
    @Autowired
    private JdbcTemplate jdbc;

    @Before(event = "SampleMasters")
    public void beforeSampleMasters(EventContext context) {
        String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')";
    }

    @On(event = "SampleMasters")
    public void onSampleMasters(EventContext context) {
        String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')";
    }

    @After(event = "SampleMasters")
    public void afterSampleMasters(EventContext context) {
        String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')";
    }

}