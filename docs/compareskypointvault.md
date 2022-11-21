# Comparing Microsoft List, Dataverse, SkyPoint Vault and Skyflow

Whether you’re using Power Apps to build a small app for your team or a mission critical app for your business, there are many great options for data. 

This article focuses on the most popular data technologies used in Microsoft Power Platform: Microsoft List, Dataverse, Skyflow and SkyPoint Vault. With the answers to the questions below, you can quickly understand and apply the key considerations that will help you pick the correct one for your application.

The questions are broken out into four categories:

---

|Category |Questions |
|----------|---------|
| Data |What types of data (and how much of it) will your application require?<br/>How do you want to search the data? |
|Application | How will the app be made available? For example, will it be a Teams app, custom code, or something else?<br/>Will guests be accessing your application?<br/>Who will build the app; low-code or pro developers?<br/>What special capabilities does your application need? |
|Integration |What do you want to integrate the system with? For example, databases, services, and so on? |
|Admin and governance | What are your organizations requirements related to security and compliance?<br/>Are there special requirements for backing up and restoring the data? |

---

Using the answers to the questions above, use the table below to help identify the right technology for your application.

---

|Considerations  |Microsoft List  |Dataverse for Teams  |Dataverse  |SkyPoint Vault  | Skyflow |
|- |- |- |- |- |- |
|Types of data  |Lists, File, Image  |Relational, File, or Image  |Relational, File, Image, Lake, Log, Dataverse Search<br/>Virtual tables  | Relational, File, Image, Lake, Log, Cognitive Search | Relational |   
|Number of data types  |15  |23 |24  | 24 | <10 |
|Common Data Model  |N/A  |User table only  |Full support  | Full support | No support |
| Data movement  |Create from/Export to Excel  |Dataflows In  |Dataflows In/Out<br/>Server-side sync<br/>Synapse Integration (Bring Your Own Data Lake, Data Factory)  | SkyPoint Dataflows In/Out<br/>CRUD APIs<br/>Storage Integration (Bring Your Own ADLS, ACS and Cosmos DB)  | Not Supported |
|Guest limitations  |Can't create or delete a list  |Can't make, install, or edit apps  |Must be in Azure AD using Azure B2B  | SSO - SkyPoint Login, Azure AD and Google Login | Not Applicable |
|Pro developer capability  |REST API<br/>Graph API  | N/A  |REST API<br/>Software Development Kit (SDK)<br/> Plug-in Support <br/>Integration (Event Hub, Service Bus, Webhook, Export to Lake) SQL Server Management Studio Integration  | REST API  | REST API |

### See also

[What is Dataverse?](https://docs.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro)
