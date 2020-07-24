function igrcheckReqData() {
    //シートの取得
    var mySheet = SpreadsheetApp.getActiveSheet();
    //最終行を取得
    var lastRow = mySheet.getDataRange().getLastRow();
    for (var i = 2; i <= lastRow; i++) {
        var statusValue = mySheet.getRange(i, 17).getValue();
        if (statusValue == 'お金が欲しい') {
            var actRng = mySheet.getRange(i, 17);
            var cel_B = mySheet.getRange(i, 2).getValue();
            var cel_E = mySheet.getRange(i, 5).getValue();
            var cel_F = mySheet.getRange(i, 6).getValue();
            var cel_G = mySheet.getRange(i, 7).getValue();
            var cel_H = mySheet.getRange(i, 8).getValue();
            var cel_I = mySheet.getRange(i, 9).getValue();
            var cel_J = mySheet.getRange(i, 10).getValue();
            var cel_K = mySheet.getRange(i, 11).getValue();
            var cel_L = mySheet.getRange(i, 12).getValue();
            var cel_M = mySheet.getRange(i, 13).getValue();
            var cel_N = mySheet.getRange(i, 14).getValue();
            var cel_O = mySheet.getRange(i, 15).getValue();
        }
    }
    notifySlack(
        actRng,
        cel_B,
        cel_E,
        cel_F,
        cel_G,
        cel_H,
        cel_I,
        cel_J,
        cel_K,
        cel_L,
        cel_M,
        cel_N,
        cel_O,
    );
}
