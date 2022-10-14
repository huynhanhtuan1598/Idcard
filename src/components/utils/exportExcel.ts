import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

interface IExportExcel {
    csvData: any[];
    fileName: string;
}

export function exportExcelBlod(csvData: any[]) {
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Blob([excelBuffer], { type: fileType });
}

export function exportExcel({ csvData, fileName }: IExportExcel) {
    const blod = exportExcelBlod(csvData);

    const fileExtension = '.xlsx';

    FileSaver.saveAs(blod, fileName + fileExtension);
}
