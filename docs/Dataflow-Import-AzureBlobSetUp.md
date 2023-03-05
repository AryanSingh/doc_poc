# Azure Blob Storage SetUp Guide
## Overview

This document will help you gather all credentials for connecting Azure Blob Storage with SkyPoint MDSP.

## Prerequisite

You must have an [Azure](https://azure.microsoft.com/en-us/free/) account. 

## To Create a Storage Account

Follow the below steps to create a storage account:

1. Log in to **Microsoft Azure**.
2. Go to **Azure services > Storage accounts**.

---

![Image alt text](/doc_snippets/AzureBlobsetup_Storageaccount.png)

---

3. Click **Create**.

### Creating Storage account name

1. Go to **Create a storage account > Basics**.
2. Fill the information to create a new **Storage account**.
   - Type a desired **Storage account name** in the text area.

---

![Image alt text](/doc_snippets/AzureBlobsetup_Storageaccountname.png)

---

---

>  :grey_exclamation: **Note:** The name must be unique across all existing storage account names in Azure. It must be 3 to 24 characters long and can contain only lowercase letters and numbers.

---

### Finding the Account Key

Follow the below steps to find the account key for your storage account:

1. Go to **Storage account > Access Key**.

---

![Image alt text](/doc_snippets/AzureBlobsetup_Storageaccountkey.png)

---

2. Click **Show** for the **Key** text area.

---

>  :grey_exclamation: **Note:** Copy this Key and paste it in the Account Key text area of your SkyPoint’s Azure Blob Storage configuration form.

---