class Category {
    constructor(name, slug, thumbnailUrl) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.slug = slug,
        this.thumbnailUrl = thumbnailUrl;
        this.deleted = false;
    }
}

module.exports = Category;