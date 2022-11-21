# Azure Data Lake Storage Gen2

Export lets you extract data from the Lakehouse and load it into Azure Data Lake Storage Gen2

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/AzureDataLakeGen2_Export.PNG?raw=true)

## Step 01 - Add export

- Click on **Add export** on the left top corner of the screen.
    - Enter a Name. (Name starts with a letter and only **Letters** and **Numbers** are allowed. No Spcaes)
    - Display name (which displays the name in the UI of the export saved).
    - Select credentials:
      - Select from existing
      - Create new

## Step 02 - Select from existing
**In order to allow SkyPoint access to your _Azure Data Lake Storage Gen2_ account, you'll need the following details:**
-**Select Dataflow**
- **Account Name** (Check with Microsoft for Azure Data Lake Storage Gen2 credentials.)
- **Account key**
- **Container**
- **TenantID**
- **AppID**
- **AppKey**
- Click **Next** Button.

## Step 02 - Select from new
**In order to allow SkyPoint access to your _Azure Data Lake Storage Gen2_ account, you'll need the following details:**
- **Account Name** (Check with Microsoft for Azure Data Lake Storage Gen2 credentials.)
- **Account key**
- **Container**
- **TenantID**
- **AppID**
- **AppKey**
- Click **Next** Button.

## Step 03 - Entities to export
Here all the Lakehouse data will be available Entity wise.
- Select the entities from the list to be exported
- Click **Create** and then click on three dot button and select **Run**.
    - The export will be started.

## Step 04 - Download Exported Data
The data gets exported in the form of csv file/s that gets stored in the storage account under the specified container with the same name as the export name. To access those files, follow the steps.

- Open Mircosoft Azure Storage Explorer and go the storage account selected in the second step during export.
- Navigate to the selected container and click on it.
- You will see a folder named **export-entity**. Double click to open the folder and you will see the exported csv file/s there.
- Double click on the csv files you want to download and the download will start.
