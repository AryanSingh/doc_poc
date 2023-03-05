# Match

## Overview

SkyPoint platform provides powerful capabilities with a variety of match rules to compare records. Match rules range from a simple exact match to sophisticated algorithms. In SkyPoint MDM, you can use either rule-based matching or machine learning-based matching to identify and compare records in different datasets.

After completion of the match process, you can see the following results:

- **Number of records:** Number of unique records found based on match criteria or rules, which involves de-duplication and clustering. Each record cluster is a group of records that corresponds to a unique record.
- **Match count:** Number of unique records which are formed by merging multiple records. Essentially, these are record clusters with several records.
- **Total records:** Total number of records across all tables used in Match.
- **Matched records:** Number of records that were used to form plural record clusters. A plural record cluster is a cluster formed with multiple records.
- **Unmatched records:** Records that failed to match with any other record used in Match. These form singular record clusters, which are record clusters containing a single record.

> [!Tip]
> You can run the Rule match and the ML match or vice-versa. Only the last executed match type will be applied to create the profiles.

## Rule Match

## Overview

Rule match is the static rule approach to match the attributes across tables in the Master Data Management (MDM). In this approach, select the rules manually based on the algorithm. You can also choose the match precision, for example, Exact match or Fuzzy match.

- Exact Match
  - When you select the Exact match, the inbuilt rule finds an exact match to resolve identity. Certain transformations like removing unwanted spaces, trimming the text, writing in lowercase, and data formatting apply. You can consider an exact match when identifiers are the same after the transformation.
- Partial or Fuzzy Match
  - When you select match precision as High, Medium, or Low, you get the option to select which kind of algorithm you want to apply.
  - Currently, SkyPoint MDM supports Phonetic match and distance-based Levenshtein match.
  - You can select a Phonetic match over the column in which a match would be considered true when both the matching values are phonetically similar. For example, Dylan and Dillon.
  - Distance-based Levenshtein is a dynamic programming-based approach and one of the most used approaches for good quality matches. In this approach, two values are considered to be a match when converting from one value to another, which requires a smaller number of transactions. For example, Tony and Tonyy. Converting Tony to Tonyy requires only one transaction (the addition of one Y). One transaction can be either updated, deleted, or added. 

## Match tables using the Rule Match

The Rule Match consists of two sections:

- Specify the match order
- Define rules for match tables

### Specify the match order

1. Go to **Resolve** > **Unify**.

![Alt image](/doc_snippets/UnifyAddRuleMatch.png)

2. Click the horizontal ellipsis under the **Actions** column.
3. Select **Edit**.

The **Rule Match** page appears.

![Alt image](/doc_snippets/RuleMatchWindow.png)

4. Click **Set Order** to select your tables.

![Alt image](/doc_snippets/RuleMatchOrder.png)

5. Select your tables. You should select at least two tables to perform the Rule Match process. To include tables, click **Add table**.
6. You can select the **Include all** check box to include all records as a unique profile and match every following table.
7. If you want to change the order of the table, click the caret icon in the **Reorder** column.
8. Select **Done** to apply your changes.
9. Click **Save**.

### Define rules for match tables

1. Click the > icon under the **Order** column to see **Add rule** option.

![Alt image](/doc_snippets/RuleMatchRecordDetails.png)

2. Click **Add rule** to define match rules.

![Alt image](/doc_snippets/RuleMatchAddRule.png)


|Item|Description|
| :- | :- |
|Table (first row)|Option to choose a related and unique attribute.|
|Table (second row)|Option to choose an attribute that relates to the attribute of the first row.|
|Precision|Option to set the precision level using the slide bar.|
|Normalize|Allows you to choose from the following normalization options for the selected attributes such as Phonetic and Levenshtein.|
|Name|Option to provide a name for the rule.|
|Add condition|Allows you to add more conditions.|

3. Select the right attributes to define a rule.
4. Choose the match precision using the slide bar.
5. For non-exact precisions, you can choose the option to normalize algorithms from the drop-down list (Phonetic, Levenshtein).
6. Provide a **Name** for the rule.
7. If you want to add more conditions for the Rule Match process, click **Add condition** or select **Done** to finalize the rule. Conditions relate to a logical AND operator and are executed when all conditions are met.
8. Click **Save.**
9. Click **Run** to start the Rule Match process.

A confirmation message appears after the successful run. You can see the result on the Rule match page.

![Alt image](/doc_snippets/RuleMatchOutput.png) 

10. If you want to modify your rule match, click **Edit** and select **Done** to apply your changes.
11. Click **Run History** to view status, start and end time, details, etc.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> You can add or set multiple rules. The matching algorithms match a given record based on your first rule and continue to the second rule only if no matches were identified with the first rule. This process continues until a match is found or all of the rules have been applied. For example, one rule might be to match records that have the same full name, and another rule might be to match records that have the same email. The algorithm would start by trying to find a match based on the first rule (full name), and if it doesn't find a match, it will move on to the second rule (email). These match rules help to identify individuals who are potentially the same profile.

You can view the Rule match tables in the **Silver** tab under **Lakehouse > Databases**.


![Alt image](/doc_snippets/MatchSilver.png) 
