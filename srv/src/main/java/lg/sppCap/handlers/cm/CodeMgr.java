package lg.sppCap.handlers.cm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.sap.cds.services.cds.CdsService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.Before;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.ServiceName;

import java.time.Instant;

import cds.gen.cm.codemgrservice.CodeDetails_;
import cds.gen.cm.codemgrservice.CodeLanguages_;
import cds.gen.cm.codemgrservice.*;
import cds.gen.cm.codemgrservice.CodeMasters_;

@Component
@ServiceName("cm.CodeMgrService")
public class CodeMgr implements EventHandler {

    @Autowired
    private JdbcTemplate jdbc;

    // Code Master
    
    @Before(event = CdsService.EVENT_CREATE, entity=CodeMasters_.CDS_NAME)
    public void beforeCreateCodeMasters(List<CodeMasters> codeMasters) {
        
        /*
        String sql = "SELECT XX_SAMPLE_MASTER_ID_SEQ.NEXTVAL FROM DUMMY";
        int masterIdSeq  = jdbc.queryForObject(sql, Integer.class);
        String id = Integer.toString(masterIdSeq);
        */
        

        Instant current = Instant.now();

        for(CodeMasters codeMaster : codeMasters) {
            //codeMaster.setSystemCreateDtm(current);
            //codeMaster.setSystemUpdateDtm(current);
            codeMaster.setLocalCreateDtm(current);
            codeMaster.setLocalUpdateDtm(current);
            //codeMaster.setUpdateUserId(id);
            //codeMaster.setCreateUserId(id);
        }

    }

    @Before(event = CdsService.EVENT_UPDATE, entity=CodeMasters_.CDS_NAME)
    public void beforeUpdateCodeMasters(List<CodeMasters> codeMasters) {
        
        Instant current = Instant.now();

        for(CodeMasters codeMaster : codeMasters) {
            //codeMaster.setSystemUpdateDtm(current);
            codeMaster.setLocalUpdateDtm(current);
            //codeMaster.setUpdateUserId("Temp");
            //codeMaster.setCreateUserId("Temp");
        }

    }


    /*
    @After(event = CdsService.EVENT_READ, entity = CodeMasters_.CDS_NAME)
    public void afterReadCodeMasters(List<CodeMasters> codeMasters) {       
        for(CodeMasters codeMaster : codeMasters) {
            codeMaster.setGroupDescription(codeMaster.getGroupDescription() + " desc");
        }
    }
    */
    



    // Code Detail

    @Before(event = CdsService.EVENT_CREATE, entity=CodeDetails_.CDS_NAME)
    public void beforeCreateCodeDetails(List<CodeDetails> codeDetails) {
        
        Instant current = Instant.now();

        for(CodeDetails codeDetail : codeDetails) {
            //codeDetail.setSystemCreateDtm(current);
            //codeDetail.setSystemUpdateDtm(current);
            codeDetail.setLocalCreateDtm(current);
            codeDetail.setLocalUpdateDtm(current);
            //codeDetail.setUpdateUserId("Temp");
            //codeDetail.setCreateUserId("Temp");
        }

    }

    @Before(event = CdsService.EVENT_UPDATE, entity=CodeDetails_.CDS_NAME)
    public void beforeUpdateCodeDetails(List<CodeDetails> codeDetails) {
        
        Instant current = Instant.now();

        for(CodeDetails codeDetail : codeDetails) {
            //codeDetail.setSystemUpdateDtm(current);
            codeDetail.setLocalUpdateDtm(current);
            //codeDetail.setUpdateUserId("Temp");
            //codeDetail.setCreateUserId("Temp");
        }

    }


    // Code Language

    @Before(event = CdsService.EVENT_CREATE, entity=CodeLanguages_.CDS_NAME)
    public void beforeCreateCodeLanguages(List<CodeLanguages> codeLanguages) {
        
        Instant current = Instant.now();

        for(CodeLanguages codeLanguage : codeLanguages) {
            //codeLanguage.setSystemCreateDtm(current);
            //codeLanguage.setSystemUpdateDtm(current);
            codeLanguage.setLocalCreateDtm(current);
            codeLanguage.setLocalUpdateDtm(current);
            //codeLanguage.setUpdateUserId("Temp");
            //codeLanguage.setCreateUserId("Temp");
        }

    }

    @Before(event = CdsService.EVENT_UPDATE, entity=CodeLanguages_.CDS_NAME)
    public void beforeUpdateCodeLanguages(List<CodeLanguages> codeLanguages) {
        
        Instant current = Instant.now();

        for(CodeLanguages codeLanguage : codeLanguages) {
            //codeLanguage.setSystemUpdateDtm(current);
            codeLanguage.setLocalUpdateDtm(current);
            //codeLanguage.setUpdateUserId("Temp");
            //codeLanguage.setCreateUserId("Temp");
        }

    }

}