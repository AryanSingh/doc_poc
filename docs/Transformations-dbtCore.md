# Transforming data with dbt Core

SkyPoint connects to your Git repo and runs your dbt models in your destination. SkyPoint Cloud is inegrated with dbt Core to manage . You can use SQL queries to perform a wide range of transformations on your data, including aggregation, filtering, and data cleaning.

## Prerequisite

You must fulfill the following prerequisites to proceed:

- An existing dbt repository.
- dbt models for data transformation.

Once you have defined your models, you can use the transformations in SkyPoint Studio to run the SQL queries and create tables in your data warehouse.

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> If you don’t have an existing repository, SkyPoint will create a repository for you in Azure DevOps.

## To set up transformations

Follow the below steps to begin transforming your data via SQL:

1. Go to **Dataflow > Transformations**.

![Alt image](/doc_snippets/Transformations.png)

2. Click **Setup**.

![Alt image](/doc_snippets/dbt_configuration.png)

3. On the **Configuration** page, find the public key and click the clipboard icon to copy it. You will need it to grant SkyPoint SSH access to your Git repository.

### Connect to the Git repository

You must have a dbt project in a Git repository. Follow the instructions for Git provider to grant SkyPoint SSH access:

- For GitHub: See and follow the instructions for [Managing deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys).
- For BitBucket: See and follow the instructions to [Configure SSH and two-step verification](https://support.atlassian.com/bitbucket-cloud/docs/configure-ssh-and-two-step-verification/).
- For GitLab: See and follow the instructions to [Deploy keys](https://docs.gitlab.com/ee/user/project/deploy_keys/index.html#project-deploy-keys).

Follow the below steps to validate credentials and connect with your Azure Git repository:

1. Open your Git repository.
2. In the **User settings** section, go to **SSH public keys** > **New Key** and paste the SkyPoint public key in the **Public Key Data** field to synchronize your dbt project in the Git repository with SkyPoint.
3. On the Git repository main page, click **Clone**.
4. Select the **SSH** command line and copy the repository **URL**.

Follow the below steps to verify the directory structure and define transformations in your dbt project:

1. Navigate to your dbt project directory and open the `dbt\_project.yml` file. You can define the directories of the dbt project and project configurations such as name, version, profile, etc. For example, the `model-paths` setting specifies the directories where dbt should look for model files.

```
model-paths: ["models"]
analysis-paths: ["analyses"]
test-paths: ["tests"]
seed-paths: ["seeds"]
macro-paths: ["macros"]
snapshot-paths: ["snapshots"]
```

2. Open a `model` directory in your dbt project and define your data transformation models using SQL. Models are primarily written as a `SELECT` statement and saved as a `.sql` file. For example, the `{{config(materialized='table')}}` directive in dbt is used to specify the materialization type table for a model.

```
{{ config(materialized='table') }}

with source_data as (

    select 1 as id
    union all
    select null as id

)

select *
from source_data
```

### Finish configuration 

1. Enter your Git **Repository URL**. 

> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> The repository location you specify should contain a model's directory from where dbt will look for your models by default. Once you have specified the location of your repository, you can create and maintain your dbt models within it. When you run transformations from SkyPoint Studio, it will use the models in your repository to build your data model.

2. Enter your **Git branch**.

The **Connection tests** pop-up appears.

![Alt image](/doc_snippets/dbt_ConnectionTest.png)

3. Click **Done**.
4. Once the sync with Git is completed, models from Git repo will get listed on the **Transformations** page.

### Run transformation models

1. Go to **Dataflow > Transformations**.

![Alt image](/doc_snippets/Transformation_Output.png)

2. Click **Run** to execute the desired **Output model name**. 
3. If you want to disable the dbt model, select your model and click **Disable** under the horizontal ellipsis in the **Actions** column.
> ![image](/doc_snippets/Note_icon.png)**Note** 
> 
> Disabling a dbt model does not delete it from the system. It controls whether the record is available for use in transformations. You can always re-enable a disabled dbt model if needed.  
  
4. Select **Run history** to view all the states for transformation and the operation duration for the pipeline completion.  
5. Once the transformation is executed successfully, you can view the transformation tables in the **Bronze** tab under **Lakehouse > Databases**. 
