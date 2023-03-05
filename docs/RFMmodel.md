# Creating an RFM model

## Overview

RFM is a segmentation strategy that uses historical transactional data to segment customers based on three variables: Recency (R), Frequency (F), and Monetary value (M). These RFM metrics are important indicators of a customer’s behavior because the frequency and monetary value affect a customer’s lifetime value, and recency affects retention, a measure of engagement. These are as follows:

- Recency - Days since the customer last made a purchase.
- Frequency - Number of unique dates on which a purchase is made.
- Monetary Value - Total sales amount for this period.

With the SkyPoint-powered RFM model, you can rank and group customers based on the recency, frequency, and monetary value of their recent transactions to identify the best customers and perform targeted marketing campaigns.

## Prerequisite

To create an RFM model, you must have an existing timeline journey with the following data:

- Monetary value 
- Date of purchase

## To create an RFM model

Follow the below steps to create an RFM model:

1. Go to **Predict** > **Built-In**.

The **Predictions** page appears.

![Alt text](/doc_snippets/RFM_model.png)

2. Open the **Create** tab.
3. Click **Use this model** under the RFM model.

![Alt text](/doc_snippets/RFM_GetStarted.png)

4. Select **Get Started**.

### Step 1: Create a model name

Follow the below steps to create a model name:

![Alt text](/doc_snippets/RFM_ModelName.png)

1. Enter the **Name** and **Output table name** for your model. The output table name appears on the database page after running your model. It includes letters and numbers only, without any spaces.
2. Click **Save & Proceed**.

### Step 2: Add purchase history

Once you have saved the name and output table name, **Add purchase history** page appears to capture the purchase history of your customers.

Follow the below steps to add purchase history:

![Alt text](/doc_snippets/RFM_PurchaseHistory.png)

1. Click **Add new** to add timelines journey.

![Alt text](/doc_snippets/RFM_AddPurchaseHistory.png)

2. **Select timeline journey** from the dropdown list.
3. Expand tables and select the monetary value of the transaction.
4. Click **Save** to apply your changes.

Once you have added a purchase history, it will show under the **Timelines journey**.

5. Click **Save & Proceed**.

### Step 3: Configure your bucket size

Follow the below steps to configure the bucket size for your RFM model:

- Go to **Configure bucket size** page. You have two options to configure the model as follows:

### [Default](#tab/tabid-1)

In the **Default** bucket, the system automatically groups the entire data set into 5 buckets of 20 percentile each.

1. Select the **Default** button.

![Alt text](/doc_snippets/RFM_DefaultConfiguration.png)

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The RFM model ranks a customer in each of these three categories on a scale of 1 to 5 (the higher the number, the better the result). The RFM model sorts customers by recency, with the most recent purchasers at the top. For example, customers will be assigned scores from 1-5, the top 20% of customers (recent purchasers) receive a recency score of 5, the next 20% a score of 4, and so on. Similarly, the model sorts customers by frequency from most to least frequent, assigning the top 20% a frequency score of 5. For the monetary factor, the top 20% of customers (big spenders) will be assigned a score of 5.

2. Click **Save & Proceed**.

### [Custom](#tab/tabid-2)  

A custom RFM model is personalized to the specific needs and goals of a business. It involves modifying the criteria used to calculate the scores for each variable, or weighing the variables differently based on the importance of each to the business. For example, a business that relies heavily on repeat customers may want to give a higher weight to the Frequency variable in its RFM model, while a business that focuses on high-value transactions may want to give a higher weight to the Monetary value variable.

Customizing the RFM model allows a business to better understand its customer base and target its marketing efforts more effectively.

In the **Custom** bucket, you can customize the percentile range for recency, frequency, and monetary value.

1. Select the **Custom** button.

![Alt text](/doc_snippets/RFM_ConfigureBucketSize.png)

2. Modify the percentile range for your RFM model.
3. Click **Save & Proceed**.  

---  
  
> [!TIP]
> RFM factors illustrate these facts:
> - The more recent the purchase, the more responsive the customer is to promotions (the more recent purchases - the higher the R score).
> - The more frequently the customer buys, the more engaged and satisfied they are (the more frequently purchase - the higher the F score).
> - The monetary value differentiates heavy spenders from low-value purchasers (the more amount spent - the higher the M score).

### Step 4: Review and run your model

Once you have configured the bucket size of your RFM model, you can review your model details.

![Alt text](/doc_snippets/RFM_Review.png)

1. You can modify the previous steps on the **Review your model details** page. Click the **Edit** icon to update it.
2. Do one of the following:


|To|Do|
| :- | :- |
|Save and run your RFM model|Click **Save & Run**.|
|Save and close your RFM model|Click **Save & Close**.|
|Open previous step|Click **Previous**.|

3. Go to the **My predictions** tab to view your RFM model.

![Alt text](/doc_snippets/RFM_Output.png)

4. If necessary, select the horizontal ellipsis under the **Action** column and do the following:


|If you want to|Then|
| :- | :- |
|Modify the RFM model|Select **Edit** and modify the RFM model.|
|Execute the RFM model|Select **Run**.|
|Remove the RFM model|Select **Delete**.|
|See the run history of the RFM model|Select **Run History**.|
|View the RFM model|Select **View**.|

The RFM table is displayed in the **Gold** tab under **Lakehouse** > **Databases**. Select the table and click the **Data** tab to view the RFM score (recency, frequency, and monetary). 


