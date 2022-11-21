# Creating a Transactional churn
## Overview
You can select a Transactional churn to run the churn model for identifying the customers with one-time purchase of products and services. This document can help to predict whether a customer is at risk of no longer performing transactional activities of your products or services.
## To predict with a Transactional churn
Follow the below steps to create a customer prediction using transactional churn model:
1. Go to **Predict > Built-in**.
2. On the **Predictions** page, click the **Create** tab.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Predictionmodelhomepage.png?raw=true)

---

3. In the **Customer churn model**, click **Use this model**.

The **Customer churn model** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalForm.png?raw=true)

---

4. Click **Get Started**.

The **Transactional churn model** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalModelname.png?raw=true)

---

### Add Model name
1. In the **Transactional churn model** page, type a unique name in the **Name** text area.
2. Type a unique name in the **Output table name**.
3. Click **Save & Proceed**.

The **Model preferences** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalModelpreferences.png?raw=true)

---

### Add Model preferences
1. In the **Model preferences** page, enter a value in the **Prediction Window** text area.
2. Enter a value in the **Churn Definition** text area.

---
:grey_exclamation: **Note:** The value that you enter should be minimum 60.

---

|Item|Description|
|:-|:-|
|Prediction Window|Number of days under which the customers who may churn.|
|Churn Definition|Number of days where a customer has churned if they have made no purchases.|

3. Click **Save & Proceed**.

The **Add required data** page opens.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalAddrequireddata.png?raw=true)

---

### Add Purchase Logs
Follow the below steps to customize the purchase history of your customers by assigning fields from your data that corresponds to your selected attributes:
1. In the **Add required data** page, click **Add New**.

The **Add Customer Data** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalAddCustomerData.png?raw=true)

---

2. Select **Purchase history** from the drop-down list.
3. Select **Transaction ID** from the drop-down list.
4. Select **Transaction date** from the drop-down list.
5. Select **Value of transaction** from the drop-down list.
6. Select **Unique product ID** from the drop-down list.
7. Specify the information if **this transaction was a return** from the drop-down list.
8. Click **Save**.

The created purchase log gets created under the **Table** column. 

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalCreatedPurchaselog.png?raw=true)

---

9. Click **Save & Proceed**.

The **Additional data** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalAdditionaldata.png?raw=true)

---

### Add Additional data
Follow the below steps to add additional data for the model to predict the customers having higher risk of churn:
1. On the **Additional data** page, click **Add New**.

The **Add Customer Data** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Customeractivitiescustomerdataform.png?raw=true)

---
1. Select a **Customer activity table** from the drop-down list.
2. Select a **Primary key** from the drop-down list.
3. Select a **Timestamp** from the drop-down list.
4. Select an **Event** from the drop-down list.
5. Select **Details** from the drop-down list.
6. In **Activity type**, perform one of the below actions:

|To|Do|
|:-|:-|
|Select an **Activity Type** from the drop-down list|Click **Select from existing**.|
|Type a new activity type in the **Activity Type** text area|Click **Create new**.|

7. Click **Save**.

---
:grey_exclamation: **Note:** In case, you do not have any additional data to add, you can skip this step.

---

The **Additional data** gets created.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalAdditionaldatacreated.png?raw=true)

---

8. Click **Save & Proceed**.
9. The **Data update schedule** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_UpdateschedulehomepageTransactional.png?raw=true)

---

### Update Schedule
Follow the below steps to update schedule to run the transactional churn model:
1. In the **Data update schedule** page, perform one of the below actions:

|To|Do|
|:-|:-|
|Import new data to your model on a weekly interval|Click **Weekly**.|
|Import new data to your model on a monthly interval|Click **Monthly**.|

2. Click **Save & Proceed**.

The **Review your model details** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_TransactionalReviewandRunhomepage.png?raw=true)

---

## To review and run your model
Follow the below steps to save your churn model or run it:
1. In the **Review your model details** page, click the **Edit** icon to edit the details.
2. Once you complete your review or editing, perform one of the below actions:

|To|Do|
|:-|:-|
|Save and run your churn model|Click **Save & Run**.|
|Save your churn model|Click **Save & Close**.|
