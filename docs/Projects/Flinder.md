---

hide:
    - navigation
---
# Flinder (Flatmate Finder React App)

[:octicons-arrow-left-24: Return to Projects](/Projects/)

---

Flinder is a social media app that helps you find your ideal flatmate based on their personality and living preferences. Either you can be a Flatee (a person who looks for a flat to stay in), or a Flat (a person looking for a flatmate to fill in the spot). This was a university project from Software Development Practice paper of which I gained an A- grade. Have a read below then check out the [code](https://www.github.com/finn-stainton/flinder)

## Features

---

- Authentication service with JSON Web Tokens
- Secure RESTful API
- Multiple access and view Roles (Admin, Flat, Flatee)
- NoSQL MongoDB Document Database
- Responsive Design with MUI

## Tech Stack

---

![Flinder Tech Stack](assets/flinder/Flinder-Diagram.png)

### Front-end

Decided upon developing a web-app over native mobile due to team members hardware constraints and a limited time frame. Decided upon using Node.js. Looked into React Native but decided to start off with React and look into migrating too it later.

#### Styling

Used MUI

#### Testing

Created End-to-End tests with Cypress

---

### Back-end

Decided to use a RESTful API with the possibility of changing front-end client.

Express.js

#### Breakdown

Each object had:

- **Model**, Contained a NoSQL Mongoose Schema and then exported the model. 

- **Service**, Used a connection to the MongoDB to performed the business logic on the corresponding document given a model. 

- **Controller**, Middleware to direct Router calls to the corresponding service functions

#### Routes/ Endpoints

- Authentication/
  - login: 

#### Testing

Used TDD by developing a HTTP assertion test with [Supertest](https://www.npmjs.com/package/supertest). Then developed the Express.js code to make the test succeed. Repeated with more assertion tests for new a existing routes.

---

### Database

Setup a document database with MongoDB's Atlas service.

Mongoose

---

### Integration and Delivery

TravisCI

Heroku

## Scrum

---

### Project Proposal

Flinder is a social media app that helps you find your ideal flatmate based on their personality and living preferences. Either you can be a findee (a person who looks for a flat to stay in), or a finder (a person looking for a flatmate to fill in the spot). 

Key features: 

- User profile: the user profile is different between a finder and findee. Finder presents what the house looks like, as well as some key features, preferences about the place and the flatmates staying there, while findee has to provide their basic information (name, age, profession, smoking habits)
- Chatbox
- Like ♥ / Nope  
- Match: both finder and findee like each other
- Push notification: nofity people when they get new matches/messages
- Reveal location:  After talking for a while and the finder finds that the findee could be a great fit for the flat, they will reveal the exact address for the findee to arrange a flat viewing.


### Sprint 0 (Up-skilling)

Setup a Scrum Board with the following columns

- Product Backlog
- Sprint One Backlog
- Sprint One Development
- Sprint One Testing
- Sprint One Done
- Sprint Two ...

Developed User Stories using the "As a X, I want to ..., so that ..." format placing them under the product backlog. Then completed INVEST analysis on each user story to judge the quality of each story. Created multiple acceptance tests with a title, then using the "GIVEN that ..., WHEN ..., THEN ..." format.

<figure markdown>
  ![User Story](assets/flinder/flinder-sprint1-userstory.png)
  <figcaption>Example User Story (with dev and tester from sprint planning)</figcaption>
</figure>

### Sprint 1

#### Planning

Sprint Goal was to "develop an app which lets users list/ find a flat/ flatmate". Then when through the product backlog selecting all user stories needed to complete the sprint goal.

#### Execution

I selected to setup the API skelton, which involved 

Completed multiple daily standup meetings with the "Yesterday I ..., Today I will ..., What's blocking me is ...".

#### Review

#### Retrospective

### Sprint 2

### Reflection
