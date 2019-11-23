function copySheetInTable() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var destination = SpreadsheetApp.openById('ID');
  var copySheetName = Utilities.formatDate(
    new Date(),
    'GMT',
    'yyyy-MM-dd HH:mm:ss'
  );
  var copySheet = sheet.copyTo(destination);
  copySheet.setName(copySheetName);
  var active = destination.setActiveSheet(copySheet, true);
  destination.moveActiveSheet(1);
}
