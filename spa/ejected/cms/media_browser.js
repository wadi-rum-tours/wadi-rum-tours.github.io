/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	svg_element,
	text,
	transition_in,
	transition_out
} from "svelte/internal";

import { env } from "../env.js";
import MediaGrid from "./media_grid.svelte";
import ButtonWrapper from "./button_wrapper.svelte";
import Button from "./button.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

// (75:8) {#each filters as filter}
function create_each_block(ctx) {
	let div;
	let t_value = /*filter*/ ctx[14] + "";
	let t;
	let div_class_value;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[10](/*filter*/ ctx[14]);
	}

	return {
		c() {
			div = element("div");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, t_value);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", div_class_value = "filter" + (/*enabledFilters*/ ctx[0].includes(/*filter*/ ctx[14])
			? " active"
			: "") + " svelte-1hs4gys");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);

			if (!mounted) {
				dispose = listen(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*filters*/ 4 && t_value !== (t_value = /*filter*/ ctx[14] + "")) set_data(t, t_value);

			if (dirty & /*enabledFilters, filters*/ 5 && div_class_value !== (div_class_value = "filter" + (/*enabledFilters*/ ctx[0].includes(/*filter*/ ctx[14])
			? " active"
			: "") + " svelte-1hs4gys")) {
				attr(div, "class", div_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (79:8) {#if enabledFilters.length > 0}
function create_if_block_1(ctx) {
	let div;
	let svg;
	let path;
	let line0;
	let line1;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			line0 = svg_element("line");
			line1 = svg_element("line");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			svg = claim_element(
				div_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg_nodes = children(svg);
			path = claim_element(svg_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path).forEach(detach);
			line0 = claim_element(svg_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line0).forEach(detach);
			line1 = claim_element(svg_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line1).forEach(detach);
			svg_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(path, "stroke", "none");
			attr(path, "d", "M0 0h24v24H0z");
			attr(path, "fill", "none");
			attr(line0, "x1", "18");
			attr(line0, "y1", "6");
			attr(line0, "x2", "6");
			attr(line0, "y2", "18");
			attr(line1, "x1", "6");
			attr(line1, "y1", "6");
			attr(line1, "x2", "18");
			attr(line1, "y2", "18");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "icon icon-tabler icon-tabler-x");
			attr(svg, "width", "20");
			attr(svg, "height", "20");
			attr(svg, "viewBox", "5 5 14 14");
			attr(svg, "stroke-width", "1.5");
			attr(svg, "stroke", "#2c3e50");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
			attr(div, "class", "close svelte-1hs4gys");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, svg);
			append(svg, path);
			append(svg, line0);
			append(svg, line1);

			if (!mounted) {
				dispose = listen(div, "click", /*clearFilters*/ ctx[6]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (91:0) {#if selectedMedia.length > 0}
function create_if_block(ctx) {
	let buttonwrapper;
	let current;

	buttonwrapper = new ButtonWrapper({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(buttonwrapper.$$.fragment);
		},
		l(nodes) {
			claim_component(buttonwrapper.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(buttonwrapper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const buttonwrapper_changes = {};

			if (dirty & /*$$scope, mediaList*/ 131088) {
				buttonwrapper_changes.$$scope = { dirty, ctx };
			}

			buttonwrapper.$set(buttonwrapper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(buttonwrapper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(buttonwrapper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(buttonwrapper, detaching);
		}
	};
}

// (92:4) <ButtonWrapper>
function create_default_slot(ctx) {
	let button0;
	let t0;
	let t1;
	let div;
	let button1;
	let updating_mediaList;
	let current;
	let mounted;
	let dispose;

	function button1_mediaList_binding(value) {
		/*button1_mediaList_binding*/ ctx[12](value);
	}

	let button1_props = {
		buttonText: "Delete Selected Media",
		action: "delete",
		encoding: "text"
	};

	if (/*mediaList*/ ctx[4] !== void 0) {
		button1_props.mediaList = /*mediaList*/ ctx[4];
	}

	button1 = new Button({ props: button1_props });
	binding_callbacks.push(() => bind(button1, "mediaList", button1_mediaList_binding));

	return {
		c() {
			button0 = element("button");
			t0 = text("Download selected");
			t1 = space();
			div = element("div");
			create_component(button1.$$.fragment);
			this.h();
		},
		l(nodes) {
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, "Download selected");
			button0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(button1.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "delete-wrapper");
		},
		m(target, anchor) {
			insert(target, button0, anchor);
			append(button0, t0);
			insert(target, t1, anchor);
			insert(target, div, anchor);
			mount_component(button1, div, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*downloadFiles*/ ctx[7]),
					listen(div, "click", /*removeAssets*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			const button1_changes = {};

			if (!updating_mediaList && dirty & /*mediaList*/ 16) {
				updating_mediaList = true;
				button1_changes.mediaList = /*mediaList*/ ctx[4];
				add_flush_callback(() => updating_mediaList = false);
			}

			button1.$set(button1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(button0);
			if (detaching) detach(t1);
			if (detaching) detach(div);
			destroy_component(button1);
			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div1;
	let div0;
	let t0;
	let t1;
	let mediagrid;
	let updating_selectedMedia;
	let t2;
	let if_block1_anchor;
	let current;
	let each_value = /*filters*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block0 = /*enabledFilters*/ ctx[0].length > 0 && create_if_block_1(ctx);

	function mediagrid_selectedMedia_binding(value) {
		/*mediagrid_selectedMedia_binding*/ ctx[11](value);
	}

	let mediagrid_props = { files: /*filteredAssets*/ ctx[3] };

	if (/*selectedMedia*/ ctx[1] !== void 0) {
		mediagrid_props.selectedMedia = /*selectedMedia*/ ctx[1];
	}

	mediagrid = new MediaGrid({ props: mediagrid_props });
	binding_callbacks.push(() => bind(mediagrid, "selectedMedia", mediagrid_selectedMedia_binding));
	let if_block1 = /*selectedMedia*/ ctx[1].length > 0 && create_if_block(ctx);

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			create_component(mediagrid.$$.fragment);
			t2 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			t0 = claim_space(div1_nodes);
			if (if_block0) if_block0.l(div1_nodes);
			div1_nodes.forEach(detach);
			t1 = claim_space(div2_nodes);
			claim_component(mediagrid.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach);
			t2 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h() {
			attr(div0, "class", "filters svelte-1hs4gys");
			attr(div1, "class", "filters-wrapper svelte-1hs4gys");
			attr(div2, "class", "media-wrapper svelte-1hs4gys");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append(div1, t0);
			if (if_block0) if_block0.m(div1, null);
			append(div2, t1);
			mount_component(mediagrid, div2, null);
			insert(target, t2, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*enabledFilters, filters, toggleFilter*/ 37) {
				each_value = /*filters*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (/*enabledFilters*/ ctx[0].length > 0) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div1, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			const mediagrid_changes = {};
			if (dirty & /*filteredAssets*/ 8) mediagrid_changes.files = /*filteredAssets*/ ctx[3];

			if (!updating_selectedMedia && dirty & /*selectedMedia*/ 2) {
				updating_selectedMedia = true;
				mediagrid_changes.selectedMedia = /*selectedMedia*/ ctx[1];
				add_flush_callback(() => updating_selectedMedia = false);
			}

			mediagrid.$set(mediagrid_changes);

			if (/*selectedMedia*/ ctx[1].length > 0) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*selectedMedia*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(mediagrid.$$.fragment, local);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(mediagrid.$$.fragment, local);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_each(each_blocks, detaching);
			if (if_block0) if_block0.d();
			destroy_component(mediagrid);
			if (detaching) detach(t2);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(if_block1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let filteredAssets;
	let mediaList;
	let { assets } = $$props;
	let baseUrl = env.local ? "/" : env.baseurl;
	let filters = [];
	let enabledFilters = [];
	let selectedMedia = [];

	for (const asset of assets) {
		// Remove first (assets folder) and last (filename) elements.
		const folders = asset.split("/").slice(1, -1);

		for (const folder of folders) {
			if (!filters.includes(folder)) {
				// Add filter and force update
				filters = [...filters, folder];
			}
		}
	}

	const toggleFilter = filter => {
		if (enabledFilters.includes(filter)) {
			// Remove filter
			$$invalidate(0, enabledFilters = enabledFilters.filter(current => current != filter));
		} else {
			// Add filter and force update for enabled filters
			$$invalidate(0, enabledFilters = [...enabledFilters, filter]);
		}
	};

	const clearFilters = () => {
		$$invalidate(0, enabledFilters = []);
	};

	const downloadFiles = () => {
		selectedMedia.forEach(mediaFile => {
			const a = document.createElement("a");
			a.setAttribute("href", mediaFile);
			a.setAttribute("download", mediaFile.substring(mediaFile.lastIndexOf("/") + 1));
			a.click();
		});
	};

	const removeAssets = () => {
		selectedMedia.forEach(m => {
			$$invalidate(9, assets = assets.filter(i => i != m));
		});

		$$invalidate(1, selectedMedia = []);
	};

	const click_handler = filter => toggleFilter(filter);

	function mediagrid_selectedMedia_binding(value) {
		selectedMedia = value;
		$$invalidate(1, selectedMedia);
	}

	function button1_mediaList_binding(value) {
		mediaList = value;
		($$invalidate(4, mediaList), $$invalidate(1, selectedMedia));
	}

	$$self.$$set = $$props => {
		if ("assets" in $$props) $$invalidate(9, assets = $$props.assets);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*assets, enabledFilters*/ 513) {
			// Filter assets
			$: $$invalidate(3, filteredAssets = assets.filter(asset => enabledFilters.length == 0 || asset.split("/").// Remove first (assets folder) and last (filename) elements.
			slice(1, -1).some(folder => enabledFilters.includes(folder))).map(asset => baseUrl + asset));
		}

		if ($$self.$$.dirty & /*selectedMedia*/ 2) {
			// Create objects that can be used by GitLab API
			$: $$invalidate(4, mediaList = selectedMedia.map(i => {
				return { file: i, contents: null };
			}));
		}
	};

	return [
		enabledFilters,
		selectedMedia,
		filters,
		filteredAssets,
		mediaList,
		toggleFilter,
		clearFilters,
		downloadFiles,
		removeAssets,
		assets,
		click_handler,
		mediagrid_selectedMedia_binding,
		button1_mediaList_binding
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { assets: 9 });
	}
}

export default Component;