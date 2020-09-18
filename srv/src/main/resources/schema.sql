DROP VIEW IF EXISTS SampleInfoService_SampleMaster;
DROP VIEW IF EXISTS SampleService_Samples;

DROP TABLE IF EXISTS xx_Sample;
DROP TABLE IF EXISTS xx_Sample_Detail;
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

CREATE TABLE xx_Sample_Master (
  master_id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(master_id)
);

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

