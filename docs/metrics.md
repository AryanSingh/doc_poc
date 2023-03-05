# Metrics

## Overview

Metrics help you to better understand your customer behaviors and business performance. You can use metrics to define the Key Performance Indicators (KPIs) that best reflect the performance and health of your business. These metrics address audiences like individual customers' behavior or business-level performance to understand the aggregate-level revenue in the whole business. 

SkyPoint Modern Data Stack Platform provides an intuitive experience that helps make it easy for you to build different types of metrics and view insights. It includes three different types of metrics. These are as follows:

- **Profile Attribute**: The Profile attribute represents a single field for each customer that reflects a score, value, or state for the profile. It enables you to track your customer performance, for example, total sales, reward points, etc.
- **Profile Metric**: The Profile metric gives input related to an individual customer's behavior.  For example, measuring the total number of purchases that each of your customer's made.
- **Business Metric**: The Business metric is a quantifiable measure used to track the performance and health of your organization on a business level. For example, total sales, total profit, etc. You can compare the performance of the organization with the industry benchmarks. Business Metrics help in depicting the progress of the company’s business goals.

### Prerequisite

- You must have completed Master Data Management - Stitch process.
- Metrics involve related tables; you can define any relationships that are needed for your metrics.  

Select the appropriate tab and follow the instructions to create metrics:  
<br>

## [Profile attribute](#tab/tabid-1)

Follow the below steps to create a profile attribute:

1. Go to **Activate** > **Metrics**.

The **Metrics** page appears.

![Alt image](/doc_snippets/Mertics.png)

2. On the **Metrics** page, click **Add metrics** or **New Metrics**.

![Alt image](/doc_snippets/SelectProfileAttribute.png)

3. Select **Profile Attribute**.
4. Enter a **Name** and **Display name** in the text area to identify your profile attribute.
5. Click **Save**.

![Alt image](/doc_snippets/AddProfileAttribute.png)

### Add tables

In the **Tables** section, select the table from the dropdown list. You can decide whether additional tables are needed as a part of your profile attribute. Follow the below steps to add a table to your profile attribute:

1. To add more tables, click **Add table** and select the table from the dropdown list that has a relationship with your starting table.
2. If you want to remove a table, click the **Delete** icon (X).

### Add variables

In the **Variables** section, you can create a numeric variable using fields from the selected tables. Follow the below steps to add variables:

1. Click **Add Variable**. 

![Alt image](/doc_snippets/Metrics_AddVariable.png)

2. Enter a **Variable Name** in the text field.
3. In the **Expression Text** area, choose a field to begin your calculations.
4. Type an expression in the text area while choosing more fields to be included in your calculation. Currently, only arithmetic expressions (+, -, \*, /, %, ^) are supported.
5. Click **Save** to apply your changes.
6. If necessary, click the horizontal ellipsis and do the following:

|To|Do|
| :- | :- |
|Modify the variable|Select **Edit** and update the variable. Click **Save** to apply your changes.|
|Remove the variable|Select **Delete**.|

### Add DateTime format for attributes

In the **Variables** section, mathematical operations can be performed on fields having DateTime as the datatype. Once you select the DateTime field for the first attribute, it will display the format selector drop-down list. It will show the list of DateTime formats that are related to the selected attribute. You can select the DateTime field format corresponding to the selected field.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> When you select the DateTime field, all other datatype fields will disappear.

Follow the below steps to add a DateTime format for attributes:

1. In the **Expression Text** area, add the DateTime attributes.

![image](/doc_snippets/MetricsDateTime.png)

2. Choose a DateTime format from the drop-down list.
3. Click **Save** to apply your changes.

### Add metric definition

In the **Metric definition** section, you can add aggregation functions. Any aggregation that you create results in a new value within your metric table or attribute. Supported aggregation functions are as follows:

Average, Count, Count Distinct, First (takes the first record of a dimension value), Last (takes the last record added to a dimension value), Max, Min, and Sum. 

1. Select a **Function** from the dropdown list.
2. Select a **Table/variable** from the dropdown list.
3. Select a **Field** from the dropdown list.
4. Type a name in the **As** and **Display name** text area.
5. Select **Save** to apply your changes.

The **Metrics** page displays the added profile attribute.

![Alt image](/doc_snippets/ProfileAttribute_Output.png)

6. Click **Run**.

The **Run history** shows all the details such as operation duration, status, timestamp, etc. 

