# Exploring the Relationships

## Overview

The relationship is a link between tables.  You can relate the tables with a primary key (attribute in table 1) and foreign key (attribute in table 2) and can generate the **Entity-Relationship Diagram (ERD)** for these. The common identifier, a foreign key can be used to link the tables and generate relationships. You can utilize these relationships in the downstream process like Audience and Metrics.

There are three types of relationships:

- **Non-editable system relationships**: Created by the system as part of the data unification process, such as Stitch.
- **Non-editable inherited relationships**: Created automatically by importing data from data sources, such as Predict.
- **Editable custom relationships**: Created and configured by SkyPoint users (API & Studio).

SkyPoint platform lets you create two different types of relations (relational database designs, such as **Entity-Relationship model (ER model)**) between chosen tables.

## Cardinality
The cardinality of a join between two tables is the numerical relationship between rows of one table and rows in the other. It is very useful for query optimization. They are of two types:

- **One-to-One** – A single row of the first table is associated with a single row of the second table. For example, if there are two tables, "customer" and "subscription plan". So, each customer can have only one subscription plan, and each subscription plan belongs to only one customer.

---

![Alt text](/doc_snippets/Cardinality_OneToOne.png)

- **Many-to-One** – Many rows of the first table associated with a single row of the second table. For example, many orders created by a single customer. Therefore, there is a many-to-one relationship between orders and customer.

---

![Alt text](/doc_snippets/Cardinality_ManyToOne.png)

## To create a Custom Relationship

1. Go to **Lakehouse** > **Relationship**.

The relationship window appears. The default view of the page displays all the relationships that have already been built. Each row represents a relationship.

---

![Alt text](/doc_snippets/Relationships_window.png)

---

|Item|Description|
| :- | :- |
|New relationship|Allows you to add new relationship.|
|Visualizer|Allows you to filter the view based on certain pre-defined criteria like table type, relationship types. You can see a network diagram of the existing relationships and their cardinality.|
|Filter by|Option to filter the data based on relationships type (User, Inherited, System).|
|Name|Indicates the purpose of the relationship.|
|Source table|Indicates the table that is used as a source in the relationship. |
|Source cardinality|Indicates the relationship between two relations in a data model. Cardinality describes the number of possible elements in a set.|
|Target table|Indicates the table that is used as a target in the relationship.|
|Target cardinality|Indicates the cardinality of the target table records.|
|Type|Indicates the relationship type (User, System).|
|Action|Allows you to edit or remove the relationship.|
|Group by|View the items either in a list or a specific Group (For example, Name, Source table)|

---

2. Select **New relationship**.

---

![Alt text](/doc_snippets/NewRelationship.png)

---

3. In the **New relationship** pane, provide the following information:

---

|To|Do|
| :- | :- |
|Enter the name that reflects the purpose of the relationship|Mention in the **Name** box.|
|Describe the relationship|Explain in the **Description** box.|
|Enter the table that is used as a source |In the **Source details** column, select the **Table** from the drop-down list.|
|Enter the table that is used as a target|In the **Target details** column, select the **Table** from the drop-down list. |
|Enter the cardinality of the source table|In the **Source details** column, select **Cardinality** from the drop-down list.|
|Enter the cardinality of the target table|In the **Target details** column, select **Cardinality** from the drop-down list.|
|Enter the foreign key field in the source |In the **Equivalent attributes** area, select the **Source attribute** from the drop-down list.|
|Enter the primary key of the target table|In the **Equivalent attributes** area, select the **Target attribute** from the drop-down list.|

---

**Note:** To enter the name of the relationship, start with a letter. Use letters and numbers only. Special characters and spaces are not allowed. Use between 3 and 64 characters.

4. Click **Save** to apply your changes. 
5. To cancel your changes, click **Cancel**.

### Using Search feature in drop-down lists

You can use the **Search** feature in drop-down lists to find your attributes quickly. This feature prevents unlimited scrolling while searching for correct attributes from the lists.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The **Search** feature is only disabled for the drop-down lists in **Predictions**.

## Edit a Relationship

You can update properties of custom relationships that are already created.

1. Navigate to **Lakehouse** > **Relationships**, and you will see all the created relationships in a tabular form with all their details.
2. Look for the relationship that you want to modify. Click the horizontal ellipsis under **Actions** and select **Edit**.
3. A new window will appear with all the Relationship details. To apply changes, click **Save**.

## Visualize a Relationship

The visualizer navigates the relationship network to explore patterns of connection. It displays an ER diagram between connected tables and their cardinality. You can view how tables are connected. By default, the system is configured to a vertical layout. 

1. Click on the **Visualizer** to explore the relationship.

---

![Alt text](/doc_snippets/Visualizer.png) 

---

2. Click **Filter by** to select different criteria such as user type, system type tables, or relationships.
3. To view the relationship diagram, do the following:

---

|To|Do|
| :- | :- |
|Maximize the display|Click the **Maximize** button.|
|Minimize the display|Click the **Minimize** button.|
|Restore size and display the complete diagram|Click the **Fullscreen** button.|
|Drag and fix the display boxes|Click the **Lock** button.|

---

4. You can change the layout of the tables and relationships from vertical to horizontal and vice-versa. 
  - To change the layout, click on the **Change to horizontal or vertical layout**.
