# Creating and Working with Relationships

## Overview

Relationships allow you to build an efficient and scalable solution. It defines how records are related to each other in the database. SkyPoint Vault supports analytics capabilities to choose tables for machine learning models to run. It has a prebuilt AI capability that assists you to define and work with the different types of relationships. Each table can have a relationship with more than one table. Also, each table can have more than one relationship with another table. There are three types of relationships.

- **Many-to-One relationships**: Many table records are associated with a single (primary) table record. For example, multiple users can have one subscription plan.
- **Many-to-Many relationships**: Many table records are associated with many other table rows. For example, many customers can have multiple orders.
- **One-to-Many relationships**: A single (primary) table record is associated with multiple table records. For example, a single user can have multiple contact numbers.

## Prerequisite

- You have created tables in the Datavault to build relationships.

## To create a relationship

1. In the left pane, go to **Vault**.
2. Select the **Datavault** and open **Table** to create relationships.  

---

![Alt text](/doc_snippets/Vault_RelationshipsWindow.png)

---

3. In the **Relationships** tab, click **New relationship**.  

---

![Alt text](/doc_snippets/Vault_RelationshipsCreateNew.png)

---

4. Choose either the **Many-to-One**, **Many-to-Many**, or **One-to-Many** relationship option to create between two tables. In this example, a single account can have multiple contacts.  

---

![Alt text](/doc_snippets/Vault_RelationshipsOneToMany.png)

---

5. In the right pane, select a **Related** table for the **Current** table.
6. Enter the **Relationship name**.
7. If necessary, you can describe the new relationship in the **Description** box.
8. Click **Create** to generate the relationship.

The newly created relationship appears in the **Relationships** tab.  

---

![Alt text](/doc_snippets/Vault_RelationshipsOutput.png)

---

## To create a relationship with the lookup attribute

When you create a new lookup attribute you are creating a relationship between the current table and the related table. For more information, refer to the [Attributes](vault-attributes.md) section.  

1.	In the **Attributes** tab, click **New Attribute**.  

The **New attributes** pop-up window appears.  

---

![Alt text](/doc_snippets/Vault_RelationshipsLookupAttributes.png)

---

2.	Enter **Display name** and **Name**.
3.	In the **Choose data type** list, select **Lookup**.
4.	**Select related table** from the drop-down list.
5.	**Choose attribute type** from the drop-down list.
6.	**Choose Semantic label** from the drop-down list.
7.	In the **Description** box, you can describe the new lookup attribute.
8.	If necessary, click **More settings** to add properties.
9.	Select **Create** to save the attribute properties and close the window.  

The new relationship created with the lookup attribute appears under the **Relationships** tab.  

---

![Alt text](/doc_snippets/Vault_RelationshipsLookupAttributesOutput.png)

---

## To edit and delete relationships

1. In the **Relationships** tab, choose the relationship you want to edit or delete.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> If the Relationship is used by an attribute, you will not be able to delete it until that attribute is deleted. Deleting the relationship will remove the relationship table created. All data connecting tables with relationships will be lost.

2. Click the horizontal ellipsis in the **Actions** column of the relationship and do the following:  

---

![Alt text](/doc_snippets/Vault_RelationshipsActions.png)

---

|If you want to|Then|
|:---|:---|
|Modify the relationship|Select **Edit**.|
|Delete the relationship|Select **Remove**.|  

---

![Alt text](/doc_snippets/Vault_RelationshipsEdit.png)

---

3. Click **Save** to apply your changes.
