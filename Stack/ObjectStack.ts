interface IObjectStack<T> {
    push(data: T): void;
    size(): number;
    isEmpty(): boolean;
    pop(): T | undefined;
    peek(): T | undefined;
    clear(): void;
    toString(): string;
}

interface IItemsObject<U> {
    [name: number] : U
}

export class ObjectStack<T> implements IObjectStack<T> {
    private _items: IItemsObject<T>;
    private _count: number;

    constructor() {
        this._items = {} as IItemsObject<T>;
        this._count = 0;
    }

    push(data: T) {
        this._items[this._count] = data;
        this._count++;
    }

    size(){
        return this._count;
    }

    isEmpty(){
        return this._count === 0;
    }

    pop(){
        if(this.isEmpty()) return undefined;
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this._items[this._count -1]
    }

    clear() {
        this._items = {} as IItemsObject<T>;
        this._count = 0;
    }
    
    toString(){
        if(this.isEmpty()) return '';
        let objToString = `${this._items[0]}`
        for (let i = 1; i < this._count; i++) {
            objToString = `${objToString},${this._items[i]}`     
        }
        return objToString;

    }
}