const Item = require('./Item.class');
class Category {
    constructor(name, slug, thumbnailUrl) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.slug = slug,
        this.thumbnailUrl = thumbnailUrl;
        this.items = [];
        this.deleted = false;
    }

    addItem(item) {
        if(item instanceof Item) {
            this.items.push(item);
        } else {
            throw('Item given was not an instance of the Item class');
        }
    }
}

module.exports = Category;