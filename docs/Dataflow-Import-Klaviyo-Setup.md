# Setting up Klaviyo 
## Overview

You can read and write data to your Klaviyo account with your private API key. This API key should neither be exposed in client-side code nor made accessible from public repositories.

This document will guide you to create a private API key with a scope in [Klaviyo](https://www.klaviyo.com/login?next=/account#api-keys-tab?). You can restrict third party access to protect your and your customers’ data by creating a scope.

## Prerequisite

You should have access to an active [Klaviyo](https://www.klaviyo.com/login?next=/account) account. To manage the API keys, you must have an Owner, Admin, or Manager role on the account.

## To create an API key

Follow the below steps to create a Private API key:

1. Log in to your **Klaviyo** account.
2. Click **Account > Settings**.
3. Select **API Keys** tab.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Klaviyo_PrivateAPIkey.png?raw=true)

---

4. Click **Create Private API Key**.
5. Name the API key.
6. Choose the **Scope** you want to give the API key.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Klaviyo_PrivateAPIkeyScope.png?raw=true)

---

|Scope|Description|
|:-|:-|
|Read-only Key|Limits third party access to read-only for every API scope.|
|Full Access Key|Allows third parties to create, delete, or make changes for every API scope.|
|Custom Key|Allows you to decide how much access for each API scope to give the third party.|

7. Click **Create**.

---

> :grey_exclamation: **Note:** You can select the scope to control the access of information for the third party while sharing the private API key.  

---
