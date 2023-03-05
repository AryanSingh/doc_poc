# Creating Secure File Transfer Protocol (SFTP) Enrichment

## Overview

An SFTP is a network protocol that uses secure shell encryption to provide a high level of security for accessing and transferring files on remote systems. An SFTP server is a storage location where files are stored and retrieved. Enriched data is an asset for any organization because it generates new business insights.

With the SFTP data enrichment, you can combine first-party data from internal sources or third-party data from external sources. SFTP Enrichment supplements your customer data with data from external sources, including SkyPoint and other partners, by creating enrichments from connectors to enrich your data.

## Prerequisites

To configure SFTP enrichment, the following prerequisites must be met:

- You have an active customer profile.
- You have SFTP credentials for validation – **Username**, **Password**, **Hostname**, and **Port number**. For SFTP connection establishment, refer to the [SFTP connector](sftp.md).   

## To create SFTP enrichment

1. In the left pane, go to **Profile** > **Enrichment**, and select the **Discover** tab.
2. Choose **Secure File Transfer Protocol (SFTP)**, click **Enrich my data**.

---

![Alt text](/doc_snippets/SFTP_Enrich.png)

---

3. Read the overview and click on **Next**.

---

![Alt text](/doc_snippets/SFTP_Overview.png)

---

The SFTP enrichment consists of five steps, and you need to perform in the following order:

1. **Connect**: Select your SFTP connection for enrichment.
2. **Required data**: Choose a data set containing customer profiles you want to enrich.
3. **Location**: Create Skypoint SFTP enrichment.
4. **Attribute mapping**: Map your field name to the corresponding SFTP file field.
5. **Review and run**: Add the name for the SFTP enrichment and review the settings before running the enrichment.

## Select and set up your SFTP connection

You can create a connection that allows SkyPoint Cloud instance to share data with another service.

1. Click **Add connection** to add a new link.
2. If you want to change the existing SFTP connection, select a **Connection for enrichment** from the drop-down list, then click **Edit**.

---

![Alt text](/doc_snippets/SFTP_Connect.png)

---

3. Enter a **Display name**.
4. Enter your SFTP credentials for validation – **Username**, **Password**, **Host**, and **Port**. 

|Item|Description|
| :- | :- |
|Username|Option to enter your username through which you connect to the server.|
|Password|Option to enter your password.|
|Host|Option to enter the hostname of the server or the IP address.|
|Port|Option to enter the port number on which the client wants to connect.|

---

![Alt text](/doc_snippets/SFTP_SetUpConnections.png)

---

5. Click **Verify** > **Save** > **Next**.

## Select customer data set

1. Choose a **Customer data set** from the drop-down list. For example, Profile, Audience.
2. Click **Next**.

---

![Alt text](/doc_snippets/SFTP_RequiredData.png)

---

## Create Skypoint SFTP enrichment

1. Enter the **Path** > **Filename** of the data file to import. 
2. Click **Verify** > **Next**.

---

![Alt text](/doc_snippets/SFTP_Location.png)

---

## Map your field name to the corresponding SFTP file field

1. Select the source attribute from the **Source** drop-down list.
2. Select the SFTP file columns from the **Target** drop-down list. 
3. Click **Next**.

---

![Alt text](/doc_snippets/SFTP_DataMapping.png)

---

## Name SFTP enrichment, review, and run

1. Enter **Enrichment name** > **Output table name**.
2. Click **Save Enrichment**.

---

![Alt text](/doc_snippets/SFTP_Name.png)

---

3. Click **Run** to start enriching the data.
4. If you want to return, click **Close**.

---

![Alt text](/doc_snippets/SFTP_Run.png)

---

5. After the run process, click the **My Enrichments** tab to see the SFTP enrichment.

---

![Alt text](/doc_snippets/SFTP_Output.png)

---

6. If necessary, do the following:

|To|Do|
| :- | :- |
|Edit a workflow for previously created SFTP enrichment|Click **Edit**.|
|Delete a workflow|Click **Delete**.|
|Run the SFTP enrichment|Click **Run**.|
|See the run history of the SFTP enrichment|Click **Run History**.|
|Cancel the Run that is in progress|Click **Cancel Run**.|
|View the items in the List|Select **List**.|
|View the items in a specific Group (For example, Name, Enrichment, status)|Select **Group by**.|

7. After the enrichment process, you can view details in the Tables and the customer section as follows:
- To view details in the Databases section, do the following:
   1. In the left pane, go to the **Lakehouse** and click **Databases** to find your table in the **Gold** > **Enrichment** list.

---

![Alt text](/doc_snippets/SFTP_Entity.png)

---

   2. Click the table name to view attributes, data, and download the CSV file.
   
---

![Alt text](/doc_snippets/SFTP_Entity_Attributes.png)

---
    
- To view details in the customer section, do the following:
   1. In the left pane, go to **Profile**, click **Customers**.

   2. Click on the **Profile card**, and select the **All Attributes** tab.

---

![Alt text](/doc_snippets/SFTP_Profile_Customers.png)

---

  
   
      




