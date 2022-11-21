# Getting started with SkyPoint Lakehouse SQL

## Overview

SkyPoint Lakehouse SQL allows open integrations with the modern data stack tools. It provides maximum flexibility for your data teams to create multiple visualization types and explore your impactful insights quickly and easily. Lakehouse SQL integrates with various third-party tools that allow you to work with low-code and no-code experiences. The data transformation consists of the following steps:

- Extract: Ingest or export business-critical data using Fivetran, Airbyte, SkyPoint Dataflow, etc.
- Load: Centralize all your data using Lakehouse SQL connect.
- Transform: Organize, clean, and transform your data using SkyPoint transformations and external tools like Dbt.
- Insights: Find new insights with Power BI, Tableau, Looker, etc.


## Prerequisite

- You have an Instance in the SkyPoint Studio. To create a new Instance, refer to [Creating an Instance](https://skypointcdpdocs.z22.web.core.windows.net/docs/instance.html). If you need help and support, click **Need help?** button in the right corner of the page. For more information regarding raising a new ticket, refer [Help+Support](https://skypointcdpdocs.z22.web.core.windows.net/docs/help%2Bsupport.html) section. If you are a new user and having issues regarding Signing up or Signing in, contact the [SkyPoint support team](https://skypointcloud.com/customer-support/).  


> :grey_exclamation: **Note**: Lakehouse SQL is auto-provisioned during the instance creation. When the user creates an instance, data is synched with the Lakehouse SQL. This automation allows you to effectively scale your identity management system and reduces costs by avoiding human error associated with manual provisioning.


## To enable Lakehouse SQL

1. Open **SkyPoint Studio**.
2. In the left pane, go to **Lakehouse**.
3. Click **SQL Access**.

The **SQL Access** window appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/LakehouseSQL_Enable.png?raw=true)  

---

4. Click **Enable** button to build the Lakehouse SQL connection. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/LakehouseSQL_Connection.png?raw=true)  

---  

> :grey_exclamation: **Note:** SkyPoint platform supports **Refresh Hive Metastore** to reflect database schema changes made directly to the Lakehouse Delta Lake. With the click of the **Refresh Hive Metastore** button, the metadata gets refreshed to reflect the changes in Lakehouse Databases like listing new tables, new attributes, or removal of tables.  

5. If necessary, do the following:

|To|Do|
|:--- |:---|
|View and copy the credentials for SQL Access|Click **Show fields** and copy the credentials to your clipboard.|
|Initialize a cluster to quickly connect to Lakehouse and run queries|Click **Initialize Warehouse**.|

6. You need to obtain the following Lakehouse SQL credentials:  
- Server hostname  
- Port
- HTTP path
- JDBC URL
- Personal access token


|Item|Description|
|:---|:---|
|Server hostname|Indicates the root URL for Lakehouse SQL endpoint.|
|Port|Refers to the port in your cluster credentials.|
|HTTP path|Refers to the Lakehouse SQL endpoint provisioned for the instance.|
|JDBC URL|Indicates the driver that is used to connect to a database. It is a standard protocol for each Instance, which is used to connect with data sources.|
|Personal access token|Contains your security credentials used to authenticate and connect to SQL endpoints.|

---

> :grey_exclamation: **Note:** Refresh personal access token generates a personal access token for accessing the lakehouse tables. Clicking the **Refresh** icon, you can set the default expiry time to 90 days. An alert message starts displaying 7 days prior to access token expiration.


> [!TIP]  
> SkyPoint platform is a multi-tenant Software as a Service (SaaS) platform where each customer is a tenant, and each tenant has one or more instances. You can create databases and tables in your Instance. Lakehouse SQL supports data integration at instance level.  
> 
> When you click the **Enable** button, by default, the system loads data into Databricks from **Lakehouse** > **Databases** and creates credentials to authenticate and explore your data through Power BI, Tableau, etc. Lakehouse SQL integrates with all JDBC compliant tools for BI and ELT/ETL use cases.

### Next step

Once you have completed the configuration with Lakehouse SQL, you are ready to visualize and start working with Power BI, or Tableau.

Also, you can integrate your Lakehouse SQL endpoints and Databricks with more MDS tools such as Fivetran, Airbyte, Dbt, etc. The third-party data integration with Databricks helps you to centralize data from disparate data sources into Lakehouse.

- To get started with third-party tools for data integration, click the **More MDS tools** tile.  
  
> :grey_exclamation: **Note:** Lakehouse SQL capability provides direct full SQL access to your instance-level Delta Lakehouse accessible to Instance Administrator and above roles. You can use any SQL ingestion, transformation, or visualization tools to interact bi-directionally with Lakehouse including Fivetran, Dbt, Power BI, Tableau, and Looker. Any external changes to the Lakehouse will be automatically synchronized using Delta Lake **Change Data Feed (CDF)** to update the SkyPoint metadata store.

### See also

[Tenants](https://skypointcdpdocs.z22.web.core.windows.net/docs/tenant.html)

[Instances](https://skypointcdpdocs.z22.web.core.windows.net/docs/instance.html)

[Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html)
