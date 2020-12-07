---
title: Week Five
subtitle: Week of Octorber 12th, 2020
description: First playable class presentation
category: Weekly Updates
position: 6
---

This week we presented our first playable iteration of our project to the class over Zoom. Our team finally settled on a 2D platformer playstyle for our game. We're happy that we've finally arrived on the right track and satisfied with how game production is going (although we'll have to speed up production from here on out).

Some of our members ran into issues with Unity this week which slowed down production right when we were in the middle of a rush period. One of our team members, who had made significant progress on the project but hadn't backed it up, had their Unity file become corrupted (due to a C# code plugin update breaking the file). He had to redownload Unity multiple times and reimport all of our assets into a new Unity file. After this happened, we decided to make the switch from Perforce to Unity's GitHub plugin (due to various technical issues we experienced around using Perforce). Another member's Unity install got corrupted and is now inaccessible on his computer. Yet another team member ran into an issue where clicking play on the Unity scene was affecting her mouse state positioning, but it seemed to be a minor issue that was solved with a computer restart.

## Links
- [First Playable Slides](./media/week-5/CAP4053_FirstPlayable.pdf)

## State of the Game
- [First Playable Demo Video](https://youtu.be/GRWnFBOJtKE)
- [Main Menu Screen](./media/week-5/main-menu-screen.png)
- [Current Game State (Beginning of Week 5) Video](https://youtu.be/578pxAmD8fE)

## Contributions

### John

This week was unfortunate productivity wise. I use Visual Studio Code to edit C# files and the extension with provides the language interpreter server updated and corrupted the project's ability to find referenced libraries. All of the assets and scripts were there, but Unity could not longer find various UnityEngine resources. After spending many hours redownloading and resetting, I found a brand-new issue on the GitHub for the C# VSCode extension with the same problem. I downgraded the extension and unfortunately had to re-create the project but our files were safe. Perforce was super confusing to use for no reason, so we switched to GitHub which also has a simple-to-use extension that was hassle free.

Nonetheless, I incorporated a basic farming system by using a special tilemap layer just for farm plots that are kept on load in a Vector2 of their coordinates and plot. Each plot has a basic timer that will cycle between an array of sprites for each growth stage until the growth hits the max level.

### Will

### Quynh

### Michaela
This week I put a lot of focus into completing our UI assets before our first playable presentation rolled around. After I finished our PowerPoint, I got UI elements drawn for our inventory window, dialogue bubbles (for the main character and the tree), a health bar, a play/pause button (for the pause menu), and buttons for the main menu and pause screens. (I drew these art assets using my new drawing tablet and a combination of Paint Tool SAI and PhotoShop Portable CS2.) I built our main menu screen in our Unity project and added background music to the main menu and main game.

## Media

### Art Assets
The completed set of ground textures for our game's main hub area, drawn by Will. These designs may be altered slightly in the future to include less sharp edges, but it's something that we'll consider later in the game's production.
<img src="./media/week-5/ground-textures.png" />

The tree's sapling stage and completed four-stage growth cycle of our first plant, a mushroom, as well as player inventory items that include plant seeds and farming tools, drawn by Will.
<img src="./media/week-5/plants-and-tools.png" />

Updated design for our game's first monster, a slime, drawn by Will.
<img src="./media/week-5/new-slime-design.png" />

Finalized design of the game's current UI elements, drawn by Michaela. Matching the design of the UI elements to that of our team's world asset artist, Will's, style was difficult. I tried to keep in mind Don't Starve's sketchy style as I worked on these designs.
<img src="./media/week-5/ui-elements.png" />

### A Closing Statement
<img src="./media/week-5/report-problem-with-unity.png" />
