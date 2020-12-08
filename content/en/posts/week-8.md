---
title: Week Eight
subtitle: Week of November 2nd, 2020
description: Finishing the forest area
category: Weekly Updates
position: 9
---

We were able to wrap up development of the forest area this week. Our team finished scripting monster behaviors and palcing them appropriately around the map, as well as some more decorations to make the map come to life. Some slight adjustments were made to the level design from the previous week for aesthetic and gameplay purposes.

## State of the Game
- [Tree Attack Demonstration](./media/week-8/tree-attack.mp4)

## Contributions

### John

I worked with Quynh this week on shoring up the different enemy behaviors and also added the item drop chance to each enemy. It was this week that we decided that instead of harvesting the plants we should leave them up as more of a power-beacon mechanic, so we added in filling and watering but disabled harvesting. The dialog system was also tested with an auto-complete process but it was buggy so it was disabled.

### Will
I had previously sketched all the monsters for testing purposes, but once the code was more refined for them, I went ahead and turned them into completed assets. I also made a few background decorations, just to add a tiny bit of variety to the field, though I don’t really know how noticeable it is. I think it’s cute, anyways.
### Quynh
This week, John and I focused on completing the scripts for our monsters. I started to work on the fly enemy's attack. Since we are using a generic Enemies class that all enemies inherit, I also worked on incorparating the fly enemy's script to work with the generic enemy class.
### Michaela
After John and Quynh completed the scripting for the forest area's monsters, I found appropriate spots in our level to place them. Will also made some extra decorations (grass patches, small cacti) for me to place throughout the area.

## Media

### Art Assets
A decorative patch of grass, drawn by Will.
<img src="./media/week-8/decor-grass.png" />

A decorative grouping of cacti, drawn by Will.
<img src="./media/week-8/decor-cactus.png" />

A tree enemy together with its attack animation and acorn projectile, drawn by Will.
<img src="./media/week-8/tree.png" /><img src="./media/week-8/tree-shooting.png" />

A flower enemy together with its attack animation and pollen projectile, drawn by Will.
<img src="./media/week-8/flower-enemy.png" />

A dragonfly enemy with its flying and attack animations, drawn by Will.
<img src="./media/week-8/dragonfly.png" />
