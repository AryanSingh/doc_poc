# Configure sentiment analysis and topic modeling

## Overview

You can use the SkyPoint customer sentiment analysis model to derive your customers’ sentiments and the specific business aspects with the help of their feedback. Sentiment analysis is the process of using Natural Language Processing (NLP) and text analysis to identify and extract subjective information from customer feedback in the form of written reviews, social media posts, or survey responses. This helps in gathering valuable insights into the customers' viewpoints about the brand and helps you to stay ahead of the competition.

SkyPoint Modern Data Stack Platform (MDSP) uses two NLP models to detect customer sentiments. They are:

- Extract the customer feedback sentiments (positive, negative, or neutral).
- Analyze and discuss the business aspects.

Once you have extracted the sentiment and aspects from the customer feedback, you can analyze the results to identify patterns and trends. Both the above models are pre-trained and evaluated on representative public data that are labeled. However, you need to re-run the models to generate new results for the new feedback records in uploaded data tables.

### Topic modeling

SkyPoint Modern Data Stack Platform (MDSP) supports comprehensive sentiment analysis (sentiment model and topic modeling) solutions to get the most actionable insights from feedback, reviews, and surveys. You can see the overall sentiment of the reviewers on the SkyPoint platform. The topic modeling calculates the sentiment for each topic that is defined for that industry- healthcare, hospitality, senior living, etc. Topics may be senior living nurses, healthcare facilities, etc.

SkyPoint models automatically detect topics present in the text and derive hidden patterns in the corpus and thus assist in better decision-making. 

### Prerequisites

You need to have the following customer feedback data to create a customer sentiment model:

- Feedback ID
- Feedback date
- Feedback text

## To create a customer sentiment model

Follow the below steps to create a customer sentiment model:

1. Go to **Predict > Built-In**.

The **Predictions** page appears.

![Alt image](/doc_snippets/Customersentiment_Predicthomepage.png)

2. In the **Create** tab, click **Use this model** under the sentiment model.

![Alt image](/doc_snippets/Customersentiment_Customersentimentform.png)

3. Select **Get started**.

### Step 1: Name your model

Follow the below steps to name your model:

![Alt image](/doc_snippets/Customersentiment_Modelname.png)

1. Enter the **Name** and **Output table name** for your model. The output table name appears on the database page after running your model. It includes letters and numbers only, without any spaces.
2. Click **Save & Proceed**.

### Step 2: Add data

Follow the below steps to add data to your sentiment model:

![Alt image](/doc_snippets/Customersentiment_Requireddatapage.png)

1. Click **Add Data**.

The **Add customer data** form appears.

![Alt image](/doc_snippets/Customersentiment_Customerdataform.png)

2. Select the **Feedback table** from the drop-down list.
3. Select the **Feedback attribute** from the drop-down list.
4. Select the **Attribute for feedback date** from the drop-down list.
5. Select the **Feedback start date** and **Feedback end date** from the calendar widget. If you have not selected the end date, the system process automatically with the current date.
6. If necessary, you can add a **filter parameter** and define a relationship.

### Add filter parameter (optional)

You can add filter parameters in the sentiment analysis model. You can see these selected filters on the view page for the sentiment model and topic modeling. You can add a maximum of two filter parameters. This is useful for quickly identifying patterns and insights in the data that you have configured.

Follow the below steps to add a filter parameter:

1. Select **Filter (Parent)** from the drop-down list.

For example, if you select the "Filter (Parent)" as "State", the filter will apply to the main category of your data, which is the state. This means that you can filter your data based on the state it belongs to, and only see the information that is relevant to that state. For instance, if you have a data set of sales for a retail chain across different states, you can use the "Filter (Parent)" setting and select "State" to focus on sales from a particular state, such as California or Texas. 

2. Select **Relationship** from the drop-down list. You can set the relationships between tables.
3. Select a **Column** from the drop-down list that relates to the selected relationship. This refers to the column or attribute within the data set that is associated with the selected relationship. For example, if you select a relationship between a review and a customer, you can choose the email address column of the customer.
4. If necessary, you can add **Filter (Child)** and the required details. It refers to a secondary filter that you can apply to further refine the data set based on specific criteria. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can configure the filter parameters in their sentiment analysis model to suit their specific data set, resulting in a more customized and effective analysis. The ability to add filter parameters and view them on the view page enhances the user's ability to extract insights from the data quickly and efficiently.

5. Select the **Topic modeling** checkbox to identify key topics in reviews.
6. If a relationship is present, select the checkbox, and then enter the **Relationship** **name**, **Field**, and **Matching field**.
7. Select **Save** to apply your changes.

You can view the table on the **Required data** page.

![Alt image](/doc_snippets/Customersentiment_Requireddataoutput.png)

9. If necessary, click the horizontal ellipsis under the **Actions** column and do the following:

|To|Do|
| :- | :- |
|Modify the data for your sentiment model|Select **Edit** > **Save**.|
|Remove the table|Select **Delete** and click **Yes** to confirm your deletion.|  

10. Click **Save & Proceed**.

### Step 3: Set your data update schedule

You can set a schedule to automatically import updated data for a sentiment analysis model to ensure that it remains accurate and relevant. For example, a model used for real-time analysis of social media posts may need to be updated more frequently than a model used for less time-sensitive applications.

Follow the below steps to set the data update schedule:

![Alt image](/doc_snippets/Customersentiment_Dataupdatespage.png)

1. On the **Data updates** page, perform one of the following actions:

|To|Do|
| :- | :- |
|Import your data automatically every week|Select **Weekly**.|
|Import your data automatically every month|Select **Monthly**.|
|Import your data automatically every three months|Select **Quarterly**.|
|Choose not to import your data automatically|Select **Never**.|  

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Although there is an option of choosing not to schedule your data imports, you are still not recommended to select that option. That is because adding more data would provide your model with more behavioral patterns that would fuel predictions, and improve the accuracy of your results significantly.

2. Click **Save & Proceed**.

### Step 4: Review and run your model

Follow the below steps to review your customer sentiment analysis model and process it:

![Alt image](/doc_snippets/Customersentiment_Reviewandrun.png)

1. You can modify the previous steps on the **Review your model details** page. Click the **Edit** icon to review and modify the details.
2. Once you complete your review or editing, perform one of the below actions:

|To |Do|
| :- | :- |
|Save and run your customer sentiment model|Click **Save & Run**.|
|Save and close your customer sentiment model|Click **Save & Close**.|
|Open previous step|Click **Previous**.|  

3. Go to the **My predictions** tab to view your sentiment model.

![Alt image](/doc_snippets/CustomerSentimentOutput.png)

4. If necessary, select the horizontal ellipsis under the **Action** column and do the following:

|If you want to|Then|
| :- | :- |
|Modify the sentiment model|Select **Edit** and modify the sentiment model.|
|Execute the sentiment model|Select **Run**.|
|Remove the sentiment model|Select **Delete**.|
|See the run history of the sentiment model|Select **Run History**.|
|View the sentiment model|Select **View**.|  

The sentiment analysis table is displayed in the **Gold** tab under **Lakehouse** > **Databases**. Select the table and click the **Data** tab to view the sentiment model.

![Alt image](/doc_snippets/CustomerSentimentGGold.png)
