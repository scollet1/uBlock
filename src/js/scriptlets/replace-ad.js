/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2017-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/******************************************************************************/

(() => {
	console.log("RUNNING");
	'use strict';
	const selector = '{{1}}';
	if ( selector === '' || selector === '{{1}}' ) {
		return;
	}
	const tag = document.createElement('{{2}}');
	const replace = ev => {
	    if (ev) {
	    	window.removeEventListener(ev.type, replace, true);
	    }
	    try {
			const elements = document.querySelectorAll(selector);
    		for (const element of elements) {
            	const text = element.textContent;
				element.replaceWith(tag);
				tag.textContent = "TESTING";
			}   
	    } catch { }
	};

	if (document.readyState === 'loading') {
		window.addEventListener('DOMContentLoaded', replace, true);
	} else {
		replace();
	}
})();