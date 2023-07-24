//Load Foundations library
$(document).foundation()

  let data = {
    appName: "My Web Project",
    welcomeMessage: "Good afternoon",
    users: [
      {
        username: "ryanK",
        dob: "May-18-1997"
      },
      {
        username: "Jessica",
        dob: "Aug-03-2003"
      }
    ],
    articles: [
      {
        title: "Cars",
        body: "I like a lot of things about cars."
      },
      {
        title: "Horses",
        body: "I like a lot of things about horses."
      },
    ]
  }

$(document).ready(function() {
  
  //Create a click event for the input button
  $("#createArticle").click(function() {
    //Get the type of article
    let articleTypeID = $("#articleTypeID").val();

    //Create new article in my HTML page
    $("#pageArticles").append("<article><h1>" + data.articles[articleTypeID - 1].title + "</h1><p>Content</p></article>");
    $("#pageTitle").toggleClass("redBackground");
  });

  //Toggle Cell4
  $("#pageTitle").click(function() {
    $(".cell4").fadeToggle(2000);
  })

});


//Declare variables
let textVariable = "text value";
let numVariable = 7;
let arrayVariable = ["horse", "cat", "dog", "beaver"];

// JSON
let myObject = {
  humans: [
    {
      firstName: "Samson",
      lastName: "Kruger",
      dob: "Jan-12-1987",
      age: 37
    },
    {
      firstName: "Cumin",
      lastName: "Rogers",
      dob: "Jan-12-1987",
      age: 37
    }
  ],
  systemsSettings: {
    deviceType: "iphone",
    lastLogin: "jan-13-2022"
  },
  appName: "The Do Good App"
};

//Perform a series of actions on a particular service
function enhanceServiceContent(serviceElementId, textElementId) {
  //Get the name of first person
  let firstPerson = myObject.humans[0];
  
  //Highlight the service name
  changeColor(serviceElementId);

  //Show new copy
  addChildParagraph(textElementId, firstPerson.firstName);
}

function changeColor(elementId) {
  //Select the element that needs its colour changed
  document.getElementById(elementId).style.backgroundColor = ("#F0F0F0");
}

function addChildParagraph(elementId, nameOfPerson) {
  document.getElementById(elementId).innerHTML = "<p>Hello, " + nameOfPerson + ".</p>";
}

