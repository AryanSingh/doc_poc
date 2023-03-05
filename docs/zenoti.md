# Connecting to Zenoti
## Overview
Zenoti provides an all-in-one, cloud-based software solution for the spa, salon and med spa industry. You can use SkyPoint's built-in connector for importing data from Zenoti. SkyPoint Modern Data Stack Platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights.

## Prerequisite  
You will need the following details to allow SkyPoint access to your Zenoti account:

- API Key
- URL

## To add Zenoti connector 

Follow the below steps to create a new dataflow for the Zenoti import connector:
1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/Zenoti_Setdataflowname.png)

---

3. In the **Set dataflow name** page, type **Dataflow name** in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

---

![Alt text](/doc_snippets/Zenoti_Chooseconnector.png)

---

## To choose Zenoti connector
1. In the **Choose connector** page, select **Zenoti** connector.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can use the **Search** feature too to find the connector. Also, the **Zenoti** connector can be found under **Marketing** category.

The **Set dataflow name** page for **Zenoti** appears.

---

![Alt text](/doc_snippets/Zenoti_dataflowname1.png)

---

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

---

![Alt text](/doc_snippets/Zenoti_ConnecttoZenoti.png)

---

## To configure Zenoti
Follow the below steps to configure the connection to Zenoti:

1. Select **FirstDate** to specify the date after which the data for appointments, collections, and sales will be retrieved.
2. Enter your credentials such as **API Key**, and **URL** to configure with Zenoti.
3. Click **Connect**.

The **Table Details** columns appear.

---

![Alt text](/doc_snippets/Zenoti_Tabledetails.png)

---

4. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Loads customer data.|
|<Center>Metadata</Center>|Loads Metadata.|
|Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|
    
5. Click **Save**.
    
## Run, edit, and delete the imported data
Once you save the connector, the Zenoti connector gets displayed in the list of tables created in the Dataflow page.

---

![Alt text](/doc_snippets/Zenoti_Tabledetails.png)

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
|Modify the Dataflow|Select **Edit** and modify the **Dataflow**. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run** history.|
    
### Next step
After completing the data import, start the [Master Data Management (MDM) - Stitch](https://docs.skypointcloud.com/docs/stitch.html) process to develop a unified view of your customers.   
    
    
    
    
    
