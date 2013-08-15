/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-cloud' : '&#xe000;',
			'icon-file' : '&#xe001;',
			'icon-banknote' : '&#xe003;',
			'icon-bubbles' : '&#xe004;',
			'icon-calendar' : '&#xe005;',
			'icon-bars' : '&#xe006;',
			'icon-checkmark' : '&#xe007;',
			'icon-checkmark-2' : '&#xe008;',
			'icon-bolt' : '&#xe00a;',
			'icon-settings' : '&#xe00b;',
			'icon-cog' : '&#xf013;',
			'icon-user' : '&#xf007;',
			'icon-plus' : '&#xf067;',
			'icon-user-add5' : '&#xe00c;',
			'icon-mail' : '&#xe00e;',
			'icon-layers' : '&#xe00d;',
			'icon-hammer2' : '&#xe002;',
			'icon-cross' : '&#xe009;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};