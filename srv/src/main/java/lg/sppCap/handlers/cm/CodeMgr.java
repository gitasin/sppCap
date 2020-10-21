package lg.sppCap.handlers.cm;

import java.util.List;
import org.springframework.stereotype.Component;
import com.sap.cds.services.cds.CdsService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;
import java.time.Instant;

import cds.gen.cm.codemgrservice.*;
import cds.gen.cm.codemgrservice.CodeMasters_;

@Component
@ServiceName("cm.CodeMgrService")
public class CodeMgr implements EventHandler {

    @Before(event = CdsService.EVENT_CREATE, entity=CodeMasters_.CDS_NAME)
    public void beforeCreateCodeMasters(List<CodeMasters> codeMasters) {
        
        Instant current = Instant.now();

        for(CodeMasters codeMaster : codeMasters) {
            codeMaster.setSystemCreateDtm(current);
            codeMaster.setSystemUpdateDtm(current);
            codeMaster.setLocalCreateDtm(current);
            codeMaster.setLocalUpdateDtm(current);
            codeMaster.setUpdateUserId("Temp");
            codeMaster.setCreateUserId("Temp");
        }

    }

    @After(event = CdsService.EVENT_READ, entity = CodeMasters_.CDS_NAME)
    public void afterReadCodeMasters(List<CodeMasters> codeMasters) {
        for(CodeMasters codeMaster : codeMasters) {
            codeMaster.setGroupDescription(codeMaster.getGroupDescription() + " desc");
        }
    }

}