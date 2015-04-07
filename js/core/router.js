export class Route {
    constructor(route, queryParams) {
        this.route = route;
        this.queryParams = queryParams;
    }
}

function parseQueryParams(asdas){
    //not yet implemented
    return {};
}

export default (aURL) => {
    var queryParams={};
    var route = [];

    aURL = aURL || window.location.href;
    var slashIndex = aURL.indexOf('#') + 1;
    if(slashIndex<=0) {
        window.location.hash='/index';
        return ["index"];
    }
    var hashString = aURL.slice(slashIndex);
    var hashQuery = hashString.split('\?');

    var routePath=hashQuery[0];

    if(hashQuery.length>1) {
        queryParams = parseQueryParams(hashQuery[1])
    }
    route = routePath.split('/').filter((part)=>part.length > 0);

    return new Route(route,queryParams);
}
