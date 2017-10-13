angular.module('booksApp')
.service('BooksService',function($http){
    var urlBase = 'http://localhost:1710';
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
  }
);

