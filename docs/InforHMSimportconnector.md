# Connecting to InforHMS

## [Import data](#tab/tabid-1)

## Overview

InforHMS creates full industry suites in the cloud and deploys technology that prioritizes the user experience, leverages data science, and integrates easily into existing systems. You can use SkyPoint's built-in connector for importing data from InforHMS. 

This document will guide you through the process of connecting InforHMS to SkyPoint Modern Data Stack Platform.

## Prerequisite

You will need the following details to configure and import data using [InforHMS](https://www.infor.com/products/hms):

- Storage Account Name
- Account Key
- Storage Path.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can refer to the InforHMS Set up Guide document to learn more about the Prerequisites.

## To import data using InforHMS connector

Follow the below steps to create a new dataflow for the InforHMS import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt text](/doc_snippets/InforHMS_Dataflowname.png)

3. In the **Set dataflow name** page, type dataflow name in **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt text](/doc_snippets/InforHMS_Chooseconnector.png)

## To add InforHMS connector

1. In the **Choose connector** page, select **InforHMS** connector.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can use the **Search** feature to find the connector. Also, the **InforHMS** connector can be found under **Healthcare** category.

![Alt text](/doc_snippets/InforHMS_Configurationpage1.png)

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **InforHMS configuration** page appears.

![Alt text](/doc_snippets/InforHMS_Configurationpage2.png)

## To configure InforHMS

Follow the below steps to configure the connection to InforHMS:

1. Enter **Storage account name** in the text area.
2. Enter **Account key** in the text area.
3. Click the **Folder icon** in **Storage path** text area.

Once you select the storage path, **Table Details** columns appear.

![Alt text](/doc_snippets/InforHMS_Tableoutput.png)

4. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Load customer data.|
|<Center>Metadata</Center>|Load Metadata.|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|

5. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the InforHMS connector gets displayed in the list of tables created in the Dataflow page.

![Alt text](/doc_snippets/InforHMS_Dataflowoutput.png)

|Item|Description|
|:-|:-|
|Name|Displays the name of the imported Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Last refresh type|Displays the refresh value. You can see the value is Full or Incremental after the last refresh of data.|
|Updated Date |Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific Group (For example, name, type, status).|

- Select the horizontal ellipsis in the **Actions** column and do the following:

|If you want to|Then|
|:-|:-|
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run** history.|

## [SetUp Guide](#tab/tabid-2)

## Overview

This document will help you gather all credentials for connecting [InforHMS](https://www.infor.com/products/hms) with SkyPoint MDSP.

## Prerequisite

You must have the following details:

- InforHMS account
- API for integration.

## To call API

SkyPoint will expose API for the following five entities:

- Reservations
- GuestProfile
- Inventory
- Rate
- GuestStayRevenue

Once the APIs are called, a data dump will be created in your SkyPoint integrated Storage account.

## Finding Storage account

The **Storage account name** will be shared with you from SkyPoint.

## Finding Account key

The **Account key** will be shared with you from SkyPoint.

## Selecting Storage Path

Follow the below steps on the SkyPoint cloud platform Configuration page to select Storage Path:

1. Click the folder icon in **Storage Path** text area.
2. Select **raw-data** and then select the folder inside it.
3. Select **HMS**.

![Alt text](/doc_snippets/InforHMS_Selectconfiguration.png)

4. In the **HMS** folder, click **Select**.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Follow the steps in Connecting to InforHMS import connector to complete your integration.

---

## Next step

After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers.
