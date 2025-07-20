# Vegetables

<center>

# CRUD, MVC, REST, INDUCES and JSX: Remember where we are going

<div style="display: flex; justify-content: space-between;">

<img width="871" height="423" alt="mvc" src="https://github.com/user-attachments/assets/0aa4a63f-ecc8-4872-83cb-28da34501cf5" />

![mvcmeme](https://github.com/user-attachments/assets/62b80a79-f865-4cd2-b8f6-63e919a03ade)

</div>
</center>

#### Learning Objectives

- Practicing index and show, new and create routes with express

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
- init the npm project in that directory


## Step 1
- setup basic express server
- install appropriate packages `express jsx-view-engine mongoose dotenv`
- look at code from the video to help you
- You should not google about jsx you are not far enough in the process to get the right information 
- Get used to abstraction, you only need to understand what the function is supposed to accomplish for you, not what it does under the hood. You can drive a car without knowing how the engine works, as a matter of fact you can be a literal professional driver, that gets paid to drive and only know how to use the tool (the car) really well, you may even know how to debug the car (give it oil, give it gas, wash it, add tire pressure) but you will never waste your time learning how to build it, unless that becomes your literal job. KEEP THIS IN MIND...


## Steps

1. Add A Model File For Vegetables to your vegetables app
1. Create Index, Show, New and Create routes for Vegetables
1. Create Index, Show and New `jsx` Views
1. Add 5 Vegetables using your New Page
1. Go to `http://localhost:3000/vegetables/new`
1. Create a new `vegetable`
1. See the vegetables at `http://localhost:3000/vegetables`
1. Make sure the Show page for vegetable works
1. make sure you can see vegetables in your MongoDB Atlas DB vegetables database


## The User Stories

- When a user goes to the `/vegatables` route they will see an `index` of veggies on the page
- When a user clicks on the name of the vegetable, they will be taken to that vegetable's `show` page, and will see the vegatables's name and color and if its READYTOEAT.
- When a user goes to `/vegetables/new` a user sees a form that allows them to create a brand new vegetable, and then redirects the user back to `/vegetables`


## Hints
```js
/views/fruits/Index.jsx
/views/vegetables/Index.jsx

res.render('vegetables/Index', {...})

res.render('fruits/Index', {...})
```
