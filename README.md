# yourMovieBench

This app it show information about the most populare tv shows and movies!! I hope you all enjoyed!!!

## 🚀 to start

to start to ejecuting this code you should:

- Open your terminal in a concret folder
- Ejecute the comand:

```
git clone https://github.com/jonCroatanUto/yourMovieBench.git
```

- Go inside the folder `yourMovieBench`and then inside `my-app` and run:

```
npm install
```

- For this project you should use this Api https://developers.themoviedb.org/3
- Create a `.env` file adding in it:

```
REACT_APP_API_KEY=`this should be you api key in the Api`
REACT_APP_API_URL=https://api.themoviedb.org/3/
REACT_APP_API_IMAGE_URL=https://image.tmdb.org/t/p/w500
```

# 🦴 Project Structure

## Folder structure 🗂

<pre>  
├───.github     <i>// Github actions config files </i>
├───public
└───src
    ├───apiCalls	<i>//Call to external APIs </i>
    ├───components
    |        ├───Movies
    |        ├───NavBAr
    |        ├───TVShow
    ├───pages
    |       ├───Detail
    |       ├───Home
    |        
    ├───redux
    |       ├───ModalReducer
    |       ├───MoviesReducer
    |       ├───tvShowReducer
    ├───subcomponents
                ├───Button
                ├───Slide


</pre>

# 🧭 App navigation

## Home page 🗺

IN home it's render a dinamic content. By one side the slider with all the popular movies and by the other the popular tvShows.
This switch is controlled by the redux, that modify reducer states in order to condition the render of the diferents components

## Detail page

This works similar as Home , but in this case I condition the full return of the component, because some of the propierties name that I get in the Api are the same and I need to condition witch details I need: tvShow details, or movies details

## Not found 🚫

Due to SEO stats, this app also has a not found page that shows up every time the user tries to enter an unexistant page.

# ✨ Wishlist and decisions made

- Get deeply with functionalities with jest, there is some error message related with syncronies functions that I don't know how to fixed yet (first time with it..).
- modulate more my project , for exemple made a type file.
- Better render display of the details
- Review the styles
- Made responsive
- More filters: The main issue here is that when adding more parameters to the queries, the queries are a lot slower at the moment of the development. Event the request by ID can take more than 30 seconds to load. You can see these times at the browser devtools, filter by Fetch/XHR.

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.
