# Using the Rule Match

## Overview

The Rule match is the static rule approach to match the attributes across tables in the Modern Data Stack Platform. In this approach, select the rules manually based on the algorithm. You can also choose the match precision, for example, Exact match or Fuzzy match.

- Exact Match
  - When you select the Exact match, the inbuilt rule finds an exact match to resolve identity. Certain transformations like removing unwanted spaces, trimming the text, writing in lowercase, and data formatting apply. You can consider an exact match when identifiers are the same after the transformation.
- Partial or Fuzzy Match
  - When you select match precision as High, Medium, or low, you get the option to select which kind of algorithm you want to apply.
  - Currently, SkyPoint Supports Phonetic match and distance-based Levenshtein match.
  - You can select a Phonetic match over the column in which a match would be considered true when both the matching values are phonetically similar. For example, Dylan and Dillon
  - Distance-based Levenshtein is a dynamic programming-based approach and one of the most used approaches for good quality matches. In this approach, two values are considered to be a match when converting from one value to another, which requires a smaller number of transactions. ex- Tony and Tonyy. Converting Tony to Tonyy requires only 1 transaction. Addition of one Y. One Transaction can be either updated, deleted, or added.

## To match tables using the Rule Match

The Rule Match process consists of two sections:

- Specify the match order
- Define rules for match tables

## Specify the match order

1. After running the map stage of the Stitch process, navigate to **Stitch** > **Rule Match**.

The Rule match window appears. All the tables ingested as part of the data flow get listed, as you can see in the image below.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RuleMatchWindow.png?raw=true)

---

2. Click **Set Order** to select your tables.

> :grey_exclamation: **Note**: You select at least two tables to perform the Rule Match process. 

3. You can select the **Include all** check box to include all records as a unique profile and match every following table.
4. If you want to change the order of the table, click the ^ icon in the **Reorder** column.
5. Select **Done** to apply your changes.

> :grey_exclamation: **Note**: In case **Include all** is selected, all records of the table will be selected irrespective of the match with the other table.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RuleMatchOrder.png?raw=true)

---

## Define rules for match tables

1. Click the > icon under the **Order** column to see **Add Rule** option.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RuleMatchRecordDetails.png?raw=true)

---

2. Click **Add Rule** to define match rules.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RuleMatchAddRule.png?raw=true)

---

|Item|Description|
| :- | :- |
|Table (first row)|Option to choose a related and unique attribute.|
|Table (second row)|Option to choose an attribute that relates to the attribute of the first row.|
|Precision|Option to set the precision level using the slide bar.|
|Normalize|Allows you to choose from following normalization options for the selected attributes such as Phonetic and Levenshtein.|
|Name|Option to provide a name for the rule.|
|Add condition|Allows you to add more conditions.|

---

3. Select the right attributes to define a rule.
4. Choose the match precision using the slide bar.
5. For non-exact precisions, you can choose options to Normalize algorithms from the drop-down list (Phonetic, Levenshtein).
6. Provide a **Name** for the rule.
7. If you want to add more conditions for the Rule Match process, click **Add condition** or select **Done** to finalize the rule.
8. Click **Save.**
9. Click **Run** to start the Rule Match process.

A confirmation message appears after the successful run. You can see the result from ML match: Total records, Match Count, Matched Records, Unmatched records, and Number of records.  For description, refer to the [**Match overview section**](match.md).

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/RuleMatchOutput.png?raw=true)
