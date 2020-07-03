# Project: Street Battle

## Vision: 
> User will be prompted to hit the start button to start the game. At the click of "Start Game" there will be a countdown from 3-to-1. The two cars will then start race down the racetrack. The user will be prompted to hit a random key in order for their car to go faster and have a chance to beat the computer. There will four chances the user will have to enter the correct key when prompted. The user will only have 2.5 seconds to hit the correct key. If the user hit three correct keys in a row then there car will recieve and automatic boost. If the user misses a key the computer car will be boosted. Fisrt car to the finish line wins the race

## The Process

### Step1: 
>Get two objects in the on the web page to move from left and right

### Step2: 
>Expand the racetrack beyond the width of the page

### Step 3: 
> Control the speeds of the car

### Step 4:
> Configure Math for racing

### Step 5:
> Implement random key prompts for the user to speed up their car agaist the computer

### Step 6: 
> Create conditionals for when keys are hit/missed

### Step 7: 
> Add buttons for UI

### Step 8: 
> Display results of the race

### Step 9: 
> Add visuals

## ***Notes for Thinking:***
 * Create a contianer for the view, extend it past the viewport. This should create our racetrack that extends beyond the width of the screen.

 * #### Movement Visuals: 
    * Set finish line to a position off the screen. Ex: -50px
    * Move finish line towards the cars(center sreen). Ex: current_position_ + speed(movement); offset from the right 
    * Cars should be set to an absolut position. Track should be set to a relative position.

* #### Visual Effects:
    * if statement for objects going out of the container
    * Will create track using Adobe Illustrator
