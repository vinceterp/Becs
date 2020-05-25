export function formatPrice(cents) {
  return (cents/1).toLocaleString("en-US", {
    style: "currency",
    currency: "JMD"
  });
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}