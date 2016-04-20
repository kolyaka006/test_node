angular.module('myApp',['ngSanitize', 'ui.select']);

angular.module('myApp').config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push(function ($q) {
        return {
            'responseError': function (rejection) {
                if(rejection.status === 401) {
                    localStorage.clear();
                    location.reload();
                }
                return $q.reject(rejection);
            }
        };
    });
}]);

angular.module('myApp').filter('highlight', function() {
    function escapeRegexp(queryToEscape) {
        return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return function(matchItem, query) {
        return query && matchItem ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
    };
});

angular.module('myApp').filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            var keys = Object.keys(props);

            items.forEach(function(item) {
                var itemMatches = false;

                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});