var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {

    	/*Recover data from table*/
    	$http.get("public/data/information.txt")
         .then(function (response) {
             $scope.info = response.data.fullinformation;
         });

         /*Data Table to Lazy Loading*/
         var capTableData = {
  			classI: {
    			seriesE: {
      				"Juan Ramírez": 300000
    			},
    			seriesF: {
      				"Juan Ramírez": 100000,
      				"Julia Pérez": 50000,
      				"Oscar Gómez": 100000
    			},
    			seriesR: {
      				"Julia Pérez": 100000
    			}
  			},
  			classII: {
    			seriesE: {
      				"Juan Ramírez": 100000
    			},
    			seriesF: {
      				"Julia Pérez": 50000,
      				"Oscar Gómez": 100000
    			}
  			},
  			classIII: {
    			seriesA: {
      				"Juan Ramírez": 25000
    			},
    			seriesE: {
      				"Oscar Gómez": 50000
    			},
    			seriesF: {},
    			seriesL: {
      				"Julia Pérez": 50000
    			},
    			seriesR: {
      				"Juan Ramírez": 25000,
      				"Oscar Gómez": 50000
    			}
  			}
		}

		/*Saving class info, it's not yet used*/
		$scope.class1=capTableData.classI;
		$scope.class2=capTableData.classII;
		$scope.class3=capTableData.classIII;

		//Hide table Class I,II,III
		$scope.tableopened = false;
		$scope.tableopened2 = false;
		$scope.tableopened3 = false;
		$scope.b1=true;
		$scope.b2=true;
		$scope.b3=true;

		/*Converting object to numeric keys*/
		$scope.arr = Object.keys(capTableData.classI).map(function(k) { return capTableData.classI[k]});
		$scope.arr2 = Object.keys(capTableData.classII).map(function(k) { return capTableData.classII[k]});
		$scope.arr3 = Object.keys(capTableData.classIII).map(function(k) { return capTableData.classIII[k]});

		/*Test*/
		$scope.series = capTableData.classI.seriesE["Juan Ramírez"];
		//console.log($scope.arr);

		/*Clear aux*/
		$scope.aux=[];
		/*Saving json information in aux for the next version*/
		$scope.aux.push($scope.arr);
		$scope.aux.push($scope.arr2);
		$scope.aux.push($scope.arr3);
		//console.log($scope.aux);

		/*Function button from class I*/
		$scope.aboutclass1 = function ()
		{	
			/*Apply time delay*/
			setTimeout(function() {
			/*Hide/Show tables*/
			$scope.tableopened2 = false;
			$scope.tableopened3 = false;
			$scope.tableopened = true;
			/*Hide/Show buttons*/
			document.getElementById("btnc1").style.opacity = "0";
			document.getElementById("btnc2").style.opacity = "1";
			document.getElementById("btnc3").style.opacity = "1";
			/*Moving tables and buttons*/
			var maintb = document.getElementById("tb");
			maintb.style.width ="172%";
			var bc2 = document.getElementById("btnc2");
			bc2.style.left = "73%";
			var bc3 = document.getElementById("btnc3");
			bc3.style.left = "83.3%";
			$scope.$digest();
			}, 800);
		}

		/*Function button from class II*/
		$scope.aboutclass2 = function ()
		{	
			/*Apply time delay*/
			setTimeout(function() {
			/*Hide/Show tables*/
			$scope.tableopened3 = false;
			$scope.tableopened = false;
			$scope.tableopened2 = true;
			/*Hide/Show buttons*/
			document.getElementById("btnc1").style.opacity = "1";
			document.getElementById("btnc2").style.opacity = "0";
			document.getElementById("btnc3").style.opacity = "1";
			/*Moving tables and buttons*/
			var maintb = document.getElementById("tb");
			maintb.style.width ="140%";
			var bc1 = document.getElementById("btnc1");
			bc1.style.left = "4%";
			var bc3 = document.getElementById("btnc3");
			bc3.style.left = "55.8%";
			$scope.$digest();
			}, 800);
		}

		/*Function button from class III*/
		$scope.aboutclass3 = function ()
		{	
			/*Apply time delay*/
			setTimeout(function() {
			/*Hide/Show tables*/
			$scope.tableopened = false;
			$scope.tableopened2 = false;
			$scope.tableopened3 = true;
			/*Hide/Show buttons*/
			document.getElementById("btnc3").style.opacity = "0";
			document.getElementById("btnc1").style.opacity = "1";
			document.getElementById("btnc2").style.opacity = "1";
			/*Moving tables and buttons*/
			var maintb = document.getElementById("tb");
			maintb.style.width ="214%";
			var bc1 = document.getElementById("btnc1");
			bc1.style.left = "4%";
			var bc2 = document.getElementById("btnc2");
			bc2.style.left = "14%";
			$scope.$digest();
			}, 800);
		}

    });