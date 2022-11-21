# Uploading Bulk Custom Models

## Overview

Bulk uploading allows you to take advantage of the Machine Learning and Artificial Intelligence technologies that send data to your Azure machine learning model and brings the output. SkyPoint creates new dimensions for understanding and segmenting your customers into high-performing audiences. Our Modern Data Stack Platform (MDSP) imports and unifies the data that you can upload for the custom integration.


## Prerequisites

To configure the Bulk Custom model, the following prerequisites must be met:

- You must have an API of the custom object to make the bulk import request.
- Request and response body of the service should be in JSON format. 


## To add a Bulk Custom model

1. In the left pane, go to **Predict** > **Custom**.

The **Custom models** window appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/CustomModel.png?raw=true)

---

2. Click **New workflow**.

## To upload Bulk Custom models

1. In the **Custom models upload** area, select the **Bulk upload**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/BulkCustomModelUpload.png?raw=true)

---

2. In the **Name** box, enter your custom model web service.
3. Select the **Table** from the drop-down list.
4. In the **Total number of record to be used** box, enter the number of records to process for the table.
5. Select the **Profile attributes** from the drop-down list.
6. In the **Model attributes** box, enter the attributes to map the model column as per selected profile attributes.

> :grey_exclamation: **Note**: Use at least three characters to define the Model attributes. The following example shows a mapping of the Model attributes with Profile attributes.  

```Json
[
    {
        "total_transaction_value": 1,
        "total_no_of_items_bought": 1,
        "total_no_of_orders": 1,
        "month": "Jan",
        "day_of_month": 1,
        "day_of_week": 1,
        "between_purchase_days": 10,
        "day_since_first_purchase", 10,
        "day_since_last_purchase": 5,
        "days_between_first_last_purchase": 5,
        "WillChurn": 0,
        "ProfileID": 1
    },
    {
        "total_transaction_value": 2,
        "total_no_of_items_bought": 2,
        "total_no_of_orders": 2,
        "month": "Feb",
        "day_of_month": 2,
        "day_of_week": 2,
        "between_purchase_days": 20,
        "day_since_first_purchase", 20,
        "day_since_last_purchase": 15,
        "days_between_first_last_purchase": 5,
        "WillChurn": 1,
        "ProfileID": 2
    },
    {
        "total_transaction_value": 3,
        "total_no_of_items_bought": 3,
        "total_no_of_orders": 3,
        "month": "Mar",
        "day_of_month": 3,
        "day_of_week": 3,
        "between_purchase_days": 30,
        "day_since_first_purchase", 20,
        "day_since_last_purchase": 10,
        "days_between_first_last_purchase": 10,
        "WillChurn": 0,
        "ProfileID": 3
    }
]
```  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/MapModelColumn.png?raw=true)  

---

7. If you want to add Model attributes and profile attributes, click **Add row**.
8. Enter the web address of the API name of the custom object in the **URL** box. 
9. Select the **Hypertext Transfer Protocol (HTTP)** method from the **URL Method** drop-down list.

---

|Item|Description|
| :- | :- |
|GET|Requests retrieve data from the server.|
|POST|Sends data to the server.|
|PUT|Replaces all current data of the target resource with the uploaded content.|
|DELETE|Removes the resource.|  

---

10. In the **Rate Limit** box, enter a rate limit of an API request per second.
11. In the **Allowed number of record per request** box, enter the number of record. 

> :grey_exclamation: **Note**: The rate limit of an API works as a gatekeeper that processes the amount of incoming or outgoing data per second. This is the number of parallel requests created on an API. The rate limit ensures that the user does not exceed the maximum rate limit. For example, if an API processes 1000 records per second with a rate limit of 5, then this API can process 5000 requests per second. If request exceeds the rate limit, it generates an error message.

12. Click **Add Row** to enter API address in **Header**.
13. Enter JSON code in the **Body** area to pass the data.
14. Enter **Map Input Parameter.**
15. Enter **Map Output Parameter**.  
16. Click **Save** to apply your changes. 

For example, a user's API can accept data in the JSON format as mentioned below:

> [!Tip]
> - An Array is an ordered list of values. For Array, square brackets should be used. The Array properties indices start from 0 and are accessible with the '[]' operator.
> - An object is a collection of key values. For object, curly brackets should be used. Key always be enclosed in double-quotes. The Object type properties are accessible with a "." operator.

---

**Input:** 


```json
{

    "type": "skypointdata",

    "index": "1",

    "input": {

        "data": "",

        "custom": true

    }

}
```
---

> **Note:** This is just a sample request of the client's API. With this request, the object is one of the properties which is supposed to contain data for the Client's custom model. When you run the custom model, we will append the data from the SkyPoint data store in form of an array to this property and send it over to the configured custom model API. Here, the input parameter is **input.data**.

---

**Output:**

```json
{

    "category": 

    {

        "domain": "ecommerce",

        "priority": 1

    },

    "metrics": 

    [

        {

            "KPI": 

            {

                "conversions":[

                    {

                        "channel": "social",

                        "quantity": 3

                    }

                ]

            }

        },

        {

            "rate": {

                "score":[

                    7.8,

                    8,

                    9,

                    5

                ]

            }

        }
    ]

}
```
---

You need to specify the key property that contains the score. Here, output parameter will be **metrics[1].rate.score.** 

Once you have saved the custom model, it will appear on the **Custom models** page.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/BulkCustomModelsUploadOutput.png?raw=true)  

---  

|<div style="width:100px">Item</div>|Description|
|:-|:-|
|Name|Name of the custom model.|
|Type|Type of the custom model such as Single Upload or Bulk Upload.|
|Status|The status of the run command on the custom model.|
|Score|Indicates the score of the custom model. Click **View** to see attributes and data in the Database section.|
|Actions|Option to perform activities such as Edit, Delete, and Run.|
|Group by|View the items in a specific Group (For example, Name, Type, status, and score).|
|Run History|See the run history of the custom models.|  

## To Run, Edit, and Delete the workflow  

Follow the below step to perform actions for the custom models:  

- On the **Custom models** page, select the horizontal ellipsis in the **Actions** column and do the following:  

|If you want to|Then|
|:-|:-|
|Edit a workflow for previously created custom model|Select **Edit** and modify the custom models. Click **Save** to apply your changes.|
|Remove a workflow|Select **Delete** and click **Yes** to remove the custom model.|
|Execute the custom model|Select **Run**.|
