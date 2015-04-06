export default `<article class="message-card">
	<header class="message-header">
		<label><div class="icn white_next mobileOnly" ng-click="unselectMessage()" style="float:left;"></div>{{message.subject}}</label>
	</header>
	<section class="message-body">
		{{message.body}}
	</section>
</article>`;