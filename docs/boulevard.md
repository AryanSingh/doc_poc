# Connecting to Boulevard
## Overview
Boulevard is an intelligent scheduling solution and comprehensive point of sale system that increases revenue and lowers costs for salons, spas, and other appointment-based businesses. You can use SkyPoint's built-in connector for importing data from Boulevard. SkyPoint Modern Data Stack Platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights.

## Prerequisite 
You will need the following details to configure and import data:  
- API Key
- API Secret
- URL
- Business Id  

## Import Data using Boulevard connector  
Follow the below steps to create a new dataflow for the Boulevard connector:  
1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/Boulevard_Setdataflowname.png)

---

3. In the **Set dataflow name** page, enter Dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

---

![Alt text](/doc_snippets/Boulevard_Chooseconnector.png)

---

## To add Boulevard connector
1. In the **Choose connector** page, select **Boulevard** connector.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You can use the Search feature too to find the connector. Also, the Boulevard connector can be found under Sales categories.

The **Set dataflow name** page for **Boulevard** appears.

---

![Alt text](/doc_snippets/Boulevard_Setdataflowconfigure1.png)

---

2. Enter the **Display Name** to identify your Dataflow.
3. In the **Description** box, you can enter an explanation of the connector.
4. Click **Next**.

The **Connect to Boulevard** page appears.

---

![Alt text](/doc_snippets/Boulevard_configure.png)

---

## To configure Boulevard
Follow the below steps to configure the connection to Boulevard:

1. Enter your credentials such as **API Key**, **API Secret**, **URL**, and **Business Id** to configure with the Boulevard connector.

2. Click **Connect**.

The **Table Details** columns appear.

---

![Alt text](/doc_snippets/Boulevard_Configurationrtabledetails.png)

---

3. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Loads customer data.|
|<Center>Metadata</Center>|Loads Metadata.|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|
    
4. Click **Save**.

## Run, edit, and delete the imported data

Once you save the connector, the Boulevard connector gets displayed in the list of tables created in the Dataflow page.
    
---

![Alt text](/doc_snippets/Boulevard_Dataflowoutput.png)

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

---

- Select the horizontal ellipsis in the **Actions** column and do the following:    
    
|If you want to|Then|
|:-|:-|
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run** history.|

## Next step
After completing the data import, start the [Master Data Management (MDM) - Stitch](https://docs.skypointcloud.com/docs/stitch.html) process to develop a unified view of your customers. 
    
    
    
    
    
