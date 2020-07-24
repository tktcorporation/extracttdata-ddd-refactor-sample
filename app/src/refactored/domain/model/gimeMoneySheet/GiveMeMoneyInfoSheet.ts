import { GiveMeMoneyInfoList } from './GiveMeMoneyInfo/GiveMeMoneyInfoList';
import { SlackModule } from '../../../../module/slackModule/SlackModule';
import { GiveMeMoneyInfo } from './GiveMeMoneyInfo/GiveMeMoneyInfo';
import { Status } from './GiveMeMoneyInfo/Status';
import { Sheet } from 'src/module/spreadSheetApp/Sheet';

enum ColumnNumberMapping {
    id = 2,
    name = 5,
    requesterName = 6,
    coutry = 7,
    gender = 8,
    isCompletedString = 9,
    createdDateString = 10,
    reason = 11,
    amount = 12,
    dueDateString = 13,
    costomer = 14,
    platform = 15,
    status = 17,
}

export class GiveMeMoneyInfoSheet {
    private readonly startRowNumber: number;
    private readonly sheet: Sheet;
    private readonly slackModule: SlackModule;

    constructor(
        sheet: Sheet,
        startRowNumber: number,
        slackModule: SlackModule,
    ) {
        this.sheet = sheet;
        this.slackModule = slackModule;
        this.startRowNumber = startRowNumber;
    }

    get lastRowNumber() {
        return this.sheet.getDataRange().getLastRow();
    }

    getGiveMeMoneyInfoList(): GiveMeMoneyInfoList {
        const giveMeMoneyInfoList: GiveMeMoneyInfo[] = [];
        for (let i = this.startRowNumber; i <= this.lastRowNumber; i++) {
            const id = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.id).getValue(),
            );
            const status = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.status).getValue(),
            );
            const name = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.name).getValue(),
            );
            const requesterName = new SheetValue(
                this.sheet
                    .getRange(i, ColumnNumberMapping.requesterName)
                    .getValue(),
            );
            const gender = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.gender).getValue(),
            );
            const isCompletedString = new SheetValue(
                this.sheet
                    .getRange(i, ColumnNumberMapping.isCompletedString)
                    .getValue(),
            );
            const createdDateString = new SheetValue(
                this.sheet
                    .getRange(i, ColumnNumberMapping.createdDateString)
                    .getValue(),
            );
            const reason = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.reason).getValue(),
            );
            const amount = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.amount).getValue(),
            );
            const dueDateString = new SheetValue(
                this.sheet
                    .getRange(i, ColumnNumberMapping.dueDateString)
                    .getValue(),
            );
            const costomer = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.costomer).getValue(),
            );
            const platform = new SheetValue(
                this.sheet.getRange(i, ColumnNumberMapping.platform).getValue(),
            );
            const info = new GiveMeMoneyInfo({
                id: id.toString(),
                status: Status.build(status.toString()),
                name: name.toString(),
                requesterName: requesterName.toString(),
                gender: gender.toString(),
                isCompletedString: isCompletedString.toString(),
                createdDateString: createdDateString.toString(),
                reason: reason.toString(),
                amount: amount.toString(),
                dueDateString: dueDateString.toString(),
                costomer: costomer.toString(),
                platform: platform.toString(),
            });
            giveMeMoneyInfoList.push(info);
        }
        return new GiveMeMoneyInfoList(giveMeMoneyInfoList, this.slackModule);
    }
}
