# Creating a DSR

## Overview

A Data Subject Request (DSR) is a part of modern privacy laws. A DSR is a user’s request to access, modify or delete the personal data that the organization holds on them. SkyPoint Cloud’s Modern Data Stack Platform aligns with modern privacy regulations such as California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR) and provides organizations with a centralized tool to manage and automate these incoming requests. 

SkyPoint-powered automated DSRs take care of requests in minutes and keep customers informed of their status to help you save time, eliminate errors, and ensure compliance. Types of requests that the user can make on the SkyPoint platform are as follows:

- Access or download data
- Data deletion
- Do not sell data
- Consent of the user for different data processing activities 
- Update inaccuracies

## [Create a DSR (B2C)](#tab/tabid-1) 

The end user can create a DSR from the Privacy Center website. On your Privacy Center page, the customer can request to download their data, delete their data, and perform other DSR activities. 

Follow the below steps to create a DSR:

1. Go to the privacy center website which is powered by SkyPoint Cloud.

![Alt text](/doc_snippets/DSR_PrivacyCenterWebsite.png)

2. Select the request that you want to create. These are as follows:


|Request type|Description|
| :- | :- |
|Download My Data|This feature will let user download and use their data.|
|Erase Me|This feature removes all the data associated with that user.|
|Consent|This feature will let the user consent to all the actions.|
|Do Not Sell My Data|` `This feature will restrict the platform to sell or share any user's data with third parties.|
|Update Inaccuracies|This feature will help to update the inaccuracies in data sources as per the Data subject requests from the users on the privacy portal.|  

3. Once the customer has selected the request, a dialog box appears to acknowledge and provide details such as resident, user type, email, first name, last name, and request details to verify their identity.  

![Alt text](/doc_snippets/DSR_Download.png)

4. Select the reCAPTCHA checkbox.
5. Click **Submit Request**.

After the acknowledgment, the customer receives an email to verify the request.  

## [Create a DSR (B2B)](#tab/tabid-2) 

### Prerequisite

- You have an account with SkyPoint Cloud. Users having Tenant or Instance access with SkyPoint Cloud can view and process the submitted DSRs.

Follow the below steps to create a new DSR:

1. Go to **Empower** > **DSR.**

![Alt text](/doc_snippets/dsr.png)


2. Click **Add New**.

![Alt text](/doc_snippets/AddDSR.png)

3. Enter **Type** and **Request type** such as "Consent", Update Inaccuracies", etc.
4. Select the resident and user type.
5. Enter your personal details such as **Email**, **First name**, and **Last name**.
6. Fill out the **Request date**.
7. Select the **Identity verification type** and **Identity verification status** from the drop-down list.
8. You can enter **Request details** in the text box.
9. Click **Submit** to apply your changes.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Another option to create a new DSR is by clicking on **Bulk Import DSR** and uploading locally. You can select a file to upload and process the bulk import DSR.

---

## Review a DSR

Once a DSR is created, it displays under the **For review** tab. If the DSR is failed or is partially completed, an email will be sent to the customer's email with detailed information.

![Alt text](/doc_snippets/ReviewDSR.png) 

To resend email verification, do the following under the **Action** column:

- Click on the horizontal ellipsis of the DSR and select **Resend Email Verification**.
- Click **Details** to view the details of the DSR. 

In case the email is not verified within 24 hours, an auto-rejection email will be sent to the customers. If the email is not verified after resending the email verification request to the customer, cancel the DSR request. The cancelation reason is displayed in the Rejected/Canceled tab.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> SkyPoint provides default templates, these email templates contain some pre-build rules for some tables with their subject and they will be triggered automatically when a request occurs. For more information, refer to the [Email Template section](https://docs.skypointcloud.com/docs/privacytemplates.html).

## Process and complete a DSR

Once an email is verified, you can process the request.

![Alt text](/doc_snippets/ProcessDSR.png)

To process a DSR, do the following:

- Select the DSR and click **Process**.

The customer receives a notification that the system is processing their DSR. The **Processing** tab displays all the DSRs that are currently being processed. 

Once the request is processed, you can complete the request. 

![Alt text](/doc_snippets/DSR_Complete.png)

To complete a DSR, do the following:

- Select a DSR and click **Complete**.
- If you want to reject a DSR, click **Reject**.

It will reflect in the **Complete** tab. The **Complete** tab shows all the DSRs that have been processed and the request is completed. Also, the customer will receive a mail notification that the DSR is processed successfully.

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Once the data subject request is logged in the "For Review" queue, we have set the time to complete the request. It is important to note that the timeline differs across jurisdictions. For example, under the CCPA, a business has 45 days to fulfill a request, while under GPDR, a business has 30 days. 

**Rejected/Cancelled** tab shows all the DSRs which are Cancelled or Rejected. You can see the reason for cancellation or rejection under the **Reason** column.

![Alt text](/doc_snippets/dsr_rejectionemail.png) 

If you want to reprocess a DSR, click the horizontal ellipsis under the **Action** column and select **Reprocess**.

**Failed/Partially completed** tab shows all the DSRs that are failed or partially completed. You can view the reason for failure/partially completed DSR under **Action** > **Detail** and rectify it if needed.

- Failed DSR: Validation failed, and data is not updated in any of the connectors.
- Partially completed DSR: Data is updated in one or more connectors, but not all.

![Alt text](/doc_snippets/FailedPartiallyCompletedDSR.png)

## To bulk process DSR

You can accept/reject multiple DSRs at a time through the checkbox. It saves a lot of manual effort and avoids piling up a lot of requests on the DSR page. You can bulk process or delete DSRs with the **Email verified** marked as **Yes**. Follow the below steps to bulk-process of multiple DSRs:

1. Check the **Request id** that you want to process or reject.
2. Click **Process** or **Reject** according to your requirement.

![Alt text](/doc_snippets/dsr_bulkprocess.png)
