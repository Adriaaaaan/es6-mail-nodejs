import {View,Cntrl} from './core/framework';
import messageService from './messageService';
import selectedMessageTemplate from './templates/selectedMessage';

class SelectedMessageView extends View {

};

class SelectedMessageController extends Cntrl {
    fetchModel(param){
        return messageService.byId(param);
    }
};

export var selectedMessageController = new SelectedMessageController();
export var selectedMessageView = new SelectedMessageView('#detailContent',selectedMessageController,selectedMessageTemplate);
