# Visualizing and Exploring Data

## Overview

SkyPoint Lakehouse SQL allows you to perform business intelligence operations on data through Power BI and Tableau. These dashboards provide meaningful insights into your data and easily build rich, visual analytic reports. You can simplify and scale your enterprise data strategy while supporting **Business Intelligence (BI)** and **Artificial Intelligence (AI)** use cases in one place utilizing Databricks as the primary computing engine.

## To visualize data in Power BI

You can connect Power BI Desktop to SkyPoint Lakehouse SQL Endpoint. Download and open the connection file to start Power BI Desktop. 

### Prerequisite

- You must have Power BI Desktop version 2.85.681.0 or above installed. You can [download the latest version of Power BI](https://www.microsoft.com/en-us/download/details.aspx?id=58494) and install it.

1. Go to **Lakehouse** > **SQL Access**.
2. Click **Show fields** and copy the credentials.  

---

![Alt text](/doc_snippets/LakehouseSQL_ShowFields.png)  

---

3. Click the **Power BI** tile. The **Connect to partner** dialog box appears.  

---

![Alt text](/doc_snippets/LakehouseSQL_ConnectToPowerBI.png)  

---

4. Click **Download Connection File**.
5. Open the downloaded file and Sign in with your email ID.

The **Get started** screen appears.

---

![Alt text](/doc_snippets/LakehouseSQL_PowerBIgetstarted.png)  

---

6. Click **Get data**.

The **Get Data** screen appears.

---

![Alt text](/doc_snippets/LakehouseSQL_Getdatascreen.png)  

---

7. In the **Get data** screen, click **Azure**.

The **Azure** list appears.

---

![Alt text](/doc_snippets/LakehouseSQL_Azurelist.png)  

---

8. In the **Azure** list, select **Azure Databricks**.
9. Click **Connect**.

The **Azure Databricks** form appears.

---

![Alt text](/doc_snippets/LakehouseSQL_Databricksform.png)  

---

10. In the **Azure Databricks** form, perform the following actions.

|To|Do|
|:-|:-|
|Enter the Server Hostname|Copy the Server Hostname on the SQL Access page of SkyPoint Cloud studio.|
|Enter the HTTP Path|Copy the HTTP Path on the SQL Access page of SkyPoint Cloud studio.|

11. Click **OK**.

The **Azure Databricks** dialog box appears.

---

![Alt text](/doc_snippets/LakehouseSQL_AzureDatabricks.png)  

---

12. In the **Azure Databricks** dialog box, do one of the following to connect with Lakehouse:


|If you want to use|Then|
| :--- | :--- |
|**Username/Password** method|<p>For the **Username**, type "token". This token is just the word token only.</p><p>For the **Password**, enter the Personal Access token.</p>|
|**Personal Access Token** method|Enter the Personal Access token that you have copied from the **Lakehouse SQL** page.|


13. Click **Connect** to establish a connection.  

The **Navigator** pane appears.

---

![Alt text](/doc_snippets/LakehouseSQL_ViewPowerBI.png)  

---

14. In the **Navigator** pane, select the data that you want to explore by marking the checkboxes.
15. Click on **Load** to import your data into Power BI Desktop.

Now, you can use your selected data with Power BI's visualization tools.


## To visualize data in Tableau

You can connect Tableau Desktop to SkyPoint Lakehouse SQL endpoint. Download and open the connection file to start Tableau Desktop.

### Prerequisite

- You have installed [Tableau Desktop](https://www.tableau.com/products/desktop) version 2019.3 or above. 
- You have installed [Databricks ODBC driver](https://databricks.com/spark/odbc-drivers-download) 2.6.15 or above.  

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> After Tableau starts, it will prompt you for your SkyPoint Lakehouse credentials. You can provide your Lakehouse username and password, a Lakehouse personal access token, or sign in with Azure Active Directory.

1. Click the **Tableau** tile. 

The **Connect to partner** dialog box appears.

---

![Alt text](/doc_snippets/LakehouseSQL_ConnectToTableau.png)  

---

2. In the **Connect to partner** dialog box, click **Download Connection File**.
3. Open the downloaded file to start Tableau Desktop.

---

![Alt text](/doc_snippets/LakehouseSQL_TableauSignIn.png)  

---

4. In **Sign In** dialog box, enter your **Username** and **Password**. Do the following:


|To|Do|
| :--- | :--- |
|Validate **Username**|Type "token". This token is just the word token only.|
|Validate **Password**|Enter the Personal Access token that you have taken from the **Lakehouse SQL** page.|

5. Click **OK**.

After successfully connecting with Tableau Desktop, you can visualize and analyze your data.  
  
---

![Alt text](/doc_snippets/LakehouseSQL_ViewTableau.png)  

---

