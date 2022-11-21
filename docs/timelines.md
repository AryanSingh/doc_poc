# Defining a Timeline

## Overview

A Timeline is related to the customer's activity or actions. SkyPoint Modern Data Stack Platform (MDSP) consolidates your customer’s activities from various data sources and associates them with a unified customer profile. It gives you a chronological overview of your customer’s activities. 

## Prerequisite

You have created tables in the Dataflow. A table must have at least one attribute of type Date. If you need help and support, click **Need help?** button in the right corner of the page. For more information regarding raising a new ticket, refer [Help+Support](https://skypointcdpdocs.z22.web.core.windows.net/docs/help%2Bsupport.html) section.

## To create a timeline

1. In the left pane, go to **Profile** > **Timelines**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_AddTimeline.png?raw=true)  

---

2. Click **Add timeline**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_Overview.png?raw=true)  

---

To create and define a timeline you need to perform these steps in the following order:

1. Select your timeline data
2. Set up a relationship
3. Define the timeline
4. Set activity type
5. Review and Run

### Select your timeline data

1. Select **Table** from the drop-down list that includes transactional data.
2. Select the **Primary key** from the drop-down list that uniquely identifies the record.
3. Select the attribute from the drop-down list that has a date or time value, for example, created\_at, or updated\_at.

---

> :grey_exclamation: **Note**: This field displays attributes of date or time. Select an attribute that indicates when the records were last updated. It will be used to identify the records that fall within the incremental refresh time frame.

---

4. Click **Save & Next**.

### Set up a relationship

In the relationship setup, connect your activity data to the corresponding customer record.

1. Click **Add relationship**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_SetUpRelationsip.png?raw=true)  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_AddRelationship.png?raw=true)  

---

2. Select the foreign key **Field** to establish a relationship with another table.
3. Choose the customer **Table** from the drop-down list to connect with the activity data.
4. Select the primary key of the customer table from the **Field** drop-down list.
5. Enter the relationship **Name** to identify the relationship between tables.
6. Click **Apply** to establish the relationship.
7. Click **Save & Next**. If you want to modify the preceding step, then click **Previous**.

### Define the timeline

Once you have set up a relationship, choose the activity event and the starting time of your activity.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timeline_DetailsIconcolor.png?raw=true)  

---

1. Select **Timestamp** from the drop-down list. It represents the starting time of your activity.
2. Choose the **Event** for the activity.
3. Enter a **Web address** that contains a URL with information about this activity.
4. Choose the relevant information in the **Details** field.
5. Choose an **Icon** from the drop-down list that best represents the activity type.
6. Enter a **Timeline display name** for your activity to define the timeline.
7. You can select a preferred Color from the **Choose Icon color** dropdown list to display information in the timeline view on your customer profiles.
8. Click **Save & Next**.

### Set activity type

You can choose the type of activity that you want to monitor.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_SetActivity.png?raw=true)  

---

1. Choose the activity type **Select from existing** or **Create new**. If an activity type is not relevant for the new activity, choose to **Create new**.
2. Select the **Activity type** from the drop-down list.
3. Click **Save & Next**.

### Review and run the timeline

You can review and verify the new activity configuration.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_Review.png?raw=true)  

---

1. Click **Save & Close** to apply your changes.
2. To review and edit the previous step, click **Edit** or select the step on the vertical bar to update the information if necessary.
3. Click **Go Back** to the Timeline page to view the created activity.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_ConfirmationMessage.png?raw=true)  

---

4. Click **Run** to process the timeline activity. You can click the **Run History** button to view the details such as Start time, End time, and any applicable errors.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_Run.png?raw=true)  

---  

|Item|Description|
|:---|:---|
|Icon|Displays the Icon that represents the activity.|
|Table|Displays the table name which is used in the timeline.|
|Source|Displays the connector from which data was imported.|
|Primary key|The uniquely identifiable attribute.|
|Event|Indicates the event of the timeline.|
|Timestamp|Displays the start time of the timeline.|
|Details|Displays details of the timeline. Maximum 3 fields are allowed.|
|Status|Indicates the status of the run command on the timeline.|
|Action|Option to perform activities after completion of the configuration, for example, edit, or delete.|  

---

> :grey_exclamation: **Note**: You can go to the [Customers](https://skypointcdpdocs.z22.web.core.windows.net/docs/profiles.html) page and select a customer profile to view the customer’s activities. You can apply a filter to refine and include your selected activity type.

---

## Edit a timeline

You can edit your timeline to change the configuration.

1. Go to the **Timelines** page.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_Edit.png?raw=true)  

---

2. Click on the **Edit** icon of the timeline that you want to modify.
3. Open the review step and update the fields.
4. Select **Save & Close** to apply your changes.
5. Click the Run button to execute the process.

## Delete a Timeline

1. Go to the **Timeline** page.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_Delete.png?raw=true)  

---

2. Click on the **Delete** icon of the timeline that you want to remove. A dialog box appears for confirmation.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Timelines_DeleteConfirm.png?raw=true)  

---

3. Click **Yes** to remove the timeline activity.





