import { defineConfig } from "vitepress";
import { GROUP_EXPORTS, GROUP_METHODS } from "../../scripts/meta/method-groups.mjs";

const CATEGORY_META: Record<string, { text: string; doc: string }> = {
	array: { text: "Array", doc: "array" },
	collection: { text: "Collection", doc: "collection" },
	date: { text: "Date", doc: "date" },
	func: { text: "Function", doc: "function" },
	lang: { text: "Lang", doc: "lang" },
	math: { text: "Math", doc: "math" },
	number: { text: "Number", doc: "number" },
	object: { text: "Object", doc: "object" },
	seq: { text: "Seq", doc: "seq" },
	string: { text: "String", doc: "string" },
	util: { text: "Util", doc: "util" },
};

const PREFERRED_GROUP_ORDER = [
	"array",
	"collection",
	"date",
	"func",
	"lang",
	"math",
	"number",
	"object",
	"seq",
	"string",
	"util",
];

const categorySidebarItems = PREFERRED_GROUP_ORDER.map((groupName) => {
	const meta = CATEGORY_META[groupName] ?? {
		text: groupName.charAt(0).toUpperCase() + groupName.slice(1),
		doc: groupName,
	};
	const methods = GROUP_METHODS[groupName] ?? [];

	return {
		text: meta.text,
		link: `/api/${meta.doc}`,
		collapsed: true,
		items: methods.map((methodName) => ({
			text: `.${methodName}`,
			link: `/api/${meta.doc}#${methodName}`,
		})),
	};
});

const groupedExportsSidebarItem = {
	text: "Grouped Exports",
	link: "/api/grouped",
	collapsed: true,
	items: GROUP_EXPORTS.map((groupName) => ({
		text: `.${groupName}`,
		link: `/api/grouped#${groupName}`,
	})),
};

export default defineConfig({
	title: "zhiaiwan-utils",
	description: "ESM + TypeScript utility library documentation",
	base: "/zhiaiwan-utils/",
	lang: "en-US",
	cleanUrls: true,
	themeConfig: {
		search: {
			provider: "local",
		},
		nav: [
			{ text: "Guide", link: "/guide/getting-started" },
			{ text: "API", link: "/api/index" },
		],
		sidebar: {
			"/guide/": [
				{
					text: "Guide",
					items: [
						{ text: "Getting Started", link: "/guide/getting-started" },
						{
							text: "Architecture Baseline",
							link: "/guide/architecture-quality-baseline",
						},
						{ text: "Type Inference", link: "/guide/types" },
						{
							text: "Compatibility Matrix",
							link: "/guide/compatibility-matrix",
						},
						{ text: "Gap Checklist", link: "/guide/gap-checklist" },
						{ text: "Migration Notes", link: "/guide/migration" },
						{
							text: "Contributing Workflow",
							link: "/guide/contributing-workflow",
						},
						{
							text: "Release Checklist",
							link: "/guide/release-checklist",
						},
						{
							text: "Deprecation Policy",
							link: "/guide/deprecation-policy",
						},
					],
				},
			],
			"/api/": [
				{
					text: "API",
					items: [
						{ text: "Legacy API Entry", link: "/api/core" },
						...categorySidebarItems,
						groupedExportsSidebarItem,
						{
							text: "Properties",
							link: "/api/properties",
							collapsed: true,
							items: [
								{ text: ".VERSION", link: "/api/properties#version" },
								{ text: ".tap", link: "/api/properties#tap-value-interceptor" },
							],
						},
					],
				},
			],
		},
		socialLinks: [{ icon: "github", link: "https://github.com/zhiaiwan/utils" }],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2026 ZhiAiWan",
		},
	},
});
