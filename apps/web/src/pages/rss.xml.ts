import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config/site.mjs";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const allSpells = await getCollection("incantations", ({ data }) => !data.draft);
	const sortedSpells = allSpells
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, 100);

	return rss({
		title: `${SITE.title} - ${SITE.subtitle}`,
		description: SITE.description,
		site: context.site?.toString() || SITE.url,
		items: sortedSpells.map((spell) => ({
			title: spell.data.title,
			pubDate: spell.data.pubDate,
			description: spell.data.description,
			link: `/${spell.id}/`,
			categories: [spell.data.type, spell.data.gofCategory, ...spell.data.tags].filter(Boolean),
			author: spell.data.author,
		})),
		customData: `<language>${SITE.defaultLanguage || "en"}</language>`,
	});
}
