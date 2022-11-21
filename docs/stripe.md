# Connecting to the Stripe connector

## Overview

Stripe is an online payment processing platform that offers payment processing software and API to manage flow of funds for e-commerce websites and mobile applications. You can use SkyPoint's built-in connector for importing data from Stripe. Our platform collects, analyzes, and provides a solution to transform data into meaningful information for generating valuable insights.

## Prerequisite

- You have a [stripe account](https://dashboard.stripe.com/login) and credentials such as API Key. Each API user has credentials that must be used to authenticate requests.

## To import Data using the Stripe connector

1. In the left pane, go to **Dataflow** > **Imports**.

The Dataflow window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Dataflow_window.png?raw=true)  

---

2. Click **New Dataflow** to create dataflow.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SetDataflowName.png?raw=true)  

---

3. Enter a **Name** to identify your Dataflow.

---

> :grey_exclamation: **Note**: Name starts with a letter.  Use letters and numbers only. No spaces between letters.

---

4. Click **Next**.

## Add Stripe Connector

1. In the **All categories** or **Services and apps** tab, select the **stripe** connector to start the configuration.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Stripe_ChooseConnector.png?raw=true)  

---

2. Also, you can use the **Search** function to find the **stripe** connector.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Stripe_SetDataflowName.png?raw=true)  

---

3. In the **Set dataflow name** page, enter the **Display Name** to identify your dataflow.
4. In the **Description** box, you can enter an explanation of the connector. 
5. Click **Next**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Stripe_Configuration.png?raw=true)  

---

## To configure Stripe

Follow the below steps to configure the connection to Stripe:

1. Enter the **Api Key** to configure with the Stripe connector. For details about the API key, click [API reference](https://stripe.com/docs/api). 
2. Click **Connect**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Stripe_EntityDetails.png?raw=true)  

---

3. You can enter the **Table Details** to process the data.

---

> :grey_exclamation: **Note**: After configuration, it lists down all the tables in the **Table Details** that are part of the connector. For a single table, it displays by default (this information is client connector specific and what tables that given connector supports) on successful connection. However, for multiple tables, you can mark only those tables that you want to import and process the data. For example, to import customer data, you can check those tables which contain customer information, such as name, email, address, and contact details.

---

|Item|Description|
| :--- | :--- |
|Purpose|Option to assign a purpose (All, Customer 360, or Privacy-Metadata) for each table.|
|<center>Data</center>|Loads customer data|
|<center>Metadata</center>|Loads Metadata|
|File Name|Displays the name of the file that you imported.|
|Table Name|Displays the imported table name.|  

4. Click **Save** to apply the changes.

## Run, edit, and delete the imported data

1. After saving the connection, the Stripe connector appears on the Dataflow page. Also, you can see the list of created tables in the [Databases](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html) section.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Stripe_Output.png?raw=true)  

---

|Item|Description|
| :--- | :--- |
|Name|Displays the name of the Dataflow.|
|Type|Displays connector type symbol.|
|Status|Indicates whether the data is imported successfully.|
|Tables Count|Displays the number of tables.|
|Created Date|Displays date of creation.|
|Updated Date|Displays last modified date.|
|Last Refresh|Displays the latest refresh date. This date will get updated whenever you refresh the data.|
|Group by|Option to view the items in a specific Group (For example, name, type, status).|  

2. Select the horizontal ellipsis in the **Actions** column and do the following:

|If you want to|Then|
| :--- | :--- |
|Modify the Dataflow|Select **Edit** and modify the Dataflow. Click **Save** to apply your changes.|
|Execute the Dataflow|Select **Run**.|
|Bring the data to its previous state|Select **Rollback**.|
|Delete the Dataflow|Select **Remove** and then click the **Delete** button. All tables in the data source get deleted.|
|See the run history of the Dataflow|Select **Run History**.|  

---

> :grey_exclamation: **Note:** You can see the error message corresponding to failure while importing data from a data source in the Dataflow under **Run history** > **Description**.

---

### Next step

After completing the data import, start the [Master Data Management (MDM) - Stitch process](https://docs.skypointcloud.com/docs/stitch.html) to develop a unified view of your customers.
