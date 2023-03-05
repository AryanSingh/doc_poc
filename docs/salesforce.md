# Salesforce

**To integrate Salesforce CRM Connector, below details are to be configured**:

1. User Name
2. Password
3. Security Token
4. Environment URL

## Steps to Configuration

1. Navigate to **Data** > **Dataflows** and click on *+ Add Dataflow*

 <img width="940" alt="Image 1" src="https://user-images.githubusercontent.com/96232751/147765840-279c1a5b-ff68-499a-93f8-62da56671af0.PNG"/>
 
2. Under Select **Dataflow name**, mention the connector name.

<img width="671" alt="2" src="https://user-images.githubusercontent.com/96232751/147812319-6156c170-614f-4b01-95a3-2089b784743c.PNG"/>

3. From **Choose Connector**, click the connector name **Salesforce**. 

<img width="933" alt="3" src="https://user-images.githubusercontent.com/96232751/147812334-a0305132-a8fb-4a76-8d3f-95680d481cb8.PNG"/>

You will be directed to configuration set up as below.
 
4. Under **General**, below the **Dataflow Name**, enter the name of the connector and mention the description about the connector (optional) and click on Save.

<img width="638" alt="4" src="https://user-images.githubusercontent.com/96232751/147812354-f333b60a-1d7a-47bd-bb1a-326050adf9de.PNG"/>

5.	Click on **Connector**, which is right next to **General**. Under **Configuration**, mention the details as required.
	- User Name
	- Security Token
	- Password
	- Environment URL and Click on connect

<img width="720" alt="5" src="https://user-images.githubusercontent.com/96232751/147812380-fdf01f58-7d2c-4bfe-a6fe-287885daaeab.PNG"/>

4.	Once its completed, you will be able to see the imported entities from the Salesforce connector.


## The following properties are supported for the Salesforce connector service

1. **Environment URL specify the URL of the Salesforce instance.**

    * Default is "https://login.salesforce.com".

    * To copy data from sandbox, specify "https://test.salesforce.com".

    * To copy data from custom domain, specify, for example, "https://[domain].my.salesforce.com".	


2. **Username specify a username for the user account.**	

3. **Password specify a password for the user account.**

4. **Security Token specify a security token for the user account.**
    * Note : Salesforce account password expires after **every 90 days**, along with that new security token is generated and mailed.

**For instructions on how to get and reset a security token, [Click here](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5).**

**SkyPoint imports Account, Contacts, Leads, Opportunities, all fields including custom fields.**

**Please note that Salesforce rate limits and throttles API calls. API Request Limits and Allocations.**

**To maintain optimum performance and ensure that the Lightning Platform API is available to all our customers, Salesforce balances transaction loads by imposing two types of limits, [Click here](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm)**
