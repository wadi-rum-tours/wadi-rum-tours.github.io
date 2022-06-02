/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	claim_element,
	claim_space,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from "svelte/internal";

function create_if_block_1(ctx) {
	let meta0;
	let t;
	let meta1;

	return {
		c() {
			meta0 = element("meta");
			t = space();
			meta1 = element("meta");
			this.h();
		},
		l(nodes) {
			meta0 = claim_element(nodes, "META", { property: true, content: true });
			t = claim_space(nodes);
			meta1 = claim_element(nodes, "META", { property: true, content: true });
			this.h();
		},
		h() {
			attr(meta0, "property", "og:image");
			attr(meta0, "content", /*image_url*/ ctx[6]);
			attr(meta1, "property", "og:image:alt");
			attr(meta1, "content", /*image_alt*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, meta0, anchor);
			insert(target, t, anchor);
			insert(target, meta1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*image_url*/ 64) {
				attr(meta0, "content", /*image_url*/ ctx[6]);
			}

			if (dirty & /*image_alt*/ 128) {
				attr(meta1, "content", /*image_alt*/ ctx[7]);
			}
		},
		d(detaching) {
			if (detaching) detach(meta0);
			if (detaching) detach(t);
			if (detaching) detach(meta1);
		}
	};
}

// (32:0) {#if isArticle}
function create_if_block(ctx) {
	let meta0;
	let t0;
	let meta1;
	let t1;
	let meta2;
	let t2;
	let meta3;

	return {
		c() {
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			meta2 = element("meta");
			t2 = space();
			meta3 = element("meta");
			this.h();
		},
		l(nodes) {
			meta0 = claim_element(nodes, "META", { property: true, content: true });
			t0 = claim_space(nodes);
			meta1 = claim_element(nodes, "META", { property: true, content: true });
			t1 = claim_space(nodes);
			meta2 = claim_element(nodes, "META", { property: true, content: true });
			t2 = claim_space(nodes);
			meta3 = claim_element(nodes, "META", { property: true, content: true });
			this.h();
		},
		h() {
			attr(meta0, "property", "article:publisher");
			attr(meta0, "content", /*site_name*/ ctx[1]);
			attr(meta1, "property", "article:author");
			attr(meta1, "content", /*author_site*/ ctx[8]);
			attr(meta2, "property", "article:published_time");
			attr(meta2, "content", /*dateCreated*/ ctx[9]);
			attr(meta3, "property", "article:modified_time");
			attr(meta3, "content", /*dateModified*/ ctx[10]);
		},
		m(target, anchor) {
			insert(target, meta0, anchor);
			insert(target, t0, anchor);
			insert(target, meta1, anchor);
			insert(target, t1, anchor);
			insert(target, meta2, anchor);
			insert(target, t2, anchor);
			insert(target, meta3, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*site_name*/ 2) {
				attr(meta0, "content", /*site_name*/ ctx[1]);
			}

			if (dirty & /*author_site*/ 256) {
				attr(meta1, "content", /*author_site*/ ctx[8]);
			}

			if (dirty & /*dateCreated*/ 512) {
				attr(meta2, "content", /*dateCreated*/ ctx[9]);
			}

			if (dirty & /*dateModified*/ 1024) {
				attr(meta3, "content", /*dateModified*/ ctx[10]);
			}
		},
		d(detaching) {
			if (detaching) detach(meta0);
			if (detaching) detach(t0);
			if (detaching) detach(meta1);
			if (detaching) detach(t1);
			if (detaching) detach(meta2);
			if (detaching) detach(t2);
			if (detaching) detach(meta3);
		}
	};
}

