# Pokemon Random Draft App

This html file was designed to give users a customizeable experience for Pokemon battling with their friends.
The app takes the list of fully-evolved, new Pokemon from Pokemon Scarlet and Pokemon Violet and randomly selects them to be on one of two teams.
The idea of this being: users can limit their options to a smaller pool of Pokemon, allowing and sometimes requiring more diverse team options than the team options which tend to occur in the standard competitive scene.

The user is given the option to exclude Pokemon from the list, as some Pokemon are considered to be too strong, or not fun to use, using HTML checkboxes. An input is taken in for the user to set the size of the pool. In the case of the whole list, since it is an odd number, an extra pokemon is given to team 1. If users see this as unfair, they can simply neglect the last Pokemon on the list. To me it is more of a feature, as I have the option to ignore it if I choose.

The lists maintain their fairness by placing the selectable Pokemon into an array and then randomly sorting that array. This sorting is acheived by starting at the end of the array and swapping with another random element in the array. The list of Pokemon available was written as an array of the names and those names were written into objects which contain the Pokemon's legendary and paradox statuses.

The future of this project will come in two stages. First, some visual updates could make this more pleasant to look at, and accessible. Continuing to study CSS and possibly Bootstrap is part of my long term goals. The second stage of improving this project will come from the integration of SQL. Pokemon have many identifying characteristics and that makes the benefit of using SQL enormous. Sorting Pokemon by attack, release generation, gender ratios, etc. makes for even more interesting options. A SQL database could even be used to store links to images of the Pokemon, which could then be used to make the lists more visually appealing. I am looking forward to the implementation of these changes as I gain more skills.
