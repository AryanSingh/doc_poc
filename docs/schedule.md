# Scheduling Data flows
## Overview
The Schedule feature in the SkyPoint Modern Data Stack Platform (MDSP) enables you to set a time to refresh all data flows and auto-run platform processes for your specific instance. The Schedule ensures all the data in MDSP is up to date. This can also help in running specific jobs regularly as per requirements.

To automate the platform procedures for your instances, you can select an interval to update your data imports. Additionally, you may select whether you want to refresh all your data or just the newly added information.
## To set a new Schedule 
Follow the below steps to set a time to refresh the data flows:  
1. Go to **Settings > Schedule**.
2. On the **Schedule** page, click the **Toggle** button to enable editing.  

---

![Alt text](/doc_snippets/Schedule_Homepage.png)  

---
3. Click the **Repeat** drop-down list.  

4. Select the following options from the **Repeat** drop-down list:  

|To|Do|
|:-|:-|
|Refresh data flows daily|Select **Daily**.|
|Refresh data flows weekly|Select **Weekly**.|
|Refresh data flows monthly|Select **Monthly**.|  

Select the appropriate tab and follow the instructions to schedule data:

### [Daily](#tab/tabid-1)

Follow the below steps to schedule the data flow daily:
1. On the **Settings > Schedule** page, select **Daily** from the **Repeat** drop-down list.  

![Alt text](/doc_snippets/Schedule_Daily.png) 

2. Select the preferred **Time zone** in the **Time zone** drop-down list.
3. In the **Time** drop-down list, select the preferred time.   
   - You can add another time to refresh data flows by clicking on **Add another time**.
4. Select **Master Data** from the dropdown list.
5. In the **Stitch flow** drop-down list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh data for the Rule Match|Select **Rule Match**.|
|Refresh data for the ML Match|Select **ML Flow**.|

6. In the **Refresh type** dropdown list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh the entire data flow|Select **Full**.|
|Refresh only a subset of your total datasets that are changed recently|Select **Incremental**.|

7. Click **Save**.

### [Weekly](#tab/tabid-2)

Follow the below steps to schedule the data flow weekly:
1. On the **Settings > Schedule** page, select **Weekly** from the **Repeat** drop-down list.  

![Alt text](/doc_snippets/Schedule_Weekly.png)  

2. Select the preferred **Time zone** in the **Time zone** drop-down list. 
3. Check the **Days** under **Every** section.
4. In the **Time** drop-down list, select the preferred time.   
   - You can add another time to refresh data flows by clicking on **Add another time**.
5. Select **Master Data** from the dropdown list.
6. In the **Stitch flow** drop-down list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh data for the Rule Match|Select **Rule Match**.|
|Refresh data for the ML Match|Select **ML Flow**.|

7. In the **Refresh type** dropdown list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh the entire data flow|Select **Full**.|
|Refresh only a subset of your total datasets that are changed recently|Select **Incremental**.|

8. Click **Save**.

### [Monthly](#tab/tabid-3) 

Follow the below steps to schedule the data flow monthly:
1. On the **Settings > Schedule** page, select **Monthly** from the **Repeat** drop-down list.  

![Alt text](/doc_snippets/Schedule_Monthly.png)  

2. Select the preferred **Time zone** in the **Time zone** drop-down list. 
3. Check the specific **Days of the month** for schedule run from the **Days of the month** drop-down list. 
4. In the **Time** drop-down list, select the preferred time.   
   - You can add another time to refresh data flows by clicking on **Add another time**.
5. Select **Master Data** from the dropdown list.
6. In the **Stitch flow** drop-down list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh data for the Rule Match|Select **Rule Match**.|
|Refresh data for the ML Match|Select **ML Flow**.|

7. In the **Refresh type** dropdown list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh the entire data flow|Select **Full**.|
|Refresh only a subset of your total datasets that are changed recently|Select **Incremental**.|

8. Click **Save**.

---
