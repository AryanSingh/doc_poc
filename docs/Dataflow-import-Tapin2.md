# Connecting to Tapin2
## Overview

Tapin2 is a digital ordering platform that drives higher revenue, improved operations, and a better customer experience. You can use SkyPoint's built-in connector for importing data from [Tapin2](http://www.tapin2.co/).

This document will guide you through the process of connecting Tapin2 to SkyPoint Modern Data Stack Platform.

## Prerequisite

You must have the following details to configure and import data using Tapin2:

- API Key
- Venue Id.

---

>  :grey_exclamation: **Note:** You can refer to the Tapin2 Set up Guide document to learn more about the Prerequisites.

---

## To import data using Tapin2 connector

Follow the below steps to create a new dataflow for the Tapin2 import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/Tapin2_setdataflowname.png)

---

3. In **Set dataflow name** page, type dataflow name in the Name text area.
4. Click **Next**.

The **Choose connector** page appears.

---

![Alt text](/doc_snippets/Tapin2_Chooseconnector.png)

---

## To add Tapin2 connector

1. In **Choose connector** page, select **Tapin2** connector.

---

>  :grey_exclamation: **Note:** You can use the **Search** feature to find the connector. Also, the **Tapin2** connector can be found under **Sales** category.

---

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **Tapin2 configuration** page appears.

---

![Alt text](/doc_snippets/Tapin2_Connecttotapin2.png)

---

## To configure Tapin2

Follow below steps to configure the connection to **Tapin2**:

1. Enter **Api Key** in the text area.
2. Enter **Venue Id** in the text area.

The **Table details** columns appear.

---

![Alt text](/doc_snippets/Tapin2_Tableoutput.png)

---

3. Enter **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Load customer data.|
|<Center>Metadata</Center>|Load Metadata.|
|Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|

4. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the **Tapin2** connector gets displayed in the list of tables created in the Dataflow page.

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

## Next step

After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers.