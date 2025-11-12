function createSortedList() {
    let objectListContainer = {
        arrayList: Array(),
        add: function(element) {
            this.arrayList.push(element);
            this.arrayList.sort((a,b) => a-b);
        },
        remove: function(index) {
            if (index >= 0 && index < this.arrayList.length) {
                this.arrayList.splice(index, 1);
            }
        },
        get: function(index) {
            if (index >= 0 && index < this.arrayList.length) {
                return this.arrayList[index];
            }
        },
        get size() {
            return this.arrayList.length
        },
    }

    return objectListContainer;
}

// Input 1:
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
