window.onload = function(){
	
	allShareButtons();
	
};

function allShareButtons(){
	
	var windowLocationUrl = window.location.href;
	var pageTitle = document.querySelector('meta[property~="og:title"]').getAttribute('content');
	var allShareButtons = document.querySelectorAll('[data-share-button]');

	function shareButtons(e){

		e.preventDefault();
		var item = e.target;

		if(item.getAttribute('data-share-button') === 'facebook'){

			var url 		= item.getAttribute('href');
			var itemTitle 	= 'Fb Share';
			var descr 		= 'Facebook share popup';
			var image 		= 'https://goo.gl/dS52U';
			var winWidth 	= 520;
			var winHeight 	= 350;
			var winTop 		= (screen.height / 2) - (winHeight / 2);
			var winLeft 	= (screen.width / 2) - (winWidth / 2);
			
			window.open('https://www.facebook.com/sharer.php?s=100&p[title]=' + itemTitle + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);

		}

		if(item.getAttribute('data-share-button') === 'twitter'){

			var winWidth 	= 600;
			var winHeight 	= 350;
			var winTop 		= (screen.height / 2) - (winHeight / 2);
			var winLeft 	= (screen.width / 2) - (winWidth / 2);

			var twitterWindow = window.open('https://twitter.com/share?url=' + windowLocationUrl, 'twitter-popup', 'height='+ winHeight +',width='+ winWidth +', top=' + winTop + ',left=' + winLeft + '');
			if(twitterWindow.focus) { 
				twitterWindow.focus(); 
			}
			return false;

		}

	}

	if(pageTitle === null){
		pageTitle = 'Articulo compartido desde Mi página';
	}else{
		pageTitle = pageTitle + ' - Compartido desde Mi página';
	}

	for(var i  = 0; allShareButtons[i]; i ++ ){
		
		if(allShareButtons[i].getAttribute('data-share-button') === 'email'){
			allShareButtons[i].setAttribute('href', 'mailto:?subject=' + pageTitle + '&body=' + windowLocationUrl );
		}else{
			allShareButtons[i].setAttribute('href', windowLocationUrl);
			allShareButtons[i].addEventListener('click',shareButtons);
		}

	}

}