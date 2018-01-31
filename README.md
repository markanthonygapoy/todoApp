# todoApp
# by Mark Anthony Gapoy

# Description:
# Angular5 todo app with Laravel & DingoAPI

To Run APP

1.) Git Clone git@github.com:markanthonygapoy/todoApp.git

2.) Run Laravel / Dingo API

> cd todo
> php artisan serve

To Access Dingo API, navigate to http://localhost:8000/[API PARAMETERS]

API PARAMS:

DESCRIPTION: Get ToDo List
METHOD: GET
PARAM: /api/showlist 
http://localhost:8000/api/showlist

DESCRIPTION: Add ToDo List Item
METHOD: POST
PARAM: /api/showlist 
http://localhost:8000/api/addlist

DESCRIPTION: Modify ToDo List Item
METHOD: PUT
PARAM: /api/showlist 
http://localhost:8000/api/updatelist

DESCRIPTION: Delete ToDo List Item
METHOD: DELETE
PARAM: /api/showlist 
http://localhost:8000/api/deletelist


3.) Run Angular App

> cd  todoApp
todoApp > npm install
todoApp > ng serve

http://localhost:4200/


