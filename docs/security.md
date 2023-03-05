# Assigning user permissions

## Overview

SkyPoint Modern Data Stack Platform (MDSP) aligns with the NIST 800-207 standard for Zero Trust. This is the most vendor-neutral, comprehensive standard, not just for government entities but for any organization. It also encompasses other elements from organizations like Forrester’s ZTX and Gartner’s CARTA.

This section is one of the key features of any platform as it ensures a secure and safe environment to work on data that is sensitive in all aspects. To provide security, there are certain roles defined to ensure that every user gets access to only those sections of the platform which they require preventing unnecessary access to anyone.

Admins can add users and provide access to the SkyPoint platform. An admin can add, edit, or remove users. A user can be an individual, a group, or an application. Users can have three types of roles:

- Admin
  - TenantAdmin
  - InstanceAdmin
- Contributor
- Viewer

## To perform the user settings

Admin has the option to Add user, Invite user, Assign role, Unlink user and Delete user. On the platform, users can be invited by email and can be assigned the required role to access the SkyPoint platform.

1. In the left pane, go to **Settings** > **Platform**.
2. Click the **Users** tab.

The **Users** page appears.  

---

![Alt text](/doc_snippets/PlatformUsers.png)  

---

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> Every row in the Users list view corresponds to a single user and every column has some specific table related to that user. Some important column attributes are:

|<div style="width:100px">Item</div>|Description|
| :- | :- |
|Email|Email of the user.|
|Source|An account that was used for logging in.|
|Type|By default, it displays "User".|
|Role|The assigned role to that particular user such as TenantAdmin, InstanceAdmin, etc.|
|Status|Status is of two types: <ul><li>Active: If the user is currently a part of the tenant. </li><li>Inactive: If the user is currently blocked for the tenant.</li></ul>|  
|Multi-tenant|It shows two types:<ul><li> Yes: If the user is having access to more than one tenant.</li><li> No: If the user is having access to only one tenant.</li></ul>|
|Action|Option to delete, unlink or block a user. To perform any of the three actions, click on the horizontal ellipsis and select the action you want to perform.|

## Create a new user

Follow the below steps to create a new user:

1. In the **Users** tab, click **Add user**.

The pop-up window appears to add a new user.  

---

![Alt text](/doc_snippets/createuser.PNG)  

---

2. Select the **Role** that you want to assign the user from the drop-down list.
3. Enter **First name** and **Last name**.
4. Enter your **Email** address.
5. Enter your **Password** and **Confirm password**.
6. Click **Save** to apply your changes.

## Invite a user

Follow the below steps to invite a user:

1. In the **Users** tab, click **Invite users**.

The pop-up window appears to invite a user.  

---

![Alt text](/doc_snippets/inviteuser.PNG)  

---

2. Select the **Role** that you want to assign the user from the drop-down list. You can select the following role for the user:

|Role|Description|
| :- | :- |
|Contributor|The Contributor role gives authority to carry out data-related activities on the platform. It is recommended for users who perform data ingestion on the platform and create solutions like Audience and Metrics.|
|InstanceAdmin|Users having an Instance Administrator role can perform contributor roles and manage instance-related activities. |
|TenantAdmin|Users having a Tenant Administrator role can perform contributor roles and manage tenant-related activities.|
|Viewer|The Viewer role on the platform has the most limitations. Users can only view the data but cannot modify or create anything on the platform.|

3. Enter **User emails** for the users whom you want to invite and assign the particular role. If you want to invite multiple users, separate the mail ID with a semicolon (;).
4. Click **Save**.

## Assign a role to the user

Follow the below steps to assign a new role to the user:

1. In the **Users** tab, click **Assign role**.

The pop-up window appears to assign a new role to the user.  

---

![Alt text](/doc_snippets/assignrole.PNG)  

---

2. Select the type of **Role** that you want to assign from the drop-down list.
3. You can type **Search users** to whom you want to assign a particular role.
4. Click **Save** to complete the assignment process. The user will be assigned that particular role.

## Unlink users

Follow the below steps to unlink users from the particular activity:

1. In the **Users** tab, click on the checkbox on the side of the user that you want to unlink.
2. You will see that the **Unlink users** button on top of the page gets enabled. Click **Unlink users** to disconnect users.  

---

![Alt text](/doc_snippets/PlatformUsersUnlink.png)  

---

3. You can also unlink users after clicking the horizontal ellipsis and selecting **Unlink** under the **Action** column. 
4. You will receive the dialog box for your confirmation. Select **Yes** to unlink the user.  

---

![Alt text](/doc_snippets/UnlinkUsersConfirm.png)  

---

## Delete users

Follow the below steps to delete the user:

1. In the **Users** tab, click on the checkbox on the side of the user that you want to remove.
2. You will see that the **Delete users** button on top of the page gets enabled. Click **Delete users** to remove users.  

---

![Alt text](/doc_snippets/DeleteUsers.png)  

---

3. You can also remove users after clicking the horizontal ellipsis and selecting **Delete** under the **Action** column.
4. You will receive the dialog box for your confirmation. Select **Yes** to remove the user.  

---

![Alt text](/doc_snippets/DeleteUsersConfirm.png)  

---