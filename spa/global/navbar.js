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
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text
} from "svelte/internal";

import { onMount } from "svelte";
import { writable } from "svelte/store";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

// (72:10) {:else}
function create_else_block(ctx) {
	let span;
	let t_value = /*idxContent*/ ctx[2].name + "";
	let t;

	return {
		c() {
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			span = claim_element(nodes, "SPAN", { class: true, style: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "navmenu");
			set_style(span, "border-bottom", "4px solid transparent");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*idxContent*/ 4 && t_value !== (t_value = /*idxContent*/ ctx[2].name + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (66:10) {#if site_name.length > 1}
function create_if_block_1(ctx) {
	let span0;
	let t0_value = /*site_name*/ ctx[5][0].toUpperCase() + "";
	let t0;
	let span1;
	let t1_value = /*site_name*/ ctx[5][1].toUpperCase() + "";
	let t1;

	return {
		c() {
			span0 = element("span");
			t0 = text(t0_value);
			span1 = element("span");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			span0 = claim_element(nodes, "SPAN", { class: true, style: true });
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, t0_value);
			span0_nodes.forEach(detach);
			span1 = claim_element(nodes, "SPAN", { class: true, style: true });
			var span1_nodes = children(span1);
			t1 = claim_text(span1_nodes, t1_value);
			span1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span0, "class", "accent");
			set_style(span0, "opacity", "1");
			attr(span1, "class", "navmenu");
			set_style(span1, "border-bottom", "4px solid transparent");
		},
		m(target, anchor) {
			insert(target, span0, anchor);
			append(span0, t0);
			insert(target, span1, anchor);
			append(span1, t1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span0);
			if (detaching) detach(span1);
		}
	};
}

// (118:12) {#if page.fields.enabled && page.fields.menu}
function create_if_block(ctx) {
	let a;
	let span;
	let t_value = /*page*/ ctx[9].fields.title.split(" ")[0] + "";
	let t;
	let span_class_value;
	let a_href_value;

	return {
		c() {
			a = element("a");
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { role: true, class: true, href: true });
			var a_nodes = children(a);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", span_class_value = "navmenu" + (/*content*/ ctx[3].path == /*page*/ ctx[9].path
			? " active"
			: ""));

			attr(a, "role", "menuitem");
			attr(a, "class", "block md:inline-flex px-2 py-1");
			attr(a, "href", a_href_value = /*page*/ ctx[9].path);
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, span);
			append(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*allPages*/ 2 && t_value !== (t_value = /*page*/ ctx[9].fields.title.split(" ")[0] + "")) set_data(t, t_value);

			if (dirty & /*content, allPages*/ 10 && span_class_value !== (span_class_value = "navmenu" + (/*content*/ ctx[3].path == /*page*/ ctx[9].path
			? " active"
			: ""))) {
				attr(span, "class", span_class_value);
			}

			if (dirty & /*allPages*/ 2 && a_href_value !== (a_href_value = /*page*/ ctx[9].path)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (117:10) {#each allPages as page, i}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*page*/ ctx[9].fields.enabled && /*page*/ ctx[9].fields.menu && create_if_block(ctx);

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
			if (/*page*/ ctx[9].fields.enabled && /*page*/ ctx[9].fields.menu) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
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

function create_fragment(ctx) {
	let div6;
	let div0;
	let t0;
	let div4;
	let nav;
	let h1;
	let img;
	let img_src_value;
	let t1;
	let a0;
	let t2;
	let div1;
	let button0;
	let i0;
	let i0_class_value;
	let t3;
	let i1;
	let i1_class_value;
	let t4;
	let div3;
	let div2;
	let a1;
	let span0;
	let t5;
	let span0_class_value;
	let t6;
	let a2;
	let span1;
	let t7;
	let span1_class_value;
	let t8;
	let t9;
	let button1;
	let span2;
	let i2;
	let div3_role_value;
	let div3_class_value;
	let t10;
	let div5;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*site_name*/ ctx[5].length > 1) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);
	let each_value = /*allPages*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div6 = element("div");
			div0 = element("div");
			t0 = space();
			div4 = element("div");
			nav = element("nav");
			h1 = element("h1");
			img = element("img");
			t1 = space();
			a0 = element("a");
			if_block.c();
			t2 = space();
			div1 = element("div");
			button0 = element("button");
			i0 = element("i");
			t3 = space();
			i1 = element("i");
			t4 = space();
			div3 = element("div");
			div2 = element("div");
			a1 = element("a");
			span0 = element("span");
			t5 = text("Home");
			t6 = space();
			a2 = element("a");
			span1 = element("span");
			t7 = text("Projects");
			t8 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			button1 = element("button");
			span2 = element("span");
			i2 = element("i");
			t10 = space();
			div5 = element("div");
			this.h();
		},
		l(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true, role: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t0 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			nav = claim_element(div4_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			h1 = claim_element(nav_nodes, "H1", { class: true });
			var h1_nodes = children(h1);

			img = claim_element(h1_nodes, "IMG", {
				width: true,
				height: true,
				src: true,
				alt: true
			});

			t1 = claim_space(h1_nodes);
			a0 = claim_element(h1_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			if_block.l(a0_nodes);
			a0_nodes.forEach(detach);
			h1_nodes.forEach(detach);
			t2 = claim_space(nav_nodes);
			div1 = claim_element(nav_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			button0 = claim_element(div1_nodes, "BUTTON", { id: true, type: true, class: true });
			var button0_nodes = children(button0);
			i0 = claim_element(button0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			t3 = claim_space(button0_nodes);
			i1 = claim_element(button0_nodes, "I", { class: true });
			children(i1).forEach(detach);
			button0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t4 = claim_space(nav_nodes);
			div3 = claim_element(nav_nodes, "DIV", { role: true, class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a1 = claim_element(div2_nodes, "A", { role: true, class: true, href: true });
			var a1_nodes = children(a1);
			span0 = claim_element(a1_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t5 = claim_text(span0_nodes, "Home");
			span0_nodes.forEach(detach);
			a1_nodes.forEach(detach);
			t6 = claim_space(div2_nodes);
			a2 = claim_element(div2_nodes, "A", { role: true, class: true, href: true });
			var a2_nodes = children(a2);
			span1 = claim_element(a2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t7 = claim_text(span1_nodes, "Projects");
			span1_nodes.forEach(detach);
			a2_nodes.forEach(detach);
			t8 = claim_space(div2_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div2_nodes);
			}

			t9 = claim_space(div2_nodes);

			button1 = claim_element(div2_nodes, "BUTTON", {
				id: true,
				type: true,
				"aria-checked": true,
				class: true
			});

			var button1_nodes = children(button1);
			span2 = claim_element(button1_nodes, "SPAN", { class: true });
			var span2_nodes = children(span2);
			i2 = claim_element(span2_nodes, "I", { class: true });
			children(i2).forEach(detach);
			span2_nodes.forEach(detach);
			button1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t10 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			children(div5).forEach(detach);
			div6_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(img, "width", "50");
			attr(img, "height", "50");
			if (img.src !== (img_src_value = "assets/logo.svg")) attr(img, "src", img_src_value);
			attr(img, "alt", "Logo");
			attr(a0, "class", "navmenu ml-2 text-4xl");
			attr(a0, "href", ".");
			attr(h1, "class", "font-bold opacity-100 my-0 flex items-center");
			attr(i0, "class", i0_class_value = "las la-bars" + (/*menuShow*/ ctx[4] ? "hidden" : ""));
			attr(i1, "class", i1_class_value = "las la-window-close" + (/*menuShow*/ ctx[4] ? "" : "hidden"));
			attr(button0, "id", "menu");
			attr(button0, "type", "button");
			attr(button0, "class", "focus:outline-none");
			attr(div1, "class", "navmenu text-4xl flex md:hidden items-center");
			attr(span0, "class", span0_class_value = "navmenu" + (/*content*/ ctx[3].path == "/" ? " active" : ""));
			attr(a1, "role", "menuitem");
			attr(a1, "class", "block md:inline-flex px-2 py-1 md:py-0");
			attr(a1, "href", ".");
			attr(span1, "class", span1_class_value = "navmenu" + (/*content*/ ctx[3].path == "projs" ? " active" : ""));
			attr(a2, "role", "menuitem");
			attr(a2, "class", "block md:inline-flex px-2 py-1 md:py-0");
			attr(a2, "href", "projects");
			attr(i2, "class", "las la-adjust text-2xl");
			attr(span2, "class", "navmenu");
			attr(button1, "id", "is-dark");
			attr(button1, "type", "button");
			attr(button1, "aria-checked", /*isDark*/ ctx[0]);
			attr(button1, "class", "inline-block md:inline-flex px-2 py-1 md:py-0");
			attr(div2, "class", "text-xl");
			attr(div3, "role", div3_role_value = /*menuShow*/ ctx[4] ? "menu" : "menubar");

			attr(div3, "class", div3_class_value = "md:flex w-full md:w-auto text-right mt-5 md:mt-0 " + (/*menuShow*/ ctx[4]
			? "bg-primary bg-opacity-70"
			: "hidden"));

			attr(nav, "class", "flex flex-wrap items-center justify-between");
			attr(div4, "class", "w-full md:w-10/12 xl:w-8/12");
			attr(div5, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(div6, "class", "flex flex-wrap py-2 px-2");
			attr(div6, "role", "banner");
		},
		m(target, anchor) {
			insert(target, div6, anchor);
			append(div6, div0);
			append(div6, t0);
			append(div6, div4);
			append(div4, nav);
			append(nav, h1);
			append(h1, img);
			append(h1, t1);
			append(h1, a0);
			if_block.m(a0, null);
			append(nav, t2);
			append(nav, div1);
			append(div1, button0);
			append(button0, i0);
			append(button0, t3);
			append(button0, i1);
			append(nav, t4);
			append(nav, div3);
			append(div3, div2);
			append(div2, a1);
			append(a1, span0);
			append(span0, t5);
			append(div2, t6);
			append(div2, a2);
			append(a2, span1);
			append(span1, t7);
			append(div2, t8);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append(div2, t9);
			append(div2, button1);
			append(button1, span2);
			append(span2, i2);
			append(div6, t10);
			append(div6, div5);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*toggleNavbar*/ ctx[7]),
					listen(button1, "click", /*toggleDark*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if_block.p(ctx, dirty);

			if (dirty & /*menuShow*/ 16 && i0_class_value !== (i0_class_value = "las la-bars" + (/*menuShow*/ ctx[4] ? "hidden" : ""))) {
				attr(i0, "class", i0_class_value);
			}

			if (dirty & /*menuShow*/ 16 && i1_class_value !== (i1_class_value = "las la-window-close" + (/*menuShow*/ ctx[4] ? "" : "hidden"))) {
				attr(i1, "class", i1_class_value);
			}

			if (dirty & /*content*/ 8 && span0_class_value !== (span0_class_value = "navmenu" + (/*content*/ ctx[3].path == "/" ? " active" : ""))) {
				attr(span0, "class", span0_class_value);
			}

			if (dirty & /*content*/ 8 && span1_class_value !== (span1_class_value = "navmenu" + (/*content*/ ctx[3].path == "projs" ? " active" : ""))) {
				attr(span1, "class", span1_class_value);
			}

			if (dirty & /*allPages, content*/ 10) {
				each_value = /*allPages*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, t9);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*isDark*/ 1) {
				attr(button1, "aria-checked", /*isDark*/ ctx[0]);
			}

			if (dirty & /*menuShow*/ 16 && div3_role_value !== (div3_role_value = /*menuShow*/ ctx[4] ? "menu" : "menubar")) {
				attr(div3, "role", div3_role_value);
			}

			if (dirty & /*menuShow*/ 16 && div3_class_value !== (div3_class_value = "md:flex w-full md:w-auto text-right mt-5 md:mt-0 " + (/*menuShow*/ ctx[4]
			? "bg-primary bg-opacity-70"
			: "hidden"))) {
				attr(div3, "class", div3_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div6);
			if_block.d();
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allPages } = $$props;

	let { isDark } = $$props,
		{ theme } = $$props,
		{ idxContent } = $$props,
		{ content } = $$props;

	let site_name = idxContent.name.split(" ");
	let menuShow = false;

	function toggleDark() {
		// Set the boolean
		$$invalidate(0, isDark = !isDark);

		// Store the change as local storage value
		theme.set(isDark ? "dark" : "light");
	}

	function toggleNavbar() {
		$$invalidate(4, menuShow = !menuShow);
	}

	onMount(() => {
		// Get the value out of storage on-load or set a sane default.
		$$invalidate(8, theme = writable(localStorage.getItem("theme")));

		// Anytime the store changes, update the local storage value.
		theme.subscribe(value => {
			localStorage.setItem("theme", value === "dark" ? "dark" : "light");
		});

		// Set the starting boolean
		$$invalidate(0, isDark = localStorage.theme === "dark" ? true : false);

		const handleOutsideClick = event => {
			if (menuShow && !menu.contains(event.target)) {
				$$invalidate(4, menuShow = false);
			}
		};

		const handleEscape = event => {
			if (menuShow && event.key === "Escape") {
				$$invalidate(4, menuShow = false);
			}
		};

		// add events when element is added to the DOM
		document.addEventListener("click", handleOutsideClick, false);

		document.addEventListener("keyup", handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener("click", handleOutsideClick, false);
			document.removeEventListener("keyup", handleEscape, false);
		};
	});

	$$self.$$set = $$props => {
		if ("allPages" in $$props) $$invalidate(1, allPages = $$props.allPages);
		if ("isDark" in $$props) $$invalidate(0, isDark = $$props.isDark);
		if ("theme" in $$props) $$invalidate(8, theme = $$props.theme);
		if ("idxContent" in $$props) $$invalidate(2, idxContent = $$props.idxContent);
		if ("content" in $$props) $$invalidate(3, content = $$props.content);
	};

	return [
		isDark,
		allPages,
		idxContent,
		content,
		menuShow,
		site_name,
		toggleDark,
		toggleNavbar,
		theme
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			allPages: 1,
			isDark: 0,
			theme: 8,
			idxContent: 2,
			content: 3
		});
	}
}

export default Component;