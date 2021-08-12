# Problem 2: Backend and Cloud

## Problem Description

Now, the data that was recorded from an experiment should be transformed such that the customer/user
is able to integrate them with their products. For example, one could change the volume of the TV based
on your focus level measured from brain activity. For this, we would like to develop an API for the customer
for her/him to access specific data. Attached you will find a file `raw-data.json` which includes (artificial)
data from subjects (or users) with a set of features (e.g., from brain signals).

### The tasks

- Store the JSON file in a data storage and motivate your choice of technologies
- Implement a REST/GraphQL API (any language) in order to enable CRUD operations and test functionality:
  - List feature 2 for all subjects
  - Get feature 1 for subject 52
  - Edit all features for subject 11 to 1
- Demonstrate the usage of HTTP responses with codes: 200, 404, 500
- Describe the steps on how you want to deploy your application
- What do you consider relevant factors for the design of a scalable API design? (1 or 2 sentences)
