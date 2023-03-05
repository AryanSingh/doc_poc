# Connecting to Dataverse 
## Overview

Dataverse is an easy to use, easy to manage, compliant, secure, scalable, and globally available SaaS data service that stores your data within a set of tables. It helps you to acquire insights and motivate corporate action by enabling the use of any sort of data or app.

## Prerequisite  

You will need the following details to configure and import data using [Dataverse connector](https://powerplatform.microsoft.com/en-in/dataverse/):

- [Service Uri](https://learn.microsoft.com/en-us/azure/data-factory/connector-dynamics-crm-office-365?tabs=data-factory#create-a-linked-service-to-dynamics-365-microsoft-dataverse-or-dynamics-crm-using-ui)
- Office 365 Username and Password.

## Import data using Dataverse connector

Follow the below steps to create a new dataflow for the Dataverse import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

---

![Alt text](/doc_snippets/Dataverse_Setdataflowname.png)

---

3. Enter **Dataflow name** in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.  

---

![Alt text](/doc_snippets/Dataverse_Chooseconnectorpage.png)

---

## To add Dataverse connector

1. In the **Choose connector** page, select **Dataverse** connector. 

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You can use the Search feature too to find the connector. Also, the Dataverse connector can be found under Developer Tools and Sales categories.

---

![Alt text](/doc_snippets/Dataverse_Setdataflowconfigure1.png)

---

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The Connect to **Dataverse** page appears.

---

![Alt text](/doc_snippets/Dataverse_connecttodataverse.png)

---

## To configure Dataverse

Follow the below steps to configure the connection to Dataverse:

1. Enter the **Service Uri** details in the text area.
2. Select an **Authentication Type** option from the drop-down list.
3. Enter your **Username** and **Password**.
4. Click **Connect**.

The **Table Details** columns appear.

---

![Alt text](/doc_snippets/Dataverse_Tabledetails.png)

---

5. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Loads customer data.|
|<Center>Metadata</Center>|Loads Metadata.|
|File name|Displays the name of the file that you imported.|
|Table name|Displays the imported table name.|
  
6. Click **Save**.
  
## Run, edit, and delete the imported data
  
Once you save the connector, the Dataverse connector gets displayed in the list of tables created in the Dataflow page.
  
---

![Alt text](/doc_snippets/Dataverse_Importoutput.png)

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
  
After completing the data import, start the [Master Data Management (MDM) - Stitch](https://docs.skypointcloud.com/docs/stitch.html) process to develop a unified view of your customers. 

















