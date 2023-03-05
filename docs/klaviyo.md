# Connecting to Klaviyo

## [Import data](#tab/tabid-1)

## Overview 

Klaviyo provides a marketing automation platform used primarily for email and SMS marketing. You can use SkyPoint's built-in connector for importing data from Klaviyo. 

This document will guide you through the process of connecting Klaviyo to SkyPoint Modern Data Stack Platform.

## Prerequisite 

You will need the following details to configure and import data using Klaviyo:

- [Klaviyo Account](https://www.klaviyo.com/login)
- API Key.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You need to create the API key by logging in to your Klaviyo account. You can refer to the Setting up Klaviyo document to learn more. 

## Import Data using Klaviyo connector 

1. In the left pane, go to **Dataflow** > **Imports**. 

The Dataflow window appears.  

![Alt text](/doc_snippets/ShopifyDataflow.png)  

2. Click **New Dataflow** to create dataflow.  

![Alt text](/doc_snippets/ShopifyDataflowName.png)  

3. Enter a **Name** to identify your Dataflow. 

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Name starts with a letter.  Use letters and numbers only. No spaces between letters.

4. Click **Next**. 

## Add Klaviyo Connector 

Follow the below steps to add Klaviyo connector:  

![Alt text](/doc_snippets/KlaviyoChooseConnector.png)  

1. In the **All** or **Marketing** categories tab, select the **Klaviyo** connector to start the configuration.

2. Also, you can use the **Search** function to find the **Klaviyo** connector.  

![Alt text](/doc_snippets/KlaviyoDataflowName.png)  

3. Enter the **Display Name** to identify your dataflow. 
4. In the **Description** box, you can enter an explanation of the connector.  
5. Click **Next**.  

![Alt text](/doc_snippets/ConnectToKlaviyo.png)  

## To configure Klaviyo

1. Enter **API Key** to configure with the Klaviyo connector.  
2. Click **Connect**.  

![Alt text](/doc_snippets/KlaviyoTableDetails.png)  

3. You can enter the **Table Details** to process the data. 

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> In the **Table Details** column, by default, all fields are selected. You can mark only those fields that you want to import and process the data. 

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

![Alt text](/doc_snippets/KlaviyoOutput.png)  

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

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

## [Setup guide](#tab/tabid-2)

## Overview

This document will help you gather all credentials for connecting Klaviyo with SkyPoint MDSP.

## Prerequisite

You should have access to an active [Klaviyo](https://www.klaviyo.com/login?next=/account) account. To manage the API keys, you must have an Owner, Admin, or Manager role on the account.

## To create an API key

Follow the below steps to create a Private API key:

1. Log in to your **Klaviyo** account.
2. Click **Account > Settings**.
3. Select **API Keys** tab.

![Alt text](/doc_snippets/Klaviyo_PrivateAPIkey.png)

4. Click **Create Private API Key**.
5. Name the API key.
6. Choose the **Scope** you want to give the API key.

![Alt text](/doc_snippets/Klaviyo_PrivateAPIkeyScope.png)

|Scope|Description|
|:-|:-|
|Read-only Key|Limits third party access to read-only for every API scope.|
|Full Access Key|Allows third parties to create, delete, or make changes for every API scope.|
|Custom Key|Allows you to decide how much access for each API scope to give the third party.|

7. Click **Create**.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can select the scope to control the access of information for the third party while sharing the private API key.  

---

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers.  



