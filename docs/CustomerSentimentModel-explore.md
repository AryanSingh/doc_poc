# Exploring sentiment analysis and topic modeling

## Overview

SkyPoint-powered customer sentiment model dashboard enables you to discover trends about your brand and overall sentiment from the feedback and reviews. You can get a holistic view of overall sentiment through simple charts and graphs, and color-coded sentiment scores on one intuitive page.

By performing customer sentiment analysis, you can get a better understanding of how the customers feel about the product or service and use that information to meet their needs. It can help you drive business actions that result in high customer satisfaction and loyalty.  

## Topic-based sentiment analysis

Topic-based sentiment model isolates the sentiment for each topic and ensures that no nuance is lost and gets a more detailed understanding of how people feel about the different topics being discussed. For each specific topic found in the text, SkyPoint calculates the sentiment and returns the numerical sentiment score on a visualization dashboard. For example, if you are analyzing a collection of online reviews for a healthcare domain, you might use topic modeling to identify the different themes being discussed (e.g., staff, care services, facility, etc.), and then use sentiment analysis to understand the overall sentiment expressed about each of those themes.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> To visualize the topic modeling on the dashboard page, select a checkbox during the configuration of the model. The **Topic modeling** checkbox is selected by default. If you uncheck this, topic modeling won't be considered for sentiment analysis.

## View customer sentiment model

Follow the below steps to explore sentiment analysis and topic modeling:

1. Go to **Predictions** > **Built-In**.
1. In the **My predictions** tab, click on your customer sentiment model.

The **Customer sentiment model** page appears.

![Alt image](/doc_snippets/SentimentModelDashboard.png)

## Analyze the customer sentiment model

There are different sections of data displayed in widgets on the view page. You can hover over the graphs to see the sentiment score in each group.

### Overall customer sentiment

Overall customer sentiment shows the proportion of positive, negative, and neutral sentiments expressed by customers. The proportions of positive, negative, and neutral sentiments are calculated by analyzing customer feedback, reviews, and comments.

![Alt image](/doc_snippets/OverallCustomerSentiment.png)


|Sentiment type|Score|
| :- | :- |
|Positive|4 to 5|
|Neutral|3|
|Negative|1 to 2|


For example, if the graph shows that 60% of the customer feedback analyzed was positive, 10% was neutral, and 30% was negative. This suggests that the majority of customers have a positive view of the product, service, or brand, but there is still a significant minority of customers who are unhappy or neutral.

### Customer sentiments over the year

With the SkyPoint-powered sentiment model, you can compare historical and current data to ensure your product and services keep moving in the right direction. You can see the data for the particular year by selecting the dropdown menu. 

![Alt image](/doc_snippets/CustomerSentimentsOverYear.png)

By analyzing the data over time, you can identify trends and patterns in customer sentiment and track changes over the course of a year or longer. It helps you to identify areas where the company can improve its offerings or customer experience.

### Word cloud

SkyPoint word cloud feature is used to visualize and analyze the words and phrases that are most commonly used by customers when expressing their opinions about a product, service, or brand. You can select the dropdown menu to view the top words contributing to positive, negative, and neutral sentiments. 

![Alt image](/doc_snippets/SentimentWordCloud.png)  

### Category – total volume

The total volume graph is used to visualize the total count of topics in every aspect.  

![Alt image](/doc_snippets/TopicModelingTotalVolume.png)

For example, when the aspect "facility" is used, the bar chart shows the count of topics like "hotel", "community", "resort", "facility", and "experience", etc. It provides a detailed insight to business owners for marketing the right products in the right category, and providing the right offers on brands when the customer is looking for "facility".

### Category – percentage

![Alt image](/doc_snippets/TopicModelingPercentage.png)

This visualization provides a clear and easy way to understand the sentiment of different aspects at-a-glance. Aspects are represented by a horizontal bar graph. The bar is split into sections representing the percentage of positive, neutral, and negative sentiments for that aspect. The green color represents positive sentiment, brown represents neutral sentiment, and red represents negative sentiment. 

The x-axis of the bar chart represents the count in the percentage for positive, negative, and neutral sentiments, while the y-axis represents the aspects. For example, if in "care services" aspect shows 50.3% positive, 7.6% neutral, and 42.1% negative, it means that 50.3% of the texts analyzed with respect to "care services" had a positive sentiment, 7.6% had neutral sentiment, and 42.1% had a negative sentiment.

### Customers contributing to feedbacks

In the **Customers contributing to feedbacks** section, you can view the information in tabular form, with each row representing a piece of customer feedback and each column containing the corresponding attribute such as customer id, first name, last name, etc. You can apply a filter to view the selected result.

### Apply filters

On the top-right of the page, you can apply filters to choose parameters in the sentiment analysis model. You can choose and add parameters in the Level 1 and Level 2 fields. For example, if you want to view the sentiment analysis result of a particular city, then select "state" for the Level 1 filter and a "city" for the Level 2 filter. This will allow you to see the sentiment analysis results for only that specific city rather than for the entire state or for the entire dataset.  


