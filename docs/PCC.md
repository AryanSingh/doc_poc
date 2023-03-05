# Connecting to PointClickCare  

## Overview

PointClickCare (PCC) connector facilitates the secure transfer of patient information from the Electronic Health Record (EHR) system, ensuring patient data privacy and compliance with regulations. This enables healthcare providers to access and share important patient information across different systems, improving the quality of care and enhancing collaboration among healthcare teams.

You can connect the PCC to SkyPoint Studio and perform various tasks such as data ingestion, unification, transformation, and enrichment to gain insights from the data. You can use SkyPoint's built-in connector for importing data from PCC. 

This document will guide you through the process of connecting PCC to the SkyPoint Modern Data Stack Platform (MDSP).

## Prerequisite

You will need the following details to configure and import data using the <a href="https://pointclickcare.com/" target="_blank">PCC&#x21D7;</a> connector:

- Client Id
- Client Secret
- Application Name
- Organization Uuid
- Certificate
- Certificate Password (optional)

## To import data using the PCC connector

Follow the below steps to create and configure a new dataflow for the PCC import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt image](/doc_snippets/PCC_SetDataflow.png)

3. Enter the dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt image](/doc_snippets/PCC_ChooseConnector.png)

### Add PCC connector  

1. In the **Choose connector** page, select **PointClickCare** connector. You can use the **Search** feature to find the connector. Also, the PCC connector can be found under the **Healthcare** category.

![Alt image](/doc_snippets/PCC_SetDataflowName.png)

2. Enter the **Display Name** for your dataflow in the text area.
3. You can add a **Description** in the text area.
4. Click **Next**.

The **Configuration** page appears.

![Alt image](/doc_snippets/PCC_Configuraion.png)

### Connect to the PCC account


Log in to your PCC account using your username and password. If you do not have an account, you can create one by visiting the <a href="https://pointclickcare.com/" target="_blank">PCC website&#x21D7;</a>. Go to the <a href="https://developer.pointclickcare.com/spa/" target="_blank">PCC developer portal&#x21D7;</a> and register your application to use API. When an application is registered, you will get the credentials to establish configuration.

1. Enter **Client Id** the unique identifier assigned to your application.
2. Enter the **Client Secret** code assigned to your application.
3. Enter the **Application Name** assigned to your application.
4. Enter the **Organization Uuid** assigned to your organization within the PCC system.
5. Upload the **Certificate** used in the SSL/TLS protocol to encrypt the communication between the client and server and establish a secure connection.
6. If necessary, enter the **Certificate Password** associated with the client certificate.
7. Click **Connect**.

Once the connection is established, you can use the connector to import data from a table in PCC.

![Alt image](/doc_snippets/PCC_TableDetails.png)

8. In the **Table details** section, each table is identified by a row. Click the checkbox to select the table for import and use the dropdown to mark it as **Data** or **Metadata**.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> In the **Table Details** section, by default, all tables are selected. You can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.


|Item|Description|
| :- | :- |
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|File name|Displays the name of the file that you imported.|
|Entity name|Displays the imported table name. By default, it is an imported table name, but you can rename it later.|

9. Click **Save** to apply the changes.

After saving the connection, the PCC connector appears on the **Dataflow** > **Imports** page.

## Run, edit, and delete the imported data

Once the table is imported, you can execute, modify, and remove the imported table from the Dataflow. Follow the below steps:

1. Go to the **Dataflow** > **Imports page**.

![Alt image](/doc_snippets/PCC_Output.png)


|Item|Description|
| :- | :- |
|Name|Displays the name of the imported Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables count|Displays the number of tables imported.|
|Created Date|Displays date of creation.|
|Last refresh type|Displays the refresh value: Full or Incremental.|
|Updated Date|Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific group. For example, type, status, tables count, etc.|

2. Select the horizontal ellipsis under the **Actions** column and do the following:

|If you want to|Then|
| :- | :- |
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run history**.|

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run History** > **Description**. Also, you can see the status, start time, and end time for the execution of the data pipeline.  

### Next step  

After completing the data import, start the [Master Data Management (MDM) - Resolve](https://docs.skypointcloud.com/docs/stitch.html) process to create a single, unified view of the data. With SkyPoint MDM, you can ensure that your data is accurate, consistent, and reliable, making it easier to use for business processes, analytics, and reporting.
