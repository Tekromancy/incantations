import { getCollection } from "astro:content";

export async function GET() {
	const isDev = import.meta.env.DEV;
	const allIncantations = (
		await getCollection("incantations", ({ data }) => isDev || !data.draft)
	).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const data = allIncantations.map((spell) => ({
		id: spell.id,
		t: spell.data.title,
		d: spell.data.description,
		y: spell.data.type || "",
		c: spell.data.gofCategory || "",
		p: spell.data.gofPattern || "",
		f: spell.data.formula || "",
		g: spell.data.tags || [],
		s: spell.data.arcaneSchool ? spell.data.arcaneSchool.split("//")[0].trim() : "",
		df: spell.data.difficulty || "Adept",
	}));

	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
}
