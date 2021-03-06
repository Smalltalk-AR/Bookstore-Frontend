angular.module('bookStoreApp')
.controller('bookStoreController',function ($scope,BookStoreService) {

	this.book={};
	$scope.isEditing=false;

	BookStoreService.allBooks (function(response){
			$scope.books = response.data;
	}, function(response){
		alert ("Error: "+response)});


	this.addOrEditBook = function(){
		$scope.isEditing ? this.editBook() : this.addBook()
	}
	this.setAuthorToBook = function(author){
		$scope.book.author = author;
	}

	this.addBook = function(){
		BookStoreService.addBook($scope.book,function(response){
		$scope.books.push(response.data);
		$scope.book={};
		$('#bookModal').modal('hide')
	},function(response){
		alert("Error: "+ response)
	});
	}

	this.deleteBook=function(book){
	if (confirm('Really delete this Book?'+book.id)) {

		BookStoreService.deleteBook(book,function(response){
		$scope.books.splice($scope.books.indexOf(book),1);

	    },function(response){
			alert("Error: "+response)
		});
	 }
	}

	this.startEditingBook= function(book){
		$scope.oldBook= angular.copy(book);
		$scope.book=book;
		$scope.isEditing= true;
		$('#okButton').text("Edit");
		$('#exampleModalLongTitle').text("Edit Book");
		$('#bookModal').modal('show');
	}

	this.cancelChangesIfEditing= function(){
		//borrar cambios
	}

	this.editBook = function(){
		BookStoreService.editBook($scope.oldBook,$scope.book,function(response){
		$scope.book={};
		$scope.oldBook={}
		$('#bookModal').modal('hide');
		$scope.isEditing=false;
	},function(response){
		alert("Error: "+response)
	});
	}

});
