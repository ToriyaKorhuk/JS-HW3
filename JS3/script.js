var book = new Book();

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
function book(){
    return this.title;
}
/*
class Books[publisher, id, numberPages]*/
function Journal(publisher, numberCopy,year, id, numberPages){
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
var journal = new Journal()
{
journal.numberPages = 32;
journal.year = 2020;
if(journal.numberPages>32)
{
    console.log('Превышено допустимое количество страниц')
}
};
alert('количество страниц:'+ journal.getnumberPages());
alert('год издательства:'+ journal.getyear()); 

