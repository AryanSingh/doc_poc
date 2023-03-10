# Exporting Data from the Dataflow

## Overview

The Export process in the Dataflow transfers unified data to storage accounts, data warehouses, tools, and other external business applications. You need to connect with a storage service to export the data. After connection, you can transfer your data to various applications.

## Prerequisite

- You have credentials to configure with your storage service.

## To export data from the Dataflow

- In the left pane, go to **Dataflow** > **Exports**.

The Exports window appears. By default, the **Export Gallery** page opens.

---

![Alt text](/doc_snippets/ExportGallery.png)

---

| <div style={{width:"100px"}}>Item</div> |Description|
|:----------------------------------------|:---|
| Export Gallery                          |Displays all export destinations to build setup.|
| Destinations                            |Displays the name, type, and status of all exported data. Also, you can add new Export.|
| Run History                             |Displays the execution history of the Export process.|


## Set up a new export

1. You can add the export connection in two ways. However, the procedure is similar in both cases. These are as follows:
- In the **Export Gallery** tab, select the export destination.
- In the **Destinations** tab, click **Add Export** to configure with storage service.
2. If you add an export connection through **Export Gallery**, click **Set up** to create a new export.

The Setup window appears.

---

![Alt text](/doc_snippets/ExportSetUp.png)

---

3. Enter **Name** and **Display name**.

> ![image](/doc_snippets/Note_icon.png)**NOTE**
>
> Name start with a letter. Use letters and numbers only.

4. Enter the credentials of the storage service for validation. If you have already created an export connection and you want to copy the credentials, then choose **Select from existing**.
5. Click **Next**.

---

![Alt text](/doc_snippets/ExportSelectEntities.png)

---

6. Select the tables that you want to export and click **Next**.

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> You can export the Audiences created from Prediction models. This allows for having targeted audience with high value to the Organization or customers about to churn.

---


![Alt text](/doc_snippets/AttrributesToBeExported.png)


---


7. Select the attributes that you want to export and click **Create**.


<br/>


> [!Tip]  

> The Export setup consists of three steps, and you need to perform them in the following order:

> 1. Configure with the storage service.

> 1. Select the tables.

> 1. Select the attributes.  

> 

> The above images are shown the SFTP set up to connect and export data from the SkyPoint platform. If you have already created an SFTP connection, then click **Select from exiting** to enter your credentials. However, for a new SFTP connection, enter SFTP credentials such as **Host**, **Port, Host Key Fingerprint, Username**, **Password**, and **Storage Path**. Similarly, based on the storage service (file-based or API-based), you need to enter the credentials to build the configuration. Then, select the tables and attributes to export data from the SkyPoint platform.


> ![image](/doc_snippets/Note_icon.png)**Note**

>

> If you configure it with API-based connector, click **Save** after entering the valid API key. The system would not allow proceeding without providing the API key.


## Run, Cancel Run, and Remove the exported data


1. After creating an export connection, it appears in the **Destinations** tab.


---


![Alt text](/doc_snippets/ExportsOutput.png)


---



|<div style={{width:"100px"}}>Item</div>|Description|
| :- | :- |
|Name|Name of the Export connection. |
|Display Name|Displays the name of the exported data. It can be different from the Export connection name. Also, you can change this later.|
|Type|Displays the connector type.|
|Created|Displays date of creation.|
|Last Exported|Displays last modified date.|
|Status|Indicates whether the data is exported successfully.|
|All|Option to view all export connections. Also, you can view the items in a specific Group (for example, name, type, status).|


---


2. Select the horizontal ellipsis in the **Actions** column and do the following:



|If you want to|Then|
|:---|:---|
|Modify the Export|Select **Edit**.|
|Execute the Export process|Select **Run**.|
|Cancel the execution of the data export|Select **Cancel Run**.|
|Configure a refresh schedule to add new or updated data in the Export|Select **Schedule**.|
|Delete the Export|Select **Remove**.|
|See the history of the Export|Select **History**.|


### Check real-time Export status


Follow the below steps to check the real-time status of your data exports:


1. Go to **Exports > Destinations**.

2. Click the three horizontal ellipsis under the **Actions** column for your export.

3. Click **History** on the **Actions** menu.


The **Export History** pop-up appears, displaying the real-time export details.


---


![Alt text](/doc_snippets/Export_History.png)


---


## Edit the Export


You can update the exported data for the existing storage account.


1. Go to **Dataflow** > **Exports**.

2. Open the **Destinations** tab and select the export that you want to update.

3. In the **Actions** column, click the horizontal ellipsis and select **Edit**.

4. Modify the data and select **Update**.

5. Click **Run** to execute modification.  


## Schedule the Export


SkyPoint platform provides you to set a time for new or updated data to include in the exported file. The Export process runs whenever the system refreshes data or system refresh is triggered. With the **Schedule** feature, you can customize the refresh schedule. By default, export runs as part of every scheduled system refresh run for the particular instance. The system refresh schedule is shown on the **Settings** page. You can check through **Settings** > **Schedule**.


1. Go to **Dataflow** > **Exports**.

2. Open the **Destinations** tab and select the export that you want to schedule.

3. In the **Actions** column, click the horizontal ellipsis and select **Schedule**.


The Schedule window appears.


---


![Alt text](/doc_snippets/ExportSchedule.png)


---


4. To activate the scheduled export automatically, click on the **Schedule run** button to set **On**. If turned off, the export will only run if activated manually.

5. Choose a **Recurrence** value to refresh the exported data automatically.

6. Click **Save** to apply your changes.


## To export metadata along with CSV files


You can export a metadata JSON file, containing information about the purpose, frequency, etc. The metadata JSON file is exported with each exported CSV file.


Follow the below steps:


1. Go to **Dataflow > Exports**.

2. In the **Exports** page, click **Destinations** tab.

3. Select the created Export connector and click the horizontal ellipses under **Actions** column. 

4. Click **Edit**.


The **Edit export** form appears.


---


![Alt text](/doc_snippets/Exports_Metadata1.png)


---


5. Click **Next** and select a table for export.

6. Add key-value pairs in the **Metadata to be exported** section. You can add up to 10 key-value pairs.

7. Click **Update**.


### See also

- [Dataflows](https://skypointcdpdocs.z22.web.core.windows.net/docs/dataflows.html)

- [Platform Schedule Settings](https://skypointcdpdocs.z22.web.core.windows.net/docs/schedule.html)

- [Connectors](https://skypointcdpdocs.z22.web.core.windows.net/docs/exportoverview.html)
