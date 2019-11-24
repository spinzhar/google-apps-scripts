/**
 * Returns the position of the last row that has content in the range.
 * @param {Object} range https://developers.google.com/apps-script/reference/spreadsheet/range
 * @return {number} lastRow
 **/
function getLastRowInRange(range) {
  var lastRow = 0;
  var data = range.getValues();
  for (var i = data.length - 1; i >= 0; i--) {
    if (data[i].toString().replace(/,/g, '').length !== 0) {
      lastRow = i + 1;
      break;
    }
  }
  return lastRow;
}
