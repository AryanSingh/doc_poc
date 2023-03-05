# Integrating Hightouch with Lakehouse SQL

## Overview

Hightouch is a Reverse ETL tool that enables you to extract data from a warehouse or a database and load it into Sales, Marketing, and analytics tools using just SQL and no scripts. You can sync your data from SkyPoint Lakehouse SQL to Hightouch without APIs, CSVs, or engineering favors. Our Modern Data Stack Platform (MDSP) supports all forms of analytics, machine learning, artificial intelligence, and business intelligence.

## Prerequisite

- You have a cluster or SQL warehouse in your workplace.
- The connection details such as Server Hostname, Port, and HTTP Path to establish a connection.
- Personal access token from Lakehouse SQL.

Follow the below steps to integrate Hightouch with Lakehouse SQL:

## Connect Hightouch to Lakehouse SQL

1. [Login in](https://app.hightouch.com/login) with a Hightouch account.  

---

![Alt text](/doc_snippets/CreateWorkspace.png)  

---

2. Click **Create a workspace** to create a new workspace. If you have already created a workspace, then select an existing one.

---

![Alt text](/doc_snippets/NameWorkspace.png)  

---

3. Enter a name for a new workspace and click **Create workspace**. You can choose **Region** from the drop-down list.  

---

![Alt text](/doc_snippets/AddSource.png)  

---

4. In the left pane, click **Sources**.
5. Click **Add source**.  

---

![Alt text](/doc_snippets/SourceCatalog.png)  

---

6. Click **Databricks**, and then click **Continue**.  

---

![Alt text](/doc_snippets/ConnectDatabricks.png)  

---

7. Enter **Server Hostname**, **Port**, **HTTP Path**, and **Access Token**.
8. For Default Schema, enter the name of the target database.
9. Click **Test Connection**. Make sure that testing the source returns green before continuing to the next step.
10. Once the connection is successful, click **Continue**.  

---

![Alt text](/doc_snippets/SourceFinish.png)  

---

11. You can enter a name for the connection, and then click **Finish**.

## Connect to your destination

Follow the below steps to set your destination:

1. In the workspace navigation pane, click **Destinations**.  

---

![Alt text](/doc_snippets/AddDestination.png)  

---

2. Click the **Add destination** button to add your destination. You can also type your destination in the filter box.  

---

![Alt text](/doc_snippets/DestinationCatalog.png)  

---

3. Choose your **Destination catalog**, and then click **Continue**. For example, in this section, we establish a connection with the SendGrid connector to export data.  

---

![Alt text](/doc_snippets/AddNewDestination.png)  

---

4. Enter **API Key** and then click **Continue**.  

---

![Alt text](/doc_snippets/NameDestination.png)  

---

5. Enter a name for the destination, and then click **Finish**.

### Next steps

Once you have added sources and destination, refer to [Hightouch documentation](https://hightouch.com/docs) to perform the following activities:

- Create a model
- Create a sync
- Configure your destination and schedule






