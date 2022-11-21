# Rock, Paper, Scissors, Lizard, Spock

This is the classic game of Rock, paper, scissors but with a fun twist! Rock, Paper, Scissors, Lizard, Spock is the version of that game that the characters from The Big Bang Theory plays. While the old rules still applies, there are two new playable options that take the game to a new level! Click the link below to try it yourself!

![Responsive Mockup](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/am_i_responsive.png)

[Click to View Live Website](https://krnsand.github.io/rock-paper-scissors-lizard-spock/)

--- 

## Features 

I wanted my game to be easy to play and to understand, that is why the rules are posted at the bottom of the page at all times so that one can easily check to see which option does what.

### Existing Features

- __Header__

  - The header makes it clear what game one is playing if one waas to forget anytime during the game. 

![Header](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/heading.png)

- __Moves Left__

  - This function shows the player how many moves one has left during the game as it counts down with every click to finaly stop at 0.  
  - It can be fun for the player to see how many moves makes up one game so that it does not come as a surprise when the game is over.

![Moves Left](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/moves_left.png)

- __The Controls__

  - Here the player can see what options one can choose from to play. 
  - Underneath the player options one will find the "reset button" that resets the game after it is over. It will reset the game wherever in the game one might find themselves in, but what is the fun in that?

![The Controls](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/controls.png)

- __The Game Area__ 

  - In the game area one can see an image of the option one chooses to play. This creates an interactive experience which can enhance the user experience.
  - Here one can also se the scores being counted at the top of each image.

![Game Area](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/game_area.png)

- __Who Won__

  - Here the player gets a message saying who won the game. 
  - It shows up right underneath the reset button which makes it easy to restart and play again. 

![Who Won](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/who_won.png)

- __The Footer__

  - In the footer the player can read the rules of the game. As there are many more than in the classic rock, paper, scissors game, the rules are visable at all times during the game. 

![The Footer](https://github.com/Krnsand/rock-paper-scissors-lizard-spock/blob/main/assets/images/readme_images/rules.png)

### Features Left to Implement

- I would like to add more plants in the future as well as video tutourials on different plant related things.
- I would like to go more in depth on some parts of the care as some details require more work and could use more detailed pictures.

---

## Testing 

I have tested my code throughout the project as I wanted to check regularly that I was not making mistakes. I have run my HTML through:

- The W3C Markup Validation Service: 

  <details><summary>Home</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/index_check.png">
  </details>
  <details><summary>Care Station</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/carestation_check.png">
  </details>
  <details><summary>Newsletter</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/newsletter_check.png">
  </details>
  <details><summary>Success</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/success_check.png">
  </details>

And I have run my CSS through: 

- The W3C CSS Validation Service:

  <details><summary>CSS</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/style.css_check.png">
  </details>

- I have successfully tested my website on Google Chrome, Firefox, Microsoft Edge, Safari and Samsung Internet Browser.
- I have used Google Chrome Developer Tools through out the creation of my project to test layouts and responsivness as I progressed.
- I have used Google Chrome Developer Tools to test on following devices:
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

I tested my deployed website with Lighthouse and got the following results on each page:

<details><summary>Home</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/index_lighthouse.png">
  </details>
  <details><summary>Care Station</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/carestation_lighthouse.png">
  </details>
  <details><summary>Newsletter</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/newsletter_lighthouse.png">
  </details>
  <details><summary>Success</summary>
  <img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/success_lighthouse.png">
  </details>

I believe my performance score was effected by the sizes of my images. I will look into how to better the performance score in the future.

### Unfixed Bugs

- A bug I noticed was that sometimes, after having had Google Chrome Developer Tools open for a while, the website looked like this when developer Tools was closed:

<details><summary>Bug image</summary>
<img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/bug.png">
</details>
<details><summary>Bug image</summary>
<img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/bug1.png">
</details>

It was as if DevTools was still open and set to a certain device screen-size even after it had been closed. If I went to another tab and then returned to my website, the layout had fixed itself, always. I don't understand it and I don't know what to do about it. I will look into it in the future. 

- Another bug (or an interesting special feature perhaps) I found was that some of my style to the Home page did not show up as intended on my own phone. The reason being I have it on "dark mode". Personally I don't mind this "bug" as it doesn't make anything hard to read or messes with the layout or anything else. It just doesn't look as intended. I will look into why it does this in the future, but for now I am enjoying the special effects.

<details><summary>Intended</summary>
<img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/intended.jpg">
</details>
<details><summary>Dark Mode</summary>
<img src="https://github.com/Krnsand/portfolio1_plant_care/blob/main/readme_images/dark_mode.jpg">
</details>

---

## Deployment

- My website was deployed to GitHub pages. The following steps were used: 
  - In the Github repository of the project find and click the <em>settings</em> symbol  
  - On the left hand side there is a menu, find and click <em>Pages</em>
  - Choose the <em>main</em> branch from the <em>none</em> drop down menu and click save
  - The link to the website needs a couple of minutes to load, then refresh the page and the link will show up at the top of the <em>Pages</em> section with the text "Your site is live at https://krnsand.github.io/portfolio1_plant_care/" 

---

## Credits 

### Content 

- I used code snippets from the Love Running project on: 
   - the footer
   - the sign up form

- Most of the infomation on this page has been gathered by me over the years as a plant enthusiast from trial and (many) errors as well as from various facebook groups. I used: 

    - [Greenery:Unlimited](https://greeneryunlimited.co/blogs/plant-care/monstera-deliciosa-care) 
    - [Potted Pixie](https://pottedpixie.com/monstera-albo-care/)
    - [The Spruce](https://www.thespruce.com/grow-coleus-plants-indoors-1902746)

  to complement my information as well

- I used [Font Awesome](https://fontawesome.com/) for the footer icons as well as the leaf in my sign up form
- I used [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-create-icon-hover-effect-using-css/) to add more styling to the footer icons. I copied the code to the relevant icons on my page
- I used [Flexbox Froggy](https://flexboxfroggy.com/) to better understand flex
 
### Media

- I used [Pexels](https://www.pexels.com/sv-se/) and [Pixabay](https://pixabay.com/) for most of my images
- I used [Adobe Express](https://www.adobe.com/express/feature/image/resize) to resize my own images to better fit the website
- I used [W3Schools](https://www.w3schools.com/css/css3_shadows_box.asp) to learn about box shadowing
- I used [Google Fonts](https://fonts.google.com/) and [Font Pair](https://www.fontpair.co/all) for my fonts

---

## Acknowledgements

I would like to take the opportunity to thank:

- My mentor André Aquilina for guidance, encouragement and patience, as well as inspiration, tips and tricks throughout the project

- My friend Viktor Hesselbom for introducing me to flex and taking the time to help me with text alignments when I just couldn't manage


---