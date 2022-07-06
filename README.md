 <!-- ![](https://i.imgur.com/XgsioqF.jpg) -->

 <center>
<img src="https://i.imgur.com/XgsioqF.jpg" style="width: 200px" />
</center>

</br></br>

## Table Of Contents

[Introduction](#🧰-athena-resource-tool)

[Features](#➕-features)

[Getting Started](#🏁-getting-started)

[Environmental Variables](#🔑-environment-variables)

[Tech Stack](#👩‍💻-tech-stack)

[API Reference](#📚-api-reference)

[Running Tests](#🧪-running-tests)

[About Us](#🚀-about-us)

[Lessons Learned](#🎓-lessons-learned)

[Team Github Profiles](#🔗-team-github-profiles)

[Acknowledgements](#❤️-acknowledgements)

</br></br>

# 🧰 Athena Resource Tool

Hello and thanks for your interest in our web app.

This tool can be used to search for technical resource links, add those links to the favourites section that you find most useful, delete those you don't find useful and add links that you do.

</br>

![GitHub last commit](https://img.shields.io/github/last-commit/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)
![GitHub contributors](https://img.shields.io/github/contributors/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)
![Lines of code](https://img.shields.io/tokei/lines/github/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran)

</br>

## ➕ Features

</br>

- Search For Resources in Database
- Add/Remove Search Links to Favourites Section
- Add/Remove New Resources to Database

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🏁 Getting Started

</br>

### Front End.

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the front end repository.

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-shabana-jenan-dan-kendall-simran.git
```

Step 3.

To start using the front end, do the following.

```bash
  cd bootcamp-buddy
  npm i
  npm start
```

</br>

### Back End

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the back end repository.

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-shabana-jenan-dan-kendall-simran.git
```

Step 3.

Add environment variables into your .env file in your IDE.(Details in Environment Variables section)

Step 4.

To start using the back end, do the following.

```bash
  npm i
  npm run dev
```

</br>

[Back to Top](#table-of-contents)
</br></br>

## 🔑 Environment Variables

</br>

To run the back end repo of this project, you will need to add your own credentials from the database you're using to draw from. (e.g.: Heroku)

In your .env file, you'll need to use the following format.

```

PGHOST=

PGUSER=

PGDATABASE=

PGPASSWORD=

PGPORT=

```

</br>

After this, first run the create table script in the terminal.

```
npm run db:createTable
```

Next, populate the table with the data from the libs folder with the following script.

```
npm run db:populateTable
```

If you'd like to drop the table completely, run the following script:

```
npm run db:dropTable

```

</br>

[Back to Top](#table-of-contents)
</br></br>

## 👩‍💻 Tech Stack

</br>

**Client:** React, CSS

**Server:** Node, Express, PostgreSQL

</br>

[Back to Top](#table-of-contents)

</br></br>

## 📚 API Reference

</br>

### To GET All Resources:

</br>

GET http://localhost:3001/resources/

This returns the entire contents of the database.

</br>

### To GET Resources by ID:

</br>

GET http://localhost:3001/resources/{id}

e.g. GET http://localhost:3001/resources/4

</br>

This returns:

```
 {

"success": true,

 "payload": [
     {
         "id": 4,
         "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
         "title": "React useReducer vs React useState: When to use one over the other?",
         "type": "Article",
         "topic": "React",
         "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
         "isFavourite": "false"
     }
 ]

}
```

</br>

The value of isFavourite is a string instead of a boolean.

### To GET Resources by title:

</br>

GET http://localhost:3001/resources?title=value

</br>

e.g. GET http://localhost:3001/resources?title=react

</br>

This returns:

```
{

    "success": true,
    "payload": [
        {
            "id": 2,
            "url": "https://testing-library.com/docs/react-testing-library/cheatsheet/",
            "title": "A cheatsheet for the React Testing Library",
            "type": "Documentation",
            "topic": "React",
            "description": "A short guide to all the exported functions in React Testing Library"
            "isFavourite": "false"
        },
        {
            "id": 4,
            "url": "https://linguinecode.com/post/react-usereducer-vs-usestate",
            "title": "React useReducer vs React useState: When to use one over the other?",
            "type": "Article",
            "topic": "React",
            "description": "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
            "isFavourite": "false"
        }
    ]
}
```

### To Add To Database:

</br>

POST http://localhost:3001/resources

</br>

e.g. POST http://localhost:3001/resources

Post an object with this structure:

```

{

"url": "newurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

}

```

The value of id is automatically set and the value of isFavourite is automatically set to "false"

</br>

### To Update Database:

</br>

PUT: http://localhost:3001/resources/{id}

</br>

e.g. PUT http://localhost:3001/resources/5

Update using an object with this structure:

```

{
"url": "updatedurl.com",

"title": "A Title",

"type": "A Type",

"topic": "A Topic",

"description": "Your description here."

"isFavourite": "true/false"

}

```

Reminder: the value of isFavourite is a string so update this value with a lowercase string.

</br>

### To Delete Entry From Database:

</br>

DELETE: http://localhost:3001/resources/{id}

</br>

e.g. DELETE http://localhost:3001/resources/5

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🧪 Running Tests

</br>

To run tests, run the following commands..

</br>

### Front End

The front end runs tests based from the React Testing Library.

```bash
  npm run test
```

</br>

### Back End

The back end runs tests in Supertest and Jest.

```bash
  npm run test
```

[Back to Top](#table-of-contents)
</br></br>

## 🚀 About Us

</br>

We're a group of five young, talented, ambitious full stack developers that wanted to create an app that solved the problem of accessing resources.

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🎓 Lessons Learned

</br>

Teamwork makes the dream work..

</br>

Break down every problem and then do it again and again..

</br>

Standups and Retros really helped us keep a great rhythm and revise our plan incrementally..

</br>

Keep open communication and share the problems you have when needed, we’re better together..

</br>

Take your breaks after the mini sprints, stay hydrated and encourage everyone to take a break from the screen..

</br>

Let things go if need be.. Sometimes it’s just not worth it..

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🔗 Team Github Profiles

</br>

[Dan Hawkesford](https://github.com/DHawkesford)

</br>

[Jena Azzubaydi](https://github.com/jena-84)

</br>

[Simran Rai](https://github.com/srai98i)

</br>

[Kendall Mason](https://github.com/kendallgmason)

</br>

[Shabana Kauser](https://github.com/shabana89)

</br>

[Back to Top](#table-of-contents)

</br></br>

## ❤️ Acknowledgements

</br>

- [Chris Meah's Express generator module](https://www.npmjs.com/package/express-generator-esmodules)

 </br>

- [React Hooks by Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)

 </br>

- [Async functions with useeffect by devtrium](https://devtrium.com/posts/async-functions-useeffect)

 </br>

- [How to handle multiple inputs in React](https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el)

 </br>

- [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

 </br>

- [React + Fetch - HTTP POST Request Examples | Jason Watmore's Blog](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

 </br>

[Back to Top](#table-of-contents)
