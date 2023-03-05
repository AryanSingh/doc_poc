# Setting the Session timeout

## Overview

Session timeout is used to determine how long a device may remain authenticated before it requires authentication again. It is an important part of authentication for balancing security and the number of times users are prompted for their credentials.

When users authenticate, a session is established. Sessions can expire when users are inactive, when they close the browser or tab, or when their authentication token expires for other reasons. SkyPoint Studio allows the user to manage these timeouts inside the tenant through session settings.  

> ![image](/doc_snippets/Note_icon.png)**Note**
>
> The user gets a warning on the screen through a pop-up that has a dynamic countdown to notify the user about the timeout.

---

![Alt text](/doc_snippets/TimeoutSession.PNG)  

---

## To set a session expiration and inactivity timeout

Follow the below steps to set a session expiration and inactivity timeout:

1. In the left pane, go to **Settings** > **Platform**.
2. Click the **Session** tab.

The **Session** page appears.  

---

![Alt text](/doc_snippets/PlatformSessionSettings.png)  

---

|Item|Description|
| :- | :- |
|Session expiration|Option to set duration of the maximum session.|
|Inactivity timeout|Option to set duration of inactivity before timeout.|

3. By default, toggle buttons are deactivated. Click on the toggle button to activate the **Session expiration** and **Inactivity timeout**.
4. Enter a value in the **Session expiration** and **Inactivity timeout** field.
5. Select **Save** to apply your changes.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> The user gets a notification due to inactivity and informs to reconnect. For example, if the Inactivity timeout is more than 30 minutes, the user will see a countdown notification starting 5 minutes before the session is closed.
