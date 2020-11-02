namespace xx;

@cds.persistence.exists
entity Sample_Master_Proc_Type{
    key master_id : Integer64;
    cd : String;
    name : String;
}
