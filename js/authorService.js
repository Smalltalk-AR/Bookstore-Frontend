angular.module('bookStoreApp')
    .service('AuthorService', function($http) {

        var urlBase = 'http://localhost:1710';

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