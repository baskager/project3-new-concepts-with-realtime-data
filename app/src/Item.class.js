const ITEMSTATUS = require('./ITEMSTATUS.enum');
class Item {
    constructor(name, status, thumbnailUrl) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.slug = name.toLowerCase();
        this.thumbnailUrl = thumbnailUrl;
        this.status = status;
        this.deleted = false;
    }
}

module.exports = Item;