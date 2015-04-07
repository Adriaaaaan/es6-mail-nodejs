export class View {
    constructor(renderTo,controller,template){
        this.renderTo=renderTo;
        this.controller=controller;
        this.template=template;
        this.controller.onModelChange = (model) => {
            this.render(model);
        };
    }

    beforeRender(){}

    render(model){
        model = model || this.controller.model;
        this.beforeRender();
        this.renderTemplate(model);
        this.afterRender();
    }

    transitionTo(currentRoutes,routeParam,routeMap){
        console.log("transitioned to "+this.renderTo);
        this.controller.fetch(routeParam).then(() => {
            this.render();
            this.controller.transitionTo(currentRoutes,routeMap);
        });
    }

    afterRender(){}
    renderTemplate(model){
        let selector = this.renderTo;
        var element = document.querySelector(selector);
        element.innerHTML = this.template(model);
    }
}

export class Cntrl {
    fetchModel(){
        return {
            then(callback){
                callback();
            }
        }
    }
    onModelChange(){}
    fetch(routeParam){
        return this.fetchModel(routeParam).then((model)=>{
            this.model=model;
            this.onModelChange();
        });
    }

    transitionTo(currentRoutes,routeMap){
        //is transition complete
        if(currentRoutes.route.length===0)
            return;
        var routeName = currentRoutes.route.shift();
        var routeParam;
        var route =null;
        if(this.lookupDynamicRoute) {
            routeParam = routeName;
            routeName = this.lookupDynamicRoute();
        }
        var route = routeMap[routeName];
        if(route===undefined)
            throw new Error(`Route not found ${routeName}`);
        //render route and continue transition
        route.transitionTo(currentRoutes,routeParam,routeMap);
    }
}
