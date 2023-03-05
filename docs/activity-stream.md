# Viewing and Managing Logs

## Overview

The Logs or Activity stream is used to monitor and keep track of the actions performed by different users on the SkyPoint Modern Data Stack Platform (MDSP). The system displays recent activities such as Login, Logout, Run, and many other activities. The activity stream is updated whenever the user modifies the associated record.

This section displays two types of streams, the Activity stream, and the Tenant Activity Stream.

## To view and manage the Logs

1. In the left pane, go to **Settings** > **Platform**.
2. Click the **Logs** tab.

The **Activity stream** page appears.  

---

![Alt text](/doc_snippets/PlatformActivityStream.png)  

---

It displays a tabular representation of the actions taken by any user on this platform with the following key characteristics:

|Item|Description|
| :- | :- |
|Timestamp|Displays the date and time when the action was performed.|
|Category|Displays the section in which the action has been done.|
|Action|Displays the action such as login, and logout.|
|Description|This is a text of the format run describing the user mapping with the action performed.|
|Data|Gives JSON data after clicking the View data icon. |


3. View the **Tenant activity stream** below the **Activity stream**. 
4. You can filter the data based on the timeline. Click **Filter by** drop-down list to view the Tenant activity stream for a specific duration.  

---

![Alt text](/doc_snippets/PlatformTenantActivityStream.png)  

---

|Item|Description|
| :- | :- |
|Timestamp|Displays the date and time when the action was performed.|
|Status|Indicates the status of the workflows that are performed on the platform. For example, it displays the registration of a user.|
|Detail|A type of acknowledgment based on the action performed.|
|Description|Displays the user mapping with the action performed.|
|Data|Gives JSON data after clicking the View data icon.|