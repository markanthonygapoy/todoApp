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

DESCRIPTION: Get ToDo List<br />
METHOD: GET<br />
PARAM: /api/showlist<br /> 
http://localhost:8000/api/showlist<br />


DESCRIPTION: Add ToDo List Item<br />
METHOD: POST<br />
PARAM: /api/showlist<br /> 
http://localhost:8000/api/addlist<br />

DESCRIPTION: Modify ToDo List Item<br />
METHOD: PUT<br />
PARAM: /api/showlist<br /> 
http://localhost:8000/api/updatelist<br />

DESCRIPTION: Delete ToDo List Item<br />
METHOD: DELETE<br />
PARAM: /api/showlist <br />
http://localhost:8000/api/deletelist<br />


3.) Run Angular App

Navigate to "todoApp" folder
> cd  todoApp

Install dependencies
> npm install

Serve FrontEnd App
> ng serve

http://localhost:4200/



<br/>
Additional Notes:

 No 'Access-Control-Allow-Origin' header error exists on the front end app which could be fixed within laravel configuration<br/>

 Full integration to Laravel / DingoAPI was not complete due to limited time<br/>

 Pending Items:<br>

 <ol>
 <li>Update Items upon double click(ToDo Update)<li>
 <li>CORS operation in DingoAPI<li>
 </ol>


