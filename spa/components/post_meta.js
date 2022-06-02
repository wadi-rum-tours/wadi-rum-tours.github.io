/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

import { get_excerpt } from "../scripts/get_excerpt.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	child_ctx[15] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i].path;
	child_ctx[16] = list[i].name;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[19] = list[i];
	child_ctx[15] = i;
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i].path;
	child_ctx[16] = list[i].name;
	return child_ctx;
}

// (19:2) {#if pm.author}
function create_if_block_9(ctx) {
	let li0;
	let i;
	let i_class_value;
	let t0;
	let li1;
	let a;
	let t1;

	return {
		c() {
			li0 = element("li");
			i = element("i");
			t0 = space();
			li1 = element("li");
			a = element("a");
			t1 = text(/*author_name*/ ctx[4]);
			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			i = claim_element(li0_nodes, "I", { class: true });
			children(i).forEach(detach);
			li0_nodes.forEach(detach);
			t0 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			a = claim_element(li1_nodes, "A", { href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, /*author_name*/ ctx[4]);
			a_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i, "class", i_class_value = "las la-user-astronaut" + (/*pm*/ ctx[2].feature ? " feature" : " standard") + " svelte-1u9o9p2");
			attr(li0, "class", "mx-0 -mt-1 text-meta inline-flex");
			attr(a, "href", /*author_url*/ ctx[3]);
			attr(li1, "class", "mr-2 my-0 inline-flex");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, i);
			insert(target, t0, anchor);
			insert(target, li1, anchor);
			append(li1, a);
			append(a, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*pm*/ 4 && i_class_value !== (i_class_value = "las la-user-astronaut" + (/*pm*/ ctx[2].feature ? " feature" : " standard") + " svelte-1u9o9p2")) {
				attr(i, "class", i_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			if (detaching) detach(t0);
			if (detaching) detach(li1);
		}
	};
}

// (27:2) {#if pm.date_created}
function create_if_block_8(ctx) {
	let li;
	let t0;
	let t1;

	return {
		c() {
			li = element("li");
			t0 = text("Created: ");
			t1 = text(/*dateCreated*/ ctx[5]);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, "Created: ");
			t1 = claim_text(li_nodes, /*dateCreated*/ ctx[5]);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(li, "class", "mr-2 my-0 inline-flex");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, t0);
			append(li, t1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (32:2) {#if pm.date_modified}
function create_if_block_7(ctx) {
	let li;
	let t0;
	let t1;

	return {
		c() {
			li = element("li");
			t0 = text("Updated: ");
			t1 = text(/*dateModified*/ ctx[6]);
			this.h();
		},
		l(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, "Updated: ");
			t1 = claim_text(li_nodes, /*dateModified*/ ctx[6]);
			li_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(li, "class", "mr-2 my-0 inline-flex");
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, t0);
			append(li, t1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(li);
		}
	};
}

// (37:2) {#if pm.catg_tags}
function create_if_block_2(ctx) {
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let each_value_2 = /*catgs*/ ctx[9];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value = /*tags*/ ctx[8];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			li0 = element("li");
			t0 = text("Categories: ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t1 = space();
			li1 = element("li");
			t2 = text("Tags: ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Categories: ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(li0_nodes);
			}

			li0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Tags: ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(li1_nodes);
			}

			li1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(li0, "class", "mr-2 my-0 inline-flex");
			attr(li1, "class", "mr-2 my-0 inline-flex");
		},
		m(target, anchor) {
			insert(target, li0, anchor);
			append(li0, t0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(li0, null);
			}

			insert(target, t1, anchor);
			insert(target, li1, anchor);
			append(li1, t2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(li1, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*Object, catgPosts, catgs*/ 513) {
				each_value_2 = /*catgs*/ ctx[9];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(li0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty & /*Object, tagsPosts, tags*/ 258) {
				each_value = /*tags*/ ctx[8];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(li1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) detach(li0);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach(t1);
			if (detaching) detach(li1);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (41:10) {#if catg == name}
function create_if_block_5(ctx) {
	let a;
	let t0_value = /*name*/ ctx[16] + "";
	let t0;
	let t1;
	let a_href_value;
	let if_block_anchor;
	let if_block = /*i*/ ctx[15] < /*catgs*/ ctx[9].length - 1 && create_if_block_6(ctx);

	return {
		c() {
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			t1 = claim_space(a_nodes);
			a_nodes.forEach(detach);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*path*/ ctx[11]);
			attr(a, "class", "meta ml-0.5 svelte-1u9o9p2");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t0);
			append(a, t1);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*catgPosts*/ 1 && t0_value !== (t0_value = /*name*/ ctx[16] + "")) set_data(t0, t0_value);

			if (dirty & /*catgPosts*/ 1 && a_href_value !== (a_href_value = /*path*/ ctx[11])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (44:16) {#if i < catgs.length - 1}
function create_if_block_6(ctx) {
	let t;

	return {
		c() {
			t = text(",");
		},
		l(nodes) {
			t = claim_text(nodes, ",");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (40:8) {#each Object(catgPosts) as { path, name }}
function create_each_block_3(ctx) {
	let if_block_anchor;
	let if_block = /*catg*/ ctx[19] == /*name*/ ctx[16] && create_if_block_5(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*catg*/ ctx[19] == /*name*/ ctx[16]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_5(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (39:18) {#each catgs as catg, i}
function create_each_block_2(ctx) {
	let each_1_anchor;
	let each_value_3 = Object(/*catgPosts*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*catgs, Object, catgPosts*/ 513) {
				each_value_3 = Object(/*catgPosts*/ ctx[0]);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (52:10) {#if tag == name}
function create_if_block_3(ctx) {
	let a;
	let t0_value = /*name*/ ctx[16] + "";
	let t0;
	let t1;
	let a_href_value;
	let if_block_anchor;
	let if_block = /*i*/ ctx[15] < /*tags*/ ctx[8].length - 1 && create_if_block_4(ctx);

	return {
		c() {
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			t1 = claim_space(a_nodes);
			a_nodes.forEach(detach);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*path*/ ctx[11]);
			attr(a, "class", "meta ml-0.5 svelte-1u9o9p2");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t0);
			append(a, t1);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*tagsPosts*/ 2 && t0_value !== (t0_value = /*name*/ ctx[16] + "")) set_data(t0, t0_value);

			if (dirty & /*tagsPosts*/ 2 && a_href_value !== (a_href_value = /*path*/ ctx[11])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (55:16) {#if i < tags.length - 1}
function create_if_block_4(ctx) {
	let t;

	return {
		c() {
			t = text(",");
		},
		l(nodes) {
			t = claim_text(nodes, ",");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (51:8) {#each Object(tagsPosts) as { path, name }}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let if_block = /*tag*/ ctx[13] == /*name*/ ctx[16] && create_if_block_3(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*tag*/ ctx[13] == /*name*/ ctx[16]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (50:12) {#each tags as tag, i}
function create_each_block(ctx) {
	let each_1_anchor;
	let each_value_1 = Object(/*tagsPosts*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*tags, Object, tagsPosts*/ 258) {
				each_value_1 = Object(/*tagsPosts*/ ctx[1]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

// (62:0) {#if pm.description}
function create_if_block_1(ctx) {
	let p;

	return {
		c() {
			p = element("p");
			this.h();
		},
		l(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(p, "class", "text-base mb-8");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = /*cardBody*/ ctx[10];
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (67:0) {#if pm.continue}
function create_if_block(ctx) {
	let div;
	let a;
	let t;

	return {
		c() {
			div = element("div");
			a = element("a");
			t = text("Continue Reading");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, title: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "Continue Reading");
			a_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", /*path*/ ctx[11]);
			attr(a, "title", /*title*/ ctx[7]);
			attr(a, "class", "btn-outline hover:white");
			attr(div, "class", "mb-4");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, a);
			append(a, t);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let ul;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let if_block5_anchor;
	let if_block0 = /*pm*/ ctx[2].author && create_if_block_9(ctx);
	let if_block1 = /*pm*/ ctx[2].date_created && create_if_block_8(ctx);
	let if_block2 = /*pm*/ ctx[2].date_modified && create_if_block_7(ctx);
	let if_block3 = /*pm*/ ctx[2].catg_tags && create_if_block_2(ctx);
	let if_block4 = /*pm*/ ctx[2].description && create_if_block_1(ctx);
	let if_block5 = /*pm*/ ctx[2].continue && create_if_block(ctx);

	return {
		c() {
			ul = element("ul");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			if (if_block3) if_block3.c();
			t3 = space();
			if (if_block4) if_block4.c();
			t4 = space();
			if (if_block5) if_block5.c();
			if_block5_anchor = empty();
		},
		l(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			if (if_block0) if_block0.l(ul_nodes);
			t0 = claim_space(ul_nodes);
			if (if_block1) if_block1.l(ul_nodes);
			t1 = claim_space(ul_nodes);
			if (if_block2) if_block2.l(ul_nodes);
			t2 = claim_space(ul_nodes);
			if (if_block3) if_block3.l(ul_nodes);
			ul_nodes.forEach(detach);
			t3 = claim_space(nodes);
			if (if_block4) if_block4.l(nodes);
			t4 = claim_space(nodes);
			if (if_block5) if_block5.l(nodes);
			if_block5_anchor = empty();
		},
		m(target, anchor) {
			insert(target, ul, anchor);
			if (if_block0) if_block0.m(ul, null);
			append(ul, t0);
			if (if_block1) if_block1.m(ul, null);
			append(ul, t1);
			if (if_block2) if_block2.m(ul, null);
			append(ul, t2);
			if (if_block3) if_block3.m(ul, null);
			insert(target, t3, anchor);
			if (if_block4) if_block4.m(target, anchor);
			insert(target, t4, anchor);
			if (if_block5) if_block5.m(target, anchor);
			insert(target, if_block5_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*pm*/ ctx[2].author) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_9(ctx);
					if_block0.c();
					if_block0.m(ul, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*pm*/ ctx[2].date_created) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_8(ctx);
					if_block1.c();
					if_block1.m(ul, t1);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*pm*/ ctx[2].date_modified) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_7(ctx);
					if_block2.c();
					if_block2.m(ul, t2);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (/*pm*/ ctx[2].catg_tags) {
				if (if_block3) {
					if_block3.p(ctx, dirty);
				} else {
					if_block3 = create_if_block_2(ctx);
					if_block3.c();
					if_block3.m(ul, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (/*pm*/ ctx[2].description) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block_1(ctx);
					if_block4.c();
					if_block4.m(t4.parentNode, t4);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (/*pm*/ ctx[2].continue) {
				if (if_block5) {
					if_block5.p(ctx, dirty);
				} else {
					if_block5 = create_if_block(ctx);
					if_block5.c();
					if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(ul);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (detaching) detach(t3);
			if (if_block4) if_block4.d(detaching);
			if (detaching) detach(t4);
			if (if_block5) if_block5.d(detaching);
			if (detaching) detach(if_block5_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props,
		{ catgPosts } = $$props,
		{ tagsPosts } = $$props,
		{ pm } = $$props;

	let path = post.path;
	let author_url = post.author_url ?? post.fields.author.url;
	let author_name = post.author_name ?? post.fields.author.name;
	let dateCreated = post.dateCreated ?? post.fields.dateCreated;
	let dateModified = post.dateModified ?? post.fields.dateModified;
	let title = post.dateModified ?? post.fields.title ?? "";
	let tags = post.tags ?? post.fields.tags;
	let catgs = post.catgs ?? post.fields.categories;

	let cardBody = pm.description
	? get_excerpt(post.fields.articleBody, 170)
	: "";

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(12, post = $$props.post);
		if ("catgPosts" in $$props) $$invalidate(0, catgPosts = $$props.catgPosts);
		if ("tagsPosts" in $$props) $$invalidate(1, tagsPosts = $$props.tagsPosts);
		if ("pm" in $$props) $$invalidate(2, pm = $$props.pm);
	};

	return [
		catgPosts,
		tagsPosts,
		pm,
		author_url,
		author_name,
		dateCreated,
		dateModified,
		title,
		tags,
		catgs,
		cardBody,
		path,
		post
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			post: 12,
			catgPosts: 0,
			tagsPosts: 1,
			pm: 2
		});
	}
}

export default Component;