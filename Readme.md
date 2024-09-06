# login2explore_micro_project
# Shipping Management Database

## Description 
This is a web-based HTML form for managing shipping data using the Shipping-DB database. It utilizes JsonPowerDB for performing CRUD operations.

## Benefits of using JsonPowerDB
* Simple to use, real-time database.
* Easiest way to retrieve data in a JSON format.
* No backend code required for the database.
* No need to define a schema.
* Querying the database is easy, no knowledge of SQL commands needed.

## Tech Stack Used
* HTML
* CSS
* JavaScript
* JsonPowerDB (As Database)

## Features:
* **Update**: If a project ID already exists in the database, the project information is fetched and filled in the respective fields, allowing the user to update the project information.
* **Save**: If the project ID does not exist in the database, the user can fill in the other fields and save the data in the database.
* **Reset**: Clears all fields of the form, except for the project ID, which remains disabled until the user enters a valid project ID.
* **Alert**: This website uses a disposable alert prompt using Bootstrap.

## How to Use
1. **Initially**: Enter a project ID.
2. **Fetching project data using project ID**: If the project ID already exists in the database, all fields will be filled with the corresponding project information. Otherwise, the other fields will be enabled after the user inputs a valid project ID.
3. **Updating project details**: To update project details, input the project ID and update the project data.
4. **Adding new project data**: Enter a new project ID, and all other fields will be enabled. Fill in the project information and save the data into the database if the input is valid.
5. **Invalid input data**: If the input data is not valid, an error message will be displayed.

## Installation
1. Create a folder on your system and clone the project using Git Bash.
2. Open the project in Visual Studio Code or any IDE of your preference.
3. Clone the project:
```bash
git clone https://github.com/SameedIrfan7/Login2XplorE.git
```
4. After cloning, navigate to the **index.html** file and the **javascript** folder. In the **index.js** file, replace the **connectionToken** with your own Connection Token.

## Sources
* Introduction to JsonPowerDB - V2.0 course on https://careers.login2explore.com/
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 
