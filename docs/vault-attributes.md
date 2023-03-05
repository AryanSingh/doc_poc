# Viewing and Adding the Attributes

## Overview

Attributes store a discrete piece of information for an table. Every database in SkyPoint Datavault starts with a standard set of tables and each standard table has a standard set of attributes. You can create new attributes when existing standard attributes don't meet your requirements.

> [!TIP]
> Always use standard tables and attributes when possible. You can rename a table if that makes it more understandable in the context of your requirements.

## To view the attributes

1. In the left pane of the SkyPoint Studio, open **Vault**.
2. Select the **Datavault** and **Table** that has the attributes you want to view.  

---

![Alt text](/doc_snippets/Vault_Attributes.png)

---

|Attribute type|Description|
| :--- | :--- |
|Standard|It comes out of the box with Datavault.|
|Managed|An attribute from other first or third-party applications.|

## To create a new attribute

1. Click on the **New Attribute**.

The New attributes panel appears.  

---

![Alt text](/doc_snippets/Vault_NewAttributes.png)

---

2. Enter the **Display name** and **Name**. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The Name is the unique name across your environment. Based on the **Display name**, a **Name** will be auto-populated. You can edit it before creating the attribute. Once the attribute is created, the name cannot be changed as it may be referenced in your application or code.

3. Choose data type from the drop-down list.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The data type of an attribute controls how values are stored as well as how they are formatted in some applications. For example, the currency is stored differently from a text or a URL. Depending on the data type, you will be prompted to specify the additional information for the data type. Once an attribute is saved, you cannot change the data type except for converting text attributes to auto number attributes.

|Data type|Description|
| :--- | :--- |
|Autonumber|Option to display letters and numbers whenever the record is created.|
|Big Integer|Stores very large numbers that exceed the capabilities of whole numbers and decimals.|
|Choice|Displays a list of values only one can be selected.|
|Choices|Displays a list of values where more than one can be selected.|
|Currency|A monetary value that you can set a level of precision or choose to base the precision on a specific currency or a single standard precision used by the organization.|
|Customer|A lookup column that you can use to specify a customer, which has an account or contact.|
|Date Only|Displays only a date.|
|Data and Time|Displays date and time value.|
|Decimal Number|Displays a decimal value with up to 10 points of precision.|
|Duration|Option to display time intervals. You can type an integer value to represent time intervals such as "x minutes", "x hours", or "x days".|
|Email|An e-mail address that indicates a link in the attribute.|
|File|Stores binary data.|
|Floating Point Number|Up to 5 decimal points of precision.|
|Image|Displays a single image per record in the application. Each table can have one image attribute.|
|Language|Option to select a language from the list.|
|Lookup|An attribute that allows setting a reference to a single record of a specific type of table.|
|Multiline Text|A text value that is intended to be displayed in a multi-line textbox.|
|Owner|It references the user or team that owned the table record.|
|Phone|Displays phone number link to make a phone call.|
|Phonetic Guide|Adds phonetic symbols to Japanese or Chinese characters. It can also be used to emphasize a word or text by adding explanations in small characters on top of the given text. You can either apply the phonetic guide to each character or to each word.|
|Text|Option to display text in a single-line textbox.|
|Text Area|Option to display text in a multi-line textbox.|
|Ticker Symbol|Displays a link that shows a quote for the stock ticker symbol.|
|Timezone|A number value that contains a list of time zones.|
|URL|Option to select a link to open the URL.|
|Unique Identifier|Used to identify each record uniquely in the attribute.|
|Whole Number|Indicates a number value in a text box.|
|Yes/No|Displays a list of options where one out of two can be selected. |

4. Choose attribute types such as **Standard** or **Managed** from the drop-down list.
5. Choose the Semantic label from the drop-down list.
6. In the **Description** box, you can describe the new attribute.
7. If necessary, click **More settings** and do the following:  

---

![Alt text](/doc_snippets/Vault_MoreSettings.png)

---

|If you want to|Then|
| :--- | :--- |
|Verify whether data is required in the attribute to save the record|Select **Required**.|
|Allow an attribute is searchable in apps and available when customizing views|Select **Searchable**.|
|Appear and filter in the dashboard|Select **Filterable**.|
|Sort in the dashboard|Select **Sortable**.|
|Customize an attribute|Select **Customizable**.|
|Data is more secure in the attribute at a higher level than the table|Select **Enable Security**.|
|Allow data of an attribute for audit|Select **Enable Auditing**.|

8. Select **Create** to save the attribute properties and close the window.

## Edit and delete an attribute

1. Go to **Datavaults** > **Table**.
2. Select an attribute you want to edit.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> If you have applied changes to the table to add the attribute then you can not change the **Data type** and **Attribute type**.  

---

![Alt text](/doc_snippets/Vault_AttributesEditDelete.png)

---

3. Click the horizontal ellipsis in the **Actions** column of the attribute and do the following:

|If you want to|Then|
| :--- | :--- |
|Modify the attribute|Select **Edit**.|
|Delete the attribute|Select **Remove**.|  

---

![Alt text](/doc_snippets/Vault_EditAttributes.png)

---

4. Click **Save** to apply your changes.
5. To delete the attributes, do one of the following:

|To|Do|
| :- | :- |
|Delete the single attribute|In the **Actions** column, select **Remove**.|
|Delete single or multiple attributes|Select the checkboxes for the attributes that you want to delete, the **Delete** command appears to enable. Click the **Delete** command to remove the attribute.|

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can delete any custom attributes that are not part of the managed solution. Before deleting a custom attribute, you must remove any dependencies that may exist in other solutions. When you delete an attribute, data stored in the attribute is lost.



