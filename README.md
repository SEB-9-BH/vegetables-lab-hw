# Vegetables

<center>

# CRUD, MVC, REST, INDUCES and JSX: Remember where we are going

<div style="display: flex; justify-content: space-between;">

<img width="871" height="423" alt="mvc" src="https://github.com/user-attachments/assets/0aa4a63f-ecc8-4872-83cb-28da34501cf5" />

![mvcmeme](https://github.com/user-attachments/assets/62b80a79-f865-4cd2-b8f6-63e919a03ade)

</div>
</center>

#### Learning Objectives

- Practicing index, new, delete, update, create, edit and show routes with express
- Using Express Static Serving of CSS and other assets
- Incorporating a layout

#### Prerequisites

- JavaScript
- Express
- Node
- JSX

# Build a Vegetable App with JSX-REACT-VIEWS

- fork this repository
- clone your forked repository
- make a directory for vegetables in this repo on your computer
- change into the directory you made
- make a server.js file in that directory
- make models views and controllers folders in that directory
- make a views/fruits and views/layouts folder
- init the npm project in that directory


## Step 1
- setup basic express server
- install appropriate packages `npm i express jsx-view-engine mongoose dotenv method-override`


## Following Steps

1. Add A Model File For Vegetables to your vegetables app
1. Create Index, Show, New and Create routes for Vegetables
1. Create Index, Show and New `jsx` Views
1. Add 5 Vegetables using your New Page
1. Go to `http://localhost:3000/vegetables/new`
1. Create a new `vegetable`
1. See the vegetables at `http://localhost:3000/vegetables`
1. Make sure the Show page for vegetable works
1. make sure you can see vegetables in your MongoDB Atlas DB vegetables database
1. Create Destroy Route
1. Create Update Route
1. Create Edit Route
1. Create Edit `jsx` view    
1. Add express.static middleware
1. Add public folder with a css stylesheet
1. Create Layout jsx view that links to the stylesheet
1. Connect the Layout to each page
1. Update the Show Page to Link to the Edit Page and Delete Functionality  

## The User Stories

- When a user goes to the `/vegatables` route they will see an `index` of veggies on the page
- When a user clicks on the name of the vegetable, they will be taken to that vegetable's `show` page, and will see the vegatables's name and color and if its READYTOEAT and also shows a Delete Button and Edit Button
- When a user goes to `/vegetables/new` a user sees a form that allows them to create a brand new vegetable, and then redirects the user back to `/vegetables`
- When a user goes to the `/vegetables/<:id>/edit` route they see a form prefilled with the fruit data that they can change to edit the vegetable


| **URL** | **HTTP Verb** |  **Action**| **Used For**| **Mongoose Method** | **View** |
|------------|-------------|------------|-------------------------------| ---------------------| ------------- |
| /vegetables/         | GET       | index  | Displaying a list of all vegetables | Vegetable.find | Index.jsx |
| /vegetables/new         | GET       | new | Display HTML form for creating a new vegetables | none | New.jsx |
| /vegetables/:id      | DELETE    | destroy | Delete a specific vegetable  | Vegetable.findByIdAndRemove or Vegetable.findByIdAndDelete | none |
| /vegetables/:id      | PATCH/PUT | update | Update a specific vegetable   | Vegetable.findByIdAndUpdate or Vegetable.findOneAndUpdate | none |
| /vegetables          | POST      | create | Create a new vegetable | Vegetable.create | none |
| /vegetables/:id/edit | GET       | edit   | Return an HTML form for editing a vegetable | Vegetable.findOne or Vegetable.findById | Edit.jsx |
| /vegetables/:id      | GET       | show   | Display a specific vegetable | Vegetable.findOne or Vegetable.findById | Show.jsx |  
