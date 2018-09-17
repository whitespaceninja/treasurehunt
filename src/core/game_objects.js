export class GameObjects {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.addObject(obj.children[i]);
        }
    }

    addObjects(objList) {
        const that = this;
        objList.map(x => that.addObject(x));
    }

    removeObject(obj) {
        // recursively filter out the object that was passed in and its children
        this.objects = this.objects.filter(x => x !== obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.removeObject(obj.children[i]);
        }
    }

    removeObjects(objList) {
        const that = this;
        objList.map(x => that.removeObject(x));
    }

    removeAllObjects() {
        this.objects = [];
    }
}