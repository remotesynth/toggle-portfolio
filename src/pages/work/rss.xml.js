import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const work = await getCollection("work");
  return rss({
    // `<title>` field in output xml
    title: "Toggle's Work",
    // `<description>` field in output xml
    description: "Toggle makes toggles",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: work.map((item) => ({
      title: item.data.title,
      pubDate: item.data.publishDate,
      description: item.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/work/${work.slug}/`,
    })),
  });
}
