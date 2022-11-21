# Connecting to Klaviyo

## Overview 


Klaviyo provides a marketing automation platform used primarily for email and SMS marketing. You can use SkyPoint's built-in connector for importing data from Klaviyo. SkyPoint Modern Data Stack Platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights. 


## Prerequisite 

You will need the following details to configure and import data using Klaviyo:

You need to have [Klaviyo Account](https://www.klaviyo.com/login) and credentials such as an API key to start the configuration. 

- [Klaviyo Account](https://www.klaviyo.com/login)
- [API Key](https://developers.klaviyo.com/en/v1-2/docs/retrieve-api-credentials).
 
---

>  :grey_exclamation: **Note**: You need to create the API key by logging in to your Klaviyo account. You can refer to the Setting up Klaviyo document to learn more.

---
 

## Import Data using Klaviyo connector 

1. In the left pane, go to **Dataflow** > **Imports**. 

The Dataflow window appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/ShopifyDataflow.png?raw=true)  

---

2. Click **New Dataflow** to create dataflow.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/ShopifyDataflowName.png?raw=true)  

---

3. Enter a **Name** to identify your Dataflow. 

---

> :grey_exclamation: **Note**: Name starts with a letter.  Use letters and numbers only. No spaces between letters.

---

4. Click **Next**. 


## Add Klaviyo Connector 

Follow the below steps to add Klaviyo connector:  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/KlaviyoChooseConnector.png?raw=true)  

---

1. In the **All** or **Marketing** categories tab, select the **Klaviyo** connector to start the configuration.

2. Also, you can use the **Search** function to find the **Klaviyo** connector.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/KlaviyoDataflowName.png?raw=true)  

---

3. Enter the **Display Name** to identify your dataflow. 
4. In the **Description** box, you can enter an explanation of the connector.  
5. Click **Next**.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/ConnectToKlaviyo.png?raw=true)  

---

## To configure Klaviyo

1. Enter **API Key** to configure with the Klaviyo connector.  
2. Click **Connect**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/KlaviyoTableDetails.png?raw=true)  

---

3. You can enter the **Table Details** to process the data. 

---

> :grey_exclamation: **Note**: In the **Table Details** column, by default, all fields are selected. You can mark only those fields that you want to import and process the data. 

---

|Item |Description |
| :- | :- |
|Purpose |Option to assign a purpose (Data, Metadata) for each table. |
|<center>Data</center>|Loads customer data. |
|<center>Metadata</center>|Loads Metadata. |
|Name|Displays the name of the file that you imported. |
|Type|Displays the imported data type.|


4. Click **Save** to apply the changes. 


## Run, edit, and delete the imported data 


After saving the connection, the Klaviyo connector appears on the Dataflow page. Also, you can see the list of created entities in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/KlaviyoOutput.png?raw=true)  

---

|Item |Description |
| :- | :- |
|Name |Displays the name of the Dataflow. |
|Type |Displays connector type symbol. |
|Status |Indicates whether the data is imported successfully. |
|Tables Count |Displays the number of entities. |
|Created Date |Displays date of creation. |
|Updated Date |Displays last modified date. |
|Last Refresh |Displays the latest refresh date. This date will get updated whenever you refresh the data. |
|Group by |Option to view the items in a specific Group (For example, name, type, status). |  


1. Click on the connector on the Imports page that you want to modify.
2. Select the horizontal ellipsis in the **Actions** column and do the following: 

|If you want to |Then |
| :- | :- |
|Modify the Dataflow |Select **Edit** and modify the Dataflow. Click **Save** to apply your changes. |
|Execute the Dataflow |Select **Run**. |
|Bring the data to its previous state |Select **Rollback**. |
|Delete the Dataflow |Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow |Select **Run History**. |  

---

> :grey_exclamation: **Note**: You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

---

### Next step 


After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers.  



