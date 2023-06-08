# RPSLS - A game of Rock, Paper, Scissors, Lizard, and Spock

![Am I Responsive Image](assets/readme-images/LC-am-i-responsive.png)

Popularized by the TV Show "The Big Bang Theory, Rock, Paper, Scissors, Lizard, Spock (RPSLS) is a game of chance and the extended version of the classics game of Rock, Paper, Scissors. 

Each player picks a random variable and reveals it at the same time. 

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- (and as it always has) Rock crushes Scissors

The live game can be accessed and played here - https://tanjava.github.io/RPSLS/

# Table of contents
- [Design](#design)
  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Images](#images)    
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Languages Used](#languages-used)
    - [Navigation](#navigation)
    - [Website banner](#website-banner)
    - [Home Page](#home-page)
    - [Location](#location)
    - [Footer](#footer)
    - [About](#about)
    - [Readings](#readings)
      - [Big Three](#big-three--career--birth-chart)
      - [Career](#big-three--career--birth-chart)
      - [Birth Chart](#big-three--career--birth-chart)
    - [Contact](#contact)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries-and-programs-used)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Media](#media)

# Design


## Color Scheme

Based on the logo, the yellow hand emoji's and ..... the following colors were chosen:

![Color palette](assets/readme-images/rpsls-color-palette.png)


## Typography

Stint Ultra Expanded was used for a playful game title. Orbitron was used for the body for a more futuristic and geometric vibe and Roboto was used for the footer.

## Images

Hand emoji images were used as game gestures.


# Features

## Existing Features:

This is a one page website with interactive elements. The user plays against the computer for 5 rounds and will win the game if they have the highest score at the end.


### Languages Used

- HTML5
- CSS3
- JavaScript

### Header

The header at the top of the age includes the game's title and logo. 

![Logo and Navigation Bar](assets/readme-images/LC-header.png)


### Gameboard

Below the header is the gameboard. Here the big hand emoji's representing the game moves will be displayed. 

![Website banner](assets/readme-images/LC-hero-image.png)

### Description/Tooltip

Upon hovering over each button, a brief description/tooltip appears to provide information about the corresponding game mov. This helps users understand the rules of the game and the strenghts/weaknesses of each move.


### Interactive Elemente

This page is the first page users will see. It has a 'Welcome' and a 'Work With Me' section, and is designed to capture their attention and encourage themn to explore the website further.

#### Scoreboard

The game keeps track of the user's and computer's score and updates dynamically as the game progresse. 


#### Visual Feedback

Visual feedback is provided for game outcomes. A message with the game outcome (win, lose, tie) will be displayed after every round and at the end of the game.

![Welcome!](assets/readme-images/LC-welcome.png)

#### Footer Section

The footer contains copyright information on the left and the game rules on the right.


## Future Features

- XX


# Testing

Testing of the website has been conducted on a laptop using GOogle Chrome and Microsoft Edge, and mobile using Safari and Android. 

Google DevTools was used to test different devices and screen resolutions. 

All of the buttons function as expected.


## Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftanjava.github.io%2FLauraCatharina)

![W3C HTML Validator](assets/readme-images/LC-html-checker.png)

- CSS
  - No errors were found when passing through the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftanjava.github.io%2FRPSLS%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en):

![W3C CSS Validator](assets/readme-images/rpsls-css-checker.png)

- Lighthouse (Accessibility Audit)

![Lighthouse Accessibility Audit](assets/readme-images/LC-lighthouse-checker.png)


## Unfixed Bugs

Initially, when using the site on mobile resolution, the hoverable navigation of the Readings, and it's submenu, couldn't be accessed as the dropdown menu briefly appeared when clicking on Readings, but the navigation then immediatly reloaded and disappeared. The user would have to click Readings, hold it and then drag down to the submenu for the readings button and submenu buttons to be accessible. 

To fix this when using the site on mobile resolution, I created a clickable dropdown menu with a down arrow symbol. It still doesn't work perfectly as the user now has to click the precise down arrow target area in order to be able to use the submenu, but at least the readings button and submenu buttons are accessible this way. In case the user does not click the precise down arrow target area, they will be led to the Readings page and can always navigate to the specific readings from there. 


## Frameworks, Libraries and Programs Used

- Github: Store Repository
- Gitpod: Create HTML and CSS files
- Google Fonts: 
  - Font-family 'Quicksand'
- Font Awesome & Favicon
  - For cover text icons, location icon and Social Media icons
- Am I Responsive
  - Screenshot of the final project on all devices


# Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 

  1. In the GitHub repository, navigate to the Settings tab. 
  2. From the settings tab, select the 'Pages' tab in the 'Code and Automation' section.
  3. In the source section, select 'Deploy from a brach' and in the branch section, select 'Main' and click 'Save'.
  4. The page will update and show "Your site is live at https://username.github.io/repository-name/", indicating a successful deployment. 

The live link for the site can be found here - https://tanjava.github.io/RPSLS/


# Credits

Some usefull sites that really helped me throughout this project: 
- https://devdocs.io/javascript/
- https://stackoverflow.com
- https://www.w3schools.com/


## Media

Images:
- Website Logo
    - [PngAAA-4532035](https://www.pngaaa.com/detail/4532035)
- Emoji's 
    - [Emojipedia](https://emojipedia.org/)