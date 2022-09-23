# CRUD in mongoDB

![image](https://user-images.githubusercontent.com/107776531/192061416-cf427a20-32a6-493e-8b68-7f41b8f127bb.png)

This project has a boilerplate for a CRUD in mongoDB to be used by any application that needs to save data and need a way to persist it.
Fork it and use as your project base.

default roures are 

## GET:   /api/goals/ 
Retrieve all data from mongoDB database

## POST:  /api/goals/
Post a new entry into the database

## PUT: /api/goals/:id
Update one entry selected by id parameter

## DELETE: /api/goals/:id
Delete one entry selected by id parameter

You can configure your mongoDB URI in the .env file
