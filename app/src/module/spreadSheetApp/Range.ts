import { Value } from './Value';

export interface Range {
    getLastRow(): number;
    getValue(): Value;
}