## [Profile metric](#tab/tabid-2)

Follow the below steps to create a profile metric:

1. Go to **Activate** > **Metrics**.

The **Metrics** page appears.

![Alt image](/doc_snippets/Mertics.png)

2. On the **Metrics** page, click **Add metrics** or **New Metrics**.

![Alt image](/doc_snippets/SelectProfileMetrics.png)

3. Select **Profile Metric**.
4. Enter a **Name** and **Display name** in the text area to identify your profile metric.
5. Click **Save**.

![Alt image](/doc_snippets/AddProfileMetric.png)

### Add tables

In the **Tables** section, select the table from the dropdown list. You can decide whether additional tables are needed as a part of your profile metric. Follow the below steps to add a table to your profile metric:

1. To add more tables, click **Add table** and select the table from the dropdown list that has a relationship with your starting table.
2. If you want to remove a table, click the **Delete** icon (X).

### Add variables

In the **Variables** section, you can create a numeric variable using fields from the selected tables. Follow the below steps to add variables:

1. Click **Add Variable**. 

![Alt image](/doc_snippets/Metrics_AddVariable.png)

2. Enter a **Variable Name** in the text field.
3. In the **Expression Text** area, choose a field to begin your calculations.
4. Type an expression in the text area while choosing more fields to be included in your calculation. Currently, only arithmetic expressions (+, -, \*, /, %, ^) are supported.
5. Click **Save** to apply your changes.
6. If necessary, click the horizontal ellipsis and do the following:

|To|Do|
| :- | :- |
|Modify the variable|Select **Edit** and update the variable. Click **Save** to apply your changes.|
|Remove the variable|Select **Delete**.|  

### Add DateTime format for attributes

In the **Variables** section, mathematical operations can be performed on fields having DateTime as the datatype. Once you select the DateTime field for the first attribute, it will display the format selector drop-down list. It will show the list of DateTime formats that are related to the selected attribute. You can select the DateTime field format corresponding to the selected field.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> When you select the DateTime field, all other datatype fields will disappear.

Follow the below steps to add a DateTime format for attributes:

1. In the **Expression Text** area, add the DateTime attributes.

![image](/doc_snippets/MetricsDateTime.png)

2. Choose a DateTime format from the drop-down list.
3. Click **Save** to apply your changes.

### Add metric definition

In the **Metric definition** section, you can define how your chosen tables and calculated variables are aggregated in a new measure table or attribute.

1. Click **New Dimension**.
2. Select **Table** from the dropdown list.

You can add aggregation functions. Any aggregation that you create results in a new value within your metric table or attribute. Supported aggregation functions are as follows:

Average, Count, Count Distinct, First (takes the first record of a dimension value), Last (takes the last record added to a dimension value), Max, Min, Sum. 

3. Select a **Function** from the dropdown list.
4. Select a **Table/variable** from the dropdown list.
5. Select a **Field** from the dropdown list.
6. Type a name in the **As** and **Display name** text area.
7. Select **Save** to apply your changes.

The **Metrics** page displays the added profile metric.

![Alt image](/doc_snippets/ProfileMetricOutput.png)

8. Click **Run**.

The **Run history** shows all the details such as operation duration, status, timestamp, etc.

## [Business metric](#tab/tabid-3)

Follow the below steps to create a business metric:

1. Go to **Activate** > **Metrics**.

The **Metrics** page appears.

![Alt image](/doc_snippets/Mertics.png)

2. On the **Metrics** page, click **Add metrics** or **New Metrics**.

![Alt image](/doc_snippets/AddNewBusinessMetrics.png)

3. Select **Business Metric**.
4. Enter a **Name** and **Display name** in the text area to identify your business metric.
5. Click **Save**.

![Alt image](/doc_snippets/AddBusinessMetric.png)

### Add tables

In the **Tables** section, select the table from the dropdown list. You can decide whether additional tables are needed as a part of your business metric. Follow the below steps to add a table to your business metric:

1. To add more tables, click **Add table** and select the table from the dropdown list that has a relationship with your starting table.
2. If you want to remove a table, click the **Delete** icon (X).

### Add variables

In the **Variables** section, you can create a numeric variable using fields from the selected tables. Follow the below steps to add variables:

1. Click **Add Variable**. 

![Alt image](/doc_snippets/Metrics_AddVariable.png)

