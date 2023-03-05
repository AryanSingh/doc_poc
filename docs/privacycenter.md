# Setting up a privacy center

## Overview

SkyPoint-powered privacy center ensures compliance with GDPR, CCPA, and more with our all-in-one automated solution that integrates consent and preference management with data residency and privacy protection. You can import and unify consent data from various sources and channels, manage country- or region-level data residency, and automatically comply with ever-changing privacy laws.  

SkyPoint Empower simplifies consent management and privacy compliance by making consumer data and preferences accessible, centralized, and actionable.

## [Set up a privacy center](#tab/tabid-1)

Follow the below steps to create a privacy center:

1. In the left pane, go to **Empower** > **Privacy Center.**

The Privacy Center window appears.  

![Alt text](/doc_snippets/PrivacyCenter-Window.png)  

2. Click **Add New**.  

![Alt text](/doc_snippets/PrivacyCenter-AddNew.png)  

3. Upload the Company **Logo** and **Favicon**.
4. In the **General**, enter organization details like Name, Display name, Privacy center domain, Email, First Name, Last Name, etc.
5. To create a custom domain, follow the steps mentioned in the **Create a custom domain** tab. 
6. In the **Email settings**, enter the Domain and email of the user who is authorized to take the action on DSR.
7. Select a **Primary, secondary,** and **Header color**. 

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> You can enter the color code for the privacy center website. The Primary color is used to change the color of the icons. You can apply secondary color to change the text of the page and the Header color modifies the banner found at the top of your Privacy Center.

8. Enter your **Privacy center headline** and **Privacy center subtitle**.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The Privacy center headline displays the main message on the top of the page header. By default, this is set to "Take control of your data!" Below the headline, the Privacy center subtitle describes the importance of data privacy. By default, this is set to "When you use our services, you're trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control."

9. Select **Yes** to validate the DSR Request through email. If you select **No**, the user is not required to verify himself.
10. Click **Save** to apply your changes.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> After every section, it is mandatory to click on the **SAVE** button to process your data.

After successful completion, the **Privacy policy** tab opens where an empty field is given to fill all the necessary policies that are present for the organization.  
  
![Alt text](/doc_snippets/PrivacyCenter-PrivacyPolicy.png)  

11. Enter the **Privacy policy** of your organization.
12. Click **Save**.  

![Alt text](/doc_snippets/PrivacyCenter-DataPractices.png)  

13. Enter the **Data practices** you follow in your organization.
14. Click **Save**.

## [Create a custom domain](#tab/tabid-2)

Follow the below steps to create a Custom Domain `privacy.yourcompany.com`:

1. Go to **Azure Portal** and search for **Static Web Apps**.
2. Open the desired resource and navigate to the **Custom domain**.
3. Click **Add**, and you will see a new window where you can get the CNAME record.
4. Enter the **CNAME** record in the DNS server of the host (client’s official website).

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Copy that record and send it to the client through Email or Basecamp and ask them to add this to their DNS records where they have hosted their official website. For example, if the client’s official website is hosted on GoDaddy, they have to get the CNAME record and login credentials for their account. Enter the required details to complete the custom domain and secure the privacy center. Refresh the system, and your privacy center will be up and running securely.

5. Users can set up DNS records in their domain manager. Log into your domain manager website and insert the following record:
   - type: CNAME
   - record: `privacy` (or your custom subdomain)
   - value: dynamic (get from SkyPoint Cloud)

