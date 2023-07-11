# ReadMe Project One: Tic Tac Toe

## Description 
This is a simple game of Tic Tac Toe, whereby two players can play against each other, customise their player names, and keep track of their individual scores against the other player.
The game is centred around an 1980's retro space arcade, whilst also using modern 21st century emojis as game counters. 

## Deployment link

https://tomtenniscourt.github.io/tic_tac_toe_200623/ 

The game’s link can be found here. No login information is required, however please do add your names in the required input to add a bit of personality to your session. 



## Timeframe & Working Team (Solo/Pair/Group)

The game was entirely worked on by me over roughly a week. Occasionally I would have a second pair of eyes look over certain sections to access where certain issues were, however this was minimal. 


## Technologies Used

The following technologies were used throughout the process:
HTML 
CSS 
JavaScript 
Google Fonts 
Locally stored images 
jspaint.app 
Apple emojis


## Brief

The following brief was given to me to work from:

-Build a web application from scratch, without a starter codebase

-Use your programming skills to work out the game logic for a simple game like Tic Tac Toe

-Separate HTML, CSS, and JavaScript files in your application

-Build an application to a specification that someone else gives you

-Build a dynamic game that allows two players to compete from the same computer

-Craft a README.md file that explains your app to the world

**Technical requirements:**

- Render a game board in the browser

- Switch turns between X and O (or whichever markers you select)

- Visually display which side won if a player gets three in a row, or show a draw if neither player wins

- Include separate HTML / CSS / JavaScript files

- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

- Use JavaScript for DOM manipulation

- Deploy your game online, where the rest of the world can access it

- You can use GitHub Pages for deploying your project

- Use semantic markup for HTML and CSS (adhere to best practices)

- Have well-formatted, and well-commented code

**User Stories:**

- As a user, I should be able to start a new tic tac toe game

- As a user, I should be able to click on a square to add X first and then O, and so on

- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next

- As a user, I should not be able to click the same square twice

- As a user, I should be shown a message when I win, lose or tie

- As a user, I should not be able to continue playing once I win, lose, or tie

- As a user, I should be able to play the game again without refreshing the page

## Planning

I started by sketching out a basic wireframe using a very basic paint app, and then proceeded to create my vision using very basic HTML and CSS. My belief was that if I could see everything visualised on the screen, it would be easier to create the necessary JavaScript that would interact with everything. 

The wireframe, and subsequent HTML/CSS first draft can be seen below:



### Wireframe:
<img width="1482" alt="Screenshot 2023-07-11 at 11 20 19" src="https://github.com/tomtenniscourt/tic_tac_toe_200623/assets/127535435/81a596a4-8352-4b55-9a60-91d41ace8c83">

<img width="1485" alt="Screenshot 2023-07-11 at 11 22 08" src="https://github.com/tomtenniscourt/tic_tac_toe_200623/assets/127535435/49ab1a44-b5b3-4b66-9c42-e09a3997c76d">

### Finished Product: 

![Uploading Screenshot 2023-07-11 at 11.24.25.png…]()



## Build/Code Process

After I had first built the CSS and HTML, i turned my attention to the JavaScript logic, which can be broken down as follows: 


The winningCombos array defines all the possible winning combinations in the Tic-Tac-Toe game. Each sub-array represents three cell indexes that would result in a win if the same player marks those cells.
 
Event listeners are then attached to different elements. For each cell in the cells collection, a click event listener is added. When a cell is clicked, the associated event listener function is executed. You can add your custom code inside this event listener to handle the logic of marking the cell, checking for wins or draws, and updating the game state.
The reset button (resetBtn) has a click event listener attached to it, which calls the reset function when clicked.
 
The reset scores button (resetScoresBtn) has a click event listener attached to it, which calls the resetScores function when clicked.
 
The player name form (form) has a submit event listener attached to it. When the form is submitted, the associated event listener function is executed. Inside this function, you can retrieve the player names entered by the users and update the necessary variables and elements accordingly.
 
The code also contains several helper functions used in the game logic.
 
The checkWin function checks if the current player has won by iterating through the winningCombos array and comparing the content of the cells.
 
 
The checkTie function checks if the game has ended in a draw by verifying if all cells are filled.
The updateScore function updates the score for the current player and updates the score display accordingly.
 
The reset function clears the gameboard by resetting the content of all cells and sets the currentPlayer back to "🚀".
 
The resetScores function resets the scores of both players to zero and updates the score display accordingly.





## Challenges

I initially wanted to add the option of playing against the computer, however I found creating an intelligent AI to be incredibly hard. Furthermore, I kept experiencing bugs when having both a single player and multiplayer mode in the game, so elected to stick with the former as it was more complete.
Getting each player's name to appear on the scoreboard was challenging as well, but I was eventually able to do this. At one point, I realised quite far into the project that the wrong player was getting credited with wins, however this was relatively easy to solve.
I faced some difficulty with CSS styling as well.
Most of these challenges I managed to solve by going through old course notes, previous homeworks and exercises, and researching on websites such as W3, YouTube, GeeksForGeeks, and CodeBrainer. I was also able to draw on the experience of my classmates and tutors - such as asking one of them to proofread my code when it stopped working.

## Wins

I am very happy with how the scoreboard turned out – Players can add their names, which will display to the scoreboard and will in turn update with each player’s win. 

I was also extremely pleased with the overall layout (the “Holy Grail Layout”) as it enabled me to visualise early on where everything would end up, and enabled me to do this with relative ease. 

Some of the feedback I received also praised the hover effect that some of the buttons/grids had, so I will also take that as a win. 

## Key Learnings/Takeaways

Key learnings for me were how to effectively navigate through HTML and CSS whilst using the ‘Holy Grail’ layout for the page – it makes sorting everything out much more simple, and keeps everything tidy. 

### Bugs

There were two notable bugs that I discovered along the way. One was that my classes and sections in CSS and HTML were producing lines that I could not find where they were coming from. To rectify this, I rewrote the code, and whilst I could not find where the mistake was, the lines disappeared once I had rewritten the respective sections.
Another bug that is still persistent, is that occasionally the scoreboard will display small white lines - however this is rare and is largely insignificant.

### Future Improvements

I want to create an intelligent AI that a single player can play against. I did have, at one point, a very basic one that would make a random move rather than an intelligent move, but decided it was better to remove and focus on improve other factors -I want to implement a code that will enable players to choose their own game counter from a range of select emojis -I want to include sound when certain buttons are activated or conditions are met (e.g. a player wins the game)




