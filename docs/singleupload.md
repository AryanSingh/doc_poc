# Uploading Single Custom Models

## Overview  

You can integrate your artificial intelligence and machine learning models deployed as web service endpoints to utilize unified tables. Predictions create better customer experiences, for example, predictions on unified customer profiles and activities. It improves business capabilities and revenue streams.  
SkyPoint creates new dimensions for understanding and segmenting your customers into high-performing audiences. SkyPoint Modern Data Stack Platform (MDSP) imports and unifies the data that you can upload for custom integration.

## Prerequisites
To configure the Custom model, the following prerequisites must be met:
- You must have an API of the custom object to make the import request.
- Request and response body of the service should be in JSON format.

## To add a Single Custom model

Follow the below steps to send your data to the custom model and brings the output:
1.	In the left pane, go to **Predict** > **Custom**.  
The **Custom models** window appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/CustomModel.png?raw=true)  

---

2. Click **New workflow**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SingleCustomModelsUpload.png?raw=true)  

---  

3.	Select **Single upload**.
4.	In the **Name** box, enter your custom model web service.
5.	Enter the web address of the API name of the custom object in the **URL** box.
6.	Select the **Hypertext Transfer Protocol (HTTP)** method from the **URL Method** drop-down list.  

---

|URL method|Description|
|:-|:-|
|GET|Requests retrieve data from the server.|
|POST|Sends data to the server.|
|PUT|Replaces all current data of the target resource with the uploaded content.|
|DELETE|Removes the resource.|  

---  

7.	Click **Add Row** to enter the header key and value.
8.	Enter JSON code in the **Body** area to pass the data.
9.	Enter the score path to map web service output.


> :grey_exclamation: **Note**: When you run the custom model, the platform makes an HTTP call to the service with the required parameters and retrieves the output. You also need to specify the path of the score property in your JSON response. The notation is very similar to the JavaScript notation of parsing properties.  

- An Array is an ordered list of values. For Array, square brackets should be used. The Array properties indices start from 0 and are accessible with the '[]' operator.
- An object is a collection of key values. For object, curly brackets should be used. Key always be enclosed in double quotes. The Object type properties are accessible with a "." operator.  

For example, this is the JSON output of the service.  

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
                    7.8
                ]
            }
        }
    ]
}
```
The path property for score in this response is **metrics[1].rate.score[0]**.  

10.	Click **Save** to apply your changes.  

Once you have saved the custom model, it will appear on the **Custom models** page.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/SingleCustomModelsUploadOutput.png?raw=true)  

---  

|Item|Description|
|:-|:-|
|Name|Name of the custom model.|
|Type|Type of the custom model such as Single Upload or Bulk Upload.|
|Status|The status of the run command on the custom model.|
|Score|Indicates the score of the custom model.|
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




