# Amazon S3

Export lets you extract data from the Lakehouse and load it into Amazon S3.

![Alt text](https://github.com/skypointcloud/platform/blob/master/docs/doc_snippets/AmazonS3_Export.PNG?raw=true)

## Step 01 - Add export

- Click on **Add export** on the left top corner of the screen.
    - Enter a Name. (Name starts with a letter and only **Letters** and **Numbers** are allowed. No Spcaes)
    - Display name (which displays the name in the UI of the export saved).
    - Select Credentials
       - Select from existing
       - Create new

## Step 02 Select from existing
**In order to allow SkyPoint access to your _Amazon S3_ account, you'll need the following details:**
- **Select Dataflow**
- **Bucket Name**  (Amazon S3 bucket name)
- **Access Key ID** (Check with Amazon S3 source credentials.)
- **Secret Access key**
- **Region Name**
- **Encryption**
- Click **Next** Button
           

## Step 02 - Create New
**In order to allow SkyPoint access to your _Amazon S3_ account, you'll need the following details:**
- **Bucket Name** (Amazon S3 bucket name)
- **Access key ID** (Check with Amazon S3 source credentials.)
- **Secret Access Key**
- **Region Name**
- **Encryption** (Supported encryption values are SSE-S3, SSE-KMS, SSE-C)
- Click **Next** Button.

## Step 03 - Entities to export
Here all the Lakehouse data will be available Entity wise.
- Select the entities from the list to be exported
- Click **Create** Button.
- Click on "Destinations".
- Click on the "Ellipsis" under Actions.
- Click on "Run".
