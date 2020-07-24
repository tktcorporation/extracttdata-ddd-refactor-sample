export enum StatusString {
    active = 'お金が欲しい',
    deactive = 'お金は欲しくない',
}

const isStatusString = (value: string): value is StatusString =>
    (Object.values(StatusString) as string[]).includes(value);

export class Status {
    private _value: StatusString;

    static build = (value: string): Status => {
        if (!isStatusString(value)) throw new Error('status string is invalid');
        return new Status(value);
    };
    constructor(value: StatusString) {
        this._value = value;
    }

    isActive = () => this._value === StatusString.active;
}
