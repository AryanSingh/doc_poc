# Exploring RFM model

You can view the RFM (Recency, Frequency, and Monetary) page to get insights from the RFM model. The view page displays the bar chart for the RFM cell values. A graphical representation of RFM will help you understand your organization's RFM analysis better. Using the SkyPoint-powered RFM model, you can analyze and identify your customers' purchase behavior and target your marketing and sales efforts toward these customers. 

You can target and retain those customers who have a high RFM score, as they are likely to be more valuable to the business in the long run. Follow the below steps to view and explore the RFM model:

1. To view the RFM model, go to **Predictions** > **Built-In**.
2. In the **My predictions** tab, click on your RFM model.

The **RFM model** page appears.

![image](/doc_snippets/RFM_ViewPage.png)  

The RFM model page displays total revenue, total orders, total customers, and a graphical representation of different segments. To view consolidated segments, click **View details**. It displays segment names, customers, monetary value, total orders, and average order value.


## Analyze RFM model segmentation

RFM model analysis is a representation of behavior-based customer segmentation. Segmentation helps divide customers into various categories to identify customers who are more likely to respond to promotions and for future personalization services. RFM model view page displays as per the last updated date (RFM model's last run date).


|<div style="width:150px">RFM segment</div>|Activity|Actionable tip|
| :- | :- | :- |
|Champions|Bought recently, buy often, and spend the most. Extremely loyal to a brand and advocates for it to others.|Reward them. They can become early adopters of new products and will help promote your brand.|
|Loyal customers|Spend a good amount of money often and have a high level of satisfaction with the products or services offered.|Upsell higher-value products. Ask for reviews and engage them.|
|Can’t lose|Made the biggest purchases but haven't returned for a long time.|Win them back through renewals or newer products. Talk to them.|
|Recent customers|Bought most recently but not often.|Provide onboarding support. Give them early success and start building relationships.|
|Potential loyalists|Recent customers but spent a good amount and bought more than once.|Offer membership or loyalty programs and recommend other products.|
|Promising|Recent shopper but haven’t spent much.|Creating brand awareness and offering free trials.|
|At risk|Purchased a while and may be in danger of becoming inactive or switching to a competitor. Need to bring them back.|Send a personalized email to bring them back. Offer renewals and provide valuable resources.|
|Need attention|Above average recency, frequency, and monetary values. May not bought recently through.|Make limited offers and recommendations based on past purchases. Reactivate them.|
|Hibernating|The last purchase was long back. Low spenders and lesser number of orders.|Offer other relevant products and special discounts. Recreate brand value.|
|About to sleep|Those who have not made a purchase in a long time and have made a low number of purchases and spent a low amount of money in the past. You will lose them if not reactivated.|Share valuable resources, recommend popular products, and reconnect with them.|
|Lost customers|Lowest recency, frequency, and monetary scores.|Revive interest with the reach-out campaign.|

> ![image](/doc_snippets/Note_icon.png)**Note**
> 
> In the **Customers and RFM score** table, you can see the RFM score from one to five for recency, frequency, and monetary values individually for each customer. Five is the highest, and one is the lowest value. A final RFM score is calculated by combining individual RFM score numbers. Customers who purchased recently, are frequent buyers, and spend a lot are assigned a score of 555 – Recency(R) – 5, Frequency(F) – 5, Monetary(M) – 5. They are your best customers.  
>
> In the above table, consider the first customer last ordered nine days ago and placed a total of 11 orders worth $182.8 to date. Based on the RFM value set, his RFM score is 554.


|Segment|Scores|
| :- | :- |
|Champions|555, 554, 544, 545, 454, 455, 445|
|Loyal customers|543, 444, 435, 355, 354, 345, 344, 335|
|Potential loyalists|553, 551, 552, 541, 542, 533, 532, 531, 452, 451, 442, 441, 431, 453, 433, 432, 423, 353, 352, 351, 342, 341, 333, 323|
|Recent customers|512, 511, 422, 421, 412, 411, 311|
|Promising|525, 524, 523, 522, 521, 515, 514, 513, 425, 424, 413, 414, 415, 315, 314, 313|
|Need attention|535, 534, 443, 434, 343, 334, 325, 324|
|About to sleep|331, 321, 312, 221, 213, 231, 241, 251|
|At risk|255, 254, 245, 244, 253, 252, 243, 242, 235, 234, 225, 224, 153, 152, 145, 143, 142, 135, 134, 133, 12, 124|
|Can't lose|155, 154, 144, 214, 215, 115, 114, 113|
|Hibernating|332, 322, 231, 241, 251, 233, 232, 223, 222, 132, 123, 122, 212, 211|
|Lost customers|111, 112, 121, 131, 141, 151|

## Create quick audience

Audience creation from the RFM model empowers marketers to quickly identify and segment users into homogeneous groups and target them with differentiated and personalized marketing strategies. This in turn improves user engagement and retention.

You can create a quick audience by clicking any one of the below categories:

- Revive interest in campaigns for "Lost customers"
- Reconnect/recommend products based on past purchases for "About to sleep" customers
- Offer membership for "Potential loyalist" customers
- Reward them for "Champions" customers
- Create brand awareness for "Promising" customers
- Create brand value for "Hibernating" customers
- Reactivate them for "Need attention" customers
- Bring back by renewals for "Can't lose" customers
- Offer on-boarding support for "Recent customers"
- Send personalized emails to "At risk" customers
- Engage more for "Loyal customers"

Follow the below steps to create a quick audience:

1. Select the segments from the available category.

![image](/doc_snippets/RFM_QuickAudience.png)

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> In the right pane, you can see the total profiles and audience size. For example, if the total profiles are 137, and out of these 30 profiles are related to champions then it shows 21.9 % are champions customers of the total audience size.

2. Enter the **Name** of the audience.
3. Enter the **Output table name**.
4. Click **Create**.

Similarly, you can create an audience for other categories. You can view the new audience under **Activate** > **Audiences**.


