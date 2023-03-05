# Creating a customer lifetime value model
## Overview
You can find the total monetary worth of a customer to your business over a period of designated time with the help of Customer lifetime value (CLV) model. Moreover, the valuable customers can be retained by comparing CLV to marketing costs.

## To create CLV model

Follow the below steps to start creating a customer lifetime model:
1. Go to **Predict > Built-In**.

The **Predictions > Create** page appears.

---

![Alt text](/doc_snippets/CLV_Predictionshomepage.png)

---

2. Click **Use this model** on **Customer lifetime value**.

The **Customer lifetime value** form appears.

---

![Alt text](/doc_snippets/CLV_CLVform.png)

---

3. Click **Get Started**.

The **Model name** page appears.

---

![Alt text](/doc_snippets/CLV_Modelname.png)

---

## To name your CLV model
Follow the below steps to name your CLV model:  
1. In the **Model name** page, type a name in the **Name this model** text area.
2. Type a name in the **Output table name** text area.
3. Click **Save & Proceed**.

The **Model preferences** page appears.  

---

![Alt text](/doc_snippets/CLV_Modelpreferencespage.png)

---

## To create model preferences

Follow the below steps to create your model preferences:

1. In the **Model preferences** page, select a value from the **Predict customer value over the next** drop-down list.

|To|Do|
|:-|:-|
|Select the time in months to predict customer value|Select **Month (s)**.|
|Select the time in years to predict customer value|Select **Year (s)**.|

2. In the **Active customers** section, perform one of the following actions to check the time that a customer has spent amount of money on your products or services.

|To|Do|
|:-|:-|
|Let the model calculate the time span|Select **Let model calculate purchase interval** from drop-down list.|
|Set the time span manually|Select **Set interval manually** from the drop-down list.|

   - In case, you select **Set interval manually** from the drop-down list, perform one of the below actions:
   
     |To|Do|
     |:-|:-|
     |Select the time in months to predict customer value|Select **Month (s)**.|
     |Select the time in years to predict customer value|Select **Year (s)**.|
     
 3. In the **High-value** customer section, select one of the below options to determine high-value customers:

 |To|Do|
 |:-|:-|
 |Indicate the percentile of high-value customer manually|Select **Percent of top active customers** from the drop-down list.|
 |Let the model calculate the percentile of high-value customer based on your data|Select **Model calculation** from the drop-down list.|
 
   - In case, you select the **Percent of top active customers** from the drop-down list, enter **% of active customers** in the **High-value customers are the top** section.
     
 4. Enter a value in the **Discount** text area.
 5. Click **Save & Proceed**.

The **Required data** page appears.

---

![Alt text](/doc_snippets/CLV_Requireddatapage.png)

---

## To add required data

Follow the below steps to add required data to your CLV model:

1. In the **Required data** page, click **Add new**.

The **Add Customer Data** form appears.

---

![Alt text](/doc_snippets/CLV_Addcustomerdataform.png)

---

2. Select **Customer transaction** from the drop-down list.
3. Select **Transaction ID** from the drop-down list.
4. Select **Transaction date** from the drop-down list.
5. Select **Value of transaction** from the drop-down list.
6. Select **Label assigned to returns** (if any) from the drop-down list.
7. Select **Product ID** from the drop-down list.
8. Click **Save**.

The table gets created.

---

![Alt text](/doc_snippets/CLV_Requireddataoutput.png)

---

### To edit the created table

In the **Required data** page, you can click the three horizontal ellipses under the **Action** column to edit the created table.

- If required, you can perform one of the below actions:

|If you want to|Then|
|:-|:-|
|Edit the created table|Select **Edit**.|
|Delete the created table|Select **Delete**.|

- Once done, click **Save & Proceed** in the **Required data** page.

The **Additional data** page appears.  

---

![Alt text](/doc_snippets/CLV_Additionaldata.png)

---

## To add additional data

Follow the below steps to add additional data for the model to sharpen the accuracy of the model’s CLV prediction:

1. On the **Additional data** page, click **Add New**.

The **Add Customer Data** form appears.

---

![Alt text](/doc_snippets/CLV_additionaldataform.png)

---
  
2. Select a **Customer activity table** from the drop-down list.
3. Select a **Primary key** from the drop-down list.
4. Select a **Timestamp** from the drop-down list.
5. Select an **Event** from the drop-down list.
6. Select **Details** from the drop-down list.
7. In **Activity type**, perform one of the below actions:

|To|Do|
|:-|:-|
|Select an **Activity Type** from the drop-down list|Click **Select from existing**.|
|Type a new activity type in the **Activity Type** text area|Click **Create new**.|

8. Click **Save**.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> In case, you do not have any additional data to add, you can skip this step.

The **Additional data** gets created.

---

![Alt text](/doc_snippets/CLV_Additionaldataoutput.png)

---

9. Click **Save & Proceed**.  

The **Data update schedule** page appears.   

---

![Alt text](/doc_snippets/CLV_DataSchedulepage.png)

---

## To add the Data update schedule

Follow the below steps to schedule your data update:

1. In the **Data updates** page, perform one of the following actions:

|To|Do|
|:-|:-|
|Import your data automatically every week|Select **Weekly**.|
|Import your data automatically every month|Select **Monthly**.|
|Import your data automatically every three months|Select **Quarterly**.|
|Choose not to import your data automatically|Select **Never**.|

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Although there is an option of choosing not to schedule your data imports, you are still not recommended to select that option.

2. Click **Save & Proceed**.

The **Review and run** page appears.

---

![Alt text](/doc_snippets/CLV_Reviewandrunpage.png)

---

## To review and run your model

Follow the below steps to save your customer lifetime value model or run it:

1. In the **Review your model** details page, click the **Edit** icon to edit the details.
2. Once you complete your review or editing, perform one of the below actions:

|To|Do|
|:-|:-|
|Save and run your customer lifetime value model|Click **Save & Run**.|
|Save your customer lifetime value model|Click **Save & Close**.|

## To view High or Low CLV customers

You can view your customers with high CLV on SkyPoint Modern Datastack Platform. Follow the below steps to view the customers with High or Low CLV:

1. Go to **Lakehouse > Databases**.
2. Click your desired **CLV Database**.
3. Select the **Data** tab to view the **High/Low CLV** column.



