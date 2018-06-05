/* types of arrays:
["One","Two","Three","Four"] length : 4
[undefined, null, [], '']
[1, 2, 3, 4, 5]
arrays always start at 0, so the last array would be from 0 to 4
let student1 = "Valentina";
let student2 = "Cynthia";
arrays solve this type of problem, where you're looking for an efficient way to save data */

/* const myNameList = ["Cynthia"];
even if it is const, you can manage data with .push & .pop
myNameList.push("Valentina");
console.log("Datos > "+JSON.stringify(myNameList));
.push adds element to last place */

/* const ultima = myNameList.pop();
console.log("Ultimo elemento > " +ultima)
console.log("Datos > " +JSON.stringify(myNameList)); */
// .pop removes the last element 

/* const studentOne = myNameList[0];
myNameList[0] = "Javiera";
console.log("Datos > " +JSON.stringify(myNameList)); */
// puts Javiera in position 0 of the Array
/* myNameList[10] = "Adriana";
console.log("Datos > " +JSON.stringify(myNameList)); */
// puts Adriana in position 9 of the Array, but fills the empty spaces as null
/* for(let i = 0; i < myNameList.length; i++){
    console.log("Estudiante > " +myNameList[i]);
} */
// function to name all students
/* console.log("Estudiante inexistente > " +myNameList[100]); */
// gets value undefined because it's unexistent
/* myNameList.forEach((estudiante) => { 
    console.log("Estudiante > " + estudiante);
}); */
// names all students without passing the length of the Array
/* const listaDeEstudiantesMayusculas = [];
for(let i = 0; i < myNameList.length; i++) {
    listaDeEstudiantesMayusculas[i] = myNameList[i].toUpperCase();
}
console.log("Lista de estudiantes en mayúscula > "+listaDeEstudiantesMayusculas); */

/* const listaMayusculaMap = myNameList.map(
    (estudiante)=>{
        return estudiante.toUpperCase();
    }
) */

const tvSeries = [
    {
        name : "The Office US",
        protagonist : "Michael Scott",
        category : "Comedy",
        rating : 4.5
    },
    {
        name : "Game of Thrones",
        protagonist : "Jon Snow",
        category : "Drama",
        rating : 4.75
    },
    {
        name : "Parks and Rec",
        protagonist : "Leslie Knope",
        category : "Comedy",
        rating : 3.95
    },
    {
        name : "The Crown",
        protagonist : "Queen Elizabeth II",
        category : "Drama",
        rating : 4.2
    },
    {
        name : "Steven Universe",
        protagonist : "Steven Universe",
        category : "Fantasy",
        rating : 4.2
    },
    {
        name : "Black Mirror",
        protagonist : "Various",
        category : "Science Fiction",
        rating : 4.15
    },
    {
        name : "Aggretsuko",
        protagonist : "Retsuko",
        category : "Animation",
        rating : 3.65
    },
    {
        name : "How I Met Your Mother",
        protagonist : "Ted Mosby",
        category : "Comedy",
        rating : 4.75
    }
];

/* const comedies = [];
for(let i=0; i < tvSeries.length; i++){
    if(tvSeries[i].filter == "Comedy"){
        comedies.push(tvSeries[i]);
    }
}
console.log("Comedies > " +comedies); */
// listing comedies, old fashioned way

const comediesFilter = tvSeries.filter(series => (series.category == "Comedy"));
console.log( "Comedias > " +JSON.stringify(comediesFilter));
// listing comedies with .filter

const onlyProtagonist = tvSeries.map(
    (series)=> {
        return series.protagonist;
    }
);
console.log("Protagonistas de Series > " +JSON.stringify(onlyProtagonist));

const seriesTitles = tvSeries.reduce(
    (acc, serie)=> {
        if(typeof(acc) != "string") {
            acc = acc.name;
        }
        return acc + ", " + serie.name;
    }
);
console.log("Nombres de series > " +seriesTitles);

const fourStarRating = tvSeries.filter(score => score.rating > 4);
const onlyNameRatingFour = fourStarRating.reduce(
    (acc, serie) => {
        if(typeof(acc) != "string") {
            acc = acc.name;
        }
        return acc + ", " + serie.name; 
    }
)
console.log("Series de puntaje de más de 4/10 estrellas > " +JSON.stringify(onlyNameRatingFour));
// filters series than have a rating better than 4 stars, and then reduce it to only call its name