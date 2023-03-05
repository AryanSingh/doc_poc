# Creating an Alternate Key

## Overview

A primary key is already implemented in all SkyPoint Datavault records. These primary keys maintain uniqueness by unique identifiers such as **Globally Unique Identifiers (GUIDs)**. Skypoint Datavault also provides an alternate key to integrate with an external data store. Alternate Keys provide an efficient way of integrating data with external systems. Each alternate key has a unique name. With the alternate keys, you can link records from the external system to Datavault without modifying the external system schema.

## Prerequisite

You have created tables and attributes in the Datavault to create an alternate key. For the creation of a new key, a key must contain at least one attribute.

## To create a new key

1. In the left pane, go to **Vault**.
2. Open **Datavault** and select **Table** where you want to add and view keys.  

---

![Alt text](/doc_snippets/Vault_Keys.png)

---

3. In the **Keys** tab, click **New Keys**.  

---

![Alt text](/doc_snippets/Vault_AddNewKey.png)

---

4. Enter **Display name** and **Name**. 
5. **Choose key type** such as Custom or Standard from the drop-down list.
6. In the **Description** box, you can describe the new alternate key.
7. From the **Attributes** list, select the attributes. 
8. Click **Create** to save and generate the alternate key.

In the **Keys** tab, you can view the newly created alternate key.  

---

![Alt text](/doc_snippets/Vault_KeysOutput.png)

---

## To edit and delete a key

1. In the **Keys** tab, choose the key you want to edit or delete.
2. Click the horizontal ellipsis in the **Actions** column of the key and do the following:  

---

![Alt text](/doc_snippets/Vault_KeysEditDelete.png)

---

|If you want to|Then|
| :--- | :--- |
|Modify the key|Select **Edit**.|
|Delete the key|Select **Remove**.|  

---

![Alt text](/doc_snippets/Vault_EditKey.png)

---

3. Click **Save** to apply your changes.
