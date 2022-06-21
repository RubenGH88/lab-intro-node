class SortedList {
  constructor(items, length) {
    this.items=[]
    this.length=this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length=this.items.length;
  }

  get(pos) {
    if(!this.items[pos]){throw new Error('OutOfBounds')}
    else return this.items[pos]
  }

  max() {
    if(!this.length){throw new Error('EmptySortedList')}
    else return Math.max(...this.items)
  }

  min() {
    if(!this.length){throw new Error('EmptySortedList')}
    else return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((total, number) => total + number, 0);
  }

  avg() {
    if (!this.length) {
			throw new Error('EmptySortedList');
		}

		return this.sum() / this.length;
	
  }
}

module.exports = SortedList;
