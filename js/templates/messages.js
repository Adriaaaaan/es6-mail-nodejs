import html from '../core/templates.js';

export default (model)  => html`${model.map((message) => html`<a href='#/messages/${message._id}'>
	<div class="messageListItem row" ng-click="focusRow(message)" style="cursor: pointer;">
		<div class='selectorColumn' ng-click="select(message)">
			<div class="selectionCircle" >&nbsp;</div>
			<img src="${message.avatar}" ng-click="toggleSelectRow()" class="selectionTickBox avatarIcon letterAvatar colourAvatar"/>
			<div  title="Select or unselect this row" class="iconBadge selectionTickBox">
				<div class="iconButtonImg icn white_accept"></div>
			</div>
		</div>
		<div class="tableCellBody" style='float:right;'>
			<div class="tableCell icn delete" ng-click="delete(message)"></div>
		</div>
		<div class="tableCellBody" style='overflow:hidden;' ng-click="select(message)">
			<div class="tableCell tableCellPrimaryField">
				${message.subject}
			</div>
			<div  class="tableCell tableCellDescriptionField" style="">
				${message.body}
			</div>
		</div>

	</div></a>
`)}`