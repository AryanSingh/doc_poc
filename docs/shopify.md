# Shopify

In order to allow SkyPoint access to your Shopify account, you'll need:

1. **Hostname**
1. **API Key**
1. **Password**

To generate a API key + password combination, follow the [Private Apps](https://shopify.dev/tutorials/authenticate-a-private-app-with-shopify-admin "Shopify Private Apps") instructions on Shopify. 

In order for SkyPoint to import the Shopify customer, products, abandoned checkouts and order details, the permissions read_orders and read_customers must be granted to the generated API key.

**Integration with Shopify
Prerequisites: One of the below prerequisites needs to be met for Skypoint cloud to access Shopify data
1.	Add Imeplementation@skypointcloud.com email to shopify with admin rights to access shopify customer instance. 
2.	Instead of providing SkyPoint access to their instance, they can choose to create a private app in Shopify to generate API keys and password. Share the API key and password with Skypoint cloud
In case of the Prerequisite 1:
1.	Log into Shopify  ( Eg: https://wateravenue.myshopify.com/admin) using Imeplementation@skypointcloud.com email id, generate or reset password to gain access
2.	Once you are in the shopify application look for Apps in the left navigation menu 

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/shopify_status.jpg?raw=true)

3.	Scroll to the bottom of the page and find the link Manage Private Apps and click
![image](https://user-images.githubusercontent.com/93347291/148921956-b1d74bf9-24a9-4654-abb2-891291f0ffe3.png)

4.	On the top right corner of the page, you will find create new private App button as shown below. Please click this button
![image](https://user-images.githubusercontent.com/93347291/148922065-7b441c3e-4a9a-4b4f-8192-0380ba444851.png)

5.	Provide a name “SkypointCloud” to the Private App and provide emergency developer email as implementation@skypointcloud.com
![image](https://user-images.githubusercontent.com/93347291/148922254-965b5aa2-b1ca-40ad-8934-70ea98a35809.png)

6.	New Private app by name SkypointCloud will be created and listed as below
![image](https://user-images.githubusercontent.com/93347291/148922339-1d797c48-00d3-4a51-8220-e575b0d8a878.png)

7.	Click on “Skypointcloud” link to view Admin API page 
8.	Copy the API Key and Password by clicking on the copy icon next to the field and paste it in a notepad. The key and Password are inputs for SkyPoint cloud platform to connect to shopify for ingestion. Keep them safe and confidential
![image](https://user-images.githubusercontent.com/93347291/148922469-d1b2f9af-f9da-47d5-87a4-e5c757a2c6d1.png)

9.	Click on “Show inactive Admin API permission” link. This will list down all the entities/features which can access using the API Key.
![image](https://user-images.githubusercontent.com/93347291/148922546-6e2fcfb8-f0f9-4c88-9140-687f0ad6593d.png)

10.	Select “Read access” from the drop down for all the entities as shown below and click on Save Button
![image](https://user-images.githubusercontent.com/93347291/148922644-351e3eec-7ae1-4e17-9737-1b1e4f8fdab2.png)
![image](https://user-images.githubusercontent.com/93347291/148922753-a1bec82e-1076-44ce-961f-e17711bb08c3.png)
![image](https://user-images.githubusercontent.com/93347291/148922800-0e2bc5a9-a86d-479d-9ced-db0fef16b6a2.png)

11.	Login to Skypoint cloud platform and chose appropriate tenant and instance
12.	Click on Data -> Data flow menu
13.	Click on Add Data flow on top of the page
14.	Give a name to the Data flow you are about to create. This being a shopify Data flow, ideal to name it as Shopify and click Next
15.	In the choose connector page, use the search box to find Shopify connector by typing shopify and click
16.	Enter a display name which in this case can be Shopify
17.	Click on connector tab
18.	Enter hostname which is the customer specific hosting on shopify. Eg: wateravenue.myshopify.com
19.	Enter the API Password saved at step 8
20.	Enter the API Key saved at step 8
21.	Click on connect
22.	If the integration is successful, you will see a message “Data Loaded Successfully”

## Purposes

The important thing to notice here is that we provide the functionality to the user to choose what type of action needs to be taken during processing after integration.
For every entity, there are certain purposes desginated to them. Some of them are:
1. Modern Data Stack Platform
2. Privacy
3. All

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/purpose.jpg?raw=true)

## Steps to Import data using Shopify Connector

1. Navigate to the platform and go to Data.
2. Create a new dataflow and attach a connector of the category Shopify and fill in all the credentials required.
3. Follow [this](https://skypointcdpdocs.z22.web.core.windows.net/docs/dataflows.html) to get a better understanding of how to input data. This will be beneficial for data processsing as the data will be stored in a convenient manner. 
4. As the data gets integrated, we will be able to see the number of entities present in that dataflow. On successful completion of the process, the status of the dataflow will be a green check denoting that the data has been integrated and can now be taken into further usages.

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/dataflow_status_v2.jpg?raw=true)

5. In entities, we will be able to see the names of the different entities present in the data, the number of records present in each entity, entity type(**default: Custom**) and many more. There are filters present on top of every column which gives user the ability to search a particular entity based on some criteria. By clicking on a particular entity, we can get its details like the **attributes** defining all the different attributes present in the data with their datatypes. To know more about the entities, visit [here](https://skypointcdpdocs.z22.web.core.windows.net/docs/entities.html)

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/entity-dash.jpg?raw=true)

6. Next, based on the requirements, the data can be processed using the Stitch operation offered on our Platform. The data that has been collected in the previous processes is now ready for some mapping. For that, we provide the **Stitch** option that helps the user to map different entities and find correation between entities and create a cumulative entity with maximum information on the data. The Stich involves three different types of actions which helps in refining the data. They are:
    - Map: Mapping involves correlating different entities in a dataflow using specific feature attributes so as to produce a more extractable data-form.
    - Match: After successful completion of Map, we are ready to match the entities. The match phase specifies how to combine your datasets into a cumulative customer profile dataset. 
    - Merge: The final phase of Stitch is Merge where we choose and exclude attributes to merge within or mapped and matched data. Some of the attrbiutes are automatically merged.

To know more about Stitch, click [here](https://skypointcdpdocs.z22.web.core.windows.net/docs/stitch.html)

## Key Attributes that Require Write Access for Erase Pipeline

1. Customers (Required)
2. Customer Addresses (Required)
3. Orders (Required)
4. Order Risks (Optional) (No essential PII)
5. Fulfillments (Optional)

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/permissions.PNG?raw=true)

We will also be required to allow the app created on Shopify's portal to access our storefront data using the storefront API.

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/storefront.png?raw=true)

## Do Not Sell Attribute

One of the most important consents that lets the customer believe in the organization with which they are interacting is the DoNotSell feature. Our platform has the feature where the user has the audacity to visit the privacy center of the associated organization and can manage the permissions inclined to his/her personal data. By default, the user's choice is considered False, i.e, the user has not restricted the sharing of his/her data to third party vendours/organizations. To change the consent, the user can go to the privacy portal and can change the consent to True by creating a DSR request. Once the request is made, the user will get an authentication email for confirmation whether the request has been made by the authorized person or not, and post that, the request will be submitted and all of that user's data will be confined and pull out from any other dataflows, if any, other than the parent. 

## Steps to Create a DNS Request

1. Navigate to the privacy center website.
2. Click on **Privacy Actions** and you will be able to see all the different types of requests available for you.

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/consents.PNG?raw=true)

3. Click on ***Do Not Sell*** and you will be asked to enter necessary personal details.

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/donotsellrequest.PNG?raw=true)

4. Once you have filled all the information, click on **Submit Request** and after a while, you will be sent a link for verification.
5. On complete verification, the status for that particular user will be changed.
