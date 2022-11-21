# August 2022 updates

The updates in August 2022 include new features and bug fixes.

## Sprint 230 Release

### Resolved issue

#### SkyPoint Vault


|Issue|Reason/Cause|Solution|
| :- | :- | :- |
|Missing Horizontal scroll bar|The horizontal scroll bar was missing in the Attributes tab.|The horizontal scroll bar is added to view hidden contents on the page.|

#### SkyPoint Resolve

|Issue|Reason/Cause|Solution|
| :- | :- | :-|
|Auto refresh of the Map card|After clicking the Run button, the status was not updated automatically in the Map card. It was updated only when the user refreshes the page. |The issue is fixed, and the status updates automatically in the Map card.|
|Different record fields for ML match and Rule match|Match record titles were shown differently for ML match and Rule match.|The issue is fixed. Match record field names are consistent for the ML match and Rule match fields.|
|ML match issue of clusters with null values|ML match algorithm was creating clusters based on null values.|This issue is resolved. Null values are treated differently, and matches will not happen based on null values.|
|UI issues on ML match and Rule match order page|On the ML match and Rule Match Order page, if the number of entities was more than 10, two entities were assigned with primary on each page.|The issue is fixed, and the "Match order" page displays the correct sequence.|


#### SkyPoint Predict


|Issue|Reason/Cause|Solution|
| :- | :- | :- |
|Fixed Sentiment analysis model|Databricks execution failed due to library installation and configuration issues.|The bug is fixed. The model’s name is corrected in ADF and starts working fine.|
|Command button persistence after processing|Once the user clicked the "Save & Run" or "Save & Close" button, it was not disabled.|This issue is fixed for all the Prediction models. Once the "Save & Run" or "Save & Close" button is clicked, it will be disabled.|


#### SkyPoint Activate


|Issue|Reason/Cause|Solution|
| :- | :- | :- |
|Filter and pagination inconsistency in Audience|When the user modified the filter, the new filter criteria were not working.|The issue is fixed. Sorting, filtering, pagination, naming conventions, and informational messages work properly across the application.|


#### Settings and Administration



|Issue|Reason/Cause|Solution|
| :- | :- | :- |
|UI fixing for the Progress and Task details|Data were overlapping due to the user interface having no spaces.|The bug is fixed, and information is displayed clearly.|



### Feature updates

#### SkyPoint Dataflow

|Feature|Description|Learn more|
| :- | :- | :- |
|Added Export name column|Added a new column "Export name" in the Run history to see the history for a particular export.|<p>Go to [Dataflows > Exports](https://skypointcdpdocs.z22.web.core.windows.net/docs/exports.html). </p><p>In the Destinations tab, click the Run History button.</p>|
|Added new connector support for Infor HMS|Support for the Infor HMS connector has been added. Users can now do imports with Infor HMS as a data source.|Go to [Dataflow > Import Connectors](https://github.com/skypointcloud/platform/blob/master/docs/docs/importconnectors.md/#L1).|

#### SkyPoint Lakehouse


|Feature|Description|Learn more|
| :- | :- | :- |
|Modification synched to Lakehouse|Any entity schema or data changes made through Lakehouse SQL will be synched to Lakehouse. The addition or deletion of records in an entity through Lakehouse SQL updates the cosmos metadata.|<p>Go to [Lakehouse](https://skypointcdpdocs.z22.web.core.windows.net/docs/lakehouse.html). </p><p></p>|
|Rename Entities to Databases and Tables|Entities are renamed to Databases and Tables in the left navigation menu under Lakehouse and across all pages in the application.|Go to [Lakehouse > Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html).|



#### Settings and Administration


|Feature|Description|Learn more|
| :- | :- | :- |
|Removal of CDM dependency|The CDM dependency has been removed for all downstream processes. All processes Dataflow, Stitch, Audience, Timelines, Metrics, and Export work without CDM dependency.|Go to [Settings](https://skypointcdpdocs.z22.web.core.windows.net/docs/settings.html).|

###  Feature Improvement

#### SkyPoint Activate


|Issue|Improvement|Learn more|
| :- | :- | :- |
|View profile card |Users can view the profile cards for Profiles from the Audience.|Go to [Profile > Customers](https://skypointcdpdocs.z22.web.core.windows.net/docs/customerprofiles.html).|

#### Settings and Administration


|Issue|Improvement|Learn more|
| :- | :- | :- |
|Consolidated view of account details|A consolidated view of account details are added in SkyPoint studio "View account". When a user clicks on the "View account", the system displays the profile card with the organization name, username, email id, and recent activities performed for the Tenants and Instances.|Go to [Settings](https://skypointcdpdocs.z22.web.core.windows.net/docs/settings.html).|
|Change URL for the Documentation|The URL for the documentation is changed to keep it simple, relevant, and accurate.|Click the new [URL](https://docs.skypointcloud.com/docs).|


