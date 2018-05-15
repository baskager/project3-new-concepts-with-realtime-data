class Item {
    constructor(name, thumbnailUrl) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.slug = name.toLowerCase();
        this.thumbnailUrl = thumbnailUrl;
        this.deleted = false;
    }
}

module.exports = Item;