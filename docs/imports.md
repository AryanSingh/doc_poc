# Importing Data in the Dataflow

## Overview

Dataflow allows you to import data from the relevant sources, transform, and load it into the Lakehouse. SkyPoint imports raw customer data from across systems and applications with over 200 connectors spanning e-commerce platforms, marketing automation tools, email service providers, cloud platforms, and many more.

## To add new Dataflow

1. In the left pane, go to **Dataflow** > **Imports**.

The Dataflow window appears.

---

![Alt text](/doc_snippets/Dataflow_window.png)

---

2. Click **New Dataflow** to create dataflow.

---

![Alt text](/doc_snippets/SetDataflowName.png)

---

3. Enter a **Name** to identify your Dataflow.


> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Name starts with a letter.  Use letters and numbers only. No spaces between letters.


4. Click **Next**.

## Add connectors

1. Choose one of the existing **Connectors** to access the data.

---

![Alt text](/doc_snippets/Dataflow_Connector.png)

---


|<div style="width:150px">Connector type</div>|Description|
|:---|:---|
|All Categories|Displays all types of connectors that are available on the SkyPoint platform.|
|Analytics|You can simplify big data and run parallel data transformation and processing programs. These connectors enable you to connect with analytics-based connectors.|
|Cloud|The Cloud connector is used to integrate with cloud providers.|
|Data Warehousing|You can connect to the data management system that is designed to enable and support Business Intelligence (BI) activities. These connectors enable you to import data from data warehouses.|
|Developer Tools|This is a set of services and features that connect you to develop a software application.|
|Ecommerce|These connectors allow you to integrate with various eCommerce platforms and marketplaces for data exchange.|
|Healthcare|These connectors allow you to connect with a health organization or insurer. Also, you can exchange Electronic Health Records (EHR).|
|Marketing|You can import marketing data into SkyPoint Lakehouse to gain new business insights. Marketing connectors synchronize data between a marketing environment and the SkyPoint platform.|
|Sales|You can import data with Sales connectors to build relationships and increase your sales.|

---


2. You can use the search function to find the available connectors. For more information about different type of connectors and their configuration, refer to the [Connector section](https://skypointcdpdocs.z22.web.core.windows.net/docs/connectors.html).

---

![Alt text](/doc_snippets/DataflowName.png)

---

3. Enter the **Display Name** and the **Description** of the connector. 
4. Click **Next**.

---

![Alt text](/doc_snippets/DataflowConfiguration.png)

---

5. Enter the account credentials to configure with the selected connector.  

<br>

> [!Tip]  
> For each connector, credentials may differ. You need to enter the relevant information based on the connector to configure and import the data. In this example, we have selected the Azure Data Lake Storage Gen2 connector to import data. For the Azure Data Lake Storage Gen2 connector, you need to enter the **Storage account name**, **Account key**, and **Storage path** to import the data.  

<br>

6. If you want to keep the same date-time format for all the tables, select the check box.
7. Click **Save**
8. Select the **Table Details** to process the data.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> After configuration, it lists down all the tables in the **Table Details** that are part of the connector. For a single table, it displays by default (this information is client connector specific and what tables that given connector supports) on successful connection. However, for multiple tables, you can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.

---

![Alt text](/doc_snippets/DataflowEntityDetails.png)

---

| Item                      |Description|
|:--------------------------|:---|
| Purpose                   |Option to assign a purpose (Data or Metadata) for each table.|
| <center>Data</center>     |Load customer data|
| <center>Metadata</center> |Load Metadata|
| File name                 |Indicates file extension and the name of the file that you imported.|
| Table name                |Displays the imported table name. By default, it is an imported table name, but you can also change it.|
| Datetime format           |Option to select the Datetime data in a different format.|
| Delimiter                 |Indicates characters that separate text strings. |
| First row as header       |Indicates the first row of data as a header.|

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can select the Datetime in MM/DD/YYYY format, for example, 11/25/1979. It helps the system to understand the data format and apply further formatting if required during downstream processes. The same Datetime format as set in the [instance settings](https://skypointcdpdocs.z22.web.core.windows.net/docs/instance.html) can be seen for the Datetime fields in the profile card. If you wish to see the profile card with Datetime as imported from the source, you can unselect the option in **Stitch** > **Map** > **advanced settings**.

9. If necessary, apply the **Advance settings** to modify the default settings.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Advanced settings allow you to modify the default settings. It gives more flexibility to apply advanced use cases. However, the default settings are adequate to perform the task.

---

![Alt text](/doc_snippets/DataflowAdvancedSettings.png)

---

|If you want to|Then|
| :- | :- |
|Modify data types such as fixed or variable data types.|Select from the **Compression type**. It allows you to reduce the size of data by removing the number of bits.|
|Change the delimiter|Click **Row delimiter**. By default, a column delimiter is selected, and each row is separated with a comma.|
|Change information or instruction|Choose from the **Encoding** list. By default, UTF-8 encoding is selected.|
|Modify the escape character such as backslash (\\) or slash (/)|Select from the **Escape character**.|
|Apply different quote characters such as Single quote (') or Double quote (").|Select from the **Quote character**.|

10. Click **Save** to apply the changes.

## Run, edit, and delete the imported data

1. After saving the connection, imported data appears on the Dataflow page. Also, you can see a list of the created tables in the [Databases](entities.md) section.

---

![Alt text](/doc_snippets/DataflowOutput.png)

---

|Item|Description|
| :- | :- |
|Name|Displays the name of the imported Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Last refresh type|Displays the refresh value. You can see the value is Full or Incremental after the last refresh of data.|
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
|See the run history of the Dataflow|Select **Run history**. Run history for Dataflow imports is available for the last three runs.|

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The **Run history** for SQL connector import in Dataflow shows all the states for ingestion and the completion time reflects the complete time for the pipeline completion. Also, You can see the error message corresponding to failure while importing data from a data source under Description. 

---

![Alt text](/doc_snippets/DataflowRunHistory.png)

---

### Next step 

After completing the data import, start the [Master Data Management (MDM) - Stitch process](stitch.md) to develop a unified view of your customers.

### See also

- [Dataflow](dataflows.md)
- [Connectors](connectors.md)
- [Databases](entities.md)

