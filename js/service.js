angular.module('booksApp')
.service('BooksService',function($http){
    var urlBase = 'http://localhost:1710';
	this.allBooks=function(onSuccess, onFail){
		return $http.get(urlBase+'/books').then(onSuccess,onFail);        
};
    this.addBook= function (book,onSuccess,onFail){
        return $http.post(urlBase+'/newBook',book).then(onSuccess,onFail);
    };

    this.deleteBook= function (book,onSuccess,onFail){
        return $http.post(urlBase+'/deleteBook',book).then(onSuccess,onFail);
    };
    this.editBook= function (oldBook,book,onSuccess,onFail){
        this.toEdit={};
        this.toEdit.oldBook= oldBook;
        this.toEdit.newBook= book;

        return $http.post(urlBase+'/editBook',this.toEdit).then(onSuccess,onFail);
    };
  }
);

