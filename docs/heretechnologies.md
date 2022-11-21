# Enriching Customer Profiles with HERE Technologies 
## Overview
The HERE Technologies enrichment enables you to enrich your data with location information like standardized address, latitude and longitude, and more. The enrichment helps you to enable better business outcomes with the use of location data and technology.

The HERE Technologies enrichment further helps you to easily navigate the data-rich world by providing a new type of map that represents a complete, accurate, and easy-to-use digital representation of the physical world. The advanced tools expose you to an ecosystem of collaborators, rich location data, and services in one place.  
## Prerequisites  
To configure HERE Technologies enrichment, the following prerequisites must be met: 
- You must have an active customer profile.  
- You have a **HERE Technologies API key**.
## To configure the connection for HERE Technologies
Follow the below steps to supplement your customer data with the HERE Technologies connection enrichment: 
1. In the left pane, go to **Profile > Enrichment**.
2. Click the **Discover** tab.

The list of enrichments appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Enrichment_new.png?raw=true)  

---

3. Select the **HereLocation** enrichment and click **Enrich my data**. 

The **Overview** page appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Overview.png?raw=true)  

---
4. Click **Next**.  

The **Select your HereLocation connection** page appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Connect_New.png?raw=true)  

---   

### Add connection


1. In the **Select your HereLocation connection**, click **Add connection**. The **Set up HERE connection** page appears.  
   
---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Setup_new.png?raw=true)  

---   

2. Enter a desired **Display name** to idenify the enrichment.
3. Enter the **HERE Technologies API key** for validation.
4. Click **Verify**.

___
> :grey_exclamation: **Note**: A Green tick verifies that you have entered the correct HERE Technologies API key.
___
   
5. Click **Save**.  
   
6. In the **Select your HereLocation connection**, click **Next**.  

### Select an existing connection for enrichment
Follow the below steps to select an existing connection for enrichment:  
1. In the **Select your HereLocation connection** page, click the **Connection for enrichment** drop-down.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_EnrichConnection_new.png?raw=true)  

---

2. Select your desired connection from the **Connection for enrichment** drop-down list.  
3. Click **Next**.  

___
> :grey_exclamation: **Note**: You can also edit the existing connections by clicking on Edit that can be found in every connection.
___
### Choose data set
Once you complete selecting the connection, the **Customer table** page appears. Follow the below steps to choose the data set containing customer profiles that you want to enrich.

1. Click the **Customer data set** from the drop-down list.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Requireddata_new.png?raw=true)

---

2. Choose the Profile or Audience you want to enrich with data from HERE Technologies.  
3. Click **Next**. 

The **Data mapping** page appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_DataMapping1.png?raw=true)

---

### Map attributes
Follow the below steps to map your field names to the corresponding HERE Technologies attributes.

1. In the **Data mapping** page, select the relevant option from the **Street** drop-down list.
2. Select the relevant option from the **Zip/Postal Code** drop-down list.
3. For higher match accuracy, click **Add attribute** to add a **New attribute** to the field names. 

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Datamapping_new.png?raw=true)

---

4. Click **Next** to complete the mapping. 

The **Name your enrichment** page appears.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_NameYourEnrichment.png?raw=true)  

---  

### Name your enrichment
Follow the below steps to name your enrichment.
1. Enter the **Enrichment name**.  
2. Enter your desired **Output entity name** in the text box.  
3. Click **Save Enrichment**. 

The **Success** dialog box appears.

---
   ![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Runpage.png?raw=true)  

---
4. In the **Success** page, perform one of the below actions:  
  
|To|Do|
| :- | :- |
| Start enriching your data | Click **Run**. |
| Return to the My enrichments tab | Click **Close**. |  
   
 You can find the successfully saved Enrichment in the **Enrichment > My Enrichments** tab.
 
---
   ![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/HERETechnologies_Myenrichments_new.png?raw=true)  

---

## To edit and delete the existing enrichments

Follow the below steps to edit your existing enrichments.

1. Go to the **Enrichment > My enrichments** tab.
2. Click the horizontal ellipsis under **Actions** for your desired enrichment.
3. If necessary, do the following:

| To | Do |
| :- | :- |
| Edit a workflow for previously created HERE Technologies enrichment | Click **Edit**. |
| Delete a workflow | Click **Delete**. |
| Run the HHERE Technologies enrichment | Click **Run**. |
| See the run history of the HERE Technologies enrichment | Click **Run History**. |
| Cancel the Run that is in progress | Click **Cancel Run**. |
| View the items in the List | Select **List**. |
| View the items in a specific Group (Name, Enrichment, and Status) | Select **Group by**. |
