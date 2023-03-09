# Connecting to Google Cloud Storage

## [Import data](#tab/tabid-1)

## Overview

Google cloud Storage enables you to store, access, and maintain data so that you do not need to own and operate data centers, moving expenses from a capital expenditure model to operational. You can use SkyPoint's built-in connector for importing data from Google Cloud Storage. 

This document will guide you through the process of connecting Google Cloud Storage to SkyPoint Modern Data Stack Platform.

## Prerequisite

You will need the following details to configure and import data using [Google Cloud Storage](https://cloud.google.com/storage):

- Access key ID and Secret access key
- Project ID
- Service URL
- Service account JSON file
- Google cloud bucket.

### Permissions required for Service account 

You can control the access to the resources in your Google Cloud project with the help of [IAM](https://cloud.google.com/storage/docs/access-control/iam) (Identity and Access Management). The resources comprise of Cloud Storage buckets and objects that are stored within buckets, along with other Google Cloud entities such as [Compute Engine instances](https://cloud.google.com/compute).

[Permissions](https://cloud.google.com/transfer-appliance/docs/4.0/prepare-permissions) allow principals to perform specific actions on buckets or objects in Cloud storage. There are two options to prepare the Google cloud permissions and storage:

- Option 1: Using the Transfer Appliance Cloud Setup Application
- Option 2: Configuring Google Cloud permissions and Cloud Storage step-by-step.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You need to create the JSON file and Permissions by logging into Google Cloud Console. You can refer to the Setting up Google Cloud Storage document to learn more.

## Import data using Google Cloud Storage connector

Follow the below steps to create a new dataflow for the Google Cloud Storage import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt text](/doc_snippets/Googlecloud_Setdataflowname.png)

3. In the **Set dataflow name** page, type dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt text](/doc_snippets/Googlecloud_Chooseconnector.png)

## To add Google Cloud Storage connector

1. In the **Choose connector** page, select **Google Cloud Storage** connector. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can use the **Search** feature too to find the connector. Also, the **Google Cloud Storage** connector can be found under **Cloud** category.

![Alt text](/doc_snippets/Googlecloud_Setdataflowconfigure1.png)

2. Enter **Display Name** for your dataflow in the text area.
3. Enter **Description** for your dataflow in the text area.
4. Click **Next**.

The **Connect to Google Cloud Storage** page appears.

![Alt text](/doc_snippets/Googlecloud_Configurationpage.png)

## To configure Google Cloud Storage

Follow the below steps to configure the connection to Google Cloud Storage:

1. Enter your credentials such as **Access key ID**, **Secret access key**, **Project ID**, and **Service URL** to configure with Google Cloud Storage.
2. Click **Choose file** to upload the JSON file.
3. Click the **Folder icon** in the **Google cloud bucket** text area.

Once you select the cloud bucket, the **Table Details** columns appear.

![Alt text](/doc_snippets/Googlecloud_Tabledetails.png)

4. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<Center>Data</Center>|Loads customer data.|
|<Center>Metadata</Center>|Loads Metadata.|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|
|Datetime format|Displays a number of **Datetime Formats** and SkyPoint’s Modern Data Stack Platform is set to automatically detect them.|
|Delimiter|Displays available separators for the variables in the imported data.|
|First Row as Header|Check the box for the system to automatically collect the data according to the Header Contents.|
|Advanced Settings|Select the options to fine tune the Import process with minute details.|
  
5. Click the **Advanced settings** for your desired file name.

The **Advanced settings** pop-up appears.

![Alt text](/doc_snippets/Googlecloud_Advancedsettings.png)
  
|Item|Description|
|:-|:-|
|Compression type|Method that is used for compressing the details from source, Azure Data Lake Storage Gen2.|
|Row delimiter|A separator that identifies the boundaries of the flow of a data stream. In case, a different separator is used in it, the information requires change for more accuracy in data ingestion.|
|Encoding|As the data comes in data stream, there is a type of encoding used for deciphering it. The default encoding is **UTF-8**.|
|Escape character|It is a particular case of metacharacters that is given an identification of start or end. You can manually select it from the drop-down list.|
|Quote character|You can select one of the advanced Quote characters mentioned in the drop-down list.|
  
6. Click **Save** on the **Advanced settings** pop-up to save the advanced settings.
7. Click **Save**.
  
## Run, edit, and delete the imported data
  
Once you save the connector, the Google Cloud Storage connector gets displayed in the list of tables created in the Dataflow page.

![Alt text](/doc_snippets/Googlecloud_Importoutput.png)
  
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
|See the run history of the Dataflow|Select **Run** history.|

## [Setup guide](#tab/tabid-2)

## Overview

Specific actions can be performed on buckets or objects in Cloud Storage by principals. This is enabled by Permissions. The process of giving permissions to the principals includes granting of roles, comprising of one or more permissions bundled with them. 

## Prerequisite

You need the following resources to set up permissions for service account:

- Google Cloud Storage bucket
- Google Cloud account.

## Download JSON to Set up Google Cloud Storage

Follow the below steps to download the JSON file from Google Cloud Storage console:

1. Log in to your [Google Cloud Storage console](https://developers.google.com/maps/premium/devconsole-access).
2. Go to **IAM & Admin > Service Accounts**.

![Alt text](/doc_snippets/Googlecloud_ConsoleServiceacc.png)

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> You can find your buckets in Cloud Storage > Buckets. You can create new buckets by clicking on **Create**.

3. In the Service accounts page, click the **Vertical ellipsis** under **Actions** column.

The **Actions** menu appears.

![Alt text](/doc_snippets/Googlecloud_ConsoleServiceacccreated.png)

4. Click **Manage keys**.
5. Click **ADD KEY > Create new key**.

The **Create private key** pop-up appears.

![Alt text](/doc_snippets/Googlecloud_ConsoleKeyJSON.png)

6. Select **JSON**.
7. Click **CREATE**.

The **Service Account JSON** file gets created. 

![Alt text](/doc_snippets/Googlecloud_Privatekeyoutput.png)

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You will have to upload this JSON file by clicking on Choose File while configuring the Google Cloud Storage import connector on SkyPoint Cloud.

## To add Permissions for Service Accounts

Follow the below steps to add permissions for your service accounts:

1. Go to **IAM & Admin > Service Accounts**.
2. Click **Permissions** tab.
3. Click **GRANT ACCESS**.

![Alt text](/doc_snippets/Googlecloud_Grantaccess.png)

4. In the **Grant access** page, click **ADD ANOTHER ROLE**.

![Alt text](/doc_snippets/Googlecloud_Addrole.png)

5. Select a desired role to assign under **Cloud Storage** in the **Role** drop-down list.
6. Click **Save**.

### Create a custom Role

In case, you need to create custom roles, follow the below steps:

1. Go to **IAM & Admin > Roles**.

![Alt text](/doc_snippets/Googlecloud_Createrole.png)

2. Click **CREATE ROLE**.

>  :grey_exclamation: **Note:** To edit an existing role, click the vertical ellipses under the Status column. This new role can be assigned in the Service Accounts.

3. Select **General Availability** in the **Role launch** stage drop-down list.
4. Click **ADD PERMISSIONS** to create permission for the assigned role.
5. Click **CREATE**.

![Alt text](/doc_snippets/Googlecloud_Roleedit.png)

---

## Next step
  
After completing the data import, start the [Master Data Management (MDM) - Stitch](https://docs.skypointcloud.com/docs/stitch.html) process to develop a unified view of your customers.   
  
  
  
  

