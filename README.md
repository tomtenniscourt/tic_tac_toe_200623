# Tic Tac Toe

Project One for the SEI course: Tic Tac Toe

Installation: None needed

Links:

Preview:

This is a simple game of Tic Tac Toe, whereby two players are able to play against each other, customise their player names, and keep track of their indivudal scores against the other player.

The the is centered around an 1980's retro space arcade, whilst also using modern 21st century emojis as game counters

Technology Used:
-HTML
-CSS
-JavaScript
-Google Fonts
-Locally stored images
-jspaint.app
-Apple emojis

Approach:
The main approach i took for this game was to create a 3x3 grid of interactive buttons, and attached event listeners to all of them that would detect when a player clicked on them.

When a player clicks on the button, the code will either display their counter (emoji) or do nothing if it has already been marked. Winning conditions were defined in an array (e.g. buttons in a straight row) and a player wins if they have met one of these conditions.

I included a `checkWin` function in the JavaScript which ultimately takes the current player as an argument, and checks if any of the winning combinations were achieved by the player.

I then used the `some` method in order to iterate over each element in the wimming combinations array and return true if any of the combinations are found to have been achieved by the current player

An alert then declares that player the winner and the game resets.

If their is a draw, one player must click on the reset button which lears all the squares on the grid and sets the current player back to the first player.

Additonally, players can input their names and have them displayed both on the scoreboard and in any subsequent winning alert. The button used to acomplish this is prevented from refreshing the page, and if no names are detected then default names are used.

The scoreboard will also log the wins of each player, until the scoreboard is reset.

Main Features:
-Functioning Tic Tac Toe playable by two users on the same machine
-Hover and activate background changes for all buttons on the page
-Functioning scoreboard that updates with each win
-Ability to customise each player's name

User Story:
-As a user, I should be able to start a new tic tac toe game
-As a user, I should be able to click on a square to add X first and then O, and so on
-As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
-As a user, I should not be able to click the same square twice
-As a user, I should be shown a message when I win, lose or tie
-As a user, I should not be able to continue playing once I win, lose, or tie
-As a user, I should be able to play the game again without refreshing the page

What is left?
-I want to create an intelligent AI that a sungle player can play against. I did have, at one point, a very dumb one, but decided it was better to remove and focus on improve other factors
-I want to implement a code that will enable players to choose their own game counter from a range of select emojis
-I want to include sound when certain buttons are activated or conditions are met (e.g. a player wins the game)
