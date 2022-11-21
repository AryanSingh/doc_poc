# Creating an Instance
## Overview
All your customer profiles are created under a specific Instance. Creating an Instance enables you to build functionality such as a unified customer profile, quicker access to quality data on SkyPoint Modern Data Stack Platform (MDSP). There can be multiple Instances under each Tenant. You can make changes under each instance with the help of Instance level settings. Changes made in one Instance do not impact the properties of other Instances.

## To add an Instance
Follow the steps below to Add instance under your Tenant:
1. Go to **Settings > Instances**.
2. In the **Instances** tab, click **Add instance**.
---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_InstancesHomepage.png?raw=true)  

---
The **Create instance** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Createinstancescreen.png?raw=true)  

---

---
:grey_exclamation: **Note:** The Skypoint platform enables you to copy information from the existing instances as well as create a new Instance. These two options of adding an instance allow you to do the following:

|Item|Description|
|:-|:-|
|Copy from existing|Enables you to select the settings from an existing instance to save your effort of resetting a new instance.|
|Create instance|Enables you to add a new instance by selecting new Instance properties.|

---
### To Copy from existing instance
Follow the below steps to create an instance from existing instance:
1. On the **Create instance** page, select **Copy from existing instance**.
2. Type the desired Name of the new instance in the **Name** text area.
3. Type the desired Display name in the **Display name** text area.
4. Click the **Instances available** and select the desired **Instance** from the drop-down list. 
---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Instancesdropdown.png?raw=true)  

---
5. Click **Create**.
---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Createexistinginstancesbutton.png?raw=true)  

---
### To Create instance
Follow the below instance to create an instance directly:
1. On the **Create instance** screen, select **Create instance**.

The **Create instance** form appears.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Createinstanceform.png?raw=true)  

---

2. On the Create instance form, fill in the following details in the respective type areas:

|Form Items|Action|
|:-|:-|
|Name|Type a unique name for the Instance.|
|Display name|Type a display name for the Instance.|
|Type|Select the desired Tenant from the Type drop-down list.|
|Time zone|Select the desired time zone from the **Time zone** drop-down list. The default time zone is **UTC -7:00 Pacific Time**.|
|Language|Select the preferred language from the **Language** drop-down list. The default language is **English**.|
|Date and number format|Select the preferred date and time format from the **Date and number format**. The default value is **United States**.|
|Currency|Select the preferred currency from the **Currency** drop-down list. The default value is **US Dollar (USD) $**.|
|Description|Type a description (if required) in the **Description** box.|

3. Click **Create**.

## To change an existing Instance
You can perform a few actions on an existing Instance to change the properties as well as to delete it. Follow the below steps:  
1. Go to **Settings > Instances**.
2. In the **Instances** tab, click the horizontal ellipses under the **Action** column for an existing Instance.

The **Action** list appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Actionlist.png?raw=true)  

---
3. If required, perform the actions below on the **Action** list.

|To|Do|
|:-|:-|
|Edit the properties of already created instance or select the option to copy properties from the existing instance|Click **Edit**.|
|Delete the entire data set available for an existing instance|Click **Remove**.|
|Delete specific MDSP data from an existing instance|Click **Reset MDSP data**.|
|Delete privacy data|Click **Reset Privacy data**.|
|Delete datavault data|Click **Reset datavault data**.|
|View history for the instance|Click **History**.|
|Create backup or restore data from the saved backup|Click **Backups**.|

### To Reset MDSP data
You can specify the data that you want to reset while resetting the MDSP data for an existing instance. Follow the below steps:

1. In the **Action** list, click **Reset MDSP data**.

The **Reset MDSP data** pop-up appears. 

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_ResetMDSPpopup.png?raw=true)  

---
2. Perform one of the below actions:

|If you want to|Then|
|:-|:-|
|Delete all data and settings|Select **Reset everything**.|
|Delete everything except already imported or connected dataflows|Select **Keep all dataflows**.|
|Delete everything except dataflow, settings for stitch and the Profile table|Select **Keep all dataflows, settings for stitch and the profile table**.|

3. Click **Reset**.
## To change Settings of Instance
You can directly change the information of your instance, using the Settings feature. Follow the below steps:  
1. Go to **Settings > Instances**.
2. Click the **Settings** tab.

The **Settings** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Instances_Settingshomepage.png?raw=true)  

---

3. If required, perform the following actions on the **Settings** screen:

|To|Do|
|:-|:-|
|Change the Instance name|Type a new instance name in the **Instance name** text area.|
|Change Time zone|Select a new time zone from the **Time zone** drop-down list.|
|Change Language|Select a new language from the **Language** drop-down list.|
|Change Date and number format|Select a new date and time format from the **Date and number format** drop-down list.|
|Change Currency|Select a new currency from the **Currency** drop-down list.|

4. Click **Save** to apply your changes.
