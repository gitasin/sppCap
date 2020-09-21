DROP VIEW IF EXISTS SampleGroupService_SampleHeader;
DROP VIEW IF EXISTS SampleGroupService_SampleLine;
DROP VIEW IF EXISTS SampleInfoService_SampleDetail;
DROP VIEW IF EXISTS SampleInfoService_SampleMaster;
DROP VIEW IF EXISTS SampleService_Samples;

DROP TABLE IF EXISTS xx_Sample;
DROP TABLE IF EXISTS xx_Sample_Detail;
DROP TABLE IF EXISTS xx_Sample_Header;
DROP TABLE IF EXISTS xx_Sample_Line;
DROP TABLE IF EXISTS xx_Sample_Master;

CREATE TABLE xx_Sample (
  id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(id)
);

CREATE TABLE xx_Sample_Detail (
  detail_id BIGINT NOT NULL,
  master_id BIGINT,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(detail_id)
);

CREATE TABLE xx_Sample_Header (
  header_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  attr1 NVARCHAR(5000),
  PRIMARY KEY(header_id)
);

CREATE TABLE xx_Sample_Line (
  line_id BIGINT NOT NULL,
  header_id BIGINT,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(line_id)
);

CREATE TABLE xx_Sample_Master (
  master_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(master_id)
);

CREATE VIEW SampleGroupService_SampleHeader AS SELECT
  Sample_Header_0.header_id,
  Sample_Header_0.cd,
  Sample_Header_0.name,
  Sample_Header_0.attr1
FROM xx_Sample_Header AS Sample_Header_0;

CREATE VIEW SampleGroupService_SampleLine AS SELECT
  Sample_Line_0.line_id,
  Sample_Line_0.header_id,
  Sample_Line_0.cd,
  Sample_Line_0.name
FROM xx_Sample_Line AS Sample_Line_0;

CREATE VIEW SampleInfoService_SampleDetail AS SELECT
  Sample_Detail_0.detail_id,
  Sample_Detail_0.master_id,
  Sample_Detail_0.cd,
  Sample_Detail_0.name
FROM xx_Sample_Detail AS Sample_Detail_0;

CREATE VIEW SampleInfoService_SampleMaster AS SELECT
  Sample_Master_0.master_id,
  Sample_Master_0.cd,
  Sample_Master_0.name
FROM xx_Sample_Master AS Sample_Master_0;

CREATE VIEW SampleService_Samples AS SELECT
  Sample_0.id,
  Sample_0.cd,
  Sample_0.name
FROM xx_Sample AS Sample_0;

