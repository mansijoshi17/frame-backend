const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]+/g, "") // Remove non-word characters (excluding hyphen and space)
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/\-\-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+/, "") // Trim hyphens from start of text
    .replace(/-+$/, ""); // Trim hyphens from end of text
};

module.exports = generateSlug;
