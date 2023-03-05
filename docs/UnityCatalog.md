# Unity Catalog

## Overview

SkyPoint Modern Data Stack Platform (MDSP) is powered with Unity Catalog, which offers centralized governance features such as unified access and audit controls for all data assets in your Lakehouse SQL.

Key features of Unity Catalog are:

- Offer a single place for data access that applies across all workspaces and personas
- Security model is based on standard ANSI SQL model
- Capture user-level audit logs that record access to your data

### SkyPoint Unity Catalog model

In SkyPoint Lakehouse, the metastore, catalogs, and schemas are used to organize and manage the data stored in the database, and to provide a way to access and manipulate the data. The object model flows from metastore to table as follows:

![Alt image](/doc_snippets/UnityCatalogOverview.png)

- Metastore: Metastore (`skypoint_metastore`) is a central repository that stores metadata about the data stored in the Lakehouse SQL. Each metastore exposes a three-level namespace (`catalog.schema.table`) that organizes your data. 
- Catalogs: The first layer of Unity Catalog’s three-level namespace, which is used to organize your data assets. Each catalog can have any number of schemas, for example, `tenant_instance_main`.
- Schemas: Schemas are the second layer of the object hierarchy that contain a set of related objects, such as tables and views. Each schema can have any number of tables. For example, bronze, silver, and gold.
- Table: The lowest level in the object hierarchy, a table is a collection of data that is organized into rows and columns. For example, profiles, audience, metrics, predictions, etc.


