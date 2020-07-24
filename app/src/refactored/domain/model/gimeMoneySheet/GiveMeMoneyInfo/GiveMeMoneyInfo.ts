import { Status } from './Status';

export interface IGiveMeMoneyInfo {
    id: string;
    name: string;
    requesterName: string;
    status: Status;
    gender: string;
    isCompletedString: string;
    createdDateString: string;
    reason: string;
    amount: string;
    dueDateString: string;
    costomer: string;
    platform: string;
}

export class GiveMeMoneyInfo {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _requesterName: string;
    private readonly _status: Status;
    private readonly _gender: string;
    private readonly _isCompletedString: string;
    private readonly _createdDateString: string;
    private readonly _reason: string;
    private readonly _amount: string;
    private readonly _dueDateString: string;
    private readonly _costomer: string;
    private readonly _platform: string;
    constructor(params: IGiveMeMoneyInfo) {
        this._id = params.id;
        this._name = params.name;
        this._requesterName = params.requesterName;
        this._status = params.status;
        this._gender = params.gender;
        this._isCompletedString = params.isCompletedString;
        this._createdDateString = params.createdDateString;
        this._reason = params.reason;
        this._amount = params.amount;
        this._dueDateString = params.dueDateString;
        this._costomer = params.costomer;
        this._platform = params.platform;
    }
    get status(): Status {
        return this._status;
    }
    get value(): IGiveMeMoneyInfo {
        return {
            id: this._id,
            name: this._name,
            requesterName: this._requesterName,
            status: this._status,
            gender: this._gender,
            isCompletedString: this._isCompletedString,
            createdDateString: this._createdDateString,
            reason: this._reason,
            amount: this._amount,
            dueDateString: this._dueDateString,
            costomer: this._costomer,
            platform: this._platform,
        };
    }
}
