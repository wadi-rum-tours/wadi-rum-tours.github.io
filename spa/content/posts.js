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

import Aside from "../components/aside.svelte";
import PostMeta from "../components/post_meta.svelte";

function create_fragment(ctx) {
	let section;
	let div0;
	let t0;
	let div6;
	let div5;
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t1;
	let cite;
	let raw0_value = /*image*/ ctx[5].citation.replaceAll("<a ", "<a target='blank' rel='noopener' ") + "";
	let t2;
	let div3;
	let h1;
	let t3;
	let t4;
	let div2;
	let postmeta;
	let t5;
	let p;
	let t6;
	let div4;
	let aside;
	let t7;
	let div7;
	let current;

	postmeta = new PostMeta({
			props: {
				post: /*post*/ ctx[8],
				catgPosts: /*catgPosts*/ ctx[1],
				tagsPosts: /*tagsPosts*/ ctx[2],
				pm: /*pm*/ ctx[6]
			}
		});

	aside = new Aside({
			props: {
				allPosts: /*allPosts*/ ctx[0],
				catgPosts: /*catgPosts*/ ctx[1],
				tagsPosts: /*tagsPosts*/ ctx[2],
				socialLinks: /*socialLinks*/ ctx[7]
			}
		});

	return {
		c() {
			section = element("section");
			div0 = element("div");
			t0 = space();
			div6 = element("div");
			div5 = element("div");
			div1 = element("div");
			img = element("img");
			t1 = space();
			cite = element("cite");
			t2 = space();
			div3 = element("div");
			h1 = element("h1");
			t3 = text(/*title*/ ctx[4]);
			t4 = space();
			div2 = element("div");
			create_component(postmeta.$$.fragment);
			t5 = space();
			p = element("p");
			t6 = space();
			div4 = element("div");
			create_component(aside.$$.fragment);
			t7 = space();
			div7 = element("div");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(section_nodes);
			div6 = claim_element(section_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t1 = claim_space(div1_nodes);
			cite = claim_element(div1_nodes, "CITE", { class: true });
			var cite_nodes = children(cite);
			cite_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true, role: true });
			var div3_nodes = children(div3);
			h1 = claim_element(div3_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, /*title*/ ctx[4]);
			h1_nodes.forEach(detach);
			t4 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true, role: true });
			var div2_nodes = children(div2);
			claim_component(postmeta.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach);
			t5 = claim_space(div3_nodes);
			p = claim_element(div3_nodes, "P", { class: true, role: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(aside.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t7 = claim_space(section_nodes);
			div7 = claim_element(section_nodes, "DIV", { class: true });
			children(div7).forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(img, "class", "rounded-lg overflow-hidden w-full h-screen-60 object-cover object-center");
			if (img.src !== (img_src_value = "assets/posts/" + /*image*/ ctx[5].src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*image*/ ctx[5].alt);
			attr(cite, "class", "text-meta");
			attr(div1, "class", "relative mb-8 w-full");
			attr(h1, "class", "header mb-2");
			attr(div2, "class", "text-meta flex flex-wrap");
			attr(div2, "role", "complementary");
			attr(p, "class", "mt-6");
			attr(p, "role", "main");
			attr(div3, "class", "w-full md:w-9/12 mb-5 sm:mb-0 px-0 md:pr-10");
			attr(div3, "role", "article");
			attr(div4, "class", "w-full md:w-3/12 mb-5 mb-lg-0 px-0");
			attr(div5, "class", "row flex flex-wrap");
			attr(div6, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div7, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(section, "class", "section flex flex-wrap items-center justify-between py-6 sm:py-16");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div0);
			append(section, t0);
			append(section, div6);
			append(div6, div5);
			append(div5, div1);
			append(div1, img);
			append(div1, t1);
			append(div1, cite);
			cite.innerHTML = raw0_value;
			append(div5, t2);
			append(div5, div3);
			append(div3, h1);
			append(h1, t3);
			append(div3, t4);
			append(div3, div2);
			mount_component(postmeta, div2, null);
			append(div3, t5);
			append(div3, p);
			p.innerHTML = /*articleBody*/ ctx[3];
			append(div5, t6);
			append(div5, div4);
			mount_component(aside, div4, null);
			append(section, t7);
			append(section, div7);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*image*/ 32 && img.src !== (img_src_value = "assets/posts/" + /*image*/ ctx[5].src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*image*/ 32 && img_alt_value !== (img_alt_value = /*image*/ ctx[5].alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*image*/ 32) && raw0_value !== (raw0_value = /*image*/ ctx[5].citation.replaceAll("<a ", "<a target='blank' rel='noopener' ") + "")) cite.innerHTML = raw0_value;;
			if (!current || dirty & /*title*/ 16) set_data(t3, /*title*/ ctx[4]);
			const postmeta_changes = {};
			if (dirty & /*catgPosts*/ 2) postmeta_changes.catgPosts = /*catgPosts*/ ctx[1];
			if (dirty & /*tagsPosts*/ 4) postmeta_changes.tagsPosts = /*tagsPosts*/ ctx[2];
			postmeta.$set(postmeta_changes);
			if (!current || dirty & /*articleBody*/ 8) p.innerHTML = /*articleBody*/ ctx[3];;
			const aside_changes = {};
			if (dirty & /*allPosts*/ 1) aside_changes.allPosts = /*allPosts*/ ctx[0];
			if (dirty & /*catgPosts*/ 2) aside_changes.catgPosts = /*catgPosts*/ ctx[1];
			if (dirty & /*tagsPosts*/ 4) aside_changes.tagsPosts = /*tagsPosts*/ ctx[2];
			aside.$set(aside_changes);
		},
		i(local) {
			if (current) return;
			transition_in(postmeta.$$.fragment, local);
			transition_in(aside.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(postmeta.$$.fragment, local);
			transition_out(aside.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(postmeta);
			destroy_component(aside);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { idxContent } = $$props,
		{ allPosts } = $$props,
		{ catgPosts } = $$props,
		{ tagsPosts } = $$props;

	let { articleBody } = $$props,
		{ title } = $$props,
		{ image } = $$props,
		{ author } = $$props;

	let { dateCreated } = $$props,
		{ dateModified } = $$props,
		{ categories } = $$props,
		{ tags } = $$props;

	// Post Meta configuration values
	const pm = {
		author: true,
		date_modified: true,
		date_created: true,
		description: false,
		catg_tags: true,
		continue: false
	};

	let socialLinks = idxContent.socialLinks;

	let post = {
		author_url: author.url,
		author_name: author.name,
		dateCreated,
		dateModified,
		tags,
		catgs: categories
	};

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(9, idxContent = $$props.idxContent);
		if ("allPosts" in $$props) $$invalidate(0, allPosts = $$props.allPosts);
		if ("catgPosts" in $$props) $$invalidate(1, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(2, tagsPosts = $$props.tagsPosts);
		if ("articleBody" in $$props) $$invalidate(3, articleBody = $$props.articleBody);
		if ("title" in $$props) $$invalidate(4, title = $$props.title);
		if ("image" in $$props) $$invalidate(5, image = $$props.image);
		if ("author" in $$props) $$invalidate(10, author = $$props.author);
		if ("dateCreated" in $$props) $$invalidate(11, dateCreated = $$props.dateCreated);
		if ("dateModified" in $$props) $$invalidate(12, dateModified = $$props.dateModified);
		if ("categories" in $$props) $$invalidate(13, categories = $$props.categories);
		if ("tags" in $$props) $$invalidate(14, tags = $$props.tags);
	};

	return [
		allPosts,
		catgPosts,
		tagsPosts,
		articleBody,
		title,
		image,
		pm,
		socialLinks,
		post,
		idxContent,
		author,
		dateCreated,
		dateModified,
		categories,
		tags
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 9,
			allPosts: 0,
			catgPosts: 1,
			tagsPosts: 2,
			articleBody: 3,
			title: 4,
			image: 5,
			author: 10,
			dateCreated: 11,
			dateModified: 12,
			categories: 13,
			tags: 14
		});
	}
}

export default Component;