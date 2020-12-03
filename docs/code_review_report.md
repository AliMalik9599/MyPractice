## Design
Ali - ```views.py``` contains functions that connect the server and handle requests from the client-side. The file is well designed by using the single responsibility principle and allowing for features/functions in the file to be easily added by separating out purposes and ensuring neither method affects another. In urls.py, we have the list of URL mappings to our view functions that the front-end can request from. Here, the code is relatively basic and contains the URLs that we are directing to in order to process the user's requests. In registration.js, the code is also well split into rendering the form and handling the user input and submitting the form independently, preventing any interference within the event handlers.

Mia - ```views.py``` was designed from the beginning in a way that follows the Single Responsibility principle from function to function. Each function is responsible for a single situation or view - the complete_card function is responsible only for handling the backend functionality for completing a card, CardList is responsible for determining the list of cards in a user's practice schedule for that day, etc. The same goes for ```serializers.py```, although Django decides most of the design in files like this one and ```urls.py```.
However, in reviewing views.py we did come across certain instances where code was being duplicated from function to function. So, we decided to add the compress_card_cardprogress function as a helper!
models.py is where we were able to show off our more sophisticated design decisions. For example, we designed Card models so that they could be used across users as a single source of content for our app. In order for users to interact and change certain aspects of the cards for themselves (as opposed to changing the cards for all users), like being able to complete a card or favorite a card, we created the CardProgress model. This model connects Card objects to User objects and contains fields that describe how a User has interacted with that Card. We believe this design decision was smart, thoughtful, and useful in the end. We have been able to avoid duplicating Card objects, while also allowing Users to track their progress on a Card and have individual data in relation to a Card.

Katie - ```Deck.js```, ```Card.js```, ```CardList.js``` and ```CourseWrapper.js``` are reach only responsible for one thing. ```Card.js``` displays the content of a specific card and ```CardList.js``` serves as a wrapper to display the appropriate number of cards. ```Deck.js``` facilitates communication between the frontend and backend by sending backend data to the CardList, and updating the backend when the individual cards are completed or favorited. ```CourseWrapper.js``` serves as a wrapper for the course selection, skill selection and deck views. Based on where the user is in the flow and what they have selected, ```CourseWrapper.js``` will render the appropriate content.

Justin - Both ```Skill.js``` and ```SkillList.js``` had several unnecessary FromGroups and containers which fed into each other, but didn't add any functionality for styling and DOM arrangement. ```SkillList.js``` repeated styling within and outside of the React-UI component (duplicated code) so removed the internal and linked the class to the external

## Complexity
Ali - The python files were relatively simple, Django provides an efficient and straightforward way of managing the backend requirements. The only change made was to remove redundant code in order to make reading the views more concise. The registration page was also relatively straight forward and separating event handlers to store state variables made this simple to work with.

Mia - Most of the backend has remained decently simple. In reviewing the particular syntax used in some of the more complex functions in views.py we noticed that simplification was needed. For example, instead of creating a loop on a list of Skill objects and filtering for Card objects one by one, we discovered that we could use the following syntax: Card.objects.filter(skill__in=skill_list). This syntax enables you to filter the list of Card objects and ask that those returned have a skill attribute that exists inside of skill_list. This eliminated a lot of unnecessary for loops and complexity!

Katie - The complexity of Card, CardList and Deck remained relatively simple, whereas the CourseWrapper exhibited more complexity. This is because CourseWrapper is a container that is responsible for tracking which view the user is seeing (either course selection, skill selection, or the deck). We had to include conditional rendering here to make sure that the correct view was displayed. Another added level of complexity for each of these components was making sure that local storage and the component states were in sync and updated at the correct times. This was particularly apparent when we tried to handle login persistence and refreshes on the page. By utilizing local storage, we can save a user's progress and selections to render the same content they were looking at before the refresh.

## Tests
Ali - We did not use automated testing for the program, however we did make sure to test the functionality of existing code and new features by printing to the terminal for the backend and using console logs or alerts for the javascript code.

Katie - No automatic tests were created to test the functionality of the frontend, but output to console.log was a helpful way to ensure the code worked as expected. During development, the contents of component states and local storage were printed for inspection.

## Naming
Some variable names were changed to match the PEP 8 naming conventions, but otherwise the code seemed to be fine.

## Comments
Comments were added to the main files to explain the functionality of each segment of code more precisely.

## Style
The styling of the code was fine I believe, the code was sectioned and ordered in an appropriate manner.

The styling for front end components using MaterialUI was handled through the makeStyles() function. Most of the styling done in this manner was mainly for spacing, because the styling like color selection and fonts was handled in a separate file called theme.js that lives in the hoc folder.

## Documentation
The documentation I think is up to date with what is required to run the program.