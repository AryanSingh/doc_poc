# Connecting to OpenTable
## Overview

OpenTable helps your restaurant business thrive by anticipating the changing needs of both restaurants and diners. You can use SkyPoint's built-in connector for importing data from OpenTable. 

This document will guide you through the process of connecting OpenTable to SkyPoint Modern Data Stack Platform.

## Prerequisite

You will need the following details to configure and import data using [OpenTable](https://www.opentable.com/about/):

- Username
- Password
- Restaurant Id.

>  :grey_exclamation: **Note:** You can refer to the OpenTable Set up Guide document to learn more about the Prerequisites.

## To import data using OpenTable connector

Follow below steps to create a new dataflow for OpenTable import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt text](/doc_snippets/OpenTable_Setdataflow.png)

3. In the **Set dataflow name** page, type dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt text](/doc_snippets/OpenTable_Chooseconnector.png)

## To add OpenTable connector

1. In the **Choose connector** page, select **OpenTable** connector.

>  :grey_exclamation: **Note:** You can use the **Search** feature to find the connector. Also, the **OpenTable** connector can be found under **Ecommerce** category.

![Alt text](/doc_snippets/OpenTable_Configuration1.png)

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **OpenTable configuration** page appears.

![Alt text](/doc_snippets/OpenTable_Configuration2.png)

## To configure OpenTable

Follow below steps to configure the connection to **OpenTable**:

1. Enter **User Name** in the text area.
2. Enter **Password** in the text area.
3. Enter **Restaurant Id** in the text area.
4. Click **Connect**.

The **Table Details** columns appear.

![Alt text](/doc_snippets/OpenTable_Tableoutput.png)

5. Enter **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Load customer data.|
|<Center>Metadata</Center>|Load Metadata.|
|File Name|Displays name of the file that you imported.|
|Table Name|Displays the imported table name.|

6. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the **OpenTable** connector gets displayed in the list of tables created in the Dataflow page.

![Alt text](/doc_snippets/OpenTable_Dataflowoutput.png)

|Item|Description|
|:-|:-|
|Name|Displays the name of the imported Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Last refresh type|Displays the refresh value. You can see the value is Full or Incremental after the last refresh of data.|
|Updated Date|Displays last modified date.|
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


