# Transactional Churn Prediction Sample Guide

This guide will walk you through an end to end example of Transactional Churn prediction in **Insights** using the data provided below. All data used in this guide is not real customer data and is a part of the Contoso dataset found in the SalesDemo instance.

## Step 1 - Import Customer & Online Purchase Data
Follow the steps below to import customer data from eCommerce platform:
1. Create a dataflow named eCommerce, and choose the Azure Data Lake Gen 2 connector.
2. Enter the credentials for the storage account where the csv files are stored and click on connect. Select the two eCommerce customer data and online purchase data in csv files.
3. Then, first click on the file named **eCommerceContacts.csv** and you will see a preview field table pop up on the screen.

---

![Alt text](/doc_snippets/previewfield.PNG)

---

4. Update the datatype for the columns listed below:
    - **DateOfBirth** : Date
    - **CreatedOn** : DateTime
5. Then, click on the file named **eCommercePurchases.csv** and you will see a preview field table pop up on the screen.
6. Update the datatype for the columsn listed below:
    - **PurchasedOn** : DateTime
    - **TotalPrice** : Int64
7. Select the datetime format for both the files as **11/25/1979**.
8. Click on **Save** and then run it by clicking on the three dot button and selecting Run.

## Step 2 - Import Loyalty Data
Follow the steps below to import the loyalty data from eCommerce platform:
1. Create a dataflow named loyalty, and choose the Azure Data Lake Gen 2 connector.
2. Enter the credentials for the storage account where the csv files are stored and click on connect. Select the loyalty data.
3. Then click on the file named **loyaltyCustomerData.csv** and you will see a preview field table pop up on the screen.
4. Update the datatype for the columns listed below:
    - **DateOfBirth** : Date
    - **RewardsPoints** : Int64
    - **CreatedOn** : DateTime
5. Select the datetime format for both the files as **11/25/1979**.
6. Click on **Save** and then run it by clicking on the three dot button and selecting Run.

## Step 3 - Stitch Process : Map

1. After importing the data, we now begin the Map process in the stitch section of our platform as the first step to create a customer profile.
2. Navigate to **Stitch** > **Map** and click on Select Entities.
3. Select the eCommerce Contacts Data entity and eCommerce Loyalty Data entity.
4. Click on contacts entity and complete the mapping for the various required fields.

---

![Alt text](/doc_snippets/ecommercecontactsmapping.PNG)

---

5. Click on loyalty data entity and complete the mapping for the various required fields.

---

![Alt text](/doc_snippets/loyaltymapping.PNG)

---

6. Click on Save and after the UI shows **Saved successfully**, click on Run to start the map process.

## Step 4 - Stitch Process : ML Match

1. After running the map stage of the stitch process, navigate to **Stitch** > **ML Match**.
2. Click on **Set Order** and select the data completeness  and match confidence threshold of 0.75 each.
3. Then, select the FullName and the emailAddress as the criterial column to be used while matching. If you wish, you can click on the exact match function to match records based on an exact match for email address.
4. Then click on Save and after the UI shows **Saved successfully**, click on Run to start the ML Match process.
5. Once the ML Match is done, you will be able to see the number of unique records and many other numerical representations of the output of the ML match.

---

![Alt text](/doc_snippets/sampleguidemlmatch.PNG)

---

## Step 5 - Stitch Process : ML Merge

1. After running the map and ML match, navigate to **Stitch** > **ML Merge**.
2. Click on Save and after the UI shows **Saved successfully**, click on Run to start the ML Match process.
3. Once ML Merge is done, go to the home page and look at the dashboard. You will be able to see the profile count.
4. To check the profiles, navigate to **Insights** > **Profiles**.

---

![Alt text](/doc_snippets/sampleguideprofiles.PNG)

---

## Step 6 - Create a Transactional Churn Prediction Model

With the stitch process done, we can run the Transactional churn prediction.
Below are the necessary steps required to run the prediction.
1. Go to **Insights** > **Predictions** and select to use the Customer Churn Model.

---

![Alt text](/doc_snippets/churnmodelstep1.PNG)

---

2. Select the **Transactional** option and select **Get Started**

---

![Alt text](/doc_snippets/churnmodelstep2.PNG)

---

3. Name the model and the output entity.

---

![Alt text](/doc_snippets/churnmodelstep3.PNG)

---

4. Define two conditions for the churn model:
    - **Prediction Window :** This setting defines how far into the future do the user want to predict the customer churn.(60 Days)
    - **Churn Definition** The duration without purchase after which a customer is considered churned.(60 Days)

    ![Alt text](/doc_snippets/churnmodelstep4.PNG)

5. Select **Purchase history(required)** and select **Add Data** for transaction history. Add the customer entity and map the fields to the corresponding fields required by the model.

---

![Alt text](/doc_snippets/customerdatasampleguidepredictions.PNG)

---

6. You can add any additional data that you mind requiring for the purpose of mapping.

---

![Alt text](/doc_snippets/churnmodelstep7.PNG)

---

7. Select Next to set the model schedule. The model needs to train regularly to learn new patterns when there is new data ingested.

---

![Alt text](/doc_snippets/churnmodelstep8.PNG)

---

8. After reviewing all the details, select **Save And Run**.

---

![Alt text](/doc_snippets/churnmodelstep9.PNG)

---

9. When the model is completely run, you will be able to see your model in the **My Predictions** section. Post completion, an entity will also be created with type **Intelligence** containing the predictions.

---

![Alt text](/doc_snippets/modelcreated.PNG)

---