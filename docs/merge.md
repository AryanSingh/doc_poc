# Merging tables

## Overview

Merging is the last step in the identity resolution process. The merge step resolves and unifies data by combining duplicate attributes and removing attributes you don't need. In SkyPoint MDM, you can merge the matching records to create unique profiles. In this step, profiles identified to have matched either based on the Rule match or the ML match, merge into one table, creating a unique and longitudinal customer profile.

## To merge tables

1. After completing the map and merge steps, navigate to **Resolve > Unify**.

![Alt image](/doc_snippets/UnifyMerge.png)

2. Click the horizontal ellipsis under the **Actions** column.
3. Select **Edit**.
4. Click **Merge**.

The **Merge** window appears.

![Alt image](/doc_snippets/MergeWindow.png)

5. Click **Save**.
6. Click **Run** to start the Merge process.

![Alt image](/doc_snippets/MergeRun.png)

7. Do one of the following:

|To|Do|
| :- | :- |
|Run merge the first time or run merge without indexing for the subsequent run|Select **Run only merge**.|
|Subsequent run with indexing after profile creation or change in profile attributes|Select **Run merge with indexing**.|

> [!Tip]
> The merge run process supports two flows – **Run only merge** and **Run merge with indexing**. The **Run merge with indexing** will be disabled during the initial merge process as merge and indexing must be done separately. For the first time, the **Run only merge** will be triggered to merge the table attributes for profile creation. Both **Run only merge** and **Run merge with indexing** options will be enabled for the subsequent runs. The **Run merge with indexing** will trigger merging the attributes as well as applying indexes on attributes that would be mostly used for searching and filtering customer profiles.

![Alt image](/doc_snippets/MergeOutput.png)

Once you have completed the Merge process, you will get the following results:

|Item|Description|
| :- | :- |
|Combined customer fields|Fields sharing the same semantic type are grouped into a single field.|
|Individual customer fields|Fields that do not share identifiable semantic types will remain as single fields.|
|Profile attributes|It displays a complete picture of the profile attributes after the merge stage, for example, name, email, and phone.|
|Primary keys|Display the list of primary keys of each table.|
|Removed from profile record|Display those records, which were removed from the merge process primarily due to lack of quality data in the key attributes.|

8. If you want to see the run history of the Merge stage, click **Run History.** You can view the result either in **List** (for all) or **Group by** (for a particular group).

### Next step

Once you have completed the merge step, create your profile using the master data. You can use the master data for [enrichment](bigQuery_enrichment.md), [timelines](timelines.md), [relationships](relationships.md), and [predictions](CustomerchurnOverview.md) to gain more insight.


