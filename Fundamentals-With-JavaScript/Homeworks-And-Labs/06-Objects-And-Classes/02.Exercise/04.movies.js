function movies(data) {

    let movieInfo = [];

    data.forEach(element => {
        if (element.includes('addMovie')) {
            let movie = element.replace('addMovie ', '');
            movieInfo.push({ name: movie });
        } else if (element.includes('directedBy')) {
            let [name, director] = element.split(' directedBy ');
            movieInfo.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (element.includes('onDate')) {
            let [name, date] = element.split(' onDate ');
            movieInfo.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });

    movieInfo.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);