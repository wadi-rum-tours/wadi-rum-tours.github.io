/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from "svelte/internal";

import Ogp from "./openGraph.svelte";
import Twitter from "./twitter.svelte";
import { get_excerpt } from "./get_excerpt.svelte";

function create_fragment(ctx) {
	let title;
	let t0;
	let t1;
	let meta;
	let t2;
	let ogp;
	let t3;
	let twitter;
	let current;

	ogp = new Ogp({
			props: {
				url: /*url*/ ctx[0],
				site_name: /*site_name*/ ctx[8],
				locale: /*locale*/ ctx[9],
				isArticle: /*isArticle*/ ctx[4],
				page_title: /*page_title*/ ctx[3],
				description: /*description*/ ctx[5],
				image_url: /*image_url*/ ctx[1],
				image_alt: /*image_alt*/ ctx[2],
				author_site: /*author_site*/ ctx[11],
				dateCreated: /*dateCreated*/ ctx[6],
				dateModified: /*dateModified*/ ctx[7]
			}
		});

	twitter = new Twitter({
			props: {
				author: /*author*/ ctx[10],
				image_url: /*image_url*/ ctx[1],
				twitterUsername: /*twitterUsername*/ ctx[12]
			}
		});

	return {
		c() {
			title = element("title");
			t0 = text(/*page_title*/ ctx[3]);
			t1 = space();
			meta = element("meta");
			t2 = space();
			create_component(ogp.$$.fragment);
			t3 = space();
			create_component(twitter.$$.fragment);
			this.h();
		},
		l(nodes) {
			title = claim_element(nodes, "TITLE", {});
			var title_nodes = children(title);
			t0 = claim_text(title_nodes, /*page_title*/ ctx[3]);
			title_nodes.forEach(detach);
			t1 = claim_space(nodes);
			meta = claim_element(nodes, "META", { name: true, content: true });
			t2 = claim_space(nodes);
			claim_component(ogp.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(twitter.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(meta, "name", "description");
			attr(meta, "content", /*description*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, title, anchor);
			append(title, t0);
			insert(target, t1, anchor);
			insert(target, meta, anchor);
			insert(target, t2, anchor);
			mount_component(ogp, target, anchor);
			insert(target, t3, anchor);
			mount_component(twitter, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*page_title*/ 8) set_data(t0, /*page_title*/ ctx[3]);

			if (!current || dirty & /*description*/ 32) {
				attr(meta, "content", /*description*/ ctx[5]);
			}

			const ogp_changes = {};
			if (dirty & /*url*/ 1) ogp_changes.url = /*url*/ ctx[0];
			if (dirty & /*isArticle*/ 16) ogp_changes.isArticle = /*isArticle*/ ctx[4];
			if (dirty & /*page_title*/ 8) ogp_changes.page_title = /*page_title*/ ctx[3];
			if (dirty & /*description*/ 32) ogp_changes.description = /*description*/ ctx[5];
			if (dirty & /*image_url*/ 2) ogp_changes.image_url = /*image_url*/ ctx[1];
			if (dirty & /*image_alt*/ 4) ogp_changes.image_alt = /*image_alt*/ ctx[2];
			if (dirty & /*dateCreated*/ 64) ogp_changes.dateCreated = /*dateCreated*/ ctx[6];
			if (dirty & /*dateModified*/ 128) ogp_changes.dateModified = /*dateModified*/ ctx[7];
			ogp.$set(ogp_changes);
			const twitter_changes = {};
			if (dirty & /*image_url*/ 2) twitter_changes.image_url = /*image_url*/ ctx[1];
			twitter.$set(twitter_changes);
		},
		i(local) {
			if (current) return;
			transition_in(ogp.$$.fragment, local);
			transition_in(twitter.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(ogp.$$.fragment, local);
			transition_out(twitter.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(title);
			if (detaching) detach(t1);
			if (detaching) detach(meta);
			if (detaching) detach(t2);
			destroy_component(ogp, detaching);
			if (detaching) detach(t3);
			destroy_component(twitter, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { idxContent } = $$props, { content } = $$props, { baseurl } = $$props;

	let { url } = $$props,
		{ image_url } = $$props,
		{ image_alt } = $$props,
		{ page_title } = $$props,
		{ isArticle } = $$props,
		{ description } = $$props,
		{ dateCreated } = $$props,
		{ dateModified } = $$props;

	// Define site-level attributes
	let site_name = idxContent.name;

	let site_url = idxContent.site + baseurl;
	let locale = idxContent.SEO.locale;
	let author = idxContent.SEO.author;
	let author_site = idxContent.SEO.author_site;
	let twitterUsername = idxContent.SEO.twitterUsername;

	// Generate SEO card based on post attributes
	if (content.type === "posts") {
		isArticle = true;
		page_title = content.fields.title;
		description = get_excerpt(content.fields.articleBody, 160);
		url = site_url + content.path + "/";
		image_url = site_url + "assets/posts/" + content.fields.image.src;
		image_alt = content.fields.image.alt;
		dateCreated = content.fields.dateCreated;
		dateModified = content.fields.dateModified;
	} else if (content.path === "pages/about") {
		isArticle = true; // Generate SEO card based on About me page attributes
		page_title = idxContent.name + " | " + content.fields.title;
		description = content.fields.hero.tagline;
		url = site_url + content.path + "/";
		image_url = site_url + "assets/pages/" + content.fields.image.src;
		image_alt = content.fields.image.alt;
	} else {
		isArticle = false; // Default SEO card to site attributes
		page_title = idxContent.title;
		description = idxContent.description;
		url = site_url;
		image_url = site_url + "assets/" + idxContent.SEO.image;
		image_alt = page_title;
	}

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(13, idxContent = $$props.idxContent);
		if ("content" in $$props) $$invalidate(14, content = $$props.content);
		if ("baseurl" in $$props) $$invalidate(15, baseurl = $$props.baseurl);
		if ("url" in $$props) $$invalidate(0, url = $$props.url);
		if ("image_url" in $$props) $$invalidate(1, image_url = $$props.image_url);
		if ("image_alt" in $$props) $$invalidate(2, image_alt = $$props.image_alt);
		if ("page_title" in $$props) $$invalidate(3, page_title = $$props.page_title);
		if ("isArticle" in $$props) $$invalidate(4, isArticle = $$props.isArticle);
		if ("description" in $$props) $$invalidate(5, description = $$props.description);
		if ("dateCreated" in $$props) $$invalidate(6, dateCreated = $$props.dateCreated);
		if ("dateModified" in $$props) $$invalidate(7, dateModified = $$props.dateModified);
	};

	return [
		url,
		image_url,
		image_alt,
		page_title,
		isArticle,
		description,
		dateCreated,
		dateModified,
		site_name,
		locale,
		author,
		author_site,
		twitterUsername,
		idxContent,
		content,
		baseurl
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 13,
			content: 14,
			baseurl: 15,
			url: 0,
			image_url: 1,
			image_alt: 2,
			page_title: 3,
			isArticle: 4,
			description: 5,
			dateCreated: 6,
			dateModified: 7
		});
	}
}

export default Component;