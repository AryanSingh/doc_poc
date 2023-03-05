# Creating BigQuery Enrichment

## Overview

BigQuery is a fully managed enterprise data warehouse that helps you manage and analyze your data. SkyPoint provides a feature to enrich your customer data with data from the BigQuery enrichment connector.

## Prerequisites
To configure BigQuery enrichment, the following prerequisites must be met:

- You have an active customer profile.
- Google BigQuery Service Account credentials for validation – **Email**, **Project Id**, **Password**.
- P12 Key file access.

## To create BigQuery enrichment

1. In the left pane, go to **Profile** > **Enrichment**, and select the **Discover** tab.
2. Choose **BigQuery**, click **Enrich my data**.
---

![Alt text](/doc_snippets/BigQuery_Description.png)

---

3. Read the **Overview**, click **Next**.

---

![Alt text](/doc_snippets/BigQuery_Overview.png)

---

The BigQuery enrichment consists of four steps, and you need to perform in the following order:

1. **Connect:** Select the connection for enrichment.
1. **Required data:** Choose a table containing customer profiles and related data from BigQuery to enrich.
1. **Attribute mapping:** Map the related fields from the customer table and the BigQuery table to get the data based on the mapped fields.
1. **Review and run:** Add the name for the enrichment and review the settings before running the enrichment.

## Select and set up your BigQuery connection
You can create a connection that allows SkyPoint Cloud instance to share data with another service.

1. Click **Add connection** to add a new link. 
2. If you want to change the existing BigQuery connection, select a **Connection for enrichment** from the drop-down list, then click **Edit**.

---

![Alt text](/doc_snippets/BigQuery_Connect.png)

---

3. Enter a **Display name**.
4. Enter your BigQuery Service Account credentials for validation – **Email**, **Project Id**, **Password**.
5. Click **Choose File** to upload a P12 file.

|**Item**|**Description**|
| :- | :- |
|Email|Option to enter your email associated with Google BigQuery.|
|Project Id|Option to enter Google cloud platform Project Id.|
|Password|Option to enter your password.|
|Key File|Option to upload a P12 key file. P12 file uses **Public Key Cryptography Standard (PKCS)** encryption to store private key and other sensitive information.|

---

![Alt text](/doc_snippets/BigQuery_SetUpConnection.png)

---

6. Click **Verify** > **Save > Next**.

## Select customer and BigQuery data set

1. Choose a **Customer data set** from the drop-down list. For example, Profile, Audience.
2. In the **BigQuery Data** drop-down list, choose a data set containing customer profiles related data from BigQuery. 
3. Click **Next**. 

---

![Alt text](/doc_snippets/BigQuery_RequiredData.png)

---

## Map your field name to the corresponding BigQuery table field

1. Select the source table from the **Source** drop-down list.
2. Select the BigQuery table from the **Target** drop-down list. 
3. Click **Next**.

---

![Alt text](/doc_snippets/BigQuery_AttributeMapping.png)

---

## Name BigQuery enrichment, review, and run

1. Enter **Enrichment name** > **Output table name**.
2. Click **Save Enrichment**.

---

![Alt text](/doc_snippets/BigQuery_Review.png)

---

3. Click **Run** to start enriching the data.
4. If you want to return, click **Close**.

---

![Alt text](/doc_snippets/BigQuery_Run.png)

---

5. After the run process, click the **My Enrichments** tab to see the BigQuery enrichment.

---

![Alt text](/doc_snippets/BigQuery_Output.png)

---

6. If necessary, do the following:

|To|Do|
| :- | :- |
|Edit a workflow for previously created BigQuery enrichment|Click **Edit**.|
|Delete a workflow|Click **Delete**.|
|Run the BigQuery enrichment|Click **Run**.|
|See the run history of the BigQuery enrichment|Click **Run History**.|
|Cancel the Run that is in progress|Click **Cancel Run**.|
|View the items in the List|Select **List**.|
|View the items in a specific Group (For example, Name, Enrichment, status)|Select **Group by**.|

7. After the enrichment process, you can view details in the Tables and the customer section as follows:

- To view details in the Tables section, do the following:  
      1. In the left pane, go to the **Lakehouse** and click **Databases** to find your table in the **Gold** > **Enrichment** list.

   ---

   ![Alt text](/doc_snippets/BigQuery_Entity.png)   
   
   ---
   
      2. Click the table name to view attributes, data, and download the CSV file.
      
---

![Alt text](/doc_snippets/BigQuery_Entity_Attribute.png)

---

- To view details in the customer section, do the following:  
      1. In the left pane, go to the **Profile**, click **Customers**.  
      2. Click on **Profile card**, and select the **All Attributes tab**.

