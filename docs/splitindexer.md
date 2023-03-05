# Creating and managing the Split indexer

## Overview

After the Master Data Management (MDM) - Resolve process, you can create a complete profile to gain more insights about your master data. SkyPoint platform allows you to define the index for the master data. You can select the attributes to create the index for searching and filtering on the profiles page. The Split indexer helps you to find information about the specific profile or group of profiles quickly.

### Prerequisite

You must have completed the data [ingestion](https://docs.skypointcloud.com/docs/imports.html) and [unification](https://docs.skypointcloud.com/docs/stitch.html) process.

## To create a Split indexer

1. In the left pane, go to **Master Data** > **Profiles**.

The profiles window appears.

![Alt image](/doc_snippets/SplitIndexer_Window.png)

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> When the merge process is completed for the first time and a user navigates to the profiles page, the application will display a **0 Profiles** indicating "Add attributes" is due for search and filter indexing.

2. Click **Add attributes**.

![Alt image](/doc_snippets/SplitIndexer_AddAttributes.png)

3. On the **Add attributes** page, select the attributes that you want to display on the **Profiles** page.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> The **Add attributes** page shows those attributes that you have added during the **Resolve > Map** process. You can select up to 20 profile attributes. If you wish to add or remove the attributes on the profiles page, you can do it by selecting or deselecting the attributes respectively. However, if you want to remove the attributes from the upstream process, go to **Resolve > Map** and remove the attribute from the table.

4. Do one of the following:

|If you want to|Then|
| :- | :- |
|Save the changes and process your request|Click **Done**.|
|Close the Add attributes page without saving any changes|Click **Cancel**.|  

5. Once you click **Done**, the indexing process will start.

![Alt image](/doc_snippets/SplitIndexer_Indexing.png)

## View profiles

1. After the successful run of the **Index creation**, you can view profiles in widgets on the home page. You can search and filter profiles based on the attributes that are selected. This allows you to quickly access specific information and gain valuable insights into your customers, enabling you to make informed decisions and improve customer engagement.

![Alt image](/doc_snippets/Customers_CustomersHomePage.png)  


|Item|Description|
| :- | :- |
|Add attributes|Allows you to add or remove attributes. You can define the specific criteria for filtering or sorting data.|
|Show filter|Allows users to narrow down a large set of data or information based on specific criteria such as filter profiles or attributes.|
|Clear filter|Option to remove all the filters on the profiles page. You can quickly reset the view without having to manually remove each individual filter.|
|Sort by|Sorts the output in order (ascending or descending) to view attributes in the preferred order.|
|Refresh ACS|To restart or reactivate the Azure Cognitive Search (ACS) process. For example, when the Add attribute process fails then Refresh ACS will be activated to trigger and rerun the process. The refresh process updates the search index and ensures that the search results are accurate and up-to-date.|
|Search|Helps you to find the exact item that you need. For example, if you know a customer ID then you can enter it into the search field to get the profile details of the customer.<p>**Note**: For an exact match, search in double quotes. The search function works for all the attributes of the profile.</p>|
|Select Master Data|Option to choose the specific master data to view from the dropdown list. You can view profiles for the selected master data.|
|Exact search|Displays only those results that exactly match the word or phrase entered by the user. |  

2. To edit the list of attributes and modify the Split indexer, click **Add attributes**, remove or add the attributes, and then select **Done** to apply your changes. It loads selected attributes into the system and displays them on the profiles page. You can select and update for each master data profiles page.  

### Next step  

Once you have completed the Split indexer, run [merge](https://docs.skypointcloud.com/docs/merge.html) with indexing to merge tables and refresh profiles. You can add more data sources, enrich unified profiles, or create an audience to work with unified master data profiles in various downstream processes.
