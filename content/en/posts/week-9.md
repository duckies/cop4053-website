---
title: Week Nine
subtitle: Week of November 9th, 2020
description: First playtest, exam prep, and start of the snowy area
category: Weekly Updates
position: 10
---

Our game finally has a working title-- Evergrow!

That being said, with our second exam and first playtest coming up, we were concerned about testing for bugs and preparing a survey for the assignment. Most of our time was spent tossing out ideas for the new area, testing our game, preparing our survey, and studying for our exam. Because of our time constraints, we couldn't take the entire week off however, so we did get some progress made on our next snowy area.

## Links
- [Game Survey (Google Forms)](https://forms.gle/Tf84SpSxmnmzMyUF6)
- [Game Survey Questions (PDF)](./media/week-9/game-survey.pdf)

## Contributions

### John
This week I focused on implementing a one-way collider for the top of the ladders. The ladders themselves are simple scripts detects the `up` arrow or `W` key when in the trigger collider for the ladder and modifies the target velocity in the movement script to allow upwards movement with no gravity. The script also allows for configuring the speed at which a character runs horizontally and vertically (on a ladder). The issue however, is the ladder colliders need to align with the colliders of the ground and also, the one-way collider at the top seems to have the ability to get players stuck. I'm investigating a solution but a worse-case is players fall if they walk on top of ladders.

### Will
Most of my week was taken up by making the survey and taking a few exams – the enemies shown here were leftover concepts that I retooled to work for an icey biome. Also, you may notice that these tiles are just a recolor of the cave tiles, but honestly, I think the snowy chunks and icicle floors look quite fine, so reworking the cave tileset I think was a good idea.

### Quynh
Similar to others, I spent most my time this week studying for the exam, as well as wrapping up the game in order for us to survey people. I also transform the initial game survey document into a Google Survey Form so people can easility access it, and makes it easier for us to view the survey results. 

### Michaela
The majority of my time this week was spent testing our game for bugs and studying for our upcoming exam. I did find an error where, under some unknown circumstances, the first series of tutorial text the user sees when they begin the game becomes jumbled after several lines, which was fixed by John.

## Media

### Art Assets
The completed set of ground textures for our game's snowy area, drawn by Will. These designs may be altered slightly in the future to include less sharp edges, but it's something that we'll consider later in the game's production.
<img src="./media/week-9/ice-tiles.png" />

An enemy we dubbed the puppybun for its resemblance to something between a bunny and a puppy, drawn by Will.
<img src="./media/week-9/puppybun.png" />

An snowflake enemy which will spin and shoot projectiles, drawn by Will.
<img src="./media/week-9/snowflake.png" />

A snowman enemy which will break apart into three separate enemies when the player attacks it, drawn by Will.
<img src="./media/week-9/snowman-parts.png" />
