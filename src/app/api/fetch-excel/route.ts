// app/api/fetch-excel/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import * as XLSX from 'xlsx';

export async function GET() {
    try {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=10KsxDVEXtdUealMXllCr0m11hMDJaavM';
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const data = new Uint8Array(response.data);

        // Parse the XLSX file
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

        return NextResponse.json({ data: jsonData }, { status: 200 });
    } catch (error) {
        console.error('Error fetching or parsing XLSX file:', error);
        return NextResponse.json(
            { error: 'Failed to fetch or parse XLSX file' },
            { status: 500 }
        );
    }
}