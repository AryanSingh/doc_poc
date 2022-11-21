# Mapping tables and attributes

## Overview

The Map process is the first step in the Stitch process for data unification. Once the Dataflow is successful, map the attributes of imported data with their semantic labels. In the map process, you need to do semantic mapping to get the data into a Modern Data Stack Platform (MDSP) and prepare it for the Match process. The Map stage consists of four steps:

- **Table selection:** Identify and select those tables for mapping which have complete information about your customers.
- **Attribute selection:** Identify and select the most accurate attributes for each table.
- **Primary key and semantic type selection:** Identify and select a unique primary key for each table and identify the semantic type for each attribute.
- **Duplication of Map tables:** Identify the duplicated records and cleanse your data by eliminating redundancy.

## To Map tables and attributes

1. In the left pane, go to the **Resolve** menu and click **Stitch**.

By default, the **Map** window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MapWindow.png?raw=true)

---

2. Click **Select tables**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Map_SelectTables.png?raw=true)

---

3. Select the different tables and include all required attributes. You can search on keywords across all tables and attributes that you want to map.

> :grey_exclamation: **Note**: At least two tables are needed to match and stitch.  

4. Select **Apply** to confirm your changes. The selected tables and attributes are displayed on the Map page.

## Select primary key, candidate key, and semantic type for attributes

Follow the below steps to start the Map process:

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/SelectAttributes.png?raw=true)

---

1. Select the **Primary key** from the drop-down list.
2. Check **Select candidate key**.
3. Select the **Candidate key** from the drop-down list.
4. In the **Review mapped field**, select the semantic type for attributes.  

---

> :grey_exclamation: **Note**: The system automatically maps the semantic labels based on its inbuilt algorithms. The system displays all mapped attributes in the table above and all unmapped attributes shown in the table below.For attributes that aren't automatically mapped to a semantic type, are listed under **Define the data in the unmapped fields**. You can select a semantic mapping for the unmapped attributes to move these to the mapped table, or leave them unmapped. Select the attribute that uniquely identifies a record. It should not include duplicate values, missing values, or null values. 

---

5. To configure various data cleansing techniques like converting all texts to lower/upper case, removing any spaces between strings, select the **Advanced settings.** Default normalizations are added for the first name, last name, email address, and phone number fields to reduce data redundancy and eliminate undesirable characteristics.  

As per the best practice, the normalization is applicable for the below Attributes:

```
First Name -Text to Pascal,  Left Trim, Right Trim, Regex Replace ([^a-zA-Z ])  
Last Name -Text to Pascal,  Left Trim, Right Trim, Regex Replace ([^a-zA-Z ])  
Email Address - Text to lower case, Remove WhiteSpace, Left Trim, Right Trim  
Phone Number - Left Trim, Right Trim, Regex Replace [^0-9]+
```


> [!Tip]
> For the DateTime fields which are mapped to Calendar.Date, Last.Modified.Date, Person.BirthDate in Map - advanced settings under Stitch have the "Default DateTime" field selected by default. With this feature, the same DateTime format as set in the instance settings can be seen for the DateTime fields in the profile card. If the user wishes to see the profile card with DateTime as ingested from the source, the user can unselect the option in **Map > Advanced settings**.

---

6. Click on each table and complete the mapping for the several types of required fields.
7. Click **Save.**
8. Once the application displays **Saved successfully**, click **Run** to start the mapping process.

> :grey_exclamation: **Note**: If you run the map for the first time, the system takes it as a full run. For subsequent runs, you can choose between a **Full run** or an **Incremental run**. Incremental run adds those data which are refreshed after the last run. You can get faster result after the Incremental run. 

9. To perform the Incremental run, select the date attribute in **Last.Modified.Date** type.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RunMap.png?raw=true)

---

10. Choose an appropriate option from the drop-down to run the Map process.
11. If necessary, do the following:

---
|If you want to|Then|
| :- | :- |
|Discard all the changes from the last save|Click **Discard Changes**.|
|Cancel the Run that is in progress|Click **Cancel Run**.|
|Add or remove the attributes|Click **Edit**.|
|Discard advanced settings|Click **Clear advanced settings**.|
|See the run history of the mapping process|Click **Run History**.|

---

> [!Tip]
> SkyPoint platform provides an Intelligent mapping feature that automatically determines the associated semantic label for each attribute of a table. Intelligent mapping provides smart prediction of semantics, saves time, and improves accuracy. 

- To activate, **Turn on** the **Intelligent mapping**.

## Duplicating the record details

The Deduplication process identifies the duplicated records and cleanses your data by eliminating redundant data. For example, there are 100 individual data records, but 50 out of the 100 records are duplicates. To unify the data, you must remove the duplicates so that only 50 unique records will pass to the next step in the process.

## To identify and resolve the duplicated records

1. Go to **Resolve > Stitch > Map.**
2. In the **Duplicated records details** section, select **Set tables**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/DuplicatedRecords.png?raw=true)

---

> :grey_exclamation: **Note**: If deduplication rules are already set then select **Edit** to modify the tables.

3. In the **Duplicate preferences** pane, select the **Tables.**

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/DeduplicatePreference.png?raw=true) 

---

|Item|Description|
| :- | :- |
|Column Type|Option to select the column type to figure out the duplicated data.|
|Record to keep|Allows you to identify and select most populated attributes fields, most recent, and least recent records.|
|Based on field(s)|Allows you to select the most populated attributes fields.|

---

4. Choose the criteria for deduplicate preference from **Column Type > Record to Keep > Based on field (s).**
5. Select **Done.**
6. Click **Save > Run.**

Now, you can view the duplicated record details. These tables can be found on the [**Databases**](entities.md) page of the Map lists.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/DuplicatedRecordsDetails.png?raw=true)

---

7. If you want to modify the Deduplicate preferences, click the **Edit** button and select **Done** to apply your changes.
