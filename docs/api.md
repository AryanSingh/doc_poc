# Getting started with the SkyPoint API

SkyPoint is an API-First platform, it provides APIs to build your own applications based on your data in SkyPoint.

> [!IMPORTANT]
> Details of these APIs are listed on the [SkyPoint APIs reference](https://skypointprodapim.developer.azure-api.net/). They include additional information about operations, parameters, and responses.

This article describes how to access the SkyPoint APIs, create an Azure App Registration (if needed), and get started with the available client libraries.

# Prerequisites

Before you can start using the API, you need to do the following:

Sign up for SkyPoint account and follow the instructions on the [SkyPoint Developer Portal](https://skypointprodapim.developer.azure-api.net/)

## SkyPoint client libraries in C#, Python and NodeJS

This section helps you get started using the client libraries available for the SkyPoint APIs. All library source code and sample applications can be found on our github repo. *Please note that this feature not released yet*

# Throttling & Rate Limits

Throttling is the process responsible for regulating the rate at which the application processing is conducted. 

Throttling is a way to practically implement rate-limiting. It lets API developers control how their API is used by setting up a temporary state, allowing the API to assess each request. 

Rate Limits refers to controlling the amount of incoming and outgoing traffic to or from a network. In this case, the rate limit for our API is set to be 2000 requests/sec. If the number of requests get above the threshold, then the requests after the threshold will get an error message responding that the request limit has reached.
