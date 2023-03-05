# Connecting to SQL Server
## Overview

SQL Server is a relational database management system developed by Microsoft. You can use SkyPoint's built-in connector for importing data from SQL Server. 

This document will guide you through the process of connecting SQL Server to SkyPoint Modern Data Stack Platform.

## Prerequisite

You will need the following details to configure and import data using [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2019):

- Server Name
- Database name
- Port number
- Username
- Password.

---

>  :grey_exclamation: **Note:** You can refer to SQL Server Set up Guide document to learn more about the Prerequisites.

---

## To import data using SQL Server connector

Follow the below steps to create a new dataflow for the SQL Server import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/SQL_Dataflowname.png)

---

3. In the **Set dataflow name** page, type dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

---

![Alt text](/doc_snippets/SQL_Chooseconnector.png)

---

## To add SQL Server connector

1. In the **Choose connector** page, select **SQL Server** connector.

---

>  :grey_exclamation: **Note:** You can use the **Search** feature to find the connector. Also, the **SQL Server** connector can be found under **Developer Tools** category.

---

---

![Alt text](/doc_snippets/SQL_Configuration1.png)

---

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **SQL Server configuration** page appears.

---

![Alt text](/doc_snippets/SQL_Configuration2.png)

---

## To configure SQL Server

Follow below steps to configure the connection to **SQL Server**:

1. Enter **Server Name** in the text area.
2. Enter **Database name** in the text area.
3. Enter **Port number** in the text area.
4. Enter **User Name** in the text area.
5. Enter **Password** in the text area.
6. Click **Connect**.

The **Table Details** columns appear.

---

![Alt text](/doc_snippets/SQL_Tableoutput.png)

---

7. Enter **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Load customer data.|
|<Center>Metadata</Center>|Load Metadata.|
|Table Name|Displays the imported table name.|
|Table Schema|Displays the schema or structure of the table.|
|Table Type|Displays the type of created table.|

8. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the SQL Server connector gets displayed in the list of tables created in the Dataflow page.

---

![Alt text](/doc_snippets/SQL_Output.png)

---

|Item|Description|
|:-|:-|
|Name|Displays name of the imported Dataflow.|
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
