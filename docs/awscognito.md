# Connecting to the Amazon Web Services (AWS) Cognito

## Overview

AWS Cognito is a user identity and data synchronization service that provides authentication, authorization, and user management for your web and mobile apps. AWS Cognito collects a user's profile attributes into directories and saves encrypted information as key-value pairs in the Amazon Cognito Sync store. 

You can use SkyPoint's built-in connector for importing data from AWS. SkyPoint Modern Data Stack Platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights.

## Prerequisite

- You have an [AWS account](https://aws.amazon.com/) and credentials such as User Pool ID, Access key ID, and Secret access key. If you want to create access keys, you can create them by using the [IAM console](https://console.aws.amazon.com/iam/).

## Import Data using AWS Cognito connector

Follow the below steps to create a new dataflow for the Cognito connector:

1. In the left pane, go to **Dataflow** > **Imports**.

The Dataflow window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Dataflow_window.png?raw=true)

---

2. Click **New Dataflow** to create dataflow.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SetDataflowName.png?raw=true)

---

3. Enter a **Name** to identify your Dataflow.

---

> :grey_exclamation: **Note**: Name starts with a letter.  Use letters and numbers only. No spaces between letters.

---

4. Click **Next**.

## Add AWS Cognito Connector

1. In the **All categories** or **Services and apps** tab, select the **AWS Cognito** connector to start the configuration.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/AWSCognito_ChooseConnector.png?raw=true)  

---

2. Also, you can use the **Search** function to find the **AWS Cognito** connector.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/AWSCognito_SetDataflowName.png?raw=true)  

---

3. In the **Set dataflow name**, enter the **Display Name** to identify your dataflow.
4. In the **Description** box, you can enter an explanation of the connector. 
5. Click **Next**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/AWSCognito_Configuration.png?raw=true)  

---  

## To configure AWS Cognito

1. Enter your [credentials](https://kwicloud9docs.com/kwi-api-details/) such as **User Pool ID**, **Access key ID**, **Secret access key**, and **Region** to configure with the AWS Cognito connector. For details about AWS Cognito and how to get the credentials, click [Getting credentials](https://docs.aws.amazon.com/cognito/latest/developerguide/getting-credentials.html).  

2. Click **Connect**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/AWSCognito_EntityDetails.png?raw=true)  

---

3. Enter the **Table Details** to process the data.

|Item|Description|
| :- | :- |
|Purpose|Option to assign a purpose (All, Customer 360, or Privacy-Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|  

---

> :grey_exclamation: **Note**: After configuration, it lists down all the tables in the **Table Details** that are part of the connector. For a single table, it displays by default (this information is client connector specific and what tables that given connector supports) on successful connection. However, for multiple tables, you can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.

---

4. Click **Save** to apply the changes.

## Run, edit, and delete the imported data

1. After saving the connection, the AWS Cognito connector appears on the Dataflow page. Also, you can see the list of created tables in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/AWSCognito_Output.png?raw=true)

---

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

---

> :grey_exclamation: **Note:** You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

---

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers. 

