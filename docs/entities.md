# Exploring the Databases

## Overview  

---

![Alt text](/doc_snippets/databases.png)  

---

A database is a collection of data or structured information. It consists of multiple rows and columns. Each row represents a record, and each column represents an attribute. A database may match the schema of an attribute that is a part of the Lakehouse, defining a common language for business data. Any data changes made through Lakehouse SQL will be synched to Lakehouse. The addition or deletion of records in a table through Lakehouse SQL updates the cosmos metadata.

## To select and explore a Database

For every import, SkyPoint adds a database to its analytical store known as Lakehouse.

1. In the left pane, go to the **Lakehouse** > **Databases**.

The **Databases** window appears. The storage is organized into three layers, namely:

- **Bronze** – Tables of raw data ingested from various sources in the Dataflow with every light transformation.
- **Silver** – Refined and transformed view of the data for example after Map in the MDM / Stitch process.
- **Gold** – Consumption and business level aggregate Tables such as Profiles (Customer, Employee, Organization etc.), Timelines, Audience, and Metrics.  

---

![Alt text](/doc_snippets/Entities_BronzeSilverGold.png)

---

|Item|Description|
| :- | :- |
|Name|The name of the database.|
|Total Records|The number of rows of that individual database.|
|Data Completeness|Indicates the comprehensiveness of the data.|
|Source|Type of data source such as connectors that ingested the data.|
|Generated by|Indicates type of the data, which are either auto-identified by the system or manually mapped by users.|
|Edited by|The user who updated the imported data to formulate a processed one.|
|Last Refresh Date|The date and time when the database was last updated.|
|Actions|Rollback to bring the data to its previous state. Its purpose is to reverse a custom action that has made changes to the system.|

2. Select a database to know more about the attributes and the data.
3. The **Attributes** tab is opened by default and shows a table.

In the Attributes page, you will see a tabular representation of all the attributes present inside that entity with their details.  

---

![Alt text](/doc_snippets/Entity_Attributes.png)

---

|Item|Description|
| :- | :- |
|Name|Shows name of the attribute.|
|Data type|Shows data type such as String or Integer.|
|Semantic Label|Describes the attribute.|
|Is Sensitive Data|Use this property to classify Semantic Labels as Sensitive. |
|Summary|Indicates you with some important characteristics of the data, such as unique values, counts, nulls, missing values.|
|Group by|View the items either in a list or specific Group (For example, Name, Data Type)|
|Back to Entity|Allows you to go back to the Entity page.|
|Download as CSV|Option to download the list of attributes in .csv file.|

4. Select the **Data** tab to see the details about individual records of the entity.

---

![Alt text](/doc_snippets/Entity_Data.png)

---

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> In the data tab, you will see a tabular representation of the data with its values. The Column option side panel drop-down fields have a search functionality with a search placeholder. The search functionality has been made easier for the user by adding a search feature on the Column Options drop-down fields. Users can type for any attributes in the Column Settings field. This avoids the scrolling required for the long list of attributes.

### To sort your Databases

You can sort your items in groups at one click. Follow the below steps:

1. Go to **Databases > Gold**.

---

![Alt text](/doc_snippets/Databases_Groupbefore.png)

---

2. Click **Name** column.

The **Groups** get sorted in ascending or descending order.

---

![Alt text](/doc_snippets/Databases_Groupsorted.png)

---

## To download Comma Separated Value (CSV) file

You can download a CSV file (.csv format) that stores tabular data in plain text.

1. Go to the **Lakehouse** > **Databases**.
2. Select the attribute that you want to explore.
3. Click **Download as CSV** in the upper-right corner of the page to download the CSV file.

After a successful download, you can open the CSV file. You'll find detailed information about a list of attributes associated with the database.
