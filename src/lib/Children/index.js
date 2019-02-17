export default class Children {
  constructor() {
    this.children = [];
  }

  add({ child }) {
    this.children = [...this.children, child];
  }

  remove(child) {
    this.children = this.children.filter(currentChild => currentChild !== child)
  }

  at(idx) {
    return this.children[idx];
  }

  all(){
    return [...this.children];
  }

  length() {
    return this.children.length;}
};

export const childCreated = (child) => child.fire('created', { child });
