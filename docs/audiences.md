# Audience

## Overview

This section depicts the information about the audiences we have created and also provide a functionality to create new audiences. It represents the audiences table which is a tabular representation denoting the number of members in each created audience's  with their current status. An audience is a group of profiles characterized by a defined set of attributes based filters. The other table below it elaborates the work history that corresponds to all the successful and failed iterations over creating audiences. In audiences, we define complex filters around the unified profile entity and its related entities. Each audience, after processing, creates a set of profile records that you can export and take action on. Audiences are managed on the Audiences page.

---

![Alt text](/doc_snippets/audiences.png)

---

## Steps to Create Audiences  

The following example illustrates the audience of patients having claim status as “pending”. We've defined an audience for patients whose claim status is pending. While creating an audience, you can save a draft. It will be saved as an inactive audience, and can't be activated it finished with a valid configuration.

1. Go to **Insights** >> **Audience**.
2. Select **New Audience** >> **Blank Audience**.
3. Provide an Output Entity name for the audience. Also, provide a display name and a description that helps identifying the audience.
4. Select **Next** to get to a page where you define a group. A group is a set of profiles.
5. Choose the entity that includes the attribute you want to include in the audiences.
6. Choose the attribute to distribute by. This attribute can have one of four value types: numerical, string, date, or Boolean.
7. Choose an operator and a value for the selected attribute.
8. To add more conditions to a group, you can use two logical operators:
    - **AND operator**: Both conditions must be met as part of the audienceation process. This option is most useful when you define conditions across different entities
    - **OR operator**: Either one of the conditions needs to be met as part of the audienceation process. This option is most useful when you define multiple conditions for the same entity.
    Note: It's currently possible to nest an OR operator under an AND operator, but not the other way around
9. Each group matches set of profiles. You can combine groups to include the profiles required for your business case
10. Select **Add Group** if you need.
11. Select one of the set operators: Union, Intersect, or Except
    - **Union** unites the two groups
    - **Intersect** overlaps the two groups. Only data that is common to both groups is retained in the unified group
    - **Except** combines the two groups. Only data in group A that is not common to data in group B is retained
12. If the entity is not connected to the stitched profile entity through associations, you need to create an association between the two to create a valid audience. Add the entities from the association path until you can select the Profile:StitchResolvedConflict entity from the dropdown. Then, choose All records for each step
13. By default, audiences generate an output entity that contains all attributes of profile entity which match the defined filters. If an audience is based on other entities than the profile entity, you can add more attributes from these entities to the output entity
14. Select **Save** to save your audience. Your audience will be saved and processed if all requirements are validated. Otherwise, it will be saved as a draft.

**Example** : An audience is based on an entity that contains profile activity data which is related to the profile entity. The audience looks for all profiles that called the help desk in the last 60 days. You can choose to append the call duration and the number of calls to all matching profile records in the output entity. This information might be useful to send an email with helpful links to online help articles and FAQs to profiles who called frequently



## Create a new audience from SQL

You can add the audiences from the SQL query editor. The SQL query editor allows you to write and execute SQL (Structured Query Language) statements. By using a query builder, you can create an audience from a SQL query more intuitively and efficiently.

Follow the below steps to create a new audience from SQL:

1. Click **New Audience**.  

---

![Alt image](/doc_snippets/Audiences_FromSQL.png)  

---

2. Select **From SQL** in the **New Audience** drop-down list.  

---

![Alt image](/doc_snippets/Audiences_Newaudienceform.png)  

---

3. Enter **Name**, **Display Name**, and **Description**. 
4. You can check **Auto Update** to update the audience automatically every 24 hours.

5. Click **Save** to apply your changes.  

---

![Alt image](/doc_snippets/CreateAudienceUsingSQL.png)  

---

6. Enter SQL query in the **Create the audience using SQL** box.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> To create an audience using a SQL query, you need to define a `SELECT` statement that selects the rows that you want to include in the segment. The SELECT statement allows you to specify the columns that you want to include in the segment, as well as the conditions that the rows must satisfy in order to be included.  You can use other SQL operations to filter and transform the data as needed.  
> No Data Definition Language (DDL), update, delete and drop statements are allowed. The preview option will show an error when either of the statement is used.  

To combine data from two or more tables, you have to add a `JOIN` clause. For example:  

```  
SELECT CONCAT(Customer.FirstName, Customer.LastName), Customer.Gender  
FROM Customer 
JOIN Address 
WHERE Customer.ID = Address.ID  
```  

The above SQL statement uses a `JOIN` clause to combine data from two tables, the "Customer" table, and the "Address" table. The `JOIN` clause connects the two tables based on a common field, the "ID" field.


7. If you want to modify information, click **Edit**.  
 

> [!TIP]
> SkyPoint platform provides assistance in the form of autosuggestion as you type in the SQL editor, such as auto-completion. The autosuggestion in the SQL editor is designed to make writing SQL queries easier and more efficient for tables and associated columns. Column-level alias is allowed. Table-level alias is not allowed.   

8. Click **Proceed**.

The **Preview Data** pop-up appears.  

---

![Alt image](/doc_snippets/Previewdatapopup.png)  

---

9. You can preview the results of the query and make adjustments before running it. Do one of the following:

|To|Do|
| :- | :- |
|Save your changes and close the window|Click **Save**.|
|Save and execute the SQL query|Click **Save & Run**.|
|Cancel the SQL operation|Click **Cancel**.|

10. You can select multiple checkboxes on the **Audiences** page to run multiple audiences created by SQL queries.

You can view the status of the created audience under the **All audiences** tab. Also, you can view the audience table in the **Gold** tab under **Lakehouse** > **Databases**. The results of an audience segmentation query in SQL can provide insights that you can use in various downstream processes.


## To check Real-time status of Audiences

Follow below steps to track the real-time Audience creation status:

1. Go to **Activate > Audience**.
2. In **All audiences** tab, you can track the real-time status under the **Status** tab. You can see the status getting updated as per the actions taken.

---

![Alt text](/doc_snippets/Audiences_StatusMembers.png)

---

### To track your Audiences run status

You can check the run sttatus for your created Audiences. Follow the below steps:

1. Go to **Activate > Audiences**.
2. Click **Run history**.
3. Click a **Stage name** to view the detailed status.

---

![Alt text](/doc_snippets/Real_time_status.png)

![Alt text](/doc_snippets/Realtimestatus_output.png)

---
