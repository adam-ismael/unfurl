// twitter card markup https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html

export const schema = new Map([
  ["twitter:card", { entry: "twitter_card", name: "card", type: "string" }],
  ["twitter:url", { entry: "twitter_card", name: "url", type: "url" }],
  ["twitter:site", { entry: "twitter_card", name: "site", type: "string" }],
  [
    "twitter:creator",
    { entry: "twitter_card", name: "creator", type: "string" },
  ],
  [
    "twitter:creator:id",
    { entry: "twitter_card", name: "creator_id", type: "string" },
  ],
  ["twitter:title", { entry: "twitter_card", name: "title", type: "string" }],
  [
    "twitter:description",
    { entry: "twitter_card", name: "description", type: "string" },
  ],
  [
    "twitter:image",
    { entry: "twitter_card", name: "url", parent: "images", type: "url" },
  ],
  [
    "twitter:image:src",
    { entry: "twitter_card", name: "url", parent: "images", type: "url" },
  ],
  [
    "twitter:image:alt",
    { entry: "twitter_card", name: "alt", parent: "images", type: "string" },
  ],
  [
    "twitter:player",
    { entry: "twitter_card", name: "url", parent: "players", type: "string" },
  ],
  [
    "twitter:player:stream",
    {
      entry: "twitter_card",
      name: "stream",
      parent: "players",
      type: "string",
    },
  ],
  [
    "twitter:player:width",
    { entry: "twitter_card", name: "width", parent: "players", type: "number" },
  ],
  [
    "twitter:player:height",
    {
      entry: "twitter_card",
      name: "height",
      parent: "players",
      type: "number",
    },
  ],
  [
    "twitter:app:id:iphone",
    {
      entry: "twitter_card",
      name: "id",
      parent: "apps",
      category: "iphone",
      type: "string",
    },
  ],
  [
    "twitter:app:name:iphone",
    {
      entry: "twitter_card",
      name: "name",
      parent: "apps",
      category: "iphone",
      type: "string",
    },
  ],
  [
    "twitter:app:url:iphone",
    {
      entry: "twitter_card",
      name: "url",
      parent: "apps",
      category: "iphone",
      type: "string",
    },
  ],
  [
    "twitter:app:id:ipad",
    {
      entry: "twitter_card",
      name: "id",
      parent: "apps",
      category: "ipad",
      type: "string",
    },
  ],
  [
    "twitter:app:name:ipad",
    {
      entry: "twitter_card",
      name: "name",
      parent: "apps",
      category: "ipad",
      type: "string",
    },
  ],
  [
    "twitter:app:url:ipad",
    {
      entry: "twitter_card",
      name: "url",
      parent: "apps",
      category: "ipad",
      type: "string",
    },
  ],
  [
    "twitter:app:id:googleplay",
    {
      entry: "twitter_card",
      name: "id",
      parent: "apps",
      category: "googleplay",
      type: "string",
    },
  ],
  [
    "twitter:app:name:googleplay",
    {
      entry: "twitter_card",
      name: "name",
      parent: "apps",
      category: "googleplay",
      type: "string",
    },
  ],
  [
    "twitter:app:url:googleplay",
    {
      entry: "twitter_card",
      name: "url",
      parent: "apps",
      category: "googleplay",
      type: "string",
    },
  ],
  ["og:title", { entry: "open_graph", name: "title", type: "string" }],
  ["og:type", { entry: "open_graph", name: "type", type: "string" }],
  [
    "og:image",
    { entry: "open_graph", name: "url", parent: "images", type: "url" },
  ],
  [
    "og:image:url",
    { entry: "open_graph", name: "url", parent: "images", type: "url" },
  ],
  [
    "og:image:secure_url",
    { entry: "open_graph", name: "secure_url", parent: "images", type: "url" },
  ],
  [
    "og:image:width",
    { entry: "open_graph", name: "width", parent: "images", type: "number" },
  ],
  [
    "og:image:height",
    { entry: "open_graph", name: "height", parent: "images", type: "number" },
  ],
  [
    "og:image:type",
    { entry: "open_graph", name: "type", parent: "images", type: "string" },
  ],
  ["og:url", { entry: "open_graph", name: "url", type: "url" }],
  [
    "og:audio",
    { entry: "open_graph", name: "url", parent: "audio", type: "url" },
  ],
  [
    "og:audio:url",
    { entry: "open_graph", name: "url", parent: "audio", type: "url" },
  ],
  [
    "og:audio:secure_url",
    { entry: "open_graph", name: "secure_url", parent: "audio", type: "url" },
  ],
  [
    "og:audio:type",
    { entry: "open_graph", name: "type", parent: "audio", type: "string" },
  ],
  [
    "og:description",
    { entry: "open_graph", name: "description", type: "string" },
  ],
  [
    "og:determiner",
    { entry: "open_graph", name: "determiner", type: "string" },
  ],
  ["og:locale", { entry: "open_graph", name: "locale", type: "string" }],
  [
    "og:locale:alternate",
    { entry: "open_graph", name: "locale_alt", type: "string" },
  ],
  ["og:site_name", { entry: "open_graph", name: "site_name", type: "string" }],
  [
    "og:video",
    { entry: "open_graph", name: "url", parent: "videos", type: "url" },
  ],
  [
    "og:video:url",
    { entry: "open_graph", name: "url", parent: "videos", type: "url" },
  ],
  [
    "og:video:secure_url",
    {
      entry: "open_graph",
      name: "secure_url",
      parent: "videos",
      type: "string",
    },
  ],
  [
    "og:video:width",
    { entry: "open_graph", name: "width", parent: "videos", type: "number" },
  ],
  [
    "og:video:height",
    { entry: "open_graph", name: "height", parent: "videos", type: "number" },
  ],
  [
    "og:video:type",
    { entry: "open_graph", name: "type", parent: "videos", type: "string" },
  ],
  [
    "og:video:tag",
    { entry: "open_graph", name: "tag", parent: "videos", type: "string" },
  ],
  [
    "article:published_time",
    {
      entry: "open_graph",
      name: "published_time",
      parent: "articles",
      type: "string",
    },
  ],
  [
    "article:modified_time",
    {
      entry: "open_graph",
      name: "modified_time",
      parent: "articles",
      type: "string",
    },
  ],
  [
    "article:expiration_time",
    {
      entry: "open_graph",
      name: "expiration_time",
      parent: "articles",
      type: "string",
    },
  ],
  [
    "article:author",
    { entry: "open_graph", name: "author", parent: "articles", type: "string" },
  ],
  [
    "article:section",
    {
      entry: "open_graph",
      name: "section",
      parent: "articles",
      type: "string",
    },
  ],
  [
    "article:tag",
    { entry: "open_graph", name: "tag", parent: "articles", type: "string" },
  ],
  // oEmbed: is prepended to these fields so that it does not interfere with root title or description
  ["oEmbed:type", { entry: "oEmbed", name: "type", type: "string" }],
  ["oEmbed:version", { entry: "oEmbed", name: "version", type: "string" }],
  ["oEmbed:title", { entry: "oEmbed", name: "title", type: "string" }],
  [
    "oEmbed:author_name",
    { entry: "oEmbed", name: "author_name", type: "string" },
  ],
  ["oEmbed:author_url", { entry: "oEmbed", name: "author_url", type: "url" }],
  [
    "oEmbed:provider_name",
    { entry: "oEmbed", name: "provider_name", type: "string" },
  ],
  [
    "oEmbed:provider_url",
    { entry: "oEmbed", name: "provider_url", type: "string" },
  ],
  ["oEmbed:cache_age", { entry: "oEmbed", name: "cache_age", type: "string" }],
  [
    "oEmbed:thumbnail_url",
    { entry: "oEmbed", name: "url", parent: "thumbnails", type: "url" },
  ],
  [
    "oEmbed:thumbnail_width",
    { entry: "oEmbed", name: "width", parent: "thumbnails", type: "number" },
  ],
  [
    "oEmbed:thumbnail_height",
    { entry: "oEmbed", name: "height", parent: "thumbnails", type: "number" },
  ],
  ["oEmbed:url", { entry: "oEmbed", name: "url", type: "url" }],
  ["oEmbed:html", { entry: "oEmbed", name: "html", type: "string" }],
  ["oEmbed:width", { entry: "oEmbed", name: "width", type: "number" }],
  ["oEmbed:height", { entry: "oEmbed", name: "height", type: "number" }],
]);

export const keys = Array.from(schema.keys());
