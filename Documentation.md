# Covid-19 Tracker

## Title Page

## Certificate from the Supervisor

## Acknowledgement

We would like to thank our Project Guide NS Ma'am for her whole-hearted support in making this project. her insights gave us new perspectives and ideas to make our project faster, robust and beautiful.

We are very much thankful to our past selves for enduring the hurdles in learning to code in HTML, CSS, JavaScript with patience, persistence and perseverance. Thank you for never giving up. Although there might be many bugs left, we can cut you off some slack and do the rest.

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

### Websites

#### The following websites were the one from where we took our inspiration

1. covid19india.org

  This is a website built using React.js and has their own REST API.

## Methodology (Problem Formulation, Algorithm Description, and other Design descriptions)

### Problem Formulation

The problem that is being faced by all of us during this pandemic is the lack of available resources such as availability of beds in hospitals, location of Covid hospitals, accurate statistics and contact details of Volunteer Organizations and Individuals. We are set out to bridge the gap between those who needs these resources and those who can provide.

By using our platform, Users can get daily accurate statistics of confirmed cases, deaths and recovered cases on a state-level as well as can seek help thanks to volunteer organizations and individuals across India. Volunteer Organizations and Individuals can register themselves through our platform so that other users in need can seek their help.

### Algorithm Description

#### Algorithm used in drawing the Growth Rate Chart

The following formula has been used to generate Daily Growth Rate graph

$$PR = {\frac {(V_{present} - V_{past})} {V_{past}} * 100}$$

$$PR = \text{Percent Rate}$$

$$V_{present} = \text{Present Value}$$

$$V_{past} = \text{Past Value}$$

### Design

### Technologies Used

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

  This is a library of Free and Open Source Fonts available to use in any project. This is helpful because most of the time the browser gives some fonts which can be different in other browsers or platforms. Google Fonts enables us to use a consistent typography across all browsers and platforms.

- Animate on Scroll

  This is a library containing beautiful scroll animations. This gives the webpage a nice look and feel when you scroll through it. It is implemented just by importing the library in the HTML file and adding the animation name as an attribute to any HTML element.

- Normalize.css

  This is a CSS Reset File. To explain in simpler terms, every browser has some defaults styles to each and every HTML element and it differs from browser to browser. So, to have a consistent default styles across all browsers *Normalize.css* is used. It makes the webpage look same across all browsers and platforms.

- geoPlugin
- Moment.js
- Chart.js
- SweetAlert.js

### Data Sources

- [Ministry of Health and Family Welfare, Government of India](https://www.mohfw.gov.in/)

- [MyGov.in](https://www.mygov.in/covid-19/)

- [Covid19India.org](https://covid19india.org/)

- [IndiaCovid-19.in](https://indiacovid-19.in/)

## Implementation

### DFD

![DFD](./images/DFD.png "DFD")

### Implementation of the Card Component

The cards component:

![Cards](./images/Cards.png "Cards")

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

### Implementation of the Line Chart

![Chart](./images/chart.png "Chart")

The line chart is used to show the comparison among the data sets(i.e The Total Confirmed Cases, Total Recovered and Total Deaths) across the country over the past months.

- Dataset Properties
  
  data.datasets [index] - The line chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. 
  
  - backgroundColor - The line fill color.
  - borderColor -	The line color.
  - fill - Fills the area under the line.
  - label - To give names to the lines used for      comparison.
  - data - Used to pass data in the form of array.

  data.labels - Used to label the index axis(i.e. by default the x-axis.)

  data.options - Provides options for the whole chart.
  
  - responsive - Resizes the chart according to the window size.
  - maintainAspectRatio - Determines whether to maintain the original canvas aspect ratio(width/height) when resizing.

## Results and Discussion

## Conclusion

## References
