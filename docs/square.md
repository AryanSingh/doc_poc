# Connecting to Square

## [Import data](#tab/tabid-1)

## Overview 

Square is a financial service, merchant services aggregator, and mobile payments company. You can use SkyPoint's built-in connector for importing data from Square. 

This document will guide you through the process of connecting Square to SkyPoint Modern Data Stack Platform.

## Prerequisite 

You must have following details to configure and import data using Square:

- [Square Account](https://squareup.com/login) 
- URL
- API key. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can refer to the Square Setup Guide document to learn more about the Prerequisites.

## Import data using Square connector 

Follow below steps to create a new dataflow for Square import connector:

1. Go to **Dataflow** > **Imports**.
2. Click **New Dataflow**.

The **Set dataflow name** page appears. 

![Alt text](/doc_snippets/SetDataflowName.png) 

3. Enter a **Name** to identify your Dataflow.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Name starts with a letter.  Use letters and numbers only. No spaces between letters. 

4. Click **Next**. 

![Alt text](/doc_snippets/ChooseSquareConnector.png)

## To add Square connector 

1. In the **Choose connector** page, select **Square** connector.
  
> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can use the **Search** feature to find the connector. Also, the **Square** connector can be found under **Ecommerce** category.

![Alt text](/doc_snippets/SquareSetDataflowName.png)

2. Enter the **Display Name** to identify your Dataflow. 
3. In the **Description** box, you can enter an explanation of the connector.  
4. Click **Next**. 

![Alt text](/doc_snippets/ConnectToSquare.png)

## To configure Square

Follow the below steps to configure the connection to Square:

1. Enter your credentials such as **API Key** and **URL** to configure with the Square connector. 
2. Click **Connect**. 

![Alt text](/doc_snippets/SquareTableDetails.png)  

3. After configuration, you can enter the **Table Details** to process the data.  

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> In the **Table Details** column, you can mark only those fields that you want to import and process the data.  
 
|Item |Description |
| :- | :- |
|Purpose |Option to assign a purpose (Data, Metadata) for each table. |
|<center>Data</center>|Loads customer data. |
|<center>Metadata</center>|Loads Metadata. |
|Name|Displays the file name that you have imported. |
|Table Name |Displays the imported table name. |   

4. Click **Save** to apply the changes. 

## Run, edit, and delete the imported data 

Once you save the connector, the **Square** connector gets displayed in the list of tables created in the Dataflow page. 

![Alt text](/doc_snippets/SquareOutput.png) 

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

- Select the horizontal ellipsis in the **Actions** column and do the following:

|If you want to|Then|
| :- | :- |
|Modify the Dataflow |Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow |Select **Run**. |
|Bring the data to its previous state |Select **Rollback**. |
|Delete the Dataflow |Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow |Select **Run History**. |

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**. 

## [Setup guide](#tab/tabid-2)

## Overview

This document will help you gather credentials for connecting Square with SkyPoint MDSP.

## Prerequisite

You must have an active Square account.

## To find your App 

Below steps will guide you navigate on Square Developer Dashboard:

1. Log in to your [Square](https://squareup.com/login) account.
2. Scroll down the **All products** list.
3. Go to **Settings > App integrations**.

![Alt text](/doc_snippets/Square_SettingsApp.png)

4. Click **Manage** in **My Applications** page.

![Alt text](/doc_snippets/Square_Myapplications.png)

The **Application page** appears.

![Alt text](/doc_snippets/Square_Apppage.png)

### Finding the API key

1. Click **Credentials** in the application list.
2. Click **Show** on **Access token** text area to find the API key.

![Alt text](/doc_snippets/Square_FindAPIkey.png)

>  :grey_exclamation: **Note:** Personal Access Token provides access to your entire Square information. It should be kept confidential.

### Locating the URL

1. Go to **Application page > OAuth**.
2. Enter https://connect.squareup.com in the **Redirect URL** text area.

![Alt text](/doc_snippets/Square_OAuth.png)

3. Click **Save**.

---

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers. 



