# Unifying data – add Master data

## Overview

SkyPoint MDM unifies data using data matching and merging techniques. Data matching involves identifying and comparing records in different datasets that represent the same or similar tables. Once the matching records have been identified, data merging involves combining the data from the different records into a single, unified "golden" record.

SkyPoint allows the creation of multiple master data profiles under the same instance for your tenant.

## Add Master data

Follow the below steps to add master data:

1. Go to **Resolve > Unify**.


![Alt image](/doc_snippets/AddMasterData.png)

2. Click **Add Master Data**.

![Alt image](/doc_snippets/CreateMasterData.png)

3. Enter the **Master Data name** and **Display name**.
4. Select the **Type** (community, resident, product, patient, etc.) from the dropdown list. Based on your requirement, you can select the master data type. For example, the **Resident** master data type can be used to classify and store information about senior living residents of a particular area or community and manage their care level, medications, and other details. You can include information about their contact details, demographics, and living arrangements. With the help of SkyPoint master data, you can generate reports, send reminders, and automate communication with residents.
5. Click **Save**.

Master data is displayed on the **Unify** page.

![Alt image](/doc_snippets/MasterDataPage.png)

6. Repeat the process as needed to add additional master data records. It depends on your business needs and operations. For example: In the healthcare domain, you can create master data representing patients, providers, facilities, equipment, staff, medications, etc. In the retail domain, you can create master data representing products, customers, employees, warehouse, etc. Depending on the size and complexity of your organization, you can develop more detailed processes and procedures for adding and maintaining master data in SkyPoint MDM.
7. Click **Edit** under the **Actions** column to make any changes in the Match and Merge processes.
8. You can enable or disable master data. If you want to disable master data, click **Disable**. 

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Disabling the master data will not delete the entity/table from the platform. This feature helps to limit the visibility of the disabled master data table from further downstream processes like **Master data > Profile**, **Activate > Audience**, **Metrics**. You can enable the disabled master data as per the requirement.
> If a downstream process was already configured with disabled master data before disabling it, the downstream table remains un-effected. But you cannot create a new downstream process with a disabled master data downstream.

You can view the master data tables in the **Gold** tab under **Lakehouse > Databases**.

![Alt image](/doc_snippets/MasterDataGold.png)  

### Set a schedule for the Master data  

You can schedule your master data creation by using the built-in scheduling feature. This allows you to set up recurring tasks that automatically update your master data at specific intervals.  
To set a schedule for the master data, navigate to the **Settings > Schedule** section and configure the auto-run feature. You can select the master data, then specify the schedule for the task (e.g., daily, weekly, monthly), and any other relevant settings. Once the task is set up, it will automatically run at the specified schedules and update your master data.  

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Currently, the platform supports the scheduler functionality only for the default master data.


### Next step

Follow the Match ([Rule match](rulematch.md) or [ML match](mlmatch.md)) and [Merge](merge.md) steps to ensure that your master data is accurate and complete.
