DROP VIEW IF EXISTS SampleGrpMgrService_SampleGroups;
DROP VIEW IF EXISTS SampleMgrService_SampleDetails;
DROP VIEW IF EXISTS SampleMgrService_SampleHeaders;
DROP VIEW IF EXISTS SampleMstMgrService_SampleMasters;

DROP TABLE IF EXISTS xx_Sample_Detail;
DROP TABLE IF EXISTS xx_Sample_Group;
DROP TABLE IF EXISTS xx_Sample_Header;
DROP TABLE IF EXISTS xx_Sample_Master;

CREATE TABLE xx_Sample_Detail (
  detail_id BIGINT NOT NULL,
  header_id BIGINT,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(detail_id)
);

CREATE TABLE xx_Sample_Group (
  group_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(group_id)
);

CREATE TABLE xx_Sample_Header (
  header_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(header_id)
);

CREATE TABLE xx_Sample_Master (
  master_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  attr1 NVARCHAR(5000),
  PRIMARY KEY(master_id)
);

CREATE VIEW SampleGrpMgrService_SampleGroups AS SELECT
  Sample_Group_0.group_id,
  Sample_Group_0.cd,
  Sample_Group_0.name
FROM xx_Sample_Group AS Sample_Group_0;

CREATE VIEW SampleMgrService_SampleDetails AS SELECT
  Sample_Detail_0.detail_id,
  Sample_Detail_0.header_id,
  Sample_Detail_0.cd,
  Sample_Detail_0.name
FROM xx_Sample_Detail AS Sample_Detail_0;

CREATE VIEW SampleMgrService_SampleHeaders AS SELECT
  Sample_Header_0.header_id,
  Sample_Header_0.cd,
  Sample_Header_0.name
FROM xx_Sample_Header AS Sample_Header_0;

CREATE VIEW SampleMstMgrService_SampleMasters AS SELECT
  Sample_Master_0.master_id,
  Sample_Master_0.cd,
  Sample_Master_0.name,
  Sample_Master_0.attr1
FROM xx_Sample_Master AS Sample_Master_0;

