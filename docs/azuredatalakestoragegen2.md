# Connecting to Azure Data Lake Storage Gen2 

## [Import data](#tab/tabid-1)

## Overview

You can make Azure Storage the foundation for building enterprise data lakes on Azure with the help of [Azure Data Lake Storage Gen2](https://azure.microsoft.com/en-in/pricing/details/storage/data-lake/). You can use SkyPoint's built-in connector for importing data from Azure Data Lake Storage Gen2. 

This document will guide you through the process of connecting Azure Data Lake Storage Gen2 to SkyPoint Modern Data Stack Platform. 

## Prerequisite

You will need the following details to configure and import data using Azure Data Lake Storage Gen2 connector:

- Storage account name
- Account key details
- Storage path.

## Import data using Azure Data Lake Storage Gen2 connector

Follow the below steps to create a new dataflow for the Azure Data Lake Storage Gen2 import connector:

1. Go to **Dataflow > Imports**.
2. Click **New dataflow**.

The **Set dataflow name** page appears.

![Alt text](/doc_snippets/ADLSGen2_Setdataflowname.png)

3. In the **Set dataflow name** page, type Dataflow name in the **Name** text area.
4. Click **Next**.

The **Choose connector** page appears.

![Alt text](/doc_snippets/ADLSGen2_Chooseconnector.png)

## To choose Azure Data Lake Storage Gen2 connector

1. In the **Choose connector** page, select **Azure Data Lake Storage Gen2** connector.

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> You can use the Search feature to find the connector. Also, the Azure Data Lake Storage Gen2 connector is available under both Analytics and Cloud categories.

The **Set dataflow name** page appears.

![Alt text](/doc_snippets/ADLSGen2_Setdataflowdisplayname.png)

2. Type a **Display Name** for your dataflow in the text area.
3. Type a **Description** for your dataflow in the text area.
4. Click **Next**.

The **Configuration** page appears.

![Alt text](/doc_snippets/ADLSGen2_ADLSConfiguration.png)

## To configure Azure Data Lake Storage Gen2 

Follow the below steps to configure the connection to **Azure Data Lake Storage Gen2**:

1. Type the **Storage account name** in the text area.
2. Type the **Account key** in the text area.
3. Click the **Folder icon** in the **Storage path** text area.

Once you select your Storage path, the **Table Details** columns appear.

![Alt text](/doc_snippets/ADLSGen2_Configurationtabledetails.png)

4. Enter the **Table Details** to process the data.

|Item|Description|
|:-|:-|
|Purpose|Option to assign a purpose (Data or Metadata) for each table.|
|<center>Data</center>|Loads customer data.|
|<center>Metadata</center>|Loads Metadata.|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|
|Datetime format|Displays a number of **Datetime Formats** and SkyPoint’s Modern Data Stack Platform is set to automatically detect them.|
|Delimiter|Displays available separators for the variables in the imported data.|
|First Row as Header|Check the box for the system to automatically collect the data according to the Header Contents.|
|Advanced Settings|Select the options to fine tune the Import process with minute details.|
    
5. If necessary, apply the **Advance settings** to modify the default settings.

The **Advanced settings** pop-up appears.    
    
![Alt text](/doc_snippets/ADLSGen2_Advancesettings.png)

> :grey_exclamation: **Note**: Advanced settings allow you to modify the default settings. It gives more flexibility to apply advanced use cases. However, the default settings are adequate to perform the task.  

|If you want to|Then|
| :- | :- |
|Modify data types such as fixed or variable data types.|Select from the **Compression type**. It allows you to reduce the size of data by removing the number of bits.|
|Change the delimiter|Click **Row delimiter**. By default, a column delimiter is selected, and each row is separated with a comma.|
|Change information or instruction|Choose from the **Encoding** list. By default, UTF-8 encoding is selected.|
|Modify the escape character such as backslash (\\) or slash (/)|Select from the **Escape character**.|
|Apply different quote characters such as Single quote (') or Double quote (").|Select from the **Quote character**.|
    
6. Click **Save**.
    
## Run, edit, and delete the imported data

Once you save the connector, the Azure Data Lake Storage Gen2 connector gets displayed in the list of tables created in the Dataflow page.
        
![Alt text](/doc_snippets/ADLSGen2_Output.png)

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

This document will help you gather all credentials for connecting Azure Data Lake Storage Gen2 with SkyPoint MDSP.

## Prerequisite

You must have an [Azure](https://azure.microsoft.com/en-us/free/) account. 

## To Create a Storage Account

Follow below steps to create a storage account:

1. Log in to **Microsoft Azure**.
2. Go to **Azure services > Storage accounts**.

![Alt text](/doc_snippets/ADLSGen2_Azurehomepage.png)

3. Click **Create**.

### Creating Storage account name

1. Go to **Create a storage account > Basics**.
2. Fill the information to create a new **Storage account**.
   - Type a desired **Storage account name** in the text area.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> The name must be unique across all existing storage account names in Azure. It must be 3 to 24 characters long and can contain only lowercase letters and numbers.

![Alt text](/doc_snippets/ADLSGen2_Createstorageaccount.png)

   - In **Advanced** tab, check **Enable hierarchical namespace** under **Data Lake Storage Gen2** section to create your ADLS Gen2 storage account.

![Alt text](/doc_snippets/ADLSGen2_enablenamespace.png)

  - Fill all text areas under each tab to configure and create your storage account.

### Finding the Account Key

Follow below steps to find the account key for your storage account:

1. Go to **Storage account > Access Key**.

![Alt text](/doc_snippets/ADLSGen2_Accesskeys.png)

2. Click **Show** for the **Key** text area.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Copy this Key and paste it in the Account Key text area of your SkyPoint’s Azure Data Lake Storage Gen2 configuration form.

---

## Next step
    
After completing the data import, start the [Master Data Management (MDM) - Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html) process to develop a unified view of your customers. 
