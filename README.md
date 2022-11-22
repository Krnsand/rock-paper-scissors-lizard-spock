# Rock, Paper, Scissors, Lizard, Spock

This is the classic game of Rock, paper, scissors but with a fun twist! Rock, Paper, Scissors, Lizard, Spock is the version of the game that the characters from The Big Bang Theory plays. While the old rules still applies, there are two new playable options that take the game to a new level! Click the link below to try it yourself!

![Responsive Mockup](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/am_i_responsive.png)

[Click to View Live Website](https://krnsand.github.io/rock-paper-scissors-lizard-spock/)

--- 

## Features 

I wanted my game to be easy to play and to understand, that is why the rules are posted at the bottom of the page so that one can easily check to see which option does what.

### Existing Features

- __Header__

  - The header makes it clear what game one is playing if one was to forget anytime during the game. 

![Header](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/heading.png)

- __Moves Left__

  - This function shows the player how many moves one has left during the game as it counts down with every click to finaly stop at 0.  
  - It can be fun for the player to see how many moves make up one game so that it does not come as a surprise when the game is over.

![Moves Left](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/moves_left.png)

- __The Controls__

  - Here the player can see what options one can choose from to play. 
  - Underneath the player options one will find the "reset button" that resets the game after it is over. It will reset the game wherever in the game the player might find themselves in, but what is the fun in that?

![The Controls](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/controls.png)

- __The Game Area__ 

  - In the game area one can see an image of the option one chooses to play. This creates an interactive experience which can enhance the user experience.
  - Here one can also see the scores being counted at the top of each image.

![Game Area](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/game_area.png)

- __Who Won__

  - Here the player gets a message saying who won the game. 
  - It shows up right underneath the reset button which makes it easy to restart the game and play again. 

![Who Won](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/who_won.png)

- __The Footer__

  - In the footer the player can read the rules of the game. As there are many more than in the classic rock, paper, scissors game, the rules are visable at all times during the game. 

![The Footer](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/rules.png)

### Features Left to Implement

- I would like to add a multiplayer feature in the future, where two players can play against each other.
- I would like to add some sound effects to the "Who Won" message.

---

## Testing 

I have tested my code throughout the project as I wanted to check regularly that I was not making mistakes. I have run my HTML through:

- The W3C Markup Validation Service: 

  <details><summary>Index</summary>
  <img src="https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/index_check.png">
  </details>

I have run my CSS through: 

- The W3C CSS Validation Service:

  <details><summary>CSS</summary>
  <img src="https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/css_check.png">
  </details>

And I have run my JavaScript through: 

- The JSHint website:

  <details><summary>JavaScript</summary>
  <img src="https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/jshint.png">
  </details>

  <details><summary>Specific JSHint</summary>
  <img src="https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/specific_jshint.png">
  </details>

While I don't have any errors in my js code I do have quite a bit of warnings. I talked to my mentor about these who whent through them with me.

The specific warning in my second image 

- I have successfully tested my website on Google Chrome, Firefox, Microsoft Edge, Safari and Samsung Internet Browser.
- I have used Google Chrome Developer Tools throughout the creation of my project to test layouts and responsivness as I progressed.
- I have used Google Chrome Developer Tools to test on following devices:
  - iPhone 4
  - iPhone SE
  - iPhone XR
  - iPhone 12 PRO
  - Pixel 5
  - Samsung Galaxy S8+
  - Samsung Galaxy S20 Ultra
  - iPad Air
  - iPad Mini
  - Surface Pro 7
  - Surface Duo
  - Galaxy Fold
  - Samsung Galaxy A51/71
  - Nest Hub
  - Nest Hub Max

I tested my deployed website with Lighthouse and got the following results:

<details><summary>Index</summary>
  <img src="https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/lighthouse.png">
  </details>

In my last project my "Performance score" was not very good due to the image sizes I was using. I kept that in mind this time around and comressed the images I used, specifically the background image.

### Unfixed Bugs

- I have not experienced any bugs at this time. 

---

## Deployment

- I deplyed my game to GitHub pages. The following steps were used: 
  - In the Github repository of the project find and click the <em>settings</em> symbol  
  - On the left hand side there is a menu, find and click <em>Pages</em>
  - Choose the <em>main</em> branch from the <em>none</em> drop down menu and click save
  - The link to the website needs a couple of minutes to load, then refresh the page and the link will show up at the top of the <em>Pages</em> section with the text "Your site is live at https://krnsand.github.io/rock-paper-scissors-lizard-spock/" 

---

## Credits 

### Content 

- I used code snippets from the Rock, Paper, Scissors project in the "Portfolio Project Scope" video on: 
   - the buttons in the index.html
   - the beginning of my script.js, see comment

- The concept of the game is from The Big Bang Theory (Tv-show). I got the "start image" and the rules from this website: 

    - [Big Bang Theory Fandom](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) 


- I used [Font Awesome](https://fontawesome.com/) for the arrows that points down at the buttons
- I used [Geeks for Geeks](https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/?tab=article) to get the "moves left" function idea and to get an understanding of what the code for the project could look like. I did not end up using any of the code.
- I used [Flexbox Froggy](https://flexboxfroggy.com/) to freshen up my understanding of flex
- I used [Team Treehouse](https://teamtreehouse.com/community/why-does-jshint-give-me-these-warnings-about-es6) to silence all warnings about my js code in the first image of my js code testing area as the warnings were not about things being wrong with my code, but merely informing me that I am using the "new" JavaScript version.
 
### Media

- I used [Live Science](https://www.livescience.com/37206-atom-definition.html) for my background
- I used [Pixlr](https://pixlr.com/se/e/#home) to cut and reshape the "start image" into the individual options one can play
- I used [TinyPNG](https://tinypng.com/) to compress my background image
- I used [Geeks for Geeks](https://www.geeksforgeeks.org/css-font-border/) to get the font border on my text
- I used [W3Schools](https://www.w3schools.com/html/html_favicon.asp) and [Fonticon](https://gauger.io/fonticon/) for my favicon
- I used [Google Fonts](https://fonts.google.com/) for my fonts

---

## Acknowledgements

I would like to take the opportunity to thank:

- My mentor André Aquilina for guidance and patience throughout the project, as well as help with the checkWinner function

- My friend Viktor Hesselbom for taking the time to help me with parts of my project


---