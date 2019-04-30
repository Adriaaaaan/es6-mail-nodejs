import html from '../core/templates.js';

export default ()  => html`<header class="mainHeader">
	<div class="mainHeaderTitle">ES6 Mail</div>
	<div class="mainHeaderAction">
		<div class="primaryAction">
			<div class="icn white_new" style="float: left;margin: 6px;"></div>
		</div>
		<div class="hideForPhone" style="overflow: hidden;color:white;">
			New Message
		</div>
	</div>
	<div style="padding:4px;overflow:hidden;">
		<div class="mainSearchBox">
			<input   ng-model="searchQuery" type="search" placeholder="Search" autofocus/>
			<div class="icn search" style="float:right;"></div>
		</div>
	</div>
</header>
<section id="mainLayoutPanel" class="mainContent" >
	<aside id="filterPanel"></aside>
	<section id="mainContent" class="resultsPanel transitions"></section>
	<article id="detailPanel" class="detailPanel transitions">
		<div id="detailContent" class="message-card-container"></div>
	</article>
</section>`