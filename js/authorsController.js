angular.module('bookStoreApp')
.controller('allAuthorsController',function ($scope, BookStoreService) {

	this.author= {};
	this.isEditingAuthor= false;
	$scope.selectedAuthor= {};

	BookStoreService.allAuthors (function(response){
			$scope.authors = response.data;
	}, function(response){
		alert ("Error: "+response)});

	this.addOrEditAuthor = function(){
		$scope.isEditingAuthor ? this.editAuthor() : this.addAuthor()
	}
	this.addBook = function (author){
		$scope.oldAuthor = authors;
		author.books.push($scope.book);
		$scope.author = author

		BookStoreService.editAuthor($scope.oldAuthor,$scope.author,function(response){
		$scope.author={};
		$scope.oldAuthor={};
	},function(response){
		alert("Error: "+response)
	});


	}

	this.addAuthor = function(){
		BookStoreService.addAuthor($scope.author,function(response){
		$scope.authors.push(response.data);
		$scope.author={};
		$('#authorModal').modal('hide')
	},function(response){
		alert("Error: "+ response)
	});
	}

	this.deleteAuthor=function(author){
	if (confirm('¿Realmente desea eliminar este autor?'+author.firstName +' '+ author.lastName)) {

		BookStoreService.deleteAuthor(author,function(response){
		$scope.authors.splice($scope.authors.indexOf(author),1);

	    },function(response){
			alert("Error: "+response)
		});
	 }
	}

	this.startEditingAuthor= function(author){
		$scope.oldAuthor= angular.copy(author);
		$scope.author=author;
		$scope.isEditingAuthor= true;
		$('#addAuthorButton').text("Editar");
		$('#exampleModalLongTitleAuthors').text("Editar Autor");
		$('#authorModal').modal('show');
	}
	this.cancelChangesIfEditing= function(){
		//borrar cambios
	}

	this.editAuthor = function(){
		BookStoreService.editAuthor($scope.oldAuthor,$scope.author,function(response){
		$scope.author={};
		$scope.oldAuthor={}
		$('#authorModal').modal('hide');
		$scope.isEditingAuthor=false;
	},function(response){
		alert("Error: "+response)
	});
	}
});
