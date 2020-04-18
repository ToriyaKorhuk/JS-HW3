var Book = new Book();

this.title = 'Poema';

this.author = 'Esenin';

alert(this.title);
function Book(title,author, publisher,year, numberCopy, id, numberPages){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.numberCopy = numberCopy;
    this.id = id;
    this.numberPages = numberPages;
    this.getnumberPages= function(){
        return this.numberPages;
    }
};
function Book(){
    return this.title;

}
/*
class Books[publisher, id, numberPages]*/
function Journal( publisher, numberCopy,year, id, numberPages){
    this.publisher = publisher;
    this.numberCopy = numberCopy;
    this.year = year;
    this.id = id;
    this.numberPages = numberPages;
    this.getnumberPages= function(){
        return this.numberPages;}
    this.getyear= function(){
        return this.year;
    }
    
}
var Journal = new Journal();{
Journal.numberPages = 32;
Journal.year = 2020;
if(Journal.numberPages>32)
{
    console.log('Превышено допустимое количество страниц')
}
};
alert('количество страниц:'+ Journal.getnumberPages());
alert('год издательства:'+ Journal.getyear()); 

