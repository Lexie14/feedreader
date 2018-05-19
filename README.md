# Project Overview

This project is aimed at creating tests (within the Jasmine framework) for given a web-based application that reads RSS feeds.


## Start

To see this project, you should clone this repository to your local one and open the index.html file in your browser, where you wiil be able to see the results of Jasmine testing at the bottom of the page.

## Description

The Project tests:
1. RSS Feeds, whether:
   - they are defined;
   - their URL is defined and not empty;
   - their names are defiend and not empty;
 
2. The menu, whether it:
   - is hidden by default;
   - changes its visibility when the menu icon is clicked (two cases).

3. Inititial Entries:
   - ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

4. New Feed Selection:
   - ensures when a new feed is loaded by the loadFeed function that the content actually changes.
