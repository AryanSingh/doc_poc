# Data Maps
The dataflow that was chosen previously for different types of operations to some/all the different types of tables present inside them need to be carefully handled. Consolidation of different tables can be disastrous and that's why our platform provides an easier and powerful way to process, manage and secure the data with minimal complexity. 

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/dataMap.png?raw=true)

Data Map usually reflects 4 different stages through which the data flows through. They are:

- Collect: This field shows the dataflow chosen by any tenant that requires modifications/processing of any kind. 
- Transform: The main modifications regarding different tables take place over here and the data tables gets into a regularized shape for better understanding. 
- Process: Any processing needed that the customer wants with regards to the final use-case.
- Retain: The outcome of the modifications done on the dataset is reflected to the system and is stored for future references.

## PII Map
Personally Identifiable Information mapping helps us understand more about the specific centric across different tables and organize on general basis. We can edit the options available w.r.t the tables where we can choose to erase or access certain tables. 

### To select attributes for Update inaccuracy

You can directly select the attributes for Update inaccuracy from PII map. Follow below steps:

1. Go to **Empower > Data Maps > PII Map**.
2. Click the three horizontal ellipsis under **Actions** column for your desired PII Map.
3. Click **Edit**.
4. Check the **Update** column for attributes.
5. Click **Save**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/PIIMap_Updateattribute.png?raw=true)

---
