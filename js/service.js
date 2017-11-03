angular.module('bookStoreApp')
.service('BookStoreService',function($http){
    var urlBase = 'http://localhost:1710';

    <!--Servicio para los libros -->
  this.allBooks=function(onSuccess, onFail){
		return $http.get(urlBase+'/books').then(onSuccess,onFail);
};
    this.addBook= function (book,onSuccess,onFail){
        return $http.post(urlBase+'/books',book).then(onSuccess,onFail);
    };

    this.deleteBook= function (book,onSuccess,onFail){
        return $http.delete(urlBase+'/books/'+book.id,book).then(onSuccess,onFail);
    };
    this.editBook= function (oldBook,book,onSuccess,onFail){

        return $http.put(urlBase+'/books/'+oldBook.id,book).then(onSuccess,onFail);
    };


  <!--Servicio para los autores -->
    this.allAuthors = function(onSuccess, onFail) {
        return $http.get(urlBase + '/persons').then(onSuccess, onFail);
    };

    this.addAuthor = function(author, onSuccess, onFail) {
        return $http.post(urlBase + '/persons', author).then(onSuccess, onFail);
    };

    this.deleteAuthor = function(author, onSuccess, onFail) {
        return $http.delete(urlBase + '/persons/' + author.id, author).then(onSuccess, onFail);
    };

    this.editAuthor = function(oldAuthor, author, onSuccess, onFail) {
        return $http.put(urlBase + '/persons/' + oldAuthor.id, author).then(onSuccess, onFail);
    };

});
