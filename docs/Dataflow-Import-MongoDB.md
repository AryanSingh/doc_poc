# Connecting to MongoDB
## Overview

Solve your data challenges with Mongo DB. You can use SkyPoint's built-in connector for importing data from MongoDB. 

This document will guide you through the process of connecting MongoDB to SkyPoint Modern Data Stack Platform.

## Prerequisite

You must have the following details to configure and import data using [MongoDB](https://www.mongodb.com/) import connector:

- Connection String
- Database Name.

---

>  :grey_exclamation: **Note:** You can refer to the Setting up MongoDB document to learn more about the Prerequisites.

---

## To import data using MongoDB connector

Follow below steps to create a new dataflow for the MongoDB import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/MongoDB_Dataflowname.png)

---

3. In the **Set dataflow name** page, type dataflow name in **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

---

![Alt text](/doc_snippets/MongoDB_Chooseconnector.png)

---

## To add MongoDB

1. In the **Choose connector** page, select **MongoDB** connector.

---

>  :grey_exclamation: **Note:** You can use the **Search** feature to find the connector. Also, the **MongoDB** connector can be found under **Analytics** and **Developer Tools** category.

---

---

![Alt text](/doc_snippets/MongoDB_Configuration1.png)

---

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **MongoDB configuration** page appears.

---

![Alt text](/doc_snippets/MongoDB_Configuration2.png)

---

## To configure MongoDB

Follow below steps to configure the connection to **MongoDB**:

1. Enter **Connection String** in the text area.
2. Enter **Database name** in the text area.
3. Click **Connect**.

The **Table Details** columns appear.

---

![Alt text](/doc_snippets/MongoDB_Tableoutput.png)

---

4. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Load customer data.|
|<Center>Metadata</Center>|Load Metadata.|
|Table Name|Displays the imported table name.|
|Type|Displays the type of imported data.|

5. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the MongoDB connector gets displayed in the list of tables created in the Dataflow page.

---

![Alt text](/doc_snippets/MongoDB_Output.png)

---

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
|See the run history of the Dataflow|Select **Run history**.|

## Next step

After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers. 




