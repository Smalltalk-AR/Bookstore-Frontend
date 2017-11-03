angular.module('bookStoreApp')
.controller('allAuthorsController',function ($scope, BooksService) {
	
	this.author= {};
	this.isEditingAuthor= false;
	this.authors = [];
	 
	BooksService.allAuthors (function(response){
			this.authors = response.data;
	}, function(response){
		alert ("Error: "+response)});


	this.addOrEditAuthor = function(){
		this.isEditingAuthor ? this.editAuthor() : this.addAuthor()
	}
	this.addAuthor = function(){
		BooksService.addAuthor($scope.author,function(response){
		$scope.authors.push(response.data);
		$scope.author={};
		$('#authorModal').modal('hide')
	},function(response){
		alert("Error: "+ response)
	});
	}

	this.deleteAuthor=function(author){
	if (confirm('¿Realmente desea eliminar este autor?'+author.firstName + author.lastName)) {

		BooksService.deleteAuthor(author,function(response){
		$scope.authors.splice($scope.authors.indexOf(author),1);
		
	    },function(response){
			alert("Error: "+response)
		});
	 }
	}

	this.startEditingAuthor= function(author){
		$scope.oldAuthor= angular.copy(author);
		$scope.author=author;
		this.isEditingAuthor= true;
		$('#addAuthorButton').text("Edit");
		$('#authorModalTitle').text("Editar Autor");
		$('#authorModal').modal('show');
	}
	this.cancelChangesIfEditing= function(){
		//borrar cambios
	}

	this.editAuthor = function(){
		BooksService.editAuthor($scope.oldAuthor,$scope.author,function(response){
		$scope.author={};
		$scope.oldAuthor={}
		$('#authorModal').modal('hide');
		this.isEditingAuthor=false;
	},function(response){
		alert("Error: "+response)
	});
	}
});
  
  
