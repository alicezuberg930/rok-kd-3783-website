'use client'
import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

function ExcelReader() {
    const [rows, setRows] = useState([]);

    const fetchAndParseExcel = async () => {
        try {
            const response = await axios.get('/api/fetch-excel');
            setRows(response.data.data);
        } catch (error) {
            console.error('Error fetching or parsing XLSX file:', error);
        }
    };

    return (
        <div>
            <h1>Read XLSX from Google Drive</h1>
            <button onClick={fetchAndParseExcel}>Load Excel Data</button>
            {rows.length > 0 && (
                <div>
                    <h2>Excel Data:</h2>
                    <pre>{JSON.stringify(rows, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default ExcelReader;