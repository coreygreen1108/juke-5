juke.directive('albumizzle', function(){
	return {
		restrict: 'E',
		scope: {
			albums: '='
		},
		templateUrl: '/js/album/templates/albumizzle.html'
	}
})