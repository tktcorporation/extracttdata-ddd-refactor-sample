class SheetValue {
    constructor(private _value: number | boolean | Date | string) {}
    get value() {
        return this._value;
    }
    toString = () => this.value.toString();
}
