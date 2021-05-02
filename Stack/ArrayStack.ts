
interface IArrayStack<T>{
    items: T[]
}

export class ArrayStack<T> implements IArrayStack<T>{
    public items;
    
    constructor(){
        this.items = new Array<T>();
    }

    public push(data: T) {
        this.items.push(data);
    }

    public pop(): T | undefined {
        return this.items.pop();
    }

    public peek(){
        return this.items[this.items.length - 1];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public clear(): void {
        this.items = new Array<T>();
    }

    public size(): number {
        return this.items.length;
    }
}