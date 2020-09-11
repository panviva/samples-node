# samples-node
These samples allow you to push your knowledge further and consume a complete list of Panviva's API offerings using [Panviva's NodeJS Toolkit](https://github.com/panviva/toolkit-node-sdk).
 

The samples below will consume:

`Content APIs` perform resource related operations , e.g. document, folder, file, container, image. 

`Live APIs` enable real-time communications with online users on our client application. 

`Artefact APIs` interact with curated Panviva content, created by the Digital Orchestrator.

## **Prerequisites**

### To use this, you must have:

1. Access to a Panviva instance (also known as a tenant)
2. A developer account on the Panviva developer portal ([dev.panviva.com](https://dev.panviva.com))
3. An active Panviva API subscription (also known as an API plan) and valid Panviva API credentials

If you are not a customer or need help visit [www.panviva.com/support](https://www.panviva.com/support).

### How to get credentials

Follow the steps below to get your `API key` & `instance name`.

To get your API key you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your profile (click your name then click "Profile" from the top navigation bar)
3. Your should now see your API key under "Your Subscriptions" section of your profile.

To get your instance name you must:

1. Sign into the Panviva developer portal at [dev.panviva.com](https://dev.panviva.com)
2. Navigate to your API (click "APIs" from the top navigation bar)
3. You should now see your API instance under your API suite (look for "_The instance name for the API Suite is_")

### Other requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environnement. Instructions for this can be found in README.md inside every directory in the below table.

## Samples

| # | Sample Name | Description  | API Type | Link |
| - | ----------- | ------------ | -------- | ---- |
| 1. | get-document-properties-and-content | A simple Node example to show how to get the metadata and content of a document from Panviva's APIs, utilizing `GET Document` and `GET Document Containers` | Content APIs | [LINK](get-document-properties-and-content/README.md) |
| 2. | get-document-properties-and-content-as-plaintext | A simple Node example to show how to get the metadata and content of a document from Panviva's APIs, utilizing `GET Document` and `GET Document Containers` as plain-text | Content APIs | [LINK](get-document-properties-and-content-as-plaintext/README.md) |
| 3. | get-documents-updated-this-month | A simple Node example to show how to get a list of documents recently updated from Panviva's APIs, utilizing `GET Search` | Content APIs | [LINK](get-documents-updated-this-month/README.md) |
