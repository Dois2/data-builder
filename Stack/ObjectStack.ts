interface IObjectStack<T> {
    items: IItemsObject<T>;
    count: number;
}

interface IItemsObject<U> {
    [name: number] : U
}

export class ObjectStack<T> implements IObjectStack<T> {
    public items;
    public count;

    constructor() {
        this.items = {} as IItemsObject<T>;
        this.count = 0;
    }

    public push(data: T): void {
        this.items[this.count] = data;
        this.count++;
    }

    public size() : number {
        return this.count;
    }

    public isEmpty(): boolean{
        return this.count === 0;
    }

    public pop(): T | undefined {
        if(this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    public peek() : T | undefined {
        if(this.isEmpty()) return undefined;
        return this.items[this.count -1]
    }

    public clear() {
        this.items = {} as IItemsObject<T>;
        this.count = 0;
    }
    
    public toString():  string{
        if(this.isEmpty()) return '';
        let objToString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objToString = `${objToString},${this.items[i]}`     
        }
        return objToString;

    }
}