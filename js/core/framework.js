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
    afterRender(){}
    renderTemplate(model){
        let selector = this.renderTo;
        var element = document.querySelector(selector);
        element.innerHTML = this.template(model);
    }
}

export class Cntrl {
    constructor(){
        this.fetch();
    }
    fetchModel(){
        return {
            then(){}
        }
    }
    onModelChange(){}
    fetch(){
        this.fetchModel().then((model)=>{
            this.model=model;
            this.onModelChange();
        });
    }

    transitionTo(routes){
        //is transition complete
        if(routes.length===0)
            return;
        var routeName = routes.shift();
        var route = this.routes[routeName];
        if(route===undefined)
            throw new Error(`Route not found ${routeName}`);
        //render route and continue transition
        route.transitionTo(routes);
    }
}
