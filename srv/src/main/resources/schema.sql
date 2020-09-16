DROP VIEW IF EXISTS SampleService_Samples;

DROP TABLE IF EXISTS xx_Sample;

CREATE TABLE xx_Sample (
  id BIGINT NOT NULL,
  cd NVARCHAR(5000),
  name NVARCHAR(5000),
  PRIMARY KEY(id)
);

CREATE VIEW SampleService_Samples AS SELECT
  Sample_0.id,
  Sample_0.cd,
  Sample_0.name
FROM xx_Sample AS Sample_0;

