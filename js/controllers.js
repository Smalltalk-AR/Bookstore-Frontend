angular.module('booksApp')
.controller('AllBooksCtrl',function ($scope,BooksService) {
	this.book={};
	$scope.isEditing=false;
	
	 
	BooksService.allBooks (function(response){
			$scope.books = response.data;
	}, function(response){
		alert ("Error: "+response)});


	this.addOrEditBook = function(){
		$scope.isEditing ? this.editBook() : this.addBook()
	}
	this.addBook = function(){
		BooksService.addBook($scope.book,function(response){
		$scope.books.push($scope.book);
		$scope.book={};
		$('#bookModal').modal('hide')
	},function(response){
		alert("Error: "+response)
	});
	}
	this.deleteBook=function(book){
	if (confirm('Really delete this Book?')) {

		BooksService.deleteBook(book,function(response){
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
		BooksService.editBook($scope.oldBook,$scope.book,function(response){
		$scope.book={};
		$scope.oldBook={}
		$('#bookModal').modal('hide');
		$scope.isEditing=false;
	},function(response){
		alert("Error: "+response)
	});
	}
	
});
  
  
