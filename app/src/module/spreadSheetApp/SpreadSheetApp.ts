import { Sheet } from './Sheet';

export interface SpreadsheetApp {
    getActiveSheet(): Sheet;
}
