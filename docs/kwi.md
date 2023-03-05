# Connecting to the KWI connector

## Overview

KWI platform supports Point of Sale (POS), Merchandise/Inventory management, Order management, Customer Relationship Management (CRM), and eCommerce. You can use SkyPoint's built-in connector for importing data from KWI. 

## Prerequisite

- You have a [KWI account](https://kwicloud9docs.com/login/?redirect_to=https%3A%2F%2Fkwicloud9docs.com%2F) and required credentials such as username, password, and domain URL.

## Import Data using KWI Connector

Follow the below steps to create a new dataflow for the KWI import connector:

1. In the left pane, go to **Dataflow** > **Imports**.

The Dataflow window appears.  

---

![Alt text](/doc_snippets/Dataflow_window.png)

---

2. Click **New Dataflow** to create dataflow.

---

![Alt text](/doc_snippets/SetDataflowName.png)

---

3. Enter a **Name** to identify your Dataflow.  

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Name starts with a letter. Use letters and numbers only. No spaces between letters.

4. Click **Next**.

## Add KWI connector

1. In the **All** or **Sales** tab, select the **KWI** connector to start the configuration.

---

![Alt text](/doc_snippets/ChooseKWIConnector.png) 

---

2. Also, you can use the **Search** function to find the **KWI** connector.  

---

![Alt text](/doc_snippets/KWI_SetDataflowName.png)

---

3. In the **Set dataflow name** page, enter the **Display Name** to identify your dataflow.
4. In the **Description** box, you can enter an explanation of the connector. 
5. Click **Next**.

---

![Alt text](/doc_snippets/ConnectToKWI.png)

---  

## To configure KWI

1. Enter your credentials such as **Username**, **Password**, and **Base** **URL** to configure with the KWI connector. For details about each API, click [KWI Commerce API Details](https://kwicloud9docs.com/kwi-api-details/). Also, if you want to know how to connect with API, click [KWI Commerce API Try Out Functionality](https://kwicloud9docs.com/try-out-api-functionality/).
2. Click **Connect**.

---

![Alt text](/doc_snippets/KWI_EntityDetails.png)

---

3. Enter the **Table Details** to process the data.

|Item|Description|
| :- | :- |
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name. By default, it is an imported table name, but you can also change it.|  

4. Click **Save** to apply the changes.

## Run, edit, and delete the imported data

1. After saving the connection, the KWI connector appears on the Dataflow page. Also, you can see the list of created tables in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section. 

---

![Alt text](/doc_snippets/KWI_Output.png)

---

|Item|Description|
|:--- |:--- |
|Name|Displays the name of the Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Updated Date|Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific Group (For example, name, type, status).|  

2. Select the horizontal ellipsis in the **Actions** column and do the following:


|If you want to|Then|
|:--- |:--- |
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run History**.|

> ![image](/doc_snippets/Note_icon.png)**Note** 
>
> You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers.