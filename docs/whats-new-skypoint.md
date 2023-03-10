# What's new in the SkyPoint platform

We're excited to announce our newest updates and releases! This article summarizes public preview features, general availability enhancements, and feature updates. To see the long-term feature plans see the bottom of this page.

> [!TIP]
> To submit feature requests and product suggestions, email us at support@skypointcloud.com or use Github issues.  

# August 2022 updates

The updates in August 2022 include new features and bug fixes.  

## Sprint 230 Release

### Resolved Issues

#### SkyPoint Vault:

- **Added Horizontal scroll bar** – The horizontal scroll bar was missing in the Attributes tab. The horizontal scroll bar is added to view hidden contents on the page.

#### SkyPoint Resolve:

- **Different record fields for ML match and Rule match** – Match record titles were shown differently for ML match and Rule match. This issue is fixed. Match record field names are consistent for the ML match and Rule match field.
- **Auto refresh of the Map card** – After clicking the Run button, the status was not updated automatically in the Map card. It was updated only when the user refreshes the page. The issue is verified, and the status updates automatically in the Map card.
- **ML match issue of clusters with null values** – ML match algorithm was creating clusters based on null values. This issue is resolved. Null values are treated differently, and matches will not happen based on null values.
- **UI issues on ML match and Rule match order page** - On the ML match and Rule Match Order page, if the number of entities was more than 10, two entities were assigned with primary on each page. The issue is fixed, and the "Match order" page displays the correct sequence. 

#### SkyPoint Predict:

- **Command button persistence after processing** – Once the user clicked the "Save & Run" or "Save & Close" button, it was not disabled. This issue is fixed for all the Prediction models. Once the "Save & Run" or "Save & Close" button is clicked, it will be disabled.
- **Fixed Sentiment analysis model** – Databricks execution failed due to library installation and configuration issues. The bug is fixed. The model name is corrected in ADF and starts working fine.

#### SkyPoint Activate:

- **Filter and pagination inconsistency in Audience** – When the user modified the filter, the new filter criteria were not working. The issue is fixed. Sorting, filtering, pagination, naming conventions, and informational messages work properly across the application.

#### Settings and Administration:

- **UI fixing for the Progress and Task details** – Data were overlapping due to the user interface having no spaces. The bug is fixed, and information is displayed clearly.

### Feature Updates

#### SkyPoint Dataflow:

- **Added Export name column** – Added new column "Export name" in the Run history to see the history for a particular export.
- **Added new connector support for Infor HMS** - Support for the Infor HMS connector has been added. Users can now do imports with Infor HMS as a data source.

#### SkyPoint Lakehouse:

- **Modification synched to Lakehouse** – Any entity schema or data changes made through Lakehouse SQL will be synched to Lakehouse. The addition or deletion of records in an entity through Lakehouse SQL updates the cosmos metadata.
- **Rename Entities to Databases and Tables** - Entities are renamed to Databases and Tables in the left navigation menu under Lakehouse and across all pages in the application.

#### SkyPoint Activate:

- **View profile card from Audience** – Users can view the profile cards for Profiles from the Audience.
- **Timeline creation from Audience** – Users can create timelines from the audience entity.

#### Settings and Administration:

- **Removal of CDM dependency** – The CDM dependency has been removed for all downstream processes. All processes Dataflow, Stitch, Audience, Timelines, Metrics, and Export work without CDM dependency. 
- **Consolidated view of account details** – A consolidated view of account details is added in SkyPoint studio "View account". When a user clicks on the "View account", the system displays the profile card with the organization name, username, email id, and recent activities performed for the Tenants and Instances.
- **Change URL for the Documentation** – The URL for the documentation is changed to <https://docs.skypointcloud.com/docs> to keep it simple, relevant, and accurate.  


<br/>  


## Sprint 229 Release

### Resolved Issues

#### SkyPoint Dashboard:

- **Tooltip UI issue for the Dataflow contribution index** – The tooltip style of the Dataflow contribution index is modified to keep similar to the Enrichment. It helps users to understand and analyze data easily.
- **Dashboard Profile widget** – The dashboard Profile card was not updated after the Map completion. This issue is fixed, each step shows Orange in color after successful completion.

#### SkyPoint Dataflow:

- **Run failure for Google BigQuery** – The file import couldn’t be possible due to the run failure of Google BigQuery. The bug is fixed, and the user can upload the records to the delta lake.
- **Data imports failed for Boulevard** – The data ingestion failed due to the incorrect date format used. In this case, the Dataflow needs to be reconnected to get the latest configuration.
- **Scroll behavior on the Imports page** – The home page and viewing area should not be scrollable. The scroll function should be used only on pages where the content exceeds the normal display.
- **Unchanged status after the run process** - Status was not changed to "Complete" in the grid automatically when the run is completed on the Imports page. This issue has been resolved, once the run completes the status will be updated automatically.
- **API Key validation** - In Export, the user receives an error stating that the API key is not present after clicking the Save button. The system should not allow proceeding without providing the API key. The issue is fixed, enabling users with a valid API key to proceed further.
- **Cent to dollar conversion** - Datatypes related to amount have been modified to support cents to dollar conversion for the Boulevard connector.
- **Option to delete the latest attribute** -  Added option to delete the latest added attribute for the SendGrid connector.
- **Selected attributes in the dropdown list** - The SendGrid attribute dropdown was showing the already selected attributes. The issue has been fixed and now, once an attribute is already selected, the dropdown won’t show the same attribute again.
- **Datetime column missing** – Datetime columns were missing for the Shopify connector. This is required for the creation and run of the timeline and prediction. This issue is resolved, added column "created\_date" in the order\_line\_item entity.

#### SkyPoint Lakehouse:

- **Enabled SQL Access after token expiry** – Earlier, a user was able to connect SQL Access with an expired Personal access token. An expired token should not establish the connection. The bug is fixed and will not allow the user to connect to Lakehouse Database after token expiration.
- **Filter Pop-up inconsistency in Entities** – The filter pop-up dialog was shown while loading the page, and the filter search criteria were not visible. The bug is fixed and verified with new changes.
- **Selection of the item in Group by** – A checkmark or tick mark was missing for "Group by" in the Entities section. The tick mark has been added to apply the selection of the fields under "Group by".

#### SkyPoint Resolve:

- **Location of the information message** – The information message bar is moved to the top of the display panel. When the user executes the Stitch process, the information message appears on the top of the page.

#### SkyPoint Profile:

- **Unable to create a timeline** – The user was unable to create a timeline because the entity was not listed in the dropdown. This was due to the check missing for the timestamp data type in the attributes. The check is added, and the user can select the entity from the dropdown list to create a timeline.

#### SkyPoint Predict:

- **Missing breadcrumb bar in the Custom models** – Breadcrumbs bar disappeared when you create a new Custom model. This issue has been fixed; the navigation bar appears on the "Custom models upload" page.
- **Persistence of the Save and run button after execution** - Once the user clicked the Save and run button on the sentiment model, the button was not disabled. The issue is resolved, and the Save and run button will be disabled once it is clicked.
- **Pagination inconsistency after sorting** - The pagination inconsistency after sorting is fixed in the Audience section. The audience selected on the next page remains the same.

#### SkyPoint Activate:

- **Unable to load the Metrics details** – In Metrics, data were not loading in the pop-up after execution. The bug is fixed, Metric details are loading in the Metrics pop-up, and displayed on the Profile Details page.

#### SkyPoint Empower:

- **DSR persistent after execution** – After DSR creation and run, DSR was showing on the same page until the page get refreshed. When DSR gets processed or completed, it is moved to its respective categories. The issue is resolved after disabling the caching for function calls.

#### Settings and Administration:

- **Updated product name in Sign In/Sign Up** – The product name is updated from "SkyPoint Customer Data Platform" to "SkyPoint Modern Data Stack Platform".
- **UI issue on Sign Up page** – Earlier, the validation message was overlapping with the work Email field, and the click button was not working for the Password and Company Name fields. The bug is fixed, Validation message appears above the Work Email field. Also, the click button works for the Password and Company Name fields.


### Feature Updates

#### SkyPoint Dataflow:

- **Removal of unnecessary configurations** – Removed unnecessary configurations such as the Privacy tab, Quality check, and Quality score fields during data ingestion for file-based connectors.

#### SkyPoint Lakehouse:

- **Alert message after the token expiry** – Once the token is expired, you can see an alert message on the SQL Access page indicating a refresh icon to regenerate the new token. You have to click the refresh icon to generate a new token.
- **Restructure the storage account** - The storage layer is restructured to comply with the unity catalog and utilize the governance capabilities. The storage is organized into three layers as follows:
  - **Bronze** – Tables of raw data ingested from various sources in the Dataflow with every light transformations.
  - **Silver** – Refined and transformed view of the data for example after Map in the MDM / Stitch process.
  - **Gold** – Consumption and business level aggregate Tables such as Profiles (Customer, Employee, Organization etc.), Timelines, Audience, and Metrics.

#### SkyPoint Profile:

- **Display name and color for the timeline** – The user can add color and select the name of the timeline in the customer journey.

#### SkyPoint Predict:

**UI Redesign**

- The Create page of predictions should list 4 cards in a row with a card for each model.
- The icons are included with a background in the Create page of predictions.
- A user can navigate to the "My Predictions" tab from the "View Predictions" page instead of Create tab using breadcrumb.
- A prediction name contains a hyperlink for models after execution.
- The header for performance metrics is frozen on the "View Predictions" page.
- Tooltips are added for each performance metric on the "View Predictions" page of the "Customer Churn", "Product Recommendation", and "Customer lifetime value" models.
- Removed the Prediction relationship entities edit functionality.

#### Settings and Administration:

- **Key Vault per environment** – A separate key vault is created for the Development and Production environment. Any platform-related sensitive information like certificates, connection strings, and passwords should be stored in the environment-specific Key Vault.
- **QA cosmos database migration** – Copied all documents from the Dev/Prod cosmos to QA.  


<br/>


# July 2022 updates

The updates in July 2022 include new features and bug fixes.  

## Sprint 228 Release

### Resolved Issues

#### SkyPoint Dashboard:

- **Metrics widget** - Business Metrics have been fixed to show the value instead of the number of metrics.

#### SkyPoint Dataflow:

- **Cent to dollar conversion** - Datatypes related to amount have been modified to support cents to dollar conversion for Square connector.  

#### SkyPoint Resolve:

- **Incremental run in Map** – The Map incremental failure is caused when any new entity is added and the user proceeds for Map incremental run. The issue is fixed, and the user can run the Map incremental after adding a new entity.  

#### SkyPoint Activate:

- **Pagination inconsistency in the Audience** – When the user opens the next page, the selected audience is changed after sorting. The pagination inconsistency after sorting is fixed. The audience selected on the next page remains the same.

#### SkyPoint Help+Support:

- **Sorting based on the latest message** - The user message was not correctly sorted in UI. Earlier, sorting the message was based on a modified date, so now the sorting is done based on created date.
- **Reply to the customer** – The error message "customer account not found" was shown for the SkyPoint support team. The bug is fixed and allows the SkyPoint specialist to add the reply to the ticket.

#### Settings and Administration:

- Redesign for the session timeout pop-up screen.
- Corrected typo error in session timeout pop-up message.



### Feature Updates

#### SkyPoint Dataflow:

- **Attribute selection for the SendGrid connector** – The user can do mapping and export only the selected attributes for the SendGrid connector. For additional attributes, added the "Custom" field.  
- **Added column in Types** – Added new column "Used in map" that shows the value "Yes" or "No". It allows users to select and delete only those custom labels which are not used in the Map process.

#### SkyPoint Lakehouse:

- **Replaced the Standard cluster with an Automated cluster** - Automated cluster supports Optimized autoscaling. Created a link service in Azure Data Factory (ADF) to point to the automated job cluster instead of the standard cluster. Also, upgraded Databricks to the latest version.
- **Refresh personal access token in SQL Access** – The user can generate a personal access token for accessing the lakehouse entities. Users can configure the expiry time for an access token and the default expiry time is set to 90 days. An alert message starts displaying 7 days prior to access token expiration.
- **Reason for removing duplicated records** - Added reason for removing duplicated records from entities in Map under Lakehouse > Entities > Discarded\_entity. It helps users to understand which records were removed and for what reason.

#### SkyPoint Activate:

- **Read metrics entities from Lakehouse** – Metrics data is now loaded directly from Delta tables instead of ACS leading to performance improvement.
- **Decimal value in the Metrics** - The decimal values display up to 2-digit place after the decimal, for example, 24.68, 158.68.

#### SkyPoint Empower:

**UI redesign in the DSR section**

- Date review completed and reason for denial columns are removed from Open Requests page.
- Review in time column data sync with Time to expiry column of DSR feature for Open Requests.
- Pop-up headers include their respective column names.  

<br/>

## Sprint 227 Release

### Resolved Issues

#### SkyPoint Lakehouse:
 - Filter and pagination inconsistency issues are fixed.
 - Intermittent occurrence of the save and cancel button on the entity page is fixed.
 - Tooltip added for the long entity-relationship names.

#### SkyPoint Vault:
 - Error message duration increased to 20 seconds on the Vault page. Only one error is displayed at a time.

#### SkyPoint Profile:
 - Profile Graph removed from UI.

#### SkyPoint Predict:
 - Edit option has been disabled for already running prediction model.
 

### Feature Updates

#### SkyPoint Lakehouse:
 - **New location for LakeHouse SQL** - The Lakehouse SQL tab from Settings > Instances has been shifted under the Lakehouse and named SQL Access.
 - **Change Data Capture support in SQL Access**: Lakehouse SQL supports data modification (ingest/delete/update) from the Lakehouse entities. Any entity data   change made through Lakehouse SQL will be synched to Lakehouse. The update is possible for the same entity name (case-sensitive) using Change Data Capture (CDC).
 - **Disable option for SQL Access**- On clicking the Disable button, a user gets a dialog box to deactivate the Lakehouse SQL connection.  
 - **Discarded entities reason** - Discarded entities reason added for every record in Map entity.


#### SkyPoint Empower:  
 - **Pending for review DSR's in Reports** – User can view the DSR requester email and view the pending DSR's with expiry dates under Empower>Reports. 

#### SkyPoint Activate:
 - **Add attributes in view member under Audience**- Users can add attributes in the view member page of Audience even if the result set of filters applied is empty. 
 - **Preserve filter state in view member Audience page**- The filter selection is preserved across pages and refreshes for view member page under Audience.
 - **Multiple Audience download** - The file name for multiple Audience download has been set as "Audiences.zip". All individual audiences are available with the original names under the zip file.

 <br/> 

 # June 2022 updates

The updates in June 2022 include new features and bug fixes.


## Sprint 226 Release

### Resolved Issues
 
 #### SkyPoint Studio:
- Currency is now visible for Business Metric on the Dashboard when currency is enabled during metrics creation.
- Total count for customers in the profile for each run is now available on the Dashboard.

#### SkyPoint Profile:
 - Values from the attributes of type "Reference.URL" in the entities is now available as a hyperlink in the Customers Page.
 - Sort order is maintained across pagination in the Customers page.

#### SkyPoint Activate:
 - User can now multiselect Audience and run from the top panel.


### Feature Updates

#### Settings and Administration:
 - **LakeHouse SQL - Refresh Hive metastore for syncing new entities** - A feature has been added to allow the sync for newly added entities from Dataflow to Hive metastore. User can click on Refresh option in Lakehouse SQL.
 - **Disable already enabled Lakehouse SQL** - Feature has been added to disable the Lakehouse SQL if already enabled and not in use.
 - **Integration with Visualization Tools through LakeHouse SQL** - With the access token visualization is now possible from [Lakehouse SQL to Power Bi and Tableau](visualizing.md) for visualizing the entities in SkyPoint Lakehouse.
 
#### SkyPoint Vault:
 - **Persist the state of filters applied** - Feature has been added to maintain the state of the filters applied on the entity, attribute, and  data columns for the user session.

#### SkyPoint Privacy:
 - **Reports redesign** - UI for the Reports section has been redesigned to highlight the aggregated view of the DSR's status within the date range selected by the user.

#### SkyPoint Predict:
 - **Run history** - Run history has been added for Predictions.

<br/>

## Sprint 225 Release

### Feature Updates

#### SkyPoint Dataflow:
 - **SendGrid Export** - Support for SendGrid export connector has been added.
 - **Types** - User can view the sensitive labels used in creation of the the Profile. Graphical view makes it easy to have a consolidated view for labels and manage the sensitivity. 

#### SkyPoint Studio:
 - **Help+Support** - User can now add mutliple attachments when raising a support ticket.

#### SkyPoint Activate:
 - **Datetime support in Metrics variables** - User can now create datetime variables in metrics. This allows subtration and addition on datetime fields.

#### SkyPoint Lakehouse:
 - **Deduplicated records from Map** - Duplicate records identified in Map process are now available under discarded Map entites.

#### SkyPoint Predict:
 - **Sentiment Analysis graphical view** - Graphical view for Sentiment analysis member report highlight the number of members with positive, negative or neutral sentiment has been added. User can also view the overall sentiment of the customers, word cloud and change in sentiment over months in an year.

#### SkyPoint Vault:
 - **Cascade bulk delete support** - User can now perform bulk delete for the entities, attributes and data.
 - **Semantic label mapping for attributes** - User can now add semantic labels for each attribute in vault.

#### Settings and Administration:
 - **LakeHouse SQL** - Lakehouse SQL feature has been added under Instances which opens the SkyPoint platform for integrations with third party applications. An access token is generated for each instance which allows the user to connect to external tools like Power BI, Fivetran , Airbyte etc , use external transformation tools like DBT, use external export tools like Census, Hightouch etc, support real time processing using Snowplow or Spark streaming and utilize Lakehouse entities inside and outside SkyPoint Platform.  
 
 <br/>

# May 2022 updates

The updates in May 2022 include new features and bug fixes.

## Sprint 224 Release

### Feature Updates

#### SkyPoint Studio:
 - **Help+Support** - User can now add an attachment when raising a support ticket.

#### SkyPoint Dataflow:
 - **Types** - A centralized location to manage all the semantic types has been added under Dataflow. User can see the list of system defined semantic types and can also add the custom types. Furthermore, the feature enables the user to define the display name, sensitivity and encryption for the semnantic types.

#### SkyPoint Resolve:
 - **Prevent deletion of indexed attributes from Map** - Feature added to prevent the user from deleting the already indexed attributes in Profile>Customers from Map process. User has the option to either map the attributes or remove the attributes from indexing. 

#### SkyPoint Profile:
 - **Customers** - Feature added to allow users to refresh the indexer load for profile attributes in case of any failures.

#### SkyPoint Activate:
 - **Metrics from Audience** - Feature added to create Metrics from Audience.
 - **Currency in Metrics** -  Feature added to support currency as a prefix for Profile attribute and Business Metric. While creating the Metrics user can select which Metric needs to have currency enabled. Currency settings are picked from the Instance level currency setting.

## Sprint 223 Release

### Resolved Issues

#### SkyPoint Resolve:
- Issues related to address validation in Map process leading to discarded entities have been fixed.
- UI issues for Matched percentage in Rule match have been fixed.

#### SkyPoint Activate:
- Metrics pipeline failures have been fixed.
- Issue in View Audience page allowing user to add same attrbutes multiple times has been fixed.

#### SkyPoint Studio:
- DSR graph on Dashboard has been fixed to show correct expiry dates.

### Feature Updates

#### SkyPoint Studio:
 - **Help+Support** - Help+Support has been added to SkyPoint Studio. User can now raise requests or concerns with SkyPoint using the same. User can also view the progress and status of the ticket raised. Functionality is available for admins only.

#### SkyPoint Profile:
 - **Split Indexer support** - It has been made mandatory for the user to select the attributes to be shown on the customers cards. Maximum of 20 attributes are allowed. With this the selected attributes are indexed and performance has been improved.

#### Settings and Administration:
 - **SkyPoint API** - Customer 360 API "GetProfilesBySearch" has been modified to support case insensitive search.  
 
<br/>

# April 2022 updates

The updates in April 2022 include new features and bug fixes.

## Sprint 222 Release

### Resolved Issues

#### SkyPoint Resolve:
- Blocking algorithm in ML match has been modified to increase efficiency.
- Rule match showing error on running for entities added in Map and not in Rule match has been fixed.

#### SkyPoint Activate:
- Audience issues on saving the Audience due to Subscription migration has been fixed.
- Display name in Audience now allows spaces.
- Name Validation Issue for Audience has been Fixed: Save has been disabled for incorrectly named audience.
- Audience Query builder has been fixed to not to allow the user to save the Audience if the attribute for any entity is blank.


### Feature Updates

#### SkyPoint Studio:
 - **Migration from Tenant App to Static Web App** - SkyPoint Studio is now available as a Static Web App.

#### SkyPoint Dataflow:

##### Imports:
- **Amazon S3 import suppport for sub folders other than root folder** - User can now import data files from Amazon S3 using sub folders as well.

#### SkyPoint Activate:
- **View Member page in Audience has been redesigned** - View Member page in Audience has been redesigned. Range filter will automatically get adjusted for the latest audience with customers. The UI for graph has been changed. Page shows 7 primary attributes by default which user can customize further.

#### SkyPoint Empower:
- **Email Verified and Expiry status added to DSR reports** - Two new columns added in DSR report form Email Verification and Expiry status. User can now view the Expiry status and Email verification status in DSR report directly.

#### Settings and Administration
- **Dashboard to show the states pending before the Profile creation** - User can now view the live update on Dashboard for what all processes are pending for the Profile to get created.


## Sprint 221 Release

### Resolved Issues

#### SkyPoint Activate:
- Audience can now be created with "Profile all records" feature in query builder.

### Feature Updates

#### SkyPoint Dataflow:

##### Imports:
- **New import connector support for Clutch** - User can now do imports with Clutch as a Datasource.

##### Exports:
- **Run history support in Exports** - Run history has been added for Exports. User can track the steps involved when running any export.

#### SkyPoint Resolve:
- **Candidate Key support added in Map** - User can now select a combination of attributes which uniquely identify the entity. This combination of attributes or candidate key will be used in Match and Persistent Id runs.

#### SkyPoint Profile:
- **Profile detail page redesign** - Profile detail page has been redesigned for new look and feel.

#### SkyPoint Activate:
- **Better visibility for error under description in Run history for Audience and Metrics** - User can see the error message corresponding to failure while running the Audience or Metrics pipeline under Run history > Description.

#### Settings and Administration:
- **Bring your Own Subscription support added for new user sign in** - New user on signing in can now choose to use SkyPoint's default subscription or their own for Azure Data Lake Gen2 , Azure Cognitive Search and Cosmos DB.
- **Refresh All option in Platform to support Persistent Id Run for ML match** - Refresh All option in Platform settings now provides option to select the Refresh Type for ML match. User can select Full run with Persistent Identifier.
- **Scheduler to have option for Full run with Persistent Id for ML match** - Refresh All option in Platform settings now provides option to select the Refresh Type for Ml match. User can select Full run with Persistent Identifier.
- **Dashboard Redesign** - Dashboard has been redesigned to add widgets for valuable insights for the Instance. 
  - User can see the scheduler updates - last refreshed date and status. 
  - User can see the gain or loss percentage in terms of customers added or removed from the Profile. 
  - User can see the latest five Audience and Metrics added into the Instance. 
  - User can view the Data contribution Index which is the contribution of each datasource for Customer 360 Profile. 
  - User can choose to hide the widgets as per the requirement.  
  
<br/>
 
# March 2022 updates

The updates in March 2022 include new features and bug fixes.

## Sprint 220 Release

### Resolved Issues

#### SkyPoint Resolve:
- In Map process - Default normalization selection was being copied to the next semantic label. Fix has been provided to maintain distinct normalization for each    label.
- Stat isolation done for Rule match and ML match - Rule match stats were getting impacted when ML match was executed. Fix has been provided to isolate the stats.

#### SkyPoint Activate:
- Readable query in Audience query builder now shows the text to depict all records selection from Profile by default.
- Profile entity now supports multiple "OR" conditions for attributes in Audience query builder.

#### SkyPoint Profile:
- Fix has been added to prevent showing the attributes for "Show Filter" in Profile - > Customers when user does not has required view permissions.


### Feature Updates

#### SkyPoint Dataflow:

##### Imports:
- **Redesign done for Dataflow Imports** - Redesign done to add the Dataflow name and connection details in one page. In -progress dataflows cannot be edited.
- **New connector support added for KWI**- User can now do imports with KWI as a Datasource.
- **New connector support added for AWS Cognito**- User can now do imports with AWS Cognito as a Datasource.

##### Exports:
- **New option for CSV export added for ADLS Gen 2 connector**- User can now choose to export in Json or CSV format from ADLS Gen2 connector.

#### SkyPoint Resolve:

- **Better visibility for error under description in View history for Stitch** - User can see the error message corresponding to failure while running the stitch pipeline for  - > Map , Match and Merge under View history > Description.

#### SkyPoint Activate:

##### SkyPoint Audience: 
- **Prevent new Audience creation in absence of customer Profile** - Feature added to prevent the user from adding a new Audience in case the customer profile is not yet configured. Audience creation option is disabled until a profile is created and the user can view a message informing the same.

#### Settings and Administration:

- **Support for new SkyPoint loader** - New SkyPoint loader has been added which is visible when loading the application.
- **Sign in and Sign up page redesign** - New UI provided for Sign in and Sign up page.
- **Bring your Own Subscription support added for Tenants added by Platform Admin** - Platform Admin can now add a Tenant and choose a subscription other than SkyPoint's default subscription for Azure Data Lake Gen2 , Azure Cognitive Search and Cosmos DB.
- **Left Navigation menu changes- Exports moved under Dataflow**- Exports are available under Dataflow and not Activate.

## Sprint 219 Release

### Resolved Issues

#### Settings and Administration:
- TenantAdmin is now able to view and edit Tenant settings.

#### SkyPoint Activate:
- View member page is Audience fixed to show member count graph according to the member count in the Audience.

#### SkyPoint Resolve:
- WritetoCDM failure for Json type has been fixed in Match. 

#### SkyPoint Empower:
- UI issues fixed for Privacy center and Data map.

### Feature Updates

#### SkyPoint Dataflow:

- **Better visibility for error under description in View history** - User can see the error message corresponding to failure while ingesting data from a datasource in Dataflow under View history > Description.

#### SkyPoint Lakehouse:

- **New logical grouping added for analytical store from SkyPoint** - Lakehouse is an integrated data warehouse and data lake using Delta Lake technology and Common Data Model. The analytical store provided by SkyPoint consists of Entities and Relationships. Both have been moved under SkyPoint Lakehouse.

#### SkyPoint Resolve:

- **Selected Match attributes shown on top of the list** - User need not scroll to see the attributes selected for match criteria. All the attributes are by default listed at the top of the list. The change can be seen on editing the rule in Match.
- **ML Match scaled to support entities with record counts > 50 million** - ML Match has been scaled to support entities with record counts > 50 million.

#### SkyPoint Profile:

- **Profile card to show datetime field of same format as selected by the user in Instance settings** - For the datetime fields which are mapped to Calendar.Date , Last.Modified.Date, Person.BirthDate in Map - advanced settings under Stitch have "Default datetime" field selected by default. With this feature, the same datetime format as set in the instance settings can be seen for the datetime fields in profile card. In case user wishes to see profile card with datetime as ingested from source, user can unselect the option in Map-advanced settings.

#### SkyPoint Predict:

- **Bulk upload supported for Custom Models** - Bulk data upload feature for custom models has been added. User can select the entity from which the records need to be passed to the model, number of records needed and other necessary attributes to view the results.  

<br/>

# February 2022 updates

The updates in February 2022 include new features and bug fixes.

## Sprint 218 Release

### Resolved Issues

#### SkyPoint Activate:
- The estimated audience size percentage when creating quick Audience from Profile has been fixed.

#### SkyPoint Resolve:
- Merge issues resolved in Stitch process.

### Feature Updates

#### SkyPoint Dataflow:

- **Stripe connector added for Ingestion** - Ingestion is now possible using the Stripe as a data source.
- **Square connector memory optimization** - Memory optimization done for square connector to handle large entity sets with any number of records.

#### SkyPoint Profile:

- **Inbuilt relationship between Enriched and Profile entity** - Inbuilt relationship added between enriched entity and profile entity. The relationship is visible as inherited relationship under relationships. User need not create explicit relationship in order to create Audience from Enriched entity.

#### SkyPoint Resolve:

- **Exact match option for all semantic labels** - Exact match option has been added for all semantic labels including custom labels in ML match.

#### SkyPoint Activate:

- **View history support added for Exports** - View history option available for Export. User can see last 5 entities exported, the number of records exportedand the date of export

#### SkyPoint Empower:

- **Fluent UI migration for Empower** - UI for Empower - DSR , Privacy settings, Data Processing Activities , Email templates and Data Maps has been modified using Fluent UI.

#### SkyPoint Predict:

- **Inbuilt relationship added between Prediction entity and Profile entity** - Inbuilt relationship added between Prediction entity and profile entity. The relationship is visible as inherited relationship under Relationships. User need not create explicit relationship in order to create Audience from Prediction entity.


## Sprint 217 Release

### Resolved Issues 

#### SkyPoint Dataflow: 
- System is able to handle ingestion for File headers having quotes.
- Default relationship type for Audience, Metrics and Timelines changed to System Type from User type.

#### SkyPoint Automate: 
- Power BI connector issue fixed. Now, user can use the connector to create the reports.

### Feature Updates

#### SkyPoint Dataflow:

- **Mongo DB connector added for Ingestion** - Ingestion is now possible using the MongoDB as a data source.
- **FTP connector added for Ingestion** - Ingestion is now possible using the Files in FTP location.

#### SkyPoint Empower:

- **UI for DSR page has been modified** -  Fluent UI migration done for DSR page.

#### SkyPoint Activate:

- **Query Builder in Audience Modified** - Query Builder UI changes implemented. New operator : IN and Between are supported now.
- **Revinate connector added as export destination** - User can now export the entities to Revinate.

#### SkyPoint Resolve:

- **Redundant column for ML type Semantic mapping has been removed** - Now, user need not add redundant semantic mapping in ML type column in Map process.
- **Custom labels maintained at Tenant level** - User need not need to create custom labels again and can utilize the same custom lables across Tenant for all Instances.

#### Settings and Administration: 

- **Feature to select date and number format added at Instance level** - User can now select date and number format in Instance settings. The same gets reflected all through the application.

## Sprint 216 Release

### Feature Updates

#### SkyPoint Profile:

- **Show Enriched attributes in Profile details page** - User can now view the enriched attributes in Profile Details page.
- **Predictive models output added in Profile details page** - User can now view the Prediction about the Profile in Profiles details page.
- **Support Multiple details attributes from Timelines and view in customer Journey in Profile details page** - User can now add multiple( max 3) attributes when creating the timelines. The same will be visible under "Customer Journey" in Profile details page. 

#### SkyPoint Predict:

- **Custom Model added for Single Upload** - Users can now test their own model using the Custom model feature in SkyPoint Studio. Implementation supported for Single data upload in the current release.

#### SkyPoint Automate:

- **Activate section added in Navigation Panel** - Automate section added in Navigation panel in SkyPoint Studio. User can now go to  Power Apps, Power automate, Microsoft Teams, SkyPoint Api from here.

#### SkyPoint Activate:

- **Readable String Support added for Query builder in Audience** - User can now view the readable form of query from Audience query builder which will help in ease of understanding and usage.
- **"Profile All records included" added in Audience Query builder** - There is no requirement to explicitly add Profile entity for saving the Audience. Application will automatically include all records from the Profile and Relate to the entity selected in Query builder of Audience.
- **Select attributes to be downloaded in Audience** - USer can now select the Attributes to be downloaded from the Audience section.
- **Select Attributes to be exported from each entity in Export** - User can now select attributes to be exported fromeach enity in export.

#### SkyPoint Resolve:

- **Cleanup moved before validation in Map process** - Design change implemented to add cleanup before validation in Map process.

#### Settings and Admin

- **Restrict multiple sign up from same email** - User is retricted from multiple sign up with same email in SkyPoint Studio.  

<br/>

# January 2022 updates

The updates in January 2022 include new features and bug fixes.

## Sprint 215 Release

### Resolved Issues: 

#### SkyPoint Resolve:

- **Pagination issue in Merge section** - Pagination issue has been fixed for merge section under stitch.
- **Do not allow user to delete already mapped entity** - User cannot delete already mapped entity now which was leading to inconsistencies.

### Feature Updates

#### SkyPoint Dataflow:

- **Visualize ERD's for Relationships** - ERD's for both user defined and system defined relationships can now be visualized to see the relationships between different entities.
- **Show both User defined and System generated Relationships** - User can now view both the user defined and system defined relationships under Relationships list view.

#### SkyPoint Profile:

- **Create Audience from filtered Profile** - It is now possible to create Audiences from the filtered profile view giving user the ease for Audience creation.

#### SkyPoint Resolve:

- **Intelligent Mapping Support** - Intelligent mapping option has been provided which can be used by the user for semantic mapping where system automatically selects the required semantic traits. While Intelligent mapping is ON, user still can edit the mapping and save.


## Sprint 214 Release


### Feature Updates

#### SkyPoint Dataflow:

- **New connector support for Data Relay** - Data Relay connector has been added to Dataflow > Integrations. The connector takes SFTP and SQL server credentials to connect to the Data Relay. Currently only one time load is supported. Incremental load is not yet supported.
- **Feature to add same Datetime format for all entities** - User can now select the option to add same Datetime format for all the entities required for integration when adding Connector details.

#### SkyPoint Profile:

- **UI changes for Profile card** - UI for Profile card has been modified using Fluent UI.
- **Sorting in Profile card view** - Sorting is now supported in profile card view. All the attributes added in the profile card are available for sorting.

#### SkyPoint Activate:

- **SFTP export destination added** - Export to SFTP location is now supported in SkyPoint Studio.
- **Fluent UI changes for Export** - UI for export has been modified using fluent UI.
- **Fluent UI changes for Audience** - UI for audience has been modified using fluent UI.

#### SkyPoint Predict:

- **Product name to be shown in Production recommendation Model output** - Product Recommendation output now shows product names which previously showed Product Id's.

#### Settings and Administration:

- **Contextual Documentation from SkyPoint Studio** - User is now directed to contextual documentation link based on the current section.
- **Left navigation panel to be in sync with SkyPoint product lines** - Left navigation panel has been modified to reflect the features alignment based on SkyPoint product lines.  


<br/>

# December 2021 Updates

The updates in December 2021 include new features and bug fixes.

## Sprint 213 Release

### Resolved Issues:

#### SkyPoint Predict:
1. Save Option added to Prediction Model configuration. Earlier user could only select "Save and Run".

#### SkyPoint Profile:
1. "Group by" filter has been fixed for entities.

#### SkyPoint Activate:
1. List of exports are now shown in reverse chronological order.

### Feature Updates:

#### SkyPoint Activate:

- **"Select from existing" option in export for File based connectors**-  The Option "Select from existing" in case of exporting File system based connectors has been added. It allows to use the exsiting credentials from dataflow connectors.

#### SkyPoint Resolve:

- **UI changes for Stitch Process** - UI for Stitch involving Map, Rule match, ML match and Merge has been modified using Fluent UI.

## Sprint 212 Release

### Resolved Issues:

#### SkyPoint Dataflow:
1. Created date in Dataflows has been fixed to reflect the created date time instead of showing current date time.

#### SkyPoint Predict:
1. "Preview" text has been removed from Prediction Models.

#### SkyPoint Activate:
1. "Preview" text has been removed from Audience.

#### Settings and Administration:
1. Pipeline failures when running scheduler has been fixed.
2. Issue while disabling the scheduler has been fixed.

### Feature Updates

#### SkyPoint Profile:

- **UI changes for Relationships** - UI for Relationships has been modified using Fluent UI.

#### Settings and Administration:

- **Scheduler Save and Edit Option** - Save is enabled when setting the scheduler for the first time. Once saved, the option to Edit is available.  


<br/>

# November 2021 Updates

The updates in November 2021 include new features and bug fixes.

## Sprint 212A Release

### Resolved Issues:

#### SkyPoint Dataflow:
1. UI issue for Tapin2 connector logo has been fixed.
2. Salesforce Marketing Cloud: User can now download only the required activities. Previously, all activities in the list were downloaded irrespective of the selection.
3. Floating header issue in entities has been fixed.

#### SkyPoint Empower:
1. Data settings tab is now working fine under Privacy Center. The error "Something went wrong" has been fixed.

#### SkyPoint Activate:
1. Decimal type attributes can now be added when creating business metrics.

#### SkyPoint Profile:
1. Navigation issues while transitioning different states during configuring enrichments has been fixed.
2. New Connection in Enrichment can now be saved. "Save" was shown disabled even after successful validation of the connection.
3. Activity Stream in Dashboard now displays activies in reverse chronological order.

## Sprint 211 Release

### Resolved Issues:
1. Pagination has been removed and breadcrumbs have been added on UI in **Dataflow** when adding new connectors.
2. UI issues in entities section have been fixed.
  - Total record count under entities is now visible. 
  - Filter option for Actions has been removed.

### Feature Updates

#### SkyPoint Profile:

- **Big query enrichment possible with only key validation** - Big query enrichment connection can be verified using Key file, project id and email id. There is no requirement to add Json file for validation.

- **UI changes for enrichment** - UI for enrichment has been modified using Fluent UI.

- **UI changes for entities** - UI for entities, attribute and data has been modified using Fluent UI.

#### SkyPoint Dataflow:

- **Tapin2 connector** - Tapin2 connector support has been added in Dataflow section.

- **Label inactive integrations** - Any datasource integrations which are not yet enabled show "Coming Soon" on hover.

#### SkyPoint Predict:

- **SkyPoint Predict**: UI for Prediction has been modified using Fluent UI.

- **UI changes for Custom Models** - UI for custom models has been modified using Fluent UI.

## Sprint 210 Release

### Resolved Issues:
1. UI issue related to incorrect header label for "Actions" under Insights > My Predictions has been fixed.

### Feature Updates
**Customer 360**:

- **Backup functionality for Instances** - Create and Restore Backup feature has been added for Instances. 

- **Associations renamed to Relationships**- UI change for renaming associations to Relationships has been implemented.

# October 2021 Updates 

The updates in October 2021 include new features, performance upgrades, and bug fixes.

## Sprint 210 mid-sprint Release

### Resolved Issues:
1. Skypoint Documentation link on the platform redirects to Overview page now. Previously user could only see Index page.
2. UI issues for Big Query enrichment have been fixed. The count of records enriched and the enriched data values are correctly visible under Entities.
3. UI issues for SFTP enrichment have been fixed. The count of records enriched and the enriched data values are correctly visible under Entities.

### Feature Updates: 

**Customer 360**:

- **UI changes for Timelines** - Timelines section view has been modified using Fluent UI.

- **UI changes for Dashboard widgets** - Widgets on the Dashboard have been  modified using Fluent UI.

- **View Instance Details** - Details for the Instances have been added- Refresh cadence, Organization ID , Security group and Type are available for every Instance. User can further edit to add more fields in Instance details.

- **Reset Functionality for Instances** - Reset functionality has been added under Instances. Three options are available for reset: **CDP data, Datavault data and Privacy center data**. Under CDP, further there are 3 options: 'Reset everything', 'Keep all dataflows', 'Keep all dataflows, settings for stitch and profile entity'.


## Sprint 209 Full Release 

### Resolved Issues:
1.Data, Insights and Actions get selected together on UI, only one should be shown as selected
2.Platform Level : Configured Audiences Not showing Up In Audience Page : Error 500
3.Unwanted text if0/00 is displayed on menu bar in place of sidebar collapse option

### Feature Updates: 

**Customer 360**:

- **Persist unique ID from previous run for Full refresh when running ML match**: The feature provisions that the same unique ID's are used in case of full refresh for ML match.

- **Enrichment for customer profiles using SFTP**: Enrich the profiles with data from SFTP now. The funtionality needs connection details, path to the SFTP file, user profile which needs to be enriched and attribute mapping between the user profile and the SFTP file. Save the enrichment created and hit Run. Currently, only csv file format is supported for SFTP enrichment.

- **UI changes for Dashboard** - UI for dashboard has been modified using fluent UI. Changes can be seen in the side bar, the headers, the cards section and the activity stream. Changes for the Graph section are in progress.

- **UI changes for Settings** - Settings section view has been modified using Fluent UI.

- **Cleanse your data by eliminating redundant records**: New feature has been added to remove the duplicate rows before mapping process. 

- **Export on schedule**: Three types of schedulers have been enabled for export. On every system refresh, every day and every week. Different time zones and timing can also be selected.

- **Create a new Instance from existing one**: Copy from existing instance funtionality takes care of copying the configurations for dataflow, enrichment, entity, timelines, metrics, audience, association, stitch and export.

- **Instance management history option**: History has been enabled for Instances.

- **FHIR Connector Support**: Support to import data from FHIR has been enabled in Dataflow. 
