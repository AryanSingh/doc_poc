# Exploring product recommendation model

## Overview

SkyPoint-powered product recommendation dashboard is used to visualize and analyze the performance of a product recommendation model. It displays information such as the model's performance, metrics, most suggested products, and high-confidence product recommendations, as well as provides the ability to drill down into specific segments of customers or products. 

With the help of metrics and graphs, you can analyze and suggest products to customers based on their past behavior, preferences, and purchase history.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Product recommendations may be subject to local laws and regulations and customer expectations. You must review the recommendations prior to delivering them to your customers to ensure that the recommendations are compliant with any applicable laws or regulations.

## View product recommendation model

Follow the below steps to explore the product recommendation model:

1. Go to **Predictions** > **Built-In**.
2. In the **My predictions** tab, click on your product recommendation model.

The product recommendation model page appears.

![Alt image](/doc_snippets/ProductRecommendationViewPage.png)

## Analyze the product recommendation model

There are four main sections of data displayed on the view page. Analyzing a product recommendation model involves evaluating the data, metrics, and performance of the model, and comparing it against baselines.

### Model performance

Scores A, B, or C in a customer churn model are used to indicate the performance of the prediction, with A indicating the best performance and C indicating the worst. These grades can help determine the accuracy and reliability of the model's predictions and aid in making decisions about whether to use the results stored in the output table.

![Alt image](/doc_snippets/ProductRecommendationModelPerformance.png)

A higher precision score indicates that the model is more accurate in identifying the target class. Scores are determined based on the following rules:


|Score|Description|
| :- | :- |
|A|When the precision of the model is at least 10% or higher than the baseline. |
|B|When the precision of the model is 0% to 10% more than the baseline.|
|C|When the precision of the model is less than the baseline.|


### Performance metrics

The performance metrics are used to evaluate the accuracy and effectiveness of the model.

![Alt image](/doc_snippets/ProductRecommendationPerformanceMetrics.png)

SkyPoint performance metrics include the following:

- MSE - Mean squared error (MSE) of an estimator measures the average of the squares of the errors. The lower the value, the better the model. The best value is 0.0.
- Accuracy - Accuracy is defined as simply the number of correctly categorized examples divided by the total number of examples. The best value is 1. The higher the value, the better the model. The disadvantage of accuracy is that it is not robust when the data is unevenly distributed, or where there is a higher cost associated with a particular type of error. 
- F1 - It is the harmonic mean of precision and recall value. It can even correctly measure the model performance when there is a large class imbalance. The best value is at 1 and the worst is at 0.
- WeightedPrecision - Precision is the ratio between the true positives and all the positives. Weighted precision gives the weighted mean of precision with weights equal to class probability. A higher value indicates a higher accuracy of the positive predictions.
- WeightedRecall - The recall is the measure of our model correctly identifying true positives. Weighted recall gives the weighted mean of recall with weights equal to class probability. A higher value indicates a higher completeness of the positive predictions.
- AreaUnderROC - The Area Under the Curve (AUC) is the measure of the ability of a classifier to distinguish between classes and is used as a summary of the ROC curve. The higher the AUC, the better the performance of the model at distinguishing between the positive and negative classes. The best value is 1 and the worst value is 0.
- AreaUnderPR - The precision-recall curve is constructed by calculating and plotting the precision against the recall for a single classifier at a variety of thresholds. The higher the AUC, the better the performance of the model. The best value is 1 and the worst value is 0.
- RMSE - Root Mean Square Error (RMSE) is the standard deviation of the residuals (prediction errors). The lower the value, the better the model. The best value is 0.

### Most suggested products (with tally)

You can visualize the list of products that are popular among your customers. It can help you to understand which products are in high demand and consider stock accordingly.

![Alt image](/doc_snippets/ProductRecommendationMostSuggestedProducts.png)

The x-axis of the graph displays the different products, and the y-axis shows the number of counts. The tallest bar represents the most recommended product. You can hover over the graphs to see the score of the count.

### High-confidence product recommendations

It displays those items which are likely to be purchased by the customer. You can apply filters based on score, product name, and profile id that will help you to navigate with ease and fast.

![Alt image](/doc_snippets/ProductRecommendationHighConfidence.png) 


|Item|Description|
| :- | :- |
|Profile skypoint id|Indicate the unique identifier or name of the user.|
|Transaction product name|Display the name of the product that the user has previously purchased or shown interest in.|
|Score|Indicate the confidence score or a rating assigned to the recommended product. The higher the score, the more relevant the product.|
|Action|Include a link that allows the user to "See all recommendations" related to the transaction product name.|

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Score shows the quantitative measure of the recommendation. The model recommends products with a higher score over products with a lower score. To view all the scores, click the **View table** and open the data tab. You can apply filters to view the selected results.

## Create quick audience

You can create a new audience based on the table created by the product recommendation model. For example, you can create an audience of users who have shown interest in a specific product category, such as electronics or fashion, by selecting from the dropdown list. 

Follow the below steps to create an audience from the product recommendation model:

1. On the product recommendation model view page, click **Create Audience**.

![Alt image](/doc_snippets/ProductRecommendationQuickAudience.png) 

2. Choose the **Most suggested product** from the dropdown list. After selecting the most suggested product, you can view the number of profiles for the suggested product out of the total profiles.
3. Enter the **Name** and **Output table name** to identify your audience.
4. Click **Create**.

Once you have created the audience, you can use it to target your marketing campaigns or to create personalized recommendations for them. You can view the new audience under **Activate** > **Audiences**.

