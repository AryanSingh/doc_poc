# Connecting with the SkyPoint Datavault

## Overview

SkyPoint Vault separates and secures data in a zero-trust vault that integrates with applications through a low code/no-code approach.



## Prerequisite

- Log in to your SkyPoint Studio account. If you need help and support, click **Need help?** button in the right corner of the page. For more information regarding raising a new ticket, refer [Help+Support](https://skypointcdpdocs.z22.web.core.windows.net/docs/help%2Bsupport.html) section. 
- If you are a new user and having issues regarding Signing up or Signing in, contact the [SkyPoint support team](https://skypointcloud.com/customer-support/).




## To add Datavault


1. Open **SkyPoint Studio**.
2. In the left pane, go to **Vault**.

The **Datavaults** window appears.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Vault_Windows.png?raw=true)  

---

3. Click **Add Datavault**. A pop-up window appears to add new Datavault.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Vault_AddNewDatavault.png?raw=true)  

---

4. In the **Display name** box, enter the name that you want to display for the new Datavault.
5. Enter a **Name** for the data source.


> :grey_exclamation: **Note**: Name Start with a letter. Use letters, numbers, or underscores only. Special characters and spaces are not allowed. Use at least 3 characters.

6. Select **Type** from the drop-down list.


|Type|Description|
| :--- | :--- |
|Customer|Allows you to store and manage data regarding customer information such as PII.|
|Healthcare|Allows you to store and manage data for healthcare such as PHI. |
|Payment|Allows you to store and manage data regarding payment such as PCI.|

7. If necessary, describe the New Datavault in the **Description** box.
8. Click **Create**.



## To edit, delete the Datavault


1. Once you have created a Datavault, it appears on the **Datavaults** page.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Vault_Output.png?raw=true)

---

|Item|Description|
| :--- | :--- |
|Display name|Displays the name of the Datavault.|
|Name|<p>Indicates the name that you have entered during the Datavault creation.</p><p>Note: If you enter Display name, same information will be generated in the Name box. However, you can edit name as per your requirement and character limits. </p>|
|Type|Indicates a Datavault type such as Customer, Healthcare, or Payment.|
|Tables|Displays the number of tables created.|
|Status|Indicates whether the data is imported and a Datavault is created successfully.|
|Created Date|Displays date of creation.|
|Updated Date|Displays last modified date.|
|Group by|Option to view the items in a specific group, for example, Name, Type, Status.|

2. Select the horizontal ellipsis in the Actions column and do the following:

|If you want to|Then|
| :--- | :--- |
|Modify the Datavault|Select **Edit**.|
|Delete the Datavault|Select **Remove**.|  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Vault_EditDatavault.png?raw=true) 

---

3. Once you have edited the Datavault, click **Save** to apply your changes.
