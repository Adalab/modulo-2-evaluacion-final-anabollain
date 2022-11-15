# Module 02 | Final review | Ana Bollain

## Introduction

This exercise responds to the final review of the second module within Adalab's Web Development Bootcamp. The main goal is to create a basic web application with a series of functionalities regarding interactivity with **Javascript**. 

The theme is **Breaking Bad**, an American crime drama television series. The web application allows the user to consult all characters within the series, being able to save or delete any of them from a favorites section and saving them in local storage, so they will be available when refreshing the page. 

## Requirements

With a basic template as the starter point, the exercise consists on developing a web-site using the following elements:

- HTML
- Sass
- Javascript
- Interactions with the user

![Basic template](./docs/assets/images/app-template.jpg)

The following **requirements** had to be respected:

1. *Design*. Basic structure and design for the web application, with a text input and search button to filter characters by their name; as well as a list of articles with the photo, name and status of each character. An additional favorites section should appear in the aside. 
2. *Initial state*. When loading the page, all characters must appear in the main section, using an API request to obtain all the data. The URL for the request is https://breakingbadapi.com/api/characters. For each character obtained in the result, a card with the following information must be rendered: photo, name and status (dead or alive). 
3. *Search input*. The user can search characters by their name, filling the input and clicking in the 'Search' button of the form. 
4. *Favorites*. The user can designate favorite characters. When doing so, the following steps must occur: 
    - Change styles of the selected character card to show it has been tagged as favorite
    - Show a list of favorite characters in the aside with different CSS styles
    - The favorite characters must continue to appear even if the user executes a new search by name
5. *Local Storage*. All characters tagged as favorite must be saved in localStorage, so when the page is refreshed they do not disappear. 

**Bonus**

6. *Delete icon in favorites*. A 'x' icon must appear next to each favorite, allowing the user to delete it from the list when clicking on it, as well as from the localStorage. 
7. *Highlight favorites*. When searching for a character, if he/she has been saved in favorites, they will appear highlighted in the main section. 
8. *General delete button*. If the favorites list is not empty, a 'Remove all' button will appear, allowing the user to delete all saved favorites at once. 

## Tools

The project has been developed with **'Adalab Web Starter Kit'**, a framework created in node and gulp that has pre-installed and pre-configured functionalities. It also contains an HTML template engine, a Sass and Javascript preprocessor and a local server, among other elements.

The following tools have been used when solving the project:

- HTML (with partials for an easier lecture and project organization)
- CSS/Sass
    - Partials
    - Variables, mixins and functions
    - Flexbox
    - Box model (size, padding and margin)
    - Position 
    - Transitions
- Javascript
    - Partials
    - Conditionals
    - Events
    - Functions
    - Objects
    - Arrays
    - Loops
    - Array methods
    - API request 
    - Advanced DOM
 - GIT version control
 - Command shell
  
  
*Hope you enjoy the project as much as I did*

**Thank you!**
