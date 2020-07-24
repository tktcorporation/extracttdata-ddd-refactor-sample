import { Range } from './Range';

export interface Sheet {
    getRange(row: number, column: number): Range;
    getDataRange(): Range;
}
