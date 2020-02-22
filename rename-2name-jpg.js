var myDocument = app.activeDocument;
var textLayers = myDocument.activeLayer.layers;

var theOutputPath = Folder.selectDialog("Chon thu muc luu file");
var names = prompt(
  "Điền tên theo pattern sau: a1-a2,b1-b2,c1-c2",
  "",
  "Nhập tên"
);
names = names.split(",");

pdfSaveOptions = new PDFSaveOptions();
pdfSaveOptions.preserveEditing = false;

jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

for (i = 0; i < names.length; i++) {
  var historyNumber = app.activeDocument.historyStates.length - 1;

  var n = names[i].split("-");

  textLayers[0].textItem.contents = n[0];
  textLayers[1].textItem.contents = n[1];
  myDocument.rasterizeAllLayers();
  myDocument.saveAs(
    new File(theOutputPath + "/" + names[i] + ".pdf"),
    jpgSaveOptions,
    true
  );

  myDocument.activeHistoryState = myDocument.historyStates[historyNumber];
  app.purge(PurgeTarget.HISTORYCACHES);
}
