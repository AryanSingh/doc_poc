# Creating Product Recommendation model

## Overview
The product recommendation model produces sets of predictive product recommendations. With the help of this predictive model, you can use the customer transaction data like purchases, returns, and donations to provide the basis for educated product recommendations. 

## To create the model
Follow the below steps to create the product recommendation model:  
1. Go to **Predict > Built-in**.

The **Predictions** page appears.

---

![Alt text](/doc_snippets/Productrecommendation_Predicthomepage.png)

---

2. In **Predictions** page, click **Use this model** on **Product recommendation**.

The **Product recommendation** form appears.

---

![Alt text](/doc_snippets/Productrecommendation_Prodrecommendationform.png)

---

3. Click **Get Started**.

The **Model name** page appears.

---

![Alt text](/doc_snippets/Productrecommendation_Modelname.png)

---

## To name the model
Follow the below steps to name the product recommendation model:
1. Type a unique name in the **Name this model for you** text area.
2. Type a name in the **Output table name** text area.
3. Click **Save & Proceed**.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> The Output table name is the name given to the model table. It will appear on the databases page after running the model. 

The **Model preferences** page appears.

---

![Alt text](/doc_snippets/Productrecommendation_Modelpreferences.png)

---

## To add model preferences
Follow the below steps to define your preferences to be used while suggesting products:  
1. In the **Number of products** section, select a value in the **Total number of products available for customers to buy** text area.
2. Select an option in the **Suggest products customers have recently purchased?** text area.
3. In the **Look back window** section, select the **number of Months** in the **How far back to look at customer’s activity to use as input to their recommendations** text area.
4. Click **Save & Proceed**.

The **Required data** page appears.

---

![Alt text](/doc_snippets/Productrecommendation_Requireddatapage.png)

---

## To add required data
Follow the below steps to add data to the product recommendation model:  
1. In the **Required data** page, click **Add New**.

The **Add Customer Data** form appears.

---

![Alt text](/doc_snippets/Productrecommendation_customerdataform.png)

---

2. Select **Purchase history** from the drop-down list.
3. Select **Transaction ID** from the drop-down list.
4. Select **Transaction date** from the drop-down list.
5. Select **Value of transaction** from the drop-down list.
6. Select **Unique product ID** from the drop-down list.
7. Specify the information if **this transaction was a return** from the drop-down list.
8. Click **Save**.

The table gets created.

---

![Alt text](/doc_snippets/Productrecommendation_Requireddatapageoutput.png)

---

### To edit the created table
In the **Required data** page, you can click the three horizontal ellipses under the Action column to edit the created table.  
- If required, you can perform one of the below actions:

|If you want to|Then|
|:-|:-|
|Edit the created table|Select **Edit**.|
|Delete the created table|Select **Delete**.|

- Once done, click **Save & Proceed** in the **Required data** page.

The **Data update schedule** page appears.  

---

![Alt text](/doc_snippets/Productrecommendation_Dataupdatepage.png)

---

## To add the Data update schedule
Follow the below steps to schedule your data update:  
1. In the **Data updates** page, perform one of the following actions:

|To|Do|
|:-|:-|
|Import your data automatically every week|Select **Weekly**.|
|Import your data automatically every month|Select **Monthly**.|

2. Click **Save & Proceed**.

The **Review and run** page appears.

---

![Alt text](/doc_snippets/Productrecommendation_Reviewrun.png)

---

## To review and run your model
Follow the below steps to save your **Product recommendation** model or run it:

1. In the **Review your model details** page, click the **Edit** icon to edit the details.
2. Once you complete your review or editing, perform one of the below actions:

|To|Do|
|:-|:-|
|Save and run your product recommendation model|Click **Save & Run**.|
|Save your product recommendation model|Click **Save & Close**.|






