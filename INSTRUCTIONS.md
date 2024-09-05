# Frontend Engineering Take-Home Exercise: Movie Library Application

The goal of this exercise is to implement a simple movie library application using the latest version of React and associated modern tools and libraries. Our expectation is that this will take a Senior Engineer 2-4 hours to complete, but we know you may be busy so take as much time as you need. Note that if you already have a recent project that generally fits the outline of this exercise, feel free to submit that instead. Thank you!

## Exercise Background

The task is to create a simple movie library application. The app should fetch movie data from an API (such as [The OMDB API](http://www.omdbapi.com/?i=tt3896198&apikey=d15d95d) (http://www.omdbapi.com/?i=tt3896198&apikey=d15d95d) and allow the user to perform the following actions:

- Search for a movie by its title
- View a list of movies from search results (with pagination if applicable)
- Click on a movie to view more detailed information about it
- Maintain a personal favorite movie list (local storage is fine)

The application should match the designs from our [figma project](https://www.figma.com/design/ORF7QBuKLgQxrqtfFZT6XY/Front-End-Design-Challenge?node-id=1-3&t=4vTnJ3TcJAzmdWSD-1).

**Note: If you've never used figma before, be sure to create an account and login. This will allow you to view the project and get access to export assets from the project, look up CSS details of any UI element, .etc.**

## User Stories

- As a user, I want to see a search bar when I open the app.
- As a user, I want to search for a movie by its title.
- As a user, I want to click on a movie from the search results and view more detailed information about the movie (like the title, description, release date, rating, and poster).
- As a user, I want to paginate through search results whenever there are additional paged results.
- As a user, I want to add or remove movies from my personal favorite movie list.

## Requirements

- Implement the application using React.
- TypeScript is preferred but not required.
- The UI should closely match the given designs.
- Implement error handling and loading states.
- All code and comments should be written in English.

## Evaluation Criteria

- Project structure and organization
- React best practices and idiomatic usage of hooks and other React features
- Code readability and maintainability
- Understanding of the React ecosystem
- State management
- Final UI (matches mocks)
- Error handling

## Submission

Please submit a link to the GitHub repository containing your solution, as well as instructions for running the application locally. The project should include a README with an overview of your project, technical choices, and any notes on areas you would improve given more time.

Remember, this exercise is not just about getting the functionality to work. We want to see how you approach problem-solving, your thought process, and your understanding of React and modern frontend engineering principles. Please commit early and often, with clear and concise commit messages.

## Note

If you don't want to use OMDB API for any reason, you can use any other movie API or create a mock API using json-server or similar. The idea here is not about the data, but how you structure your project, your code, your state management, etc. Happy coding!
