# Viewing Customer Profiles

## Overview

The SkyPoint Modern Data Stack Platform enables you to create a complete customer profile to gain more insights about your customers. The **Customers** page consists of features that enables you to choose certain attributes of your customers to create the Profiles. You can further, filter or sort the profiles based on selected attributes to ease your analysis.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_CustomersHomePage.png?raw=true)  

---  

## Prerequisite  
You have completed the [Master Data Management - Stitch](stitch.md) process.  

## To create Customer profile
- Click the [Split indexer](https://skypointcdpdocs.z22.web.core.windows.net/docs/splitindexer.html) page to learn about creating **Split indexer and exploring Customer profiles**.
## To view Customer details
You may delve further into each of the individual customer profiles by clicking the respective profiles. Follow the below steps to check Customer details:
1. Go to the **Customers > Profiles** page. Each customer profile is displayed in a Tile.
2. In the **Profiles** page, click the desired **Customer** profile.

The **Customer Details** page appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Customerdetailsnew.png?raw=true)  

---  

- You can find all the personal details of the customer like, Email, Gender, Phone number, etc.  

---
> :grey_exclamation: **Note:** All the last updates on your customer profile are reflected on the right side of the Customer details page. 

---

## To Search a Customer profile
You can directly search a customer’s profile with a relevant customer information by using the Search feature. Follow the below steps:
1. Go to **Customers > Profiles** page.
2. In the **Profiles** page, type the **Customer** information in the **Search** text area. 

The relevant **Customer** profiles appears.  

--- 

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Searchcustomerprofilenew.png?raw=true)  

---  

## To add attributes to Customer profiles
You can add the attributes you want to see on your **Customer** profiles. Follow the below steps:
1. In **Customer > Profiles** page, click the **Add attributes** tab.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Addattributestabnew.PNG.png?raw=true)

---

The **Add attributes** list appears.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Customers_Addattributeslist_new.png?raw=true) 

---

2. In the **Add attributes** list, select up to 20 attributes that you want to reflect on your **Customer profiles**.
3. Click **Done**.  

## To filter attributes
You can filter the profile attributes for specific searches related to your customer profiles, using the Show filter.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Showfilternew.png?raw=true) 

---

Follow the below steps to search your desired customer profile:
1. Go to **Customers > Profiles** page.
2. Click **Show filter** tab.

The **Filter profile** list appears.

---

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Customers_Filterprofileslist_new.png?raw=true)  

---

3. Type the desired **Attribute** you want to search in the **Search attribute** text area.

The relevant attribute will be filtered in the **Filter profile** list.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_FIlteringprofilenew.png?raw=true)  

---

4. **Check** the attribute box to select the attribute.  

The **Customer profiles** with the filter will reflect on the **Profiles** page.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Showfilterprofilesnew.png?raw=true)  

---

## To customize the sorting option

1. In the **Filter profile** list, Click **customize** on the attribute category.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Customizenew.png?raw=true)  

---
The **Customize list** opens for the specific attribute category.  

2. Select your preferred option from the **Sort options by**.  

---

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Sortbylistnew.png?raw=true)  

---

| Items | Description |
| :- | :- |
| Frequency: Highest to Lowest | Enables you to arrange the Customer profiles from Highest to Lowest order of frequency. |
| Value: A to Z | Enables you to arrange the Customer profiles for the attribute category in alphabetically ascending order. |
| Value: Z to A | Enables you to arrange the Customer profiles for the attribute category in alphabetically descending order. |

3. Enter the number of profiles you want to view in the **Show up to** text box.
4. Check the **Remove null value** box to filter the customer profiles without the attribute category.
5. Click **Done**.

## To clear filters
- In the **Customers** page, click the **Clear filter** tab.  

All the selected filters get removed on the **Customers** page.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_Clearfilter.png?raw=true)  

---  

## To sort by profile attributes  
You can use the **Sortby** feature on the **Customers** page to filter your search further by selecting one of the data sorting options. Follow the below steps to sort the customer attributes:  
1. In the **Customers** page, click the **Sort by** tab.  

The **Sort by** dropdown appears.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Customers_Customerssortby_new.png?raw=true)  

---  

2. Select your desired attribute on the **Sort by** dropdown.  

The profiles get sorted according to selected attribute.  

___
> :grey_exclamation: **Note**: For example, if you select FirstName from the Sortby dropdown the profiles will be arranged alphabetically.
___
## To refresh Azure Cognitive Search  
- In the Customers page, click **Refresh ACS** tab.  

The Azure Cognitive Search (ACS) process gets reactivated.  

---  

![Alt text](https://github.com/skypointcloud/platform/blob/develop/docs/doc_snippets/Customers_RefreshACS.png?raw=true)  

___
> :grey_exclamation: **Note**: For example, when the Add attribute process fails then Refresh ACS will be activated to trigger and rerun the process.
___
