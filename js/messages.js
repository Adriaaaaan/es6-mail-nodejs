import {View,Cntrl} from './core/framework';
import messageService from './messageService';
import messagesTemplate from './templates/messages';

class MessagesView extends View {

    renderTemplate(model){
        let selector = this.renderTo;
        var element = document.querySelector(selector);
        let template = `No messages found :(`;
        if(model!==null && model.length>=0) {
            template = this.template(model);
        }
        element.innerHTML = template;
    }

    selectMessage (message) {
    };

    deleteMessage (message) {
    };

    hasSelectedMessage () {
    };

    newMessage  () {
    };

    unselectMessage  () {
    };
};

class MessagesController extends Cntrl {
    fetchModel(){
        return messageService.all();
    }

    lookupDynamicRoute(){
        return "selectedMessage";
    }

};

export var messagesController = new MessagesController();
export var messagesView = new MessagesView('#mainContent',messagesController,messagesTemplate);
