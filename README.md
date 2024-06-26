# NoSQL: Social Network API

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
I used Express.js for routing, a MongoDB database, and the Mongoose ODM.
## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## PREVIEW

![Demo of DELETE routes to delete a user by ID being tested in Insomnia.](./img/img1.png)

![Demo of GET routes to return users by ID being tested in Insomnia.](./img/img2.png)

![Demo of POST routes to add a new users being tested in Insomnia.](./img/img3.png)

![Demo of GET routes to return all users being tested in Insomnia.](./img/img4.png)

## Here is a video walk-through 

https://katelomidze2003.wistia.com/medias/rwo13ij1m1 