function create_fragment(ctx) {
	let meta0;
	let t0;
	let meta1;
	let t1;
	let meta2;
	let t2;
	let meta3;
	let meta3_content_value;
	let t3;
	let meta4;
	let t4;
	let meta5;
	let t5;
	let t6;
	let if_block1_anchor;
	let if_block0 = /*image_url*/ ctx[6] && create_if_block_1(ctx);
	let if_block1 = /*isArticle*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			meta2 = element("meta");
			t2 = space();
			meta3 = element("meta");
			t3 = space();
			meta4 = element("meta");
			t4 = space();
			meta5 = element("meta");
			t5 = space();
			if (if_block0) if_block0.c();
			t6 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l(nodes) {
			meta0 = claim_element(nodes, "META", { property: true, content: true });
			t0 = claim_space(nodes);
			meta1 = claim_element(nodes, "META", { property: true, content: true });
			t1 = claim_space(nodes);
			meta2 = claim_element(nodes, "META", { property: true, content: true });
			t2 = claim_space(nodes);
			meta3 = claim_element(nodes, "META", { property: true, content: true });
			t3 = claim_space(nodes);
			meta4 = claim_element(nodes, "META", { property: true, content: true });
			t4 = claim_space(nodes);
			meta5 = claim_element(nodes, "META", { property: true, content: true });
			t5 = claim_space(nodes);
			if (if_block0) if_block0.l(nodes);
			t6 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h() {
			attr(meta0, "property", "og:url");
			attr(meta0, "content", /*url*/ ctx[0]);
			attr(meta1, "property", "og:site_name");
			attr(meta1, "content", /*site_name*/ ctx[1]);
			attr(meta2, "property", "og:locale");
			attr(meta2, "content", /*locale*/ ctx[2]);
			attr(meta3, "property", "og:type");
			attr(meta3, "content", meta3_content_value = /*isArticle*/ ctx[3] ? "article" : "website");
			attr(meta4, "property", "og:title");
			attr(meta4, "content", /*page_title*/ ctx[4]);
			attr(meta5, "property", "og:description");
			attr(meta5, "content", /*description*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, meta0, anchor);
			insert(target, t0, anchor);
			insert(target, meta1, anchor);
			insert(target, t1, anchor);
			insert(target, meta2, anchor);
			insert(target, t2, anchor);
			insert(target, meta3, anchor);
			insert(target, t3, anchor);
			insert(target, meta4, anchor);
			insert(target, t4, anchor);
			insert(target, meta5, anchor);
			insert(target, t5, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert(target, t6, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, if_block1_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*url*/ 1) {
				attr(meta0, "content", /*url*/ ctx[0]);
			}

			if (dirty & /*site_name*/ 2) {
				attr(meta1, "content", /*site_name*/ ctx[1]);
			}

			if (dirty & /*locale*/ 4) {
				attr(meta2, "content", /*locale*/ ctx[2]);
			}

			if (dirty & /*isArticle*/ 8 && meta3_content_value !== (meta3_content_value = /*isArticle*/ ctx[3] ? "article" : "website")) {
				attr(meta3, "content", meta3_content_value);
			}

			if (dirty & /*page_title*/ 16) {
				attr(meta4, "content", /*page_title*/ ctx[4]);
			}

			if (dirty & /*description*/ 32) {
				attr(meta5, "content", /*description*/ ctx[5]);
			}

			if (/*image_url*/ ctx[6]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(t6.parentNode, t6);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*isArticle*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(meta0);
			if (detaching) detach(t0);
			if (detaching) detach(meta1);
			if (detaching) detach(t1);
			if (detaching) detach(meta2);
			if (detaching) detach(t2);
			if (detaching) detach(meta3);
			if (detaching) detach(t3);
			if (detaching) detach(meta4);
			if (detaching) detach(t4);
			if (detaching) detach(meta5);
			if (detaching) detach(t5);
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach(t6);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(if_block1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { url } = $$props,
		{ site_name } = $$props,
		{ locale } = $$props,
		{ isArticle } = $$props,
		{ page_title } = $$props,
		{ description } = $$props,
		{ image_url } = $$props,
		{ image_alt } = $$props,
		{ author_site } = $$props,
		{ dateCreated } = $$props,
		{ dateModified } = $$props;

	$$self.$$set = $$props => {
		if ("url" in $$props) $$invalidate(0, url = $$props.url);
		if ("site_name" in $$props) $$invalidate(1, site_name = $$props.site_name);
		if ("locale" in $$props) $$invalidate(2, locale = $$props.locale);
		if ("isArticle" in $$props) $$invalidate(3, isArticle = $$props.isArticle);
		if ("page_title" in $$props) $$invalidate(4, page_title = $$props.page_title);
		if ("description" in $$props) $$invalidate(5, description = $$props.description);
		if ("image_url" in $$props) $$invalidate(6, image_url = $$props.image_url);
		if ("image_alt" in $$props) $$invalidate(7, image_alt = $$props.image_alt);
		if ("author_site" in $$props) $$invalidate(8, author_site = $$props.author_site);
		if ("dateCreated" in $$props) $$invalidate(9, dateCreated = $$props.dateCreated);
		if ("dateModified" in $$props) $$invalidate(10, dateModified = $$props.dateModified);
	};

	return [
		url,
		site_name,
		locale,
		isArticle,
		page_title,
		description,
		image_url,
		image_alt,
		author_site,
		dateCreated,
		dateModified
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			url: 0,
			site_name: 1,
			locale: 2,
			isArticle: 3,
			page_title: 4,
			description: 5,
			image_url: 6,
			image_alt: 7,
			author_site: 8,
			dateCreated: 9,
			dateModified: 10
		});
	}
}

export default Component;