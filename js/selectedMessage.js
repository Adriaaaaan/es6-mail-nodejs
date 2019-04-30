import {View,Cntrl} from './core/framework.js';
import messageService from './messageService.js';
import selectedMessageTemplate from './templates/selectedMessage.js';

class SelectedMessageView extends View {

};

class SelectedMessageController extends Cntrl {
    fetchModel(param){
        return messageService.byId(param);
    }
};

export var selectedMessageController = new SelectedMessageController();
export var selectedMessageView = new SelectedMessageView('#detailContent',selectedMessageController,selectedMessageTemplate);
