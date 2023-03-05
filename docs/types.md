# Managing Data Sensitivity with Type Management

## Overview

Type management lets you classify and protect your data without hindering your productivity and ability to collaborate with others inside and outside the organization. With the help of SkyPoint Type management, you can manage all the semantic labels in one location so that the user has a centralized location to manage the sensitive labels used across the Tenant. It becomes the architectural pillar for sensitive data management.

## Prerequisite

- You have a Tenant admin permission to the SkyPoint platform. For more information about Tenant, refer to [Tenant Details](https://skypointcdpdocs.z22.web.core.windows.net/docs/tenant.html). If you need help and support, click **Need help?** button in the right corner of the page.

## To create and configure Type management

1. Open SkyPoint Studio.
2. In the left pane, go to **Dataflow** > **Types**.  

---

![Alt text](/doc_snippets/TypeManagement_Window.png)  

---

3. Click **New type**.

The **Create type** dialog box appears.  

---

![Alt text](/doc_snippets/TypeManagement_CreateNewType.png)  

---

4. Enter the **Name** and **Display name** for the Type management. 

> :grey_exclamation: **Note**: Use at least three characters. No space between characters. Only alphabets and numbers are allowed. The name and display name must be unique for each sensitive label type.

5. You can describe the new Type in the **Description** box.
6. Choose **Encryption** from the drop-down list to ensure that only authorized recipients can decrypt your content.  

---

![Alt text](/doc_snippets/TypeManagement_Encryption.png)  

---

|If you|Then|
| :--- | :--- |
|Do not want to use encryption|Select **None**.|
|Want to use encryption|Select **Apply**.|
|Want to disable encrypt function|Select **Removed**.|

7. Select **Sensitive** to mark whether the information is a sensitive label.
8. Select **Create** to apply your changes and generate a new custom label.

Once the custom label is created, you can see the new custom type and all the sensitive information types on the **Types** page.  

---

![Alt text](/doc_snippets/TypeManagement_Output.png)  

---

|Item|Description|
| :--- | :--- |
|Name|Indicates the name of the sensitive label. |
|Display name|Indicates the display name of the sensitive label.|
|Sensitive|Indicates whether the label is sensitive. |
|Encrypted|Indicates whether the encryption is applied.|
|Used in map|Displays the value "Yes" or "No". It allows users to select and delete only those custom labels which are not used in the Map process.|
|Created by|Displays whether the system or admin creates the sensitive label.|
|Updated date|Displays last modified date.|
|Actions|Option to Edit or Delete the sensitive label.|
|Group by|Option to view the items in a specific Group (For example, name, sensitive, encrypted).|

> [!TIP]  
> SkyPoint provides a large number of pre-configured sensitive information types. The system creates these sensitive labels from the different data sources. It detects sensitive information like Personally Identifiable Information (PII) to identify sensitive items. By default, the system-created labels are displayed as **System** in the **Created by** column. The **System** type cannot be edited. However, if the pre-configured sensitive information types do not meet your needs, you can create your custom label. The user-created sensitive labels are displayed as **Admin**.

9. In the **Types overview** tab, you can visualize and explore the sensitive information types. You can measure and explore the sensitivity attributes as follows:
- Sensitive label for the Attributes
- Mapped and unmapped sensitive attributes
- Encrypted sensitive attributes  

---

![Alt text](/doc_snippets/TypeManagement_Overview.png)  

---

## Edit and remove a sensitive information type

1. Go to **Dataflow** > **Types**.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Edit and delete functions are disabled for the **System** type sensitive labels. It allows deletion and editing for those custom labels that are not used in the **Map** process.

2. For a particular custom label type, select the horizontal ellipsis in the **Actions** column and do the following:


|If you want to|Then|
| :--- | :--- |
|Modify the sensitive type properties|Select **Edit**.|
|Delete the sensitive information type|Select **Remove**.|  

---

![Alt text](/doc_snippets/TypeManagement_EditType.png)  

---

3. To modify sensitive information properties, change on the **Edit Type** page.
4. Click **Update** to apply your changes.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> If the new custom label is not configured or mapped, then you can edit and change the properties. However, if the new custom label has been used or mapped, it integrates with the upstream and downstream processes. You cannot modify it. You can update the **Display name** only.

- To remove the new custom label, go to the **Stitch** > **Map** and remove the semantic label type from the attribute. Click **Save** to apply your changes. Once the new custom label is unmapped, you can edit or remove it from **Dataflow** > **Types** > **Actions**.

## To mark the data as sensitive
You can mark your data as sensitive that would mask it to ensure its safety and privacy. Follow the below steps:
 
1. Go to **Dataflow** > **Types**.
2. In the **Create type** form, Click **Yes** on **Sensitive** section after filling up the other sections.
3. Click **Create**.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Follow the procedure [mask sensitive data](https://skypointcdpdocs.z22.web.core.windows.net/docs/Permissions.html#to-mask-sensitive-data) steps in the **Permissions** section to activate the masking of sensitive data.

### See also

[Dataflow](https://skypointcdpdocs.z22.web.core.windows.net/docs/dataflows.html)

[Stitch](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html)

