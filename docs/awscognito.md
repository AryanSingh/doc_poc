# Connecting to the Amazon Web Services (AWS) Cognito

## [Import data](#tab/tabid-1)

## Overview

AWS Cognito is a user identity and data synchronization service that provides authentication, authorization, and user management for your web and mobile apps. You can use SkyPoint's built-in connector for importing data from AWS Cognito. 

This document will guide you through the process of connecting AWS Cognito to SkyPoint Modern Data Stack Platform.

## Prerequisite

You will need the following details to configure and import data using AWS Cognito:

- [AWS account](https://aws.amazon.com/) 
- User Pool ID
- Access key ID
- Secret access key. 

>  :grey_exclamation: **Note:** You can refer to the InforHMS Set up Guide document to learn more about the Prerequisites.

## Import Data using AWS Cognito connector

Follow the below steps to create a new dataflow for the Cognito connector:

1. In the left pane, go to **Dataflow** > **Imports**.

The Dataflow window appears.

![Alt text](/doc_snippets/Dataflow_window.png)

2. Click **New Dataflow** to create dataflow.

![Alt text](/doc_snippets/SetDataflowName.png)

3. Enter a **Name** to identify your Dataflow.

> :grey_exclamation: **Note**: Name starts with a letter.  Use letters and numbers only. No spaces between letters.

4. Click **Next**.

## Add AWS Cognito Connector

1. In the **All categories** or **Services and apps** tab, select the **AWS Cognito** connector to start the configuration.  

![Alt text](/doc_snippets/AWSCognito_ChooseConnector.png)  

2. Also, you can use the **Search** function to find the **AWS Cognito** connector.  

![Alt text](/doc_snippets/AWSCognito_SetDataflowName.png)  

3. In the **Set dataflow name**, enter the **Display Name** to identify your dataflow.
4. In the **Description** box, you can enter an explanation of the connector. 
5. Click **Next**.

![Alt text](/doc_snippets/AWSCognito_Configuration.png)  

## To configure AWS Cognito

1. Enter your credentials such as **User Pool ID**, **Access key ID**, **Secret access key**, and **Region** to configure with the AWS Cognito connector.    

2. Click **Connect**.

![Alt text](/doc_snippets/AWSCognito_EntityDetails.png)  

3. Enter the **Table Details** to process the data.

|Item|Description|
| :- | :- |
|Purpose|Option to assign a purpose (All, Customer 360, or Privacy-Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|  

> :grey_exclamation: **Note**: After configuration, it lists down all the tables in the **Table Details** that are part of the connector. For a single table, it displays by default (this information is client connector specific and what tables that given connector supports) on successful connection. However, for multiple tables, you can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.

4. Click **Save** to apply the changes.

## Run, edit, and delete the imported data

1. After saving the connection, the AWS Cognito connector appears on the Dataflow page. Also, you can see the list of created tables in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section.

![Alt text](/doc_snippets/AWSCognito_Output.png)

|Item|Description|
| :- | :- |
|Name|Displays the name of the Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Table Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Updated Date|Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific Group (For example, name, type, status).|

2. Select the horizontal ellipsis in the **Actions** column and do the following:

|If you want to|Then|
| :- | :- |
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run History**.|

> :grey_exclamation: **Note:** You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

## [Setup guide](#tab/tabid-2)

## Overview

This document will help you gather all credentials for connecting AWS Cognito with SkyPoint MDSP.

## Prerequisite

You must have the following details:

- An admin access in AWS console.

## To find User pool ID

Follow below steps to find the User pool ID:

1. Log in to your [AWS console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_ap-northeast-1_8a684904bdeaf413&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=le9NjcCPfq1AGl2y-OIrdj_ePPrnFUg4pqDsJNSdslk&code_challenge_method=SHA-256).
2. Go to **Cognito > User pools**.

![Alt text](/doc_snippets/AWScognito_UserpoolID.png)

## To find Access key ID 

Follow below process to locate your Access key:

1. Go to **IAM > Users > Security credentials**.
2. You can locate the **Access key ID** in **Access keys** section.

![Alt text](/doc_snippets/AWScognito_Accesskey.png)

## To locate Secret access key

1. Go to **IAM > Users > Security credentials**.
2. Click **Create access key** in the **Access keys** section.
3. Download the file containing **Access key ID** and **Secret access key**.

>  :grey_exclamation: **Note:** The Secret access key is shown only once, so, it is a best practice to download the file and store it safely.

## To identify the Region

You can locate the region of data to import in the AWS console. Follow below steps:

1. Go to **AWS console > User Pools**.
2. Click **Location** drop-down list.
3. Select your desired location from the Location drop-down list.

![Alt text](/doc_snippets/AWScognito_Region.png)

>  :grey_exclamation: **Note:** The selection of region is based on your AWS Cognito setup.

4. Once you select the **Region**, the **User pools** for that region is displayed along with the **User pool ID**, **Created time**, and **Last updated time**.

![Alt text](/doc_snippets/AWScognito_Regionselected.png)

---

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers. 

