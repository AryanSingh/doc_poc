# Creating a Tenant
## Overview
You need a storage account to create various data flows for your customers. A Tenant in SkyPoint Modern Data Stack Platform (MDSP) provides you with the same for data storage and other purposes. Once your Tenant account gets created and registered in SkyPoint MDSP, a unique id is allotted to it to support mapping as well as other reference purposes in the database. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Once a Tenant is registered and assigned to you, it cannot be changed.

A Tenant is made available through Azure Data Lake Gen 2 that is by default bundled with Azure Cognitive Search service. The Tenant receives all the credentials for the storage account and cognitive search. 
## To create a Tenant 
You need to start with creating an app in order to give proper access to the storage account. This enables you to use the other services offered by Azure. Follow the below steps:

1. Go to **Settings > Tenants**.

The **Tenants** page appears.

---

![Alt text](/doc_snippets/Tenants_TenantHomepage.png)

---

2. In the **Tenants** page, click **New tenant**.

The **Create tenant** page appears.

---

![Alt text](/doc_snippets/Tenants_Createtenant.png)

---

3. Type a unique name in the **Name** text area.
4. Type a business name in the **Business name** text area.
5. Type the website URL in the **Website URL** text area.
6. Click **Next**.

---

![Alt text](/doc_snippets/Tenants_Createtenantnext.png)

---

The **Azure Data Lake Gen2 settings** page appears.

---

![Alt text](/doc_snippets/Tenants_AzureDataLakeGen2.png)

---

7. Follow one of the below actions to set up **Azure Data Lake Gen2 settings**:

|To|Do|
|:-|:-|
|Use Default Azure Data Lake Gen2 & App registration Settings|Check the box.|
|Configure Azure Data Lake Gen2 & App registration Settings manually|Uncheck the box.|

#### To configure ADLS Gen2 settings manually

You can configure the **Azure Data Lake Gen2** settings manually for the Tenant. Follow the below steps:  
1. On the **Azure Data Lake Gen2 settings** page, uncheck the **Use Default Azure Data Lake Gen2 & App registration Settings** box.

The **Azure Data Lake Gen 2 Settings** form appears.

---

![Alt text](/doc_snippets/Tenants_ADLSform.png)

---

2. Type **Account name** in the **Account name** text area.
3. Type the **ADLS Gen 2 Account key** in the **Account key** text area.
4. Type the **designated Container name** in the **Container name** text area.
5. In the **App registration settings** section, type your registered app’s **Tenant Id** in the **Tenant Id** text area.
6. Type your **App Id** in the **App Id** text area.
7. Type the valid **App Secret Key** in the **App Secret Key** text area.
8. Click **Next**.  

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> To view the procedures for registering a new app, move the pointer over the **App registration settings Information icon**.

### To configure Azure Cognitive Search Settings
There are two ways to configure the **Azure Cognitive Search Settings**. You can choose between one of the following options:

|To|Do|
|:-|:-|
|Use Default Azure Cognitive Search Settings|Check the box.|
|Configure Azure Cognitive Search Settings manually|Uncheck the box.|

---

![Alt text](/doc_snippets/Tenants_AzureCognitiveSearch.png)

---

In case, you check **Use Default Azure Cognitive Search Settings**, click **Next**.

#### To configure Azure Cognitive Search Settings manually
You can configure the **Azure Cognitive Search** settings manually for the Tenant. Follow the below steps:
1. Go to **Tenants > Azure Cognitive Search Settings**.
2. Uncheck **Use Default Azure Cognitive Search Settings**.

The **Azure Cognitive Search Settings** form page opens.

---

![Alt text](/doc_snippets/Tenants_AzureCognitiveSearchformpage.png)

---

3. Type the **Search service name** of your cognitive search in the **Search service name** text area.
4. Type the valid **Search service admin key** in the **Search service admin key** text area.
5. Click **Next**.

### To configure Cosmos DB settings
You need to configure Cosmos DB Settings at two levels. They are:  
- Tenant Operations Cosmos DB Settings
- Tenant Data Vault Cosmos DB Settings.

---

![Alt text](/doc_snippets/Tenants_CosmosDBsettingshomepage.png)

---

#### To configure Tenant Operations Cosmos DB settings
There are two ways to configure the **Tenant Operations Cosmos DB settings**. You can choose between one of the following options:  

|To|Do|
|:-|:-|
|Use default Tenant Operations Cosmos DB Settings|Check the box.|
|Configure the Tenant Operations Cosmos DB Settings manually|Uncheck the box.|

Follow the below steps to configure the **Tenant Operations Cosmos DB Settings** manually:\
1. Go to **Settings > Tenants**.
2. On the **Cosmos DB Settings** page, uncheck the **Tenant Operations Cosmos DB Settings** box.

The **Tenant Operations Cosmos DB Settings** form appears.

---

![Alt text](/doc_snippets/Tenants_TenantOperationsform.png)

---

3. Type the **Primary Key** in the **Primary Key** text area.
4. Type the **Endpoint URL** in the **Endpoint URL** text area.

#### To configure Tenant Data Vault Cosmos DB settings
You can configure the **Tenant Data Vault Cosmos DB Settings** in two ways. You can choose between one of the following options:

|To|Do|
|:-|:-|
|Use default Tenant Data Vault Cosmos DB Settings|Check the box.|
|Configure the Tenant Data Vault Cosmos DB Settings manually|Uncheck the box.|

Follow the below steps to configure the **Tenant Data Vault Cosmos DB Settings** manually:
1. On the **Cosmos DB Settings** page, uncheck the **Tenant Data Vault Cosmos DB Settings** box.

The **Tenant Data Vault Cosmos DB Settings** form appears.

---

![Alt text](/doc_snippets/Tenants_DataVault.png)

---

2. Type the **Primary Key** in the **Primary Key** text area.
3. Type the **Endpoint URL** in the **Endpoint URL** text area.
4. Click **Save**.
