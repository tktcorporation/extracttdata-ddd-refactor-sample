import { GiveMeMoneyInfoSheet } from './domain/model/gimeMoneySheet/GiveMeMoneyInfoSheet';
import { SpreadsheetApp } from 'src/module/spreadSheetApp/SpreadSheetApp';
import { SlackModule } from 'src/module/slackModule/SlackModule';

const notifyGiveMeMoneyInfoListToSlack = (
    app: SpreadsheetApp,
    slackModule: SlackModule,
    rowNumOfCheckingStart: number,
) => {
    new GiveMeMoneyInfoSheet(app.getActiveSheet(), rowNumOfCheckingStart, slackModule)
        .getGiveMeMoneyInfoList()
        .notifyGiveMeMoneyInfoListToSlack();
};
