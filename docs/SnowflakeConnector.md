# Connecting to Snowflake

Snowflake connector enables you to connect to the Snowflake data warehouse. You can connect the Snowflake data warehouse to SkyPoint Studio and perform various tasks such as data ingestion, unification, transformation, and enrichment to gain insights from the data. 

You can use SkyPoint's built-in connector for importing data from Snowflake. This document will guide you through the process of connecting Snowflake to the SkyPoint Modern Data Stack Platform.  

## Prerequisite  

You will need the following details to configure and import data using the <a href="https://www.snowflake.com/en/" target="_blank">Snowflake&#x21D7;</a> connector: 

- Account Name
- Username
- Password
- Database Name
- Schema Name
- Host
- Warehouse Name

## To import data using the Snowflake connector  

Follow the below steps to create and configure a new dataflow for the Snowflake import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt image](/doc_snippets/SnowflakeSetDataflowName.png)

3. Enter the dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt image](/doc_snippets/SnowflakeConnector.png)  

### Add Snowflake connector  

1. In the **Choose connector** page, select **Snowflake** connector. You can use the **Search** feature to find the connector. Also, the **Snowflake** connector can be found under **Cloud** and **Data Warehousing** category.

![Alt image](/doc_snippets/SnowflakeConnectorDisplayName.png)

2. Enter the **Display Name** for your dataflow in the text area.
3. You can add in the **Description** text area.
4. Click **Next**.

The **Configuration** page appears.


![Alt image](/doc_snippets/SnowflakeConfiguration.png)

### Connect to the Snowflake account

Follow the below steps to configure the connection to Snowflake:

1. Enter the **Account Name**, which is provided by Snowflake when you sign up for an account.
2. Enter your **Username** and **Password**.
3. Enter the **Database Name**.
4. Enter the **Schema Name**.
5. Enter **Host**, which is the hostname or IP address of the Snowflake service.
6. Enter the **Warehouse Name** of your Snowflake account that you want to use for executing queries.
7. Click **Connect**.

Once the connection is established, you can use the connector to import data from a table in Snowflake.

![Alt image](/doc_snippets/SnowflakeTableDetails.png)

8. In the **Table details** section, each table is identified by a row. Click the checkbox to select the table for import and use the dropdown to mark it as Data or Metadata.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> In the **Table Details** section, by default, all tables are selected. You can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.


|Item|Description|
| :- | :- |
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|File name|Displays the name of the file that you imported.|
|Entity name|Displays the imported table name. By default, it is an imported table name, but you can rename it later.|

9. Click **Save** to apply the changes.

After saving the connection, the Snowflake connector appears on the **Dataflow** > **Imports page**.   

## Run, edit, and delete the imported data  

Once the table is imported, you can execute, modify, and remove the imported table from the Dataflow. Follow the below steps:

1. Go to the **Dataflow** > **Imports page**.

![Alt image](/doc_snippets/SnowflakeImportOutput.png)


|Item|Description|
| :- | :- |
|Name|Displays the name of the imported Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables count|Displays the number of tables imported.|
|Created Date|Displays date of creation.|
|Last refresh type|Displays the refresh value: Full or Incremental.|
|Updated Date|Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific group. For example, type, status, tables count, etc.|


2. Select the horizontal ellipsis under the **Actions** column and do the following:

|If you want to|Then|
| :- | :- |
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run history**.|

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run History** > **Description**. Also, you can see the status, start time, end time for the execution of data pipeline.

## Next step  

After completing the data import, start the [Master Data Management (MDM) - Resolve](stitch.md) process to create a single, unified view of the data. With SkyPoint MDM, you can ensure that your data is accurate, consistent, and reliable, making it easier to use for business processes, analytics, and reporting.

