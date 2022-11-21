# Setting up Shopify
## Overview

You can create custom app directly on [Shopify](https://accounts.shopify.com/lookup?rid=9a773bd0-16b4-425b-95d0-a6767c33b4a7) admin. You need to generate API credentials and the necessary API access tokens by installing custom app from Shopify admin for authentication.

## Prerequisite

You require an active Shopify store and relevant [permissions](https://shopify.dev/apps/auth/admin-app-access-tokens#permissions-required-to-assign-scopes-to-a-custom-app) to create a custom app as well as assign API scopes. 

## Enable Custom app development

Follow the below steps to enable custom app development in your **Shopify admin**:

1. Go to **Settings > Apps and sales channels**.
2. Click **Develop apps for your store**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Appsandsales.png?raw=true)

---

3. Click **Allow custom app development**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Allowcustomapp.png?raw=true)

---

4. Click **Create an app** to integrate your store’s data with external services or build a custom storefront.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Createanapp.png?raw=true)

---

5. A **Create an app** pop-up appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Createanappopup.png?raw=true)

---

   - Type your **App name** in the text area.
   - Select the **App developer** from the drop-down list.

6. Click **Create app**.

Your app gets created.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Appcreatedoutput.png?raw=true)

---

7. Click **Configure Admin API scopes**.
8. Select your preferred **Admin API access scopes**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_AdminAPIscope.png?raw=true)

---

9. Configure the **Storefront API scopes**.
10. Click **Save** and then click **Install app**.

A confirmation pop-up appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_Installapppopup.png?raw=true)

---

11. Click **Install**.

## To find the Configuration credentials

Follow the below step to find the required credentials for configuring Shopify import connector:

- Go to **Apps and sales channels > API credentials** to find the **API key**, **API access token**, and **URI**.

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Shopify_APIcredentials.png?raw=true)

---

---

>  :grey_exclamation: **Note:** You can use the Admin API access token as the API password while configuring your Shopify import connector. 

---








