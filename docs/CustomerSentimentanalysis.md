# Creating a Customer Sentiment Analysis model

## Overview
You can use the data from customers' feedback to make important business decisions. The Customer sentiment analysis model helps you to use the written feedback provided by the customers to derive their sentiment and the specific business aspects that they are concerned about.

Reputation management is available for users using a sentiment model and data from Google reviews. Now, users can see the overall sentiment of the reviewers on the SkyPoint Platform.

## To name the Model
Follow the below steps to name your customer sentiment analysis model:  
1. Go to **Predict > Built-In**.

The **Predictions** page appears.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Predicthomepage.png?raw=true)

---

2. In the **Create** tab, click **Use this model** on **Analyze sentiment in customer feedback (preview)**.

The **Customer sentiment analysis (preview)** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Customersentimentform.png?raw=true)

---

3. Click **Get Started**.  

The **Model Name** page appears.  

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Modelname.png?raw=true)

---

4. Type a unique name in the **Name this model for you** text area.
5. Type a name in the **Output table name** text area.
6. Click **Save & Proceed**.

---
:grey_exclamation:**Note:** The Output table name is the name given to the model table. It will appear on the databases page after running the model. 

---

The **Required data** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Requireddatapage.png?raw=true)

---

## To add Required data
Follow the below steps to add data to your customer sentiment analysis model.

1. In the **Required data** page, click **Add Data**.

The **Add Customer Data** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Customerdataform.png?raw=true)

---

2. Select **Feedback table** from the drop-down list.
3. Select **Feedback attribute** from the drop-down list.
4. Select **Attribute for feedback date** from the drop-down list.
5. Select the **Feedback start date** from the calendar widget.
6. Select the **Feedback end date** from the calendar widget.

---
:grey_exclamation:**Note:** The other fields like Relationship Name, Table, Field, Customer table, and Matching field gets auto populated. 

---

7. Click **Save**.

The **Table** gets created in the **Required data** page.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Requireddataoutput.png?raw=true)

---

8. Click the horizontal ellipsis in the **Actions** column and do the following:

|If you want to|Then|
|:-|:-|
|Modify the Table|Select **Edit**.|
|Delete the Table|Select **Remove**.|

9. Click **Save & Proceed**.

The **Data updates** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Dataupdatespage.png.png?raw=true)

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

---
:grey_exclamation:**Note:** Although there is an option of choosing not to schedule your data imports, you are still not recommended to select that option. That is because, adding more data would provide your model with more behavioral patterns that would fuel predictions, and improve the accuracy of your results significantly. 

---

2. Click **Save & Proceed**.

The **Review your model details** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customersentiment_Reviewandrun.png?raw=true)

---

## To review and run your model
Follow the below steps to save your customer sentiment analysis model or run it:

1. In the **Review your model details** page, click the **Edit** icon to edit the details.
2. Once you complete your review or editing, perform one of the below actions:

|To|Do|
|:-|:-|
|Save and run your customer sentiment analysis model|Click **Save & Run**.|
|Save your customer sentiment analysis model|Click **Save & Close**.|
