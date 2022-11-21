# Scheduling Data flows
## Overview
The Schedule feature in the SkyPoint Modern Data Stack Platform (MDSP) enables you to set a time to refresh all data flows and auto-run platform processes for your specific instance. The Schedule ensures all the data in MDSP is up to date. This can also help in running specific jobs regularly as per requirements.

To automate the platform procedures for your instances, you can select an interval to update your data imports. Additionally, you may select whether you want to refresh all your data or just the newly added information.
## To set a new Schedule 
Follow the below steps to set a time to refresh the data flows:  
1. Go to **Settings > Schedule**.
2. On the **Schedule** page, click the **Toggle** button to enable editing.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Homepage.png?raw=true)  

---
3. Click the **Repeat** drop-down list.  

The **Repeat** drop-down list appears.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Repeat.png?raw=true)  

---
4. Select the following options from the **Repeat** drop-down list:  

|To|Do|
|:-|:-|
|Refresh data flows daily|Select **Daily**.|
|Refresh data flows weekly|Select **Weekly**.|
|Refresh data flows monthly|Select **Monthly**.|

### To Schedule data flow Daily
Follow the below steps to schedule the data flow daily:
1. In the **Settings > Schedule** screen, select **Daily** from the **Repeat** drop-down list.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Daily.png?raw=true) 

---

2. Select the preferred **Time zone** in the **Time zone** drop-down list.
3. In the **Time** drop-down list, select the preferred time.   
   - You can add another time to refresh data flows by clicking on **Add another time**.
---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Time.png?raw=true) 

---

4. In the **Stitch flow** drop-down list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh data for the Rule Match|Select **Rule Match**.|
|Refresh data for the ML Match|Select **ML Flow**.|

5. In the **Refresh type** dropdown list, select one of the following:

|If you want to|Then|
|:-|:-|
|Refresh the entire data flow|Select **Full**.|
|Refresh only a subset of your total datasets that are changed recently|Select **Incremental**.|

6. Click **Save**.

### To Schedule data flow Weekly
Follow the below steps to schedule the data flow weekly:
1. In the **Settings > Schedule** screen, select **Weekly** from the **Repeat** drop-down list.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Weekly.png?raw=true)  

---
2. Select the preferred **Time zone** in the **Time zone** drop-down list. 
3. Check the **Days** under **Every** section.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Every.png?raw=true)  

---
4. Follow from **Step 2 to Step 5** in **‘To Schedule data flow Daily’** to fill the other categories.
5. Click **Save**.

### To Schedule data flow Monthly
Follow the below steps to schedule the data flow monthly:
1. In the **Settings > Schedule** screen, select **Monthly** from the **Repeat** drop-down list.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Monthly.png?raw=true)  

---
2. Select the preferred **Time zone** in the **Time zone** drop-down list. 
3. Check the specific **Days of the month** for schedule run from the **Days of the month** drop-down list. 

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Schedule_Daysofthemonth.png?raw=true)  

---
4. Follow from **Step 2 to Step 5** in **‘To Schedule data flow Daily’** to fill the other categories.
5. Click **Save**.
