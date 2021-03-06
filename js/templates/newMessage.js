export default `<article class="message-card">
	<header class="message-header">
		<div style="float:left;"><a href="#/"><div class="icn white_cancel" style="float:left;"></div></a>New Message</div>
		<div ng-click="sendMessage(message)"  ng-show="form.$valid" style="cursor:pointer;float:right;font-size: 0.7em;">
			<div class="icn white_new" style="float: left;"></div>
			<div style="overflow: hidden;">Send Message</div>
		</div>
	</header>
	<section class="message-body">
		<form novalidate name="form">
			<div ng-show="form.toAddress.$dirty && form.toAddress.$invalid">
				<span ng-show="form.toAddress.$error.required">To Address is required</span>
				<span ng-show="form.toAddress.$error.email">This is not a valid email.</span>
			</div>
			<div><label style="width:128px;">To: </label><input type="email" ng-model="message.toAddress" name="toAddress" required></div>
			<div><label style="width:128px;">Subject: </label><input type="text" ng-model="message.subject" required></div>
			<div><label style="width:128px;float:left;">Message: </label><textarea  ng-model="message.body" cols="80" required style="overflow:hidden;height:500px"></textarea></div>
		</form>
	</section>
</article>`;