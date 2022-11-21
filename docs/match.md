# **Match** 
## **Overview**

The Match process helps to get unique clusters for matching as well as non-matching records across tables.  After completion of the Match process, you can see the following results:

- **Number of Record:** Number of unique records found based on match criteria or rules, which involves de-duplication and clustering. Each record cluster is a group of records that corresponds to a unique record.
- **Match Count:** Number of unique records which is formed by merging multiple records. Essentially, these are record clusters with several records.
- **Total Records:** Total number of records across all tables used in Match.
- **Matched Records:** Number of Records which were used to form plural record clusters. Plural record cluster is a cluster formed with multiple records.
- **Unmatched Records:** Records that failed to match with any other record used in Match. These form singular record clusters, which are record clusters containing single record.

The identity resolution match identifiers across disparate datasets and touchpoints to a single profile. This helps build a cohesive, longitudinal view of a consumer, enabling brands to deliver relevant messaging throughout the customer journey. 

### To perform the Match process
You can perform the Match process in two ways:

- [Rule Match](rulematch.md)
  - Exact Match
  - Partial or Fuzzy match
- [ML (Machine Learning) Match](mlmatch.md)

---

>  :grey_exclamation: **Note:** You can run the **Rule match** and save the **ML match** or vice-versa. Only the last executed match type will be applied to create the profiles. 

---
