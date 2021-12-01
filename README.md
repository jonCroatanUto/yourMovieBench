# yourMovieBench

This app shows information about the most popular tv shows and movies. I hope you like!

## 🚀 To start

To start executing this application you should:

- Choose a folder in your local machine and open the terminal
- Run the comand:

```
git clone https://github.com/jonCroatanUto/yourMovieBench.git
```

- Go inside the folder `yourMovieBench` and run:

```
npm install
```

- For this project you should use [movieDB API](https://developers.themoviedb.org/3)
- Create an `.env` file in the root folder adding the following variables:

```
REACT_APP_API_KEY=`this should be you api key in the Api`
REACT_APP_API_URL=https://api.themoviedb.org/3/
REACT_APP_API_IMAGE_URL=https://image.tmdb.org/t/p/w500
```

# 🦴 Project Structure

## Folder structure 🗂

<pre>  

├───public
└───src
    ├───apiCalls	<i>//Call to external APIs </i>
    ├───components
    |        ├───Movies
    |        ├───NavBAr
    |        └───TVShow
    ├───pages
    |       ├───Detail
    |       └───Home        
    ├───redux
    |       ├───ModalReducer
    |       ├───MoviesReducer
    |       └───tvShowReducer
    └───subcomponents
                ├───Button
                └───Slide


</pre>

# 🧭 App navigation

## Home page 🗺

Home page renders dynamic content. On the one hand, the slider with all the popular movies and, on the other, the popular tvShows.
This switch is controlled by redux, and by modifing ModalReducer state conditionally renders different components

## Detail page
The application will render a details view with all the details about either a Movie or a Tv Show depending on what the user has selected.
The conditional render is controlled by the redux state.

# ✨ Wishlist and decisions made

- Modulate more the project, for exemple make a type file for typscript types.
- Improve detail view.
- Make mobile version.
- Go deeply with functionalities using jest.

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch with your contribution and push the branch as a pull request.
