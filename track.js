<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

jQuery('#userForm #Submit').click(function() {
	gtag('event', 'Click', { 'event_category' : 'Submit', 'event_label' : 'Contact Form Submission'});
});

var url = window.location.pathname.split('/');
if (url.indexOf('lodging') > -1) {
	jQuery('.uk-grid-match div').each(function() {
		var propName = jQuery(this).find('h3 a').text();
		jQuery(this).find('h3 a').click(function() {
			gtag('event', 'Click', { 'event_category' : 'Lodging Website', 'event_label' : propName});
		});
		jQuery(this).find('.uk-button').click(function() {
			gtag('event', 'Click', { 'event_category' : 'Lodging Website', 'event_label' : propName});
		});
		jQuery(this).find('.email').click(function() {
			gtag('event', 'Click', { 'event_category' : 'Lodging Email', 'event_label' : propName});
		});
	});
}