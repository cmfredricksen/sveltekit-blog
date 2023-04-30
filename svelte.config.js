import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { escapeSvelte, mdsvex } from "mdsvex"

import shiki from "shiki"
import remarkToc from "remark-toc"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeSlug from "rehype-slug"

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	layout: {
		_: "./src/mdsvex.svelte"
	},
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await shiki.getHighlighter({ theme: "monokai" })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\`}`
		}
	},
	rehypePlugins: [rehypeSlug],
	remarkPlugins: [remarkToc, remarkUnwrapImages]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter(),
		files: {
			lib: "src/lib"
		}
	}
}

export default config
