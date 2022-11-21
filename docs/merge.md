# Merging Tables

## Overview

Merge is the last step in the identity resolution process. You merge the matching records to create unique profiles. In this step, profiles identified to have matched either based on the Rule Match or the ML Match merge into one table, creating a unique and longitudinal customer profile. 

## To merge tables

1. After completing the [map](map.md) and [match](match.md) ([Rule match](rulematch.md) or [ML match](mlmatch.md)) step, navigate to **Resolve > Stitch** > **Merge**.

The Merge window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MergeWindow.png?raw=true)  

---

2. Click **Save,** and after the UI shows **Saved successfully**.
3. Click **Run** to start the Merge process.  
A pop-up window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MergeRun.png?raw=true)  

---

4. Do one of the following:

|If you want to|Then|
|:---|:---|
|Run merge first time or run merge without indexing for subsequent run|Select **Run only merge**.|
|Subsequent run with indexing after profile creation or change in profile attributes|Select **Run merge with indexing**.|  

---

> [!Tip]
> The merge run process supports two flows – **Run only merge** and **Run merge with indexing**. The **Run merge with indexing** will be disabled during the initial merge process as merge and indexing must be done separately. For the first time, the **Run only merge** will be triggered to merge the table attributes for profile creation. Both **Run only merge** and **Run merge with indexing** options will be enabled for the subsequent runs. The **Run merge with indexing** will trigger merging the attributes as well as applying indexes on attributes that would be mostly used by users for searching and filtering customer profiles.

Once you have completed the Merge process, you will get the following results:

|Item|Description|
|:---|:---|
|Combined customer fields|Fields sharing the same semantic type are grouped into a single field.|
|Individual customer fields|Fields that do not share identifiable semantic types will remain as single fields.|
|Profile Attributes|It displays a complete picture of the profile attributes after the merge stage, for example, Name, email, and phone.|
|Primary Keys|Display the list of Primary keys of each table.|
|Removed from profile record|Display those records, which were removed from the merge process primarily due to lack of quality data in the key attributes.|

---

4. If you want to see the run history of the Merge stage, click **Run History.** You can view the result either in **List** (for all) or **Group by** (for a particular group).  

--- 
    
![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MergeRunHistory.png?raw=true)

---

> :grey_exclamation: **Note**: The merge step resolves and unifies data by combining duplicate attributes and removing attributes you don't need.  

### Next step

Once you have completed the merge, create your customers' profile using the [Split indexer](splitindexer.md). You can use the unified data for enrichment, timelines, relationships, and predictions to gain more insight into your customers.  

### See also

[Profile](profiles.md)  


