# Connecting Data sources with Power BI

## Overview

Power BI is a cloud-based business analytics tool used to analyze and visualize data. Power BI has a set of existing connectors that you can integrate and share data insights. You can create visualizations for your SkyPoint Cloud data with the Power BI Desktop. Also, you can generate additional insights and build reports with your unified customer data.

## To connect data sources with Power BI

1. In the left pane, go to **Automate**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/AutomatePowerBISetUP.png?raw=true)  

---  

2. Click the **Setup** button to install Power BI on your system.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/LakehouseSQL_ConnectToPowerBI.png?raw=true)  

---

3. Click **Download Connection File**.
4. Open **Power BI Desktop** from the downloaded file.

The **Power BI Desktop** window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/PowerBILogIn.png?raw=true)

---

5. In the **Azure Databricks** dialog box, do one of the following to connect:


|If you want to use|Then|
| :--- | :--- |
|**Username/Password** method|For the **Username**, type "token". This token is just the word token only. For the **Password**, enter the Personal Access token.|
|**Personal Access Token** method|Enter the Personal Access token that you have copied from the **Lakehouse SQL** page.|

> :grey_exclamation: **Note**: To find credentials, go to **Lakehouse** > **SQL Access**. Click **Show fields** to copy your credentials to your clipboard. For more information, refer to [Getting started with SkyPoint Lakehouse SQL](lakehousesql.md).

6. Click **Connect** to establish a connection.  

The **Navigator** pane appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/LakehouseSQL_ViewPowerBI.png?raw=true)  

---

7. In the **Navigator** pane, select the data that you want to explore by marking the checkboxes.

> :grey_exclamation: **Note**: You can expand each table by selecting the arrow beside its name. By marking the checkboxes, you can choose the files that you want to load into Power BI Desktop. You can preview your data on the right pane.

8. Click on **Load** to import your data into Power BI Desktop.

Now, you can use your selected data with Power BI's visualization tools. 

9. If necessary, do the following:


|If you want to|Then|
| :- | :- |
|Change the data in the table such as grouping, removing, and filtering the data|Click **Transform Data**.|
|Cancel the process |Click **Cancel**.|
