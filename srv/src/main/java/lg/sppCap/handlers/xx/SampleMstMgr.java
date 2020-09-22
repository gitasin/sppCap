package lg.sppCap.handlers.xx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.sap.cds.feature.config.pojo.CdsProperties.DataSource;
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
    private JdbcTemplate jdbc;

    @On(event = "SampleMasterFunc")
    public void onSampleMasterFuncAction(EventContext context) {        

        String v_sql = "SELECT * FROM XX_SAMPLE_MASTER_FUNC('?'')";
        //jdbc.qeuryFro
        //String v_
        //jdbc.queryForObject(v_sql,
        //    (rs, rowNum) -> new Person(rs.getLong("id"), rs.getString("name")),
        //id);

    }

}