import router from './core/router';
import {View,Cntrl} from './core/framework';
import {messagesView} from './messages'
import {selectedMessageView} from './selectedMessage'
import appTemplate from './templates/mainLayout';

var routes = {};
var currentRoutes=[];

class App extends Cntrl {

	setupRoutes(){
		this.routes = {
			messages:messagesView,
			selectedMessage:selectedMessageView,
			index:messagesView
		}
		var currentRoute = router();
		try {
			this.transitionTo(currentRoute,this.routes);
		} catch(err){
			debugger
			if(document.location.hash!=="/index") {
				document.location.hash="/index";
			}
		}
	}

	setupEvents(){
		var body = document.querySelector('body');
		document.addEventListener('click',(event) => {
			console.log(`event received from ${event.srcElement.id}`)
		});
		window.addEventListener('hashchange',(event) => {
			this.setupRoutes();
		});
	}
}

class AppView extends View {}

var appController = new App();
var appView = new AppView('body',appController,appTemplate);
appView.render();
appController.setupEvents();
appController.setupRoutes();


export default {Main:appController}