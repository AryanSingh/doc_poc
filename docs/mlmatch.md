# Using the ML (Machine Learning) Match

## Overview

The purpose of the ML Match is to identify the unique profiles from the tables across data sources which have customer information. In this approach, SkyPoint's Identity resolution algorithms match the tables based on data completeness and the confidence threshold set.

## To match tables using the ML Match

1. Go to **Stitch** > **ML Match**.

The ML match window appears.  

--- 
  
!["ML match page"](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MLMatch.png?raw=true) 

---

2. Click **Edit** to select relevant tables with customer data.  

 
> :grey_exclamation: **Note**: The ML Match order indicates the sequence in which the system matches the records. If you remove a table after running the ML Match, then deselected table will be removed, and all related criteria will also get deleted. However, you need to rerun the ML match after deselecting a table for the changes to get reflected.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Setorderofentities.png?raw=true)  
  
 ---
 
|Item|Description|
| :- | :- |
|Data completeness|Minimum Fraction of missing data in tables. Higher value will ensure stringent control on data quality for tables.|
|Match confidence|Minimum Confidence level for matched tables. Higher value will ensure stronger matches.|
|Threshold|The threshold value ranges between 0 and 100, where 100 is an exact match. The higher the threshold value – the greater the data completeness and match confidence output.|

---

3. Set the threshold value for **Data completeness** and **Match confidence**.  
  
  
> [!Tip] 
> Match confidence and data completeness show exact values on hover on the slider to select the precision for confidence and data completeness. Based on your requirements, such as accuracy and coverage, you can set the threshold value that best works for you. If accuracy is more important to set the match order, then increase the threshold value. If coverage is more important, then lower the threshold value.

4. Select relevant tables in the **Table name** column.  
  
  
> :grey_exclamation: **Note**: You need to select at least two tables and one semantic label criteria.  

  
5. Select the column names for which you want to identify unique records. If you wish, you can click on the **Exact Match** function to match records based on an exact match for selected columns.
6. Click **Save**. 
7. Click **Run** to start the ML Match process.

After the run process, you can see the result from ML match: Total records, Match Count, Matched Records, Unmatched records, and Number of records.  For description, refer to the [**Match overview section**](match.md).  

---
  
![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MLMatchresult.png?raw=true)

---

8. If necessary, do the following on the ML match page:

|To|Do|
| :- | :- |
|Discard all the changes from the last save|Click **Discard Changes**.|
|Cancel the Run that is in progress|Click **Cancel Run**.|
|Add or remove the tables, semantic label criteria|Click **Edit**.|
|See the run history of the ML Match process|Click **Run History**.|
|See last updated results|Click **View last run results.** Also, you can download the data after selecting the **Download** button displayed at the top right of the **Last run results** page.|

---

9. To view your matched data in the cluster form, click the **View Clusters** tab. Wait for a while to process your request. You can see the results as displayed below.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Viewcluster.png?raw=true)

---

You can apply the filter to view the results either way, such as SkyPoint ID, Phone number, Last modified data, Last name of the person, or Location.


