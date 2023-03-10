# What's new in the SkyPoint platform

We're excited to announce our newest updates and releases! The release notes of the SkyPoint Modern Data Stack Platform include improvements to existing features, resolved issues, and new features that improve your experience with the platform.

## All production releases

These release versions contain an overview of the new features, improvements, and fixes in the most recent releases of SkyPoint Cloud. For details about earlier releases, click [Previous releases](whats-new-skypoint.md).

|Version|<div style={{width:"150px"}}>Release date</div>|Description|
| :- | :- | :- |
|[7.0.0](v7.0.0.md)|22-FEB-2023|<ul><li> Added SkyPointGPT.</li> <li> Domain selection in instance.</li> <li> Allow the same priority for multiple attributes in ML match.</li> <li> Added exceptions in the ML match.</li></ul>|
|[6.3.0](v6.3.0.md)|01-FEB-2023|<ul><li> Added Snowflake DLT integration.</li> <li> Added Type in master data.</li> <li> Autosuggestion in a SQL editor for Audience creation.</li></ul>|
|[6.2.1](v6.2.1.md)|18-JAN-2023|<ul><li> Data is available to the user for newly ingested tables or inherited tables.</li> <li> Deletion of the instance/tenant will delete respective storage, Cosmos, Unity Catalog/Schema/Tables, and SQL warehouse.</li></ul> |
|[6.2.0](v6.2.0.md)|11-JAN-2023|<ul><li> Create audience from the prediction models.</li> <li> Added topic modeling and filter on sentiment model view page.</li> <li> View multiple master profiles. </li></ul>|
|[6.1.0](v6.1.0.md)|06-JAN-2023|<ul><li> Migration of hive_metastore to Unity Catalog. </li><li> Merge execution per master data.</li></ul> |
|[6.0.0](v6.0.0.md)|02-JAN-2023|<ul><li> Added Transformations.</li> <li> Multiple Master data creation per instance.</li></ul> |
|[5.1.0](v5.1.0.md)|21-DEC-2022|<ul><li> Added RFM model view page.</li> <li> Added SQL query editor in Audience.</li> <li> Added DateTime option in Metrics.</li> <li> External table creation in Lakehouse with the user-defined name.</li></ul> |
|[5.0.0](v5.0.0.md)|29-NOV-2022|<ul><li> RFM (Recency, Frequency, Monetary value) model is added under Predict > Built-In. </li><li> Added search field in the dropdown to select the desired value.</li> <li> Added multiple timeline journeys per instance.</li> <li> Setup instructions for import connectors. </li></ul>|
|[4.4.0](v4.4.0.md)|08-NOV-2022|<ul><li> Added profile filter ("Email approachable" or "Phone approachable") to create a quick audience. </li><li> Real-time status update on Audience page.</li> <li> Usage of tables across all downstream processes. </li></ul>|
|[4.3.0](v4.3.0.md)|18-OCT-2022|<ul><li> Real-time status updates for Exports, Audience, and Prediction models.</li> <li> Bulk Processing of Data Subject Request (DSR). </li><li> Data ingestion through Delta Live Tables (DLT).</li> <li> Convert Pandas data frame into Spark data frames.</li></ul> |
|[4.2.0](v4.2.0.md)|27-SEP-2022|<ul><li> Import connectors redesign.</li> <li> Segregating data in Bronze, Silver, and Gold.</li> <li> Prediction model is migrated from Azure ML to Databricks using ML flow. </li><li> Net Promoter Score (NPS) calculation in Business Metrics. </li></ul>|
|[4.1.0](v4.1.0.md)|06-SEP-2022|<ul><li> Auto provisioning of Lakehouse SQL during the instance creation.</li> <li> Run history shows all stages of ingestion.</li></ul>|
|[4.0.0](v4.0.0.md)|23-AUG-2022|<ul><li> Removal of CDM dependency for all downstream processes to improve pipeline performance and stability.</li> <li> View profile card from Audience.</li> <li> Timeline creation from Audience.</li></ul>|
|[3.0.0](v3.0.0.md)|09-AUG-2022|<ul><li>The storage layer is restructured and organized into three layers named Bronze, Silver, and Gold.</li></ul>
|[2.2.0](v2.2.0.md)|26-JUL-2022|<ul><li>Replaced the Standard cluster with an Automated cluster to support optimized autoscaling. </li><li>Added Refresh personal access token in SQL Access to configure the expiry time for an access token.</li></ul>|
|[2.1.0](v2.1.0.md)|12-JUL-2022|<ul><li>Support Change Data Capture (CDC) in Lakehouse SQL.</li> <li>Added reason for the discarded entities in map tables under lakehouse. </li></ul>|
|[2.0.0](v2.0.0.md)|28-JUN-2022|<ul><li>Added access token to integrate with Visualization tools through Lakehouse SQL.</li> <li>Refresh Hive metastore is added for syncing new entities in Lakehouse SQL.</li></ul>|
|[1.0.0](v1.0.0.md)|14-JUN-2022|<ul><li>SkyPoint Cloud Lakehouse made available for bidirectional integration with third party tools like Fivetran, Dbt, Power BI, Tableau, etc.</li></ul>|
