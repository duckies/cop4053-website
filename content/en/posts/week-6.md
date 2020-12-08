---
title: Week Six
subtitle: Week of Octorber 19th, 2020
description: Completing our main hub
category: Weekly Updates
position: 7
---

After our first playable, our first order of business was to clean up the starting area/main hub of our game and make it presentable. Our members worked on expanding this area to include more plots, a more complex layered area design and ladders to traverse it, some simple tutorial dialogue, and environmental decorations (fences, flowers, singposts etc.). Although not final, we ensured that our game's main tree would grow and change states in accordance with the growth of our other miscellaneous plants in the game.

## Contributions

### John

This week I focused on rounding out the primary functions of the game. Farming became activated through seed items and when a plant completes its growth cycle it will emit a growth completion event to signal to the tree diety, which represents the primary game state, to increment the win state. Some initial work was also done on handling the events for the different types of tools so we can add those in the future.
### Will
Not really much to say this week – I just drew some background assets, made some ladders to help vary the level design, and continued working on the plant concepts I originally had.
### Quynh
I started to work on changing the script for our blob enemies. I initially plan for the blob to have coroutines and use a finite state machine (FSM) for the blob's attacking behavior
### Michaela
My main task was environmental development-- adding platforms, decorations, and in general, planning the layout of our game's cave. I added some tilesets at the top of the cave to simulate the narrow, closed nature of a cave (which also serves to prevent the player from seeing the background seams). I carved out a raised, open area to place our game's tree and added raised platforms and farm plots scattered around the main hub's map. I attached ladders to the raised platforms to allow the player to traverse the map, added additional sources of lighting in the cave, and decorated the map with broken fences and flowers.

## Media

### Art Assets
Flower decorations which will be scattered across the cave's floor, drawn by Will. 
<img src="./media/week-6/flower-tufts.png" />

A signpost which will point towards farming plots, new areas, and other items of interest, drawn by Will.
<img src="./media/week-6/signs.png" />

A set of fence decoration sprites, drawn by Will.
<<img src="./media/week-6/fence-left.png" /><img src="./media/week-6/fence1.png" /><img src="./media/week-6/fence2.png" /><img src="./media/week-6/fence3.png" /><img src="./media/week-6/fence-right.png" />

A set of ladders for traversing vertically throughout the cave, drawn by Will.
<img src="./media/week-6/ladder-top.png" /><img src="./media/week-6/ladder.png" /><img src="./media/week-6/ladder-bottom.png" />

A cave entrance, which we intend to use for area transitions into other zones of the cave, drawn by Will.
<img src="./media/week-6/cave-entrance.png" />
