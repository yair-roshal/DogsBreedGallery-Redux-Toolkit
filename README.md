Dog Image Gallery App

General Idea

The application includes 1 page with the following layout:
-	Right side – Table of 5 columns and 20 rows.
	Each dog is related to a specific breed.
	Each cell is a dog image from a random breed.
	Each click on an image increases the like count by 1.
-	Left Side – Dog Images and Like summary grouped by breed
	Example: bulldog-french images: 4, likes: 2.

Details

-	Gallery – Right Side
	Get all breeds:
	api: https://dog.ceo/api/breeds/list/all
	api response is a map where each key is a breed.
	Ignore sub breeds.

	Get Dog image:
	Api: https://dog.ceo/api/breed/pug/images/random
	Copy and paste the link in the browser to perform the request.
	Click - Clicking on a dog increase like +1. 

-	Summary – Left Side
	Displays the list of breeds in a box – 15% width from the screen.
	Each item in the list should display the the images and likes total counts by breed. 

Guide Lines

-	Apply code standards.
-	Use NPM packages.
-	Components architecture.
-	Advanced usage of Redux and JS in general.
-	Best practices.
-	ES6

Requirements

-	React & Redux

Bonus 

-	Tablet display: The layout will change on Tablet resolution. Top sticky header and the gallery will turn scrollable.
Example:

This Example contains 3 dogs of bulldog-frech breed.
-	Right side: random images dogs using the dog api
	each will contain also likes counter (individual – current image)
-	Left side: total image count by breed and total likes by breed.
 