2. Enter a **Variable Name** in the text field.
3. In the **Expression Text** area, choose a field to begin your calculations.
4. Type an expression in the text area while choosing more fields to be included in your calculation. Currently, only arithmetic expressions (+, -, \*, /, %, ^) are supported.
5. Click **Save** to apply your changes.
6. If necessary, click the horizontal ellipsis and do the following:


|To|Do|
| :- | :- |
|Modify the variable|Select **Edit** and update the variable. Click **Save** to apply your changes.|
|Remove the variable|Select **Delete**.|  

### Add DateTime format for attributes

In the **Variables** section, mathematical operations can be performed on fields having DateTime as the datatype. Once you select the DateTime field for the first attribute, it will display the format selector drop-down list. It will show the list of DateTime formats that are related to the selected attribute. You can select the DateTime field format corresponding to the selected field.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> When you select the DateTime field, all other datatype fields will disappear.

Follow the below steps to add a DateTime format for attributes:

1. In the **Expression Text** area, add the DateTime attributes.

![image](/doc_snippets/MetricsDateTime.png)

2. Choose a DateTime format from the drop-down list.
3. Click **Save** to apply your changes.

### Add metric definition

In the **Metric definition** section, you can define how your chosen tables and calculated variables are aggregated in a new measure table or attribute.

1. Click **New Dimension**.
2. Select **Table** from the dropdown list.

You can add aggregation functions. Any aggregation that you create results in a new value within your metric table or attribute. Supported aggregation functions are as follows:

Average, Count, Count Distinct, First (takes the first record of a dimension value), Last (takes the last record added to a dimension value), Max, Min, Sum, and NPS. 

3. Select a **Function** from the dropdown list.
4. Select a **Table/variable** from the dropdown list.
5. Select a **Field** from the dropdown list.
6. Type a name in the **As** and **Display name** text area.
7. Select **Save** to apply your changes.

The **Metrics** page displays the added business metric.

![Alt image](/doc_snippets/BusinessMetricsOutput.png)

8. Click **Run**.

The **Run history** shows all the details such as operation duration, status, timestamp, etc.

## Calculate Net Promoter Score (NPS)  

You can calculate the NPS to learn about the number of customers who would likely recommend your product or service. Follow the below steps to calculate NPS in business metrics:

1. In the **Metric definition** section, select **Nps** in the **Function** drop-down list.

![Alt image](/doc_snippets/MetricsNPS.png)

2. Select a table or variable from the **Table/variable** drop-down list. 
3. Select an option from the **Field** drop-down list. 
4. Type a name in the **As** and **Display name** text area.
5. Click **Save**.  
 
  
> :grey_exclamation: **Note:** To calculate NPS, survey customers and see how likely they recommend your business on a scale of 0-10. Organize responses into different categories as follows:  
 > - Promoters: Respond with a score of 9 or 10.  
 > - Passives: Respond with a score of 7 or 8.  
 > - Detractors: Respond with a score between 0 and 6.  
 
 Net Promoter Score = Promoters (%) – Detractors (%)  
 
 
 ```
with nps_calcs as (
   select
     count(1) filter (where score >= 9)::float as promoter_ct, -- people who love you
     count(1) filter (where score <= 6)::float as detractor_ct, -- people who hate you
     count(1)::float as all_responses_ct -- all the people (love, hate and neutral. Don't exclude the neutral!)
   from nps_responses
)
select
  ((promoter_ct/all_responses_ct) - (detractor_ct/all_responses_ct)) * 100.00 as NPS
from nps_calcs
;
```  


For example, if you have 50% Promoters (i.e., half of your respondents gave you a score of 9 or 10), 30% Passives, and 20% Detractors. Your NPS score will be 50 – 20 = 30. The NPS score goes from -100 (if you have only detractors) to +100 (if you have all promoters). Knowing your NPS offers a variety of valuable business benefits, such as creating a strategy that targets Promoters, Passives, and Detractors.  

---


## Edit, rename, and delete metrics

Follow the below steps to modify, rename, and remove your metrics:

- On the **Metrics** page, select the horizontal ellipsis under the **Actions** column and do the following:


|To|Do|
| :- | :- |
|Modify the Business Metric|Select **Edit** and **Save** to apply your changes. Click **Run** to execute the Metric.|
|Change the name of the Metric|Select **Rename**.|
|Remove the Metric|Select **Delete**.|



