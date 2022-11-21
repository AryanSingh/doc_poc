# Master Data Management (MDM) - Stitch Process

## Overview

![image](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/StitchOverview.png?raw=true)

---

Master data management (MDM) arose out of the necessity for businesses to improve the consistency and quality of their key data assets, such as product data, asset data, customer data, location data, etc. While identifying master data entities is pretty straightforward, not all data that fits the definition for master data should necessarily be managed as such. In general, master data is typically a small portion of all of your data from a volume perspective, but it’s some of the most complex data and the most valuable to maintain and manage.

After the successful import of data in Dataflows, Stitch process enables you to develop a unified view of your customers (Customer 360 View / Customer Master). Stitch involves breaking down data silos by linking customer entities across data sources.

The Graph-based entity resolution algorithms including utilization of Apache Spark and GraphFrames are the most effective approach to unify the data. This technique exhibits to unify the data based on a simple process. At the same time, the entity resolution engine maps the data to a machine-learning with a powerful knowledge graph at its center.

---

![image](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/Stitch_Overview.PNG?raw=true)

---

SkyPoint’s approach to identity resolution produces rich, accurate, and precise customer 360-degree profiles. The Stitch process involves three mandatory steps and performed in the following order:

1. [Map](map.md)
1. [Match](match.md)
1. [Merge](merge.md)

After the Stitch process, you can configure timeline, relationships, enrichment, or audience to gain more insights about your customers.

---

|Item|Description|
| :- | :- |
|Timeline|Find all your customer's activities on their customer profile.|
|Relationships|Manage custom relationships between entities with a common attribute.|
|Enrichment|Supplement your customer data from external sources including SkyPoint and other partners.|
|Audience|Group of profiles characterized by a defined set of attributes-based filters.|

