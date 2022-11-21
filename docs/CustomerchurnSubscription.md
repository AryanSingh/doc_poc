# Creating a Subscription churn

## Overview
You can select a Subscription churn model to identify the customers with recurring payment for products and services. This document can help to predict whether a customer is at risk of no longer using your subscription products or services.

## To predict with a Subscription churn
Follow the below steps to create a customer prediction using subscription churn model:
1. Go to **Predict > Built-in**.
2. On the **Predictions** page, click the **Create** tab.

The **Prediction** models appear.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Predictionmodelhomepage.png?raw=true)

---

3. In the **Customer churn model**, click **Use this model**.

The **Customer churn model** form appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Form.png?raw=true)

---

4. In the **Customer churn model** form, select **Subscription**.
5. Click **Get Started**.

The **Subscription churn model** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Modelname.png?raw=true)

---

### Add Model Name
1. In the **Subscription churn model** page, type a unique name in the **Name** text area.
2. Type a unique name in the **Output table name**.
3. Click **Save & Proceed**.

The **Model preferences** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Modelpreferences.png?raw=true)

---

### Add Model preferences
1. In the **Model preferences** page, enter the **Number of days** in the **Days since subscription ended** text area.
2. Enter the **Number of days** in the **Days to look into future to predict churn** text area.

---
:grey_exclamation: **Note:** The number of days that you enter should be minimum 60.

---

3. Click **Save & Proceed**.

The **Add required data** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Addrequireddata.png?raw=true)

---

4. In the **Add Subscription history**, click **Add New**.

The **Add Customer Data** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Addcustomerdata.png?raw=true)

---

### Add Subscription history
Follow the below steps to fill the Add Customer Data form for adding Subscription history:
1. Select a **Subscription history table** from the drop-down list.
2. Select the **Subscription ID** you want to map from the drop-down list.
3. Select the **Subscription End Date** you want to map from the drop-down list.
4. Select the **Subscription Start Date** you want to map from the drop-down list.
5. Select the **Transaction Date** you want to map from the drop-down list.
6. Select the **Recurring subscription** information from the drop-down list.
7. In case, it is a recurring subscription, select the **Recurrence Frequency** from the drop-down list.
8. Select the **Subscription Amount** from the drop-down list.
9. Select the **Relationship Name** from the drop-down list.
10. Click **Save**.

The **Subscription history** is created.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Subscriptionhistorycreated.png?raw=true)

---

### Add Customer activities
Follow the below steps to customize customer activities by assigning fields from your data:
1. In the **Add required data** page, click **Add new** under the Customer activities section. 

The **Add Customer Data** form appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Customeractivitiescustomerdataform.png?raw=true)

---

2. Select a **Customer activity table** from the drop-down list.
3. Select a **Primary key** from the drop-down list.
4. Select a **Timestamp** from the drop-down list.
5. Select an **Event** from the drop-down list.
6. Select **Details** from the drop-down list.
7. In **Activity type**, perform one of the below actions:

|To|Do|
|:-|:-|
|Select an activity type from **Select The Activity Type** drop-down list|Click **Select from existing**.|
|Type a new activity type in the **Activity Type** text area|Click **Create new**.|

8. Click **Save**.

The **Customer activity** gets created.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Customeractivitiescreated.png?raw=true)

---

9. Click **Save & Proceed**.

The **Data update schedule** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_Updateschedulehomepage.png?raw=true)

---

### Update Schedule
Follow the below steps to update schedule to run the subscription churn model:
1. In the **Data update schedule** page, perform one of the below actions:

|To|Do|
|:-|:-|
|Import new data to your model on a weekly interval|Click **Weekly**.|
|Import new data to your model on a monthly interval|Click **Monthly**.|

2. Click **Save & Proceed**.

The **Review your model details** page appears.

---
![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/CustomerChurn_ReviewandRunhomepage.png?raw=true)

---

## To review and run your model
Follow the below steps to save your churn model or run it:
1. In the **Review your model details** page, click the Edit icon to edit the details.
2. Once you complete your review or editing, perform one of the below actions:

|To|Do|
|:-|:-|
|Save and run your churn model|Click **Save & Run**.|
|Save your churn model|Click **Save & Close**.|
