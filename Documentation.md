# Covid-19 Tracker

## Title Page

## Certificate from the Supervisor

## Acknowledgement

We would like to thank our Project Guide NS Ma'am for her whole-hearted support in making this project. her insights gave us new perspectives and ideas to make our project faster, robust and beautiful.

We are very much thankful to our past selves for enduring the hurdles in learning to code in HTML, CSS, JavaScript with patience, persistence and perseverence. Thank you for never giving up. Although there might be many bugs left, we can cut you off some slack and do the rest.

## Table of Contents

## Abstract

## Introduction (Domain Description, Motivation and Scope of the Work)

### Domain Description

This is a frontend web application to visualize Covid-19 data and statistics in India.
It is made using HTML, CSS and Javascript.

### Motivation

We have come across many websites displaying Covid-19 statistics but we weren’t satisfied with the way it was visualized. We felt that it should be easier to understand and should be visually appealing.

One other factor that makes our project different is that Volunteers and Organizations can register with us and their contact details will be there on our website for people needing help in this pandemic situation.

### Scope of the Work

As with Covid-19 data, this project can be used to visualize any kind of data in a much simpler and beautiful way. It can be applied to visualize Financial data, Scientific data, etc.

## Background/Review of Related Work

## Methodology (Problem Formulation, Algorithm Description, and other Design descriptions)

### Problem Formulation

The problem that is being faced by all of us during this pandemic is the lack of available resources such as availability of beds in hospitals, location of Covid hospitals, accurate statistics and contact details of Volunteer Organizations and Individuals. We are set out to bridge the gap between those who needs these resources and those who can provide.

By using our platform, Users can get daily accurate statistics of confirmed cases, deaths and recovered cases on a state-level as well as can seek help thanks to volunteer organizations and individuals across India. Volunteer Organizations and Individuals can register themselves through our platform so that other users in need can seek their help.

### Algorithm Description

#### Algorithm used in Card Component

The cards component:

```js
async function fetchData() {
  await fetch("https://api.covid19api.com/summary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      "Displays the data fetched from the API in the website if the promise is resolved"
    })
    .catch((err) => {
      "Displays error if the promise is rejected"
    });
}
```

- The fetchData() is an asynchronous function that fetches data from the API and displays it into the website.

- The await fetch("https://api.covid19api.com/summary") starts a request to "https://api.covid19api.com/summary" and returns a promise.

- A promise has two states: either it will be fulfilled(i.e. resolved) or it will be failed(i.e. rejected).

- The await keyword is present, so the asynchronous function is paused until the request completes.

- When the request completes, response is assigned with the response object of the request.

- response.json() is a method on the response object that let's us extract a JSON(JavaScript Object Notation) object from the response.

- .then(data) is called when the promise is resolved.

- .catch(err) is called when the promise is rejected in case a request cannot be made or a response cannot be retrieved.

#### Algorithm used in drawing the Growth Rate Chart

The following formula has been used to generate Daily Growth Rate graph

$$PR = {(V_{present} - V_{past}) \over V_{past}} * 100 $$

$$PR = \text{Percent Rate}$$

$$V_{present} = \text{Present Value} $$
$$V_{past} = \text{Past Value} $$

### Design

### Techonologies Used

- HTML
- CSS
- JavaScript
- Firebase

#### HTML

The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

#### CSS

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.

#### JavaScript

JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

#### Firebase

Firebase (a NoSQLjSON database) is a real-time database that allows storing a list of objects in the form of a tree. We can synchronize data between different devices. Firebase manages real-time data in the database. So, it easily and quickly exchanges the data to and from the database. Hence, for developing mobile apps such as live streaming, chat messaging, etc., we can use Firebase.

### Additional Libraries Used

- Google Fonts
- Animate on Scroll
- Normalize.css
- geoPlugin
- Moment.js
- Chart.js
- SweetAlert.js

## Implementation

### DFD

![DFD](/images/DFD.png "DFD")

## Results and Discussion

## Conclusion

## References
