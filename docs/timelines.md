# Add multiple Timeline journeys

## Overview

A timeline refers to the transactional data involving any internal or external event, or activity taking place in an organization or business. Examples include purchase, feedback, value care, payments, and claim submission performed by the user/master data, for example, customers, partners, citizens, suppliers, sites, providers, patients, operators, locations, products, assets, etc.

## Prerequisite

You must at least have one Master Data profile set up in the SkyPoint studio and a transactional table imported in Dataflow > Imports.

## To create a Timeline journey

Follow the below steps to create a new timeline journey:

1. Go to **Master Data > Timelines**.
2. Click **Timelines journey**.

---

![Alt text](/doc_snippets/Timeline_clicktimelinejourney.png)

---

3. Enter **Name**, **Display Name**, and **Description** in the **New timeline journey** form.

---

![Alt text](/doc_snippets/Timeline_Timelinejourneyform.png)

---

4. Click **Next**.

## To add timelines 

You can add multiple timelines under a timeline journey by following the below steps:

1. In the created timeline journey page, click **Add table**.

---

![Alt text](/doc_snippets/Timeline_clickaddtable.png)

---

2. Select a **Table** from the drop-down list in **Select your timeline data** form.
3. Select **Primary key** from the drop-down list.
4. Select **Last updated** field from the drop-down list.

---

![Alt text](/doc_snippets/Timeline_selecttimelinedata.png)

---

5. Click **Next**.

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> You cannot create tables with the same name under one timeline journey.

## To add relationship

Follow below steps to connect your activity data to corresponding customer record in the **Add Relationship** form:

1. Select the id which links Transactional table to Master data table from the **Field** drop-down list.
2. Under the **Master data** section, select a **Table** from the drop-down list to connect with the transactional data.
3. Select Primary key of customer table from **Field** drop-down list.
4. Enter relationship **Name** in the text area.
5. Click **Next**.

---

![Alt text](/doc_snippets/Timeline_Addrelationshipformnext.png)

---

## To define the timeline

Follow below steps to select the fields that will appear in your timeline:

1. Select **Timestamp** from the drop-down list.
2. Select **Event** from the drop-down list.
3. Select **Web address** from the drop-down list.
4. Select **Details** from the drop-down list. You can select a maximum of three choices.
5. Enter a **Timeline display name** for your activity to define the timeline.
6. Select an **Icon** from the drop-down list.
7. Select an **Icon colour** from the **Choose Icon color** drop-down list.

---

![Alt text](/doc_snippets/Timeline_Definetimeline.png)

---

8. Click **Next**.

## To set activity type

Follow below steps to choose the type of activity you want to monitor:

1. Select activity type **Select from existing** or **Create new** in **Set activity type** form. If an activity type is not relevant for the new activity, choose **Create new**.
2. Select the **Activity type** from the drop-down list.
3. Click **Save & Next**.

---

![Alt text](/doc_snippets/Timeline_setactivitytypelist.png)

---

## To run Timeline journey

Once the timeline journey is created, follow the below steps to run it:

1. Go to **Master Data > Timelines**.
2. Click the three horizontal ellipsis on your created Timeline journey.
3. Click **Run**.

---

![Alt text](/doc_snippets/Timeline_Run.png)

---

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> You can click Edit on your timeline journey to find the created timelines.

- Click **Edit**, **Delete**, or **Preview** to manage the timeline.

---

![Alt text](/doc_snippets/Timeline_Edittimelinesinside.png)

---

4. A **Run journey** pop-up appears for your confirmation.
5. Click **Run**.

---

![Alt text](/doc_snippets/Timeline_Runjourney.png)

---

## Find created Timeline journey

Follow below steps to find the successfully created timeline:

1. Go to **Lakehouse > Databases > Gold**.
2. Select your timeline under the **Timeline** section.
3. Select **Data** tab.

---

![Alt text](/doc_snippets/Timeline_Findtimelineindatabases.png)

---

4. Copy a customer **Skypoint id** and go to **Master Data > Profiles**.
5. Search for the **Customer profile** using the **Skypoint id**.
6. Select the **Timeline journey** from the drop-down list.
   - You can view the respective data inside it below. 

---

![Alt text](/doc_snippets/Timeline_TimelinejourneyinProfiles.png)

---

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> The already existing timelines are grouped together under **Default journey**. You can rename the Default journey name to a corresponding journey.

---

![Alt text](/doc_snippets/Timeline_Defaulttimelines.png)

---