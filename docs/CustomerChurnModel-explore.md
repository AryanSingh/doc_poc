# Exploring customer churn model

## Overview

SkyPoint-powered churn model dashboard is used to visualize and analyze the performance of a churn prediction model. It displays metrics such as churn rate, number of customers at risk of churning, and the accuracy of the model, as well as providing the ability to drill down into specific segments of customers. 

With the help of metrics and graphs, you can analyze the causes of customer churn rate and work proactively to reduce it and increase the retention rate. The churn model is built using historical data on customer behavior, such as purchase history, demographics, and engagement with the company's products or services.

## View customer churn model

Follow the below steps to explore the customer churn model:

1. Go to **Predictions** > **Built-In**.
2. In the **My predictions** tab, click on your customer churn model.

The customer churn model page appears.

![Alt image](/doc_snippets/CustomerChurnModelViewPage.png)

## Analyze the customer churn model

There are four main sections of data displayed on the view page. You can analyze the data of your customers and identify patterns and features that are indicative of a high likelihood of churn. You can identify at-risk customers and target them with retention efforts, such as special promotions or personalized communications.


### Model performance

Scores A, B, or C in a customer churn model are used to indicate the performance of the prediction, with A indicating the best performance and C indicating the worst. These grades can help determine the accuracy and reliability of the model's predictions and aid in making decisions about whether to use the results stored in the output table.


![Alt image](/doc_snippets/CustomerChurnModelModelPerformance.png)

The scores for a customer churn model are determined by comparing the model's accuracy and performance against a set of predetermined rules. These rules are as follows:


|Score|Description|
| :- | :- |
|A|When the model accurately predicts at least 75% of the total predictions.|
|B|When the model accurately predicts at least 50% of the total predictions.|
|C|When the model accurately predicts less than 50% of the total predictions.|

For example, if a model receives a grade of A, it will be considered highly accurate and suitable for use in a production environment, while a model with a grade of C would be considered unreliable and may need to be retrained or replaced. If a churn model's accuracy is 75%, it means that out of 100 customers, the model correctly predicted whether 75 of them will churn or not. These scores help to give an indication of the model's overall performance and level of confidence.

### Performance metrics

Performance metrics in a churn model are used to evaluate the effectiveness of the model in identifying customers who are likely to churn.

![Alt image](/doc_snippets/CustomerChurnModelPerformanceMetrics.png)

SkyPoint performance metrics include the following:

- MSE - Mean squared error (MSE) of an estimator measures the average of the squares of the errors. The lower the value, the better the model. The best value is 0.0.
- Accuracy - Accuracy is defined as simply the number of correctly categorized examples divided by the total number of examples. The best value is 1. The higher the value, the better the model. The disadvantage of accuracy is that it is not robust when the data is unevenly distributed, or where there is a higher cost associated with a particular type of error. 
- F1 - It is the harmonic mean of precision and recall value. It can even correctly measure the model performance when there is a large class imbalance. The best value is at 1 and the worst is at 0.
- WeightedPrecision - Precision is the ratio between the true positives and all the positives. Weighted precision gives the weighted mean of precision with weights equal to class probability. A higher value indicates a higher accuracy of the positive predictions.
- WeightedRecall - The recall is the measure of our model correctly identifying true positives. Weighted recall gives the weighted mean of recall with weights equal to class probability. A higher value indicates a higher completeness of the positive predictions.
- AreaUnderROC - The Area Under the Curve (AUC) is the measure of the ability of a classifier to distinguish between classes and is used as a summary of the ROC curve. The higher the AUC, the better the performance of the model at distinguishing between the positive and negative classes. The best value is 1 and the worst value is 0.
- AreaUnderPR - The precision-recall curve is constructed by calculating and plotting the precision against the recall for a single classifier at a variety of thresholds. The higher the AUC, the better the performance of the model. The best value is 1 and the worst value is 0.
- RMSE - Root Mean Square Error (RMSE) is the standard deviation of the residuals (prediction errors). The lower the value, the better the model. The best value is 0.

### Likelihood to churn

On the likelihood to churn graph, the x-axis represents the likelihood of churn, and the y-axis represents the number of customers. The height of the bar shows the number of customers that fall within that range of likelihood of churn. You can hover over the graphs to see the score of the count.

![Alt image](/doc_snippets/CustomerChurnModelLikelihoodToChurn.png)

The bar for the likelihood-to-churn model predicts the true count of customers with high churn risk, and false count predicts less likely to churn.

### Most influential factors

There are many factors that are considered when creating your prediction. On the **Most influential factors** graph, the **Explanation key** column represents the factors, and the **Weight** column represents the importance or weight of each factor.

![Alt image](/doc_snippets/CustomerChurnModelMostInfluentialFactors.png)

The length of each bar shows the importance of each feature in the model. For example, if the model finds a factor such as **Day Since First Purchase** that has highly influential in determining customer churn, the company may focus on retaining customers who have recently made their first purchase to reduce churn.

## Create quick audience

Creating a quick audience from a churn model involves identifying a group of customers who have a high likelihood of churning, as predicted by the model, and targeting them for retention efforts. You can increase the personalization of recommendations by creating segments from the results of prediction models.

Follow the below steps to create an audience from the churn model:

1. On the churn model view page, click **Create Audience**.

![Alt image](/doc_snippets/CustomerChurnModelQuickAudience.png)

2. Choose **true** or **false** from the dropdown list.
3. Enter the **Name** and **Output table name** to identify your audience.
4. Click **Create**.
5. You can view the new audience under **Activate** > **Audiences**.


