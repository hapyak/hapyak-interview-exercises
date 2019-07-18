# HapYak Coding Exercise:  Configuration Service

To provide a high level of customization, applications need a rich configuration feature. 

In this exercise you will implement a portion of a backend service to supply configuration data to an application.

## Goal 

Primary goal:

* Implement the ```getResolvedConfiguration``` method of ```ConfigurationService``` so that the existing unit tests pass.

    This method needs to return the configuration data for the specified group.   However, it must merge the configurations of all ancestor groups based on the group hierarchy.  See [Data Model](#Data-Model) below for more details.

Additional goals are:

* Test your code with more complicated input data and corresponding fixtures.  For example:

    * Deeper group nesting hierarchies
    * Large numbers of configuration properties

* Add benchmarking code to time/measure the performance of your solution under the above scenarios.


## Setup

This repository contains the nodejs skeleton code for the project as well as the sample input data and test to validate your solution.

* Install dependencies: ```npm install```
* Run tests: ```npm run test```
* To run tests in a watch mode:  ```npm run dev```

## Data Model

* To constrain the scope of this exercise and remove external depenencies all of the input data you need is provided in a JSON file ```data/groups-query-results.json```

* The service method you need to complete ```getResolvedConfiguration(groupId)``` is in ```configuration-service.js```

* Customer accounts are modeled in units called groups.   Groups are hierarchical, and are related to other groups through a ```group.parentId``` to ```group.id``` relationship.  A group can have many direct children but only one direct parent.

* Groups can have their own configuration as well as inherited configuration based on the configuration of their parent, their parent's parent and so on.  

* The process of generating the fully inherited configuration starting from the furthest away ancestor and proceeding all the way down to the specified descendant is referred to as "resolving" the configuration.

* Configuration from the lower groups in the hierarchy always overrides that of groups higher up in the hierarchy.

* When coding your solution, create a model around the input data so that your method doesn't directly rely on the JSON file.

