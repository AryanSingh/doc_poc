# Exploring master data profiles

## Overview

SkyPoint Modern Data Stack Platform (MDSP) enables you to create a complete profile to gain more insights from the master data. The profiles page consists of features that enable you to choose certain attributes to create and define your profiles. You can further, filter or sort the profiles based on selected attributes to ease your analysis. The goal of the SkyPoint profile view page is to make it easy for you to access and manage the data you need, ensuring the data is accurate and consistent.

On the profiles page, you can perform the following activities:

- Select and view multiple master data profiles
- Add attributes
- Manage the split indexer
- Filter and search for customers
- Sort by a specific attribute

### Prerequisite

You have completed the [Master Data Management - Resolve](https://docs.skypointcloud.com/docs/stitch.html) ([map](https://docs.skypointcloud.com/docs/map.html) and [unify](https://docs.skypointcloud.com/docs/AddMasterData.html)) process.

## View multiple master data profiles

The master data profile page enables you to see a holistic view of each customer by combining data from various sources. You can build a meaningful relationship with your customer. Each profile allows you to gain personalized experiences of your customers such as preferences, interactions, and past events.

---

![Alt text](/doc_snippets/ProfilesHomePage.png)

---

Clicking the respective profiles, you can delve further into each of the individual profiles. Follow the below steps:

1. Navigate to **Master Data > Profiles** page.  

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> SkyPoint MDM supports a profile view page for multiple master data that provides a centralized interface for viewing and managing different types of master data. On the profile view page, you will see a list of all the master data profiles that have been created in the system. When you open the profiles page, the **Default Profile** master data page appears. Each master data profile page displays the information that was entered and saved in the corresponding table during upstream processes, such as the creation of that specific master data.  

2. You can select your master data from the drop-down menu. Each profile is displayed on a tile. When you click on a profile, you navigate to the profile detail page where you can see all the information related to that profile. It displays information such as personal details, contact information, and activity history for each master data profile.  
3. Click the **More** or **Less** option to expand or collapse the list of attributes on profile cards in a particular row. 
4. On the **Profiles** page, click the desired profile.

The **Profile details** page appears.

---

![Alt text](/doc_snippets/ProfileDetails.png)

---

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> The Profile details page shows the different values from the unified master data. The sidebar menu enables you to access various profile perspectives. By default, SkyPoint Cloud includes important profile perspectives such as timeline journeys and profile metrics. Depending upon your tenant configuration, you may see a detailed view and graphical representation of the data. You can hover over the perspective icon to see more details of the data. If a field has no value for the selected profile, it shows only the address field. The tile is structured into sections:
> - The first section displays a predefined set of fields followed by all fields that are part of the split indexer.
> - Timeline shows data if you have configured timelines journey. The timeline view contains chronologically sorted activities of the selected customer.
> - Metrics display if you have configured profile attributes.  

## Search a profile

You can directly search a customer’s profile with relevant customer information by using the search feature. Follow the below steps:

1. On the **Profiles** page, enter the customer information in the **Search** text area.
2. To search for exact information, activate the **Exact Search** toggle button.

> [!TIP]  
> The exact search feature allows you to search for a specific piece of information. To use the exact search feature, you typically need to type text in the search text area. For example, if you want to search for the exact customer's name, type "name of the customer". This would tell the search engine to only return results that match the exact information.

## Filter profiles

Using the **Show filter**, you can filter the profile attributes for specific searches related to your profiles. Follow the below steps to search your desired profile:

1. On the **Profiles** page, click **Show filter**.

The **Filter profile** pane appears.

---

![Alt text](/doc_snippets/FilterProfile.png)

---

2. Check the boxes that you want to filter. You can see the selected attributes on the **Profiles** page. You can select up to 20 attributes.
3. If you want to remove all filters, select **Clear filter** on the menu bar or clear a checkbox for the selected attribute.
4. If you want to customize the filter for your attributes, click **Customize**.

---

![Alt text](/doc_snippets/CustomizeFilter.png)

---

|Item|Description|
| :- | :- |
|Frequency: Highest to Lowest|Enables you to arrange the profiles from highest to lowest order of frequency.|
|Value: A to Z|Enables you to arrange the profiles for the attribute category in alphabetically ascending order.|
|Value: Z to A|Enables you to arrange the profiles for the attribute category in alphabetically descending order.|

5. Select your preferred option from the **Sort options by**.
6. In the **Show up to** text box, enter the number of profiles you want to view.
7. Check the **Remove null value** box. This can help prevent data inconsistencies and ensure that the attribute always has a valid value.
8. Click **Done**.  

## Sort by profile attributes

You can use the **Sort by** feature on the **Profiles** page to filter your search further by selecting one of the data sorting options. For example, if you want to sort the user profiles by the user's last name, you can use a sorting function to sort the profiles alphabetically by the last name. This can make it easier to find a specific user or to view the user profiles in a specific order.

Follow the below steps to sort the profile attributes:

1. On the **Profiles** page, click **Sort by**.
2. Select your desired attribute from the **Sort by** dropdown list. The profiles get sorted according to the selected attribute.

## Refresh Azure Cognitive Search

Azure Cognitive Search (ACS) supports indexing of a wide range of data types. You can rebuild the search index to update it with the latest changes to your data. 

- To reactivate an ACS, click **Refresh ACS** on the profiles page.

## Select Master data  

A dropdown list is added to select and view profiles for a particular master data. It is useful for organizations that have a large number of master data and corresponding profiles, as it allows users to easily filter the data based on their needs and view the relevant profiles in a more organized and efficient way.
