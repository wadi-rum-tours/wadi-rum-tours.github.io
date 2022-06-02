/* generated by Svelte v3.38.3 */
import { SvelteComponent, init, safe_not_equal } from "svelte/internal";

function get_excerpt(articleBody, desc_length) {
	let desc_start = articleBody.indexOf("<p>");
	let desc_end = desc_start + desc_length;
	let desc_text = articleBody.replace(/(<([^>]+)>)/gi, "");
	let desc = desc_text.substring(desc_start, Math.min(desc_end, desc_text.substring(0, desc_end).lastIndexOf(" "))) + "<span class=\"font-bold\"> ...</span>";
	return desc;
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, null, safe_not_equal, {});
	}
}

export default Component;
export { get_excerpt };