If you require any technical assistance for your DNS installation, contact [SkyPoint Cloud Support](https://skypointcloud.com/customer-support/).  

---

## Add privacy settings

Follow the below steps to add or modify the Privacy settings of your website:

1. In the **Privacy Center**, open the **Privacy settings** tab.  

![Alt text](/doc_snippets/PrivacyCenter-PrivacySettings.png)  

2. Select the **Privacy center actions** you want to display on your Privacy Center website.

|Privacy center actions|Description|
| :- | :- |
|Download my data|Enabling this feature will let the end-user download and use the data.|
|Erase data|Enabling this feature removes all the data associated with that user.|
|Consent|Enabling this feature will let the user consent to all the actions. Consent Management empowers users to understand and exercise their data rights.|
|Do not sell my data|Enabling this feature will restrict the platform to sell or share any user's data with third parties.|
|Update inaccuracies|Enabling this feature will help to update the inaccuracies in data sources as per the Data subject requests from the end users on the privacy portal.|

3. In the **Privacy tab configurations**, you can define the **Display Name** and **Tab Order**.
4. In the **Residency type configurations**, you can add or modify the **Name**, **Response Time**, and **Order** of the residency type.
5. You can add or modify the **Do not sell category header**. Click **Save** to apply your changes.

## About us, preference management, and consent management

Consent and Preference Management will help you consolidate your data and prioritize your relationship with customers by centralizing collected consent. A consent and preference policy also allows the business to track where and when consent is required and obtained; building trust with the customer, while allowing the business to better market according to what the consumer wants to receive and how they want to receive it.

1. In the **About us** tab, you can add content that introduces you, your brand, and your team.  

![Alt text](/doc_snippets/PrivacyCenter-AboutUs.png)  

2. Click **Save**.
3. In the **Preference management** tab, select the preferences you want to display on your Privacy center website. It covers the aspect of serializing the different activities in order of their preference. A toggle switch is provided to include or exclude any activity as per your need.  

![Alt text](/doc_snippets/PrivacyCenter-PreferenceManagement.png)  

4. Click **Save**.
5. In the **Consent management** tab, you can explain the benefits and safety of using the platform and at the same time protecting and restoring the information at all costs.
6. Click **Save**.  

## Rearrange Update inaccuracies fields

You can rearrange the order of **Update inaccuracies** fields displayed in **Privacy center**. Follow below steps:

1. Go to **Privacy Center > Update inaccuracies**.

---

![Alt text](/doc_snippets/Privacycenter_Updateinaccuracies.png)

---

2. Click **Order** drop-down list for your desired field.
3. Select the desired order for your field.
4. Click **Save**.

---

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The selected order cannot be the existing order for Update inaccuracies field.

---

  - You can reset your selected order by clicking **Clear all** and then **Save**.

## Add data and metadata for attributes  

End users can update the inaccuracies in data sources as per the Data subject requests from the privacy portal.
If you want to add data and metadata for your attributes on the privacy center website, follow the below steps:

1.	Go to **Privacy Center > Update inaccuracies**.
2. Click **Advanced settings** for the attribute.  

---
  
![Alt text](/doc_snippets/Privacy_Advancedsettings.png) 

---  

3. Select **Data** or **Metadata** from the drop-down list. Data configuration implies the attribute has a predefined dataset available. Metadata configuration relies on the user-defined. You can add comma-separated data values for the Metadata in the provided field.

|Item|Description|
|:---|:---|
|Data|Allows you to use a list of items from an API.|
|Metadata|Allows you to add comma-separated values.|  
|Regex validation|Allows you to set the regex validation for validating the text.|

---

![Alt text](/doc_snippets/Privacy_SavingData.png)  

---

4. Click **Save** to apply your changes.

### Regex validation for Update Inaccuracies

You can add validations for the inputs in Update Inaccuracies fields. Follow below steps:

1. Select **Regex Validation** in the **Advanced settings** pop-up.

---

![Alt text](/doc_snippets/Privacycenter_Advancedsettingspopup.png)  

---

2. Enter a **Valid regular expression** in the text area.
3. Click **Save**.

You can launch the Privacy center website on your domain. With the steps mentioned above, you can customize your website as per your needs. The Privacy setting website will appear as follows:

---  

![Alt text](/doc_snippets/PrivacyCenterWebsite.png)  

---

If you have any questions regarding the Privacy center setup and configurations, contact SkyPoint Support Team. A SkyPoint representative will help you meet any special requirements and ensure you are setting up the most efficient and cost-effective solutions. Click [Contact Support](https://skypointcloud.com/customer-support/).






