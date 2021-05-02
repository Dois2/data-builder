
interface IArrayStack<T>{
    push(data: T) : void;
    pop(): T| undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    clear(): void;
    size(): number;
}

export class ArrayStack<T> implements IArrayStack<T>{
    private _items: Array<T> ;
    
    constructor(){
        this._items = new Array<T>();
    }

    push(data: T) {
        this._items.push(data);
    }

    pop(){
        return this._items.pop();
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this._items[this._items.length - 1];
    }

    isEmpty(){
        return this._items.length === 0;
    }

    clear(){
        this._items = new Array<T>();
    }

    size(){
        return this._items.length;
    }
    
}