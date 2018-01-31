# todoApp
# by Mark Anthony Gapoy

# Description:
# Angular5 todo app with Laravel & DingoAPI

To Run APP

1.) Git Clone git@github.com:markanthonygapoy/todoApp.git

2.) Run Laravel / Dingo API

Navigate to "todo"
> cd todo

Serve API
> php artisan serve

To Access Dingo API, navigate to http://localhost:8000/[API PARAMETERS]

API PARAMS:

DESCRIPTION: Get ToDo List \n
METHOD: GET \n
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

Navigate to "todoApp" folder
> cd  todoApp

Install dependencies
> npm install

Serve FrontEnd App
> ng serve

http://localhost:4200/


