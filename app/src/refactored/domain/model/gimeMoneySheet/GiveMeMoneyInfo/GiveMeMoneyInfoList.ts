import { SlackModule } from '../../../../../module/slackModule/SlackModule';
import { GiveMeMoneyInfo } from './GiveMeMoneyInfo';

export class GiveMeMoneyInfoList {
    constructor(
        private values: GiveMeMoneyInfo[],
        private slackModule: SlackModule,
    ) {}

    notifyGiveMeMoneyInfoListToSlack(): void {
        const infoList = this.values;
        infoList.forEach((info) => {
            if (!info.status.isActive) return;
            this.slackModule.notifySlack(...Object.values(info.value));
        });
    }
}
