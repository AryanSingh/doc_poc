# Connecting to Square

## Overview 


Square is a financial service, merchant services aggregator, and mobile payments company. You can use SkyPoint's built-in connector for importing data from Square. SkyPoint Modern Data Stack Platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights. 


## Prerequisite 


You have [Square Account](https://squareup.com/login) and credentials such as URL and API key to start the configuration. 


## Import Data using Square connector 


1. In the left pane, go to **Dataflow** > **Imports**.

The **Dataflow** window appears. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Dataflow_window.png?raw=true) 

---


2. Click **New Dataflow** to create dataflow. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/SetDataflowName.png?raw=true) 

---

3. Enter a **Name** to identify your Dataflow.


> :grey_exclamation: **Note**: Name starts with a letter.  Use letters and numbers only. No spaces between letters. 

4. Click **Next**. 


## Add Square Connector 


1. In the **All** or **Ecommerce** categories, select the **Square** connector.  Also, you can use the **Search** function to find the **Square** connector.  

---  
 

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/ChooseSquareConnector.png?raw=true)

---

2. Select the **Square** connector to start the configuration.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SquareSetDataflowName.png?raw=true)

---

3. Enter the **Display Name** to identify your Dataflow. 
4. In the **Description** box, you can enter an explanation of the connector.  
5. Click **Next**. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/ConnectToSquare.png?raw=true)

---

## To configure Square

Follow the below steps to configure the connection to Square:

1. Enter your credentials such as **API Key** and **URL** to configure with the Square connector. 

2. Click **Connect**. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SquareTableDetails.png?raw=true)  

---  

3. After configuration, you can enter the **Table Details** to process the data.  

> :grey_exclamation: **Note**: In the **Table Details** column, you can mark only those fields that you want to import and process the data.  

---  

|Item |Description |
| :- | :- |
|Purpose |Option to assign a purpose (Data, Metadata) for each table. |
|<center>Data</center>|Loads customer data. |
|<center>Metadata</center>|Loads Metadata. |
|Name|Displays the file name that you have imported. |
|Table Name |Displays the imported table name. |  

---  

4. Click **Save** to apply the changes. 


## Run, edit, and delete the imported data 


After saving the connection, the Square connector appears on the Dataflow page. Also, you can see the list of created entities in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SquareOutput.png?raw=true) 

---

|Item|Description|
| :- | :- |
|Name |Displays the name of the Dataflow. |
|Type |Displays connector type symbol. |
|Status |Indicates whether the data is imported successfully. |
|Tables Count |Displays the number of tables. |
|Created Date |Displays date of creation. |
|Updated Date |Displays last modified date. |
|Last Refresh |Displays the latest refresh date. This date will get updated whenever you refresh the data. |
|Group by |Option to view the items in a specific Group (For example, name, type, status). |  

---


1. Click on the connector on the Imports page that you want to modify.

2. You can select the horizontal ellipsis in the **Actions** column and do the following: 



|If you want to|Then|
| :- | :- |
|Modify the Dataflow |Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow |Select **Run**. |
|Bring the data to its previous state |Select **Rollback**. |
|Delete the Dataflow |Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow |Select **Run History**. |


> :grey_exclamation: **Note**: You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**. 


### Next step 


After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers. 



