[cds.deploy] - Starting deploy to SAP HANA ...

[cds.deploy] - Creating build tasks
[cds.deploy] - Running build

[cds.deploy] - Running 'cf marketplace -s hana' with options {}
Getting service plan information for service hana as ckcho@lgcns.com...
OK

service plan   description                        free or paid
hdi-shared     HDI container on a HANA database   free

[cds.deploy] - Using container sppDb_hdi_dev

[cds.deploy] - Running 'cf create-service hana hdi-shared sppDb_hdi_dev -c {"makeUniqueName":false}' with options {}
Creating service instance sppDb_hdi_dev in org LG CLU_lgcommondev / space msa1 as ckcho@lgcns.com...
OK

Service sppDb_hdi_dev already exists
[cds.deploy] - Writing /home/user/projects/sppCap/db/default-env.json
[cds.deploy] - Writing /home/user/projects/sppCap/default-env.json

[cds.deploy] - Deploying to HANA from /home/user/projects/sppCap/db
[cds.deploy] - Using HDI deployer from /home/user/projects/sppCap/db/node_modules/@sap/hdi-deploy/library.js
@sap/hdi-deploy, version 3.11.11 (mode default), server version 4.00.000.00.1598428001 (4.0.0.0), node version 12.16.1, HDI version 1004, container API version 1002

Using default environment variables from file "default-env.json"

Ignore file found at "/home/user/projects/sppCap/db/.hdiignore". Found 6 lines.

Collecting files...

Collecting files... ok (0s 5ms)

6 directories collected
24 files collected
0 reusable modules collected
Target service: sppDb_hdi_dev

Session variable APPLICATION is set to "SAP_HDI//".

Previous build with request ID 1273 finished at 2020-09-23 09:03:57.626433000 with status Committed and message: Starting make in the container "380ECACEC4244670B190A15DCC9DCA1A" with 0 files to deploy, 0 files to undeploy... ok.

Processing revoke files...

Processing revoke files... ok (0s 0ms)

Processing grants files...

Processing grants files... ok (0s 0ms)

Preprocessing files...
Preprocessing files... ok (0s 0ms)
Connecting to the container "380ECACEC4244670B190A15DCC9DCA1A"...

Connecting to the container "380ECACEC4244670B190A15DCC9DCA1A"... ok (0s 302ms)

Locking the container "380ECACEC4244670B190A15DCC9DCA1A"...

Locking the container "380ECACEC4244670B190A15DCC9DCA1A"... ok (0s 361ms)

Synchronizing files with the container "380ECACEC4244670B190A15DCC9DCA1A"...

Synchronizing files with the container "380ECACEC4244670B190A15DCC9DCA1A"... ok (0s 443ms)

Undeploy whitelist file "undeploy.json" found; deleted files will be filtered by the whitelist

1 modified or added files are scheduled for deploy based on delta detection

0 deleted files are scheduled for undeploy based on delta detection (filtered by undeploy whitelist)

0 files are scheduled for deploy based on explicit specification

0 files are scheduled for undeploy based on explicit specification

Deploying to the container "380ECACEC4244670B190A15DCC9DCA1A"...

Polling messages for request id: 1278

 Starting make in the container "380ECACEC4244670B190A15DCC9DCA1A" with 1 files to deploy, 0 files to undeploy... 

  Disabling table replication for the container schema "380ECACEC4244670B190A15DCC9DCA1A"... 
  Disabling table replication for the container schema "380ECACEC4244670B190A15DCC9DCA1A"... ok  (0s 90ms)
  Migrating libraries... 
  Migrating libraries... ok  (0s 6ms)
  Making... 
   Preparing... 
   Preparing the make transaction... 

   Adding "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview" for deploy... 
   Adding "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview" for deploy... ok  (0s 8ms)
   Preparing... ok  (0s 35ms)

   Preparing the make transaction... ok  (0s 62ms)

   Calculating dependencies... 
    Expanding... 
     Expanding "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... 
     Expanding "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... ok  (0s 8ms)
    Expanding... ok  (0s 23ms)
    Precompiling... 
     Precompiling "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... 
     Precompiling "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... ok  (0s 8ms)
    Precompiling... ok  (0s 18ms)
    Merging... 
    Merging... ok  (0s 5ms)
   Calculating dependencies... ok  (0s 69ms)
   Processing work list... 
    Deploying "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... 

    Deploying "src/gen/xx.SampleMgrService.SampleViewCondition.hdbview"... ok  (0s 26ms)
   Processing work list... ok  (0s 34ms)
   Finalizing... 
   Finalizing... ok  (0s 21ms)
   Make succeeded (0 warnings): 1 files deployed (effective 1), 0 files undeployed (effective 0), 0 dependent files redeployed 
  Making... ok  (0s 216ms)
  Enabling table replication for the container schema "380ECACEC4244670B190A15DCC9DCA1A"... 

  Enabling table replication for the container schema "380ECACEC4244670B190A15DCC9DCA1A"... ok  (0s 86ms)
 Starting make in the container "380ECACEC4244670B190A15DCC9DCA1A" with 1 files to deploy, 0 files to undeploy... ok  (0s 405ms)

Deploying to the container "380ECACEC4244670B190A15DCC9DCA1A"... ok (0s 586ms)

No default-access-role handling needed; global role "380ECACEC4244670B190A15DCC9DCA1A::access_role" will not be adapted

Unlocking the container "380ECACEC4244670B190A15DCC9DCA1A"...

Unlocking the container "380ECACEC4244670B190A15DCC9DCA1A"... ok (0s 0ms)

Deployment to container 380ECACEC4244670B190A15DCC9DCA1A done [Deployment ID: none].

(3s 428ms)



[cds.deploy] - Done.
