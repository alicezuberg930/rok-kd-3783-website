import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const specifications = [
    {
        title: "Width",
        value: "128mm"
    },
    {
        title: "Height",
        value: "508mm"
    },
    {
        title: "Depth",
        value: "85mm"
    },
    {
        title: "Weight",
        value: "52gm"
    },
    {
        title: "Quality checking",
        value: "Yes"
    },
    {
        title: "Freshness Duration",
        value: "3 days"
    },
    {
        title: "When packeting",
        value: "Without touch of hand"
    },
    {
        title: "Each Box contains",
        value: "60pcs"
    },
]

export default function SpecificationTab() {
    return (
        <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 720 }}>
                <TableBody>
                    {specifications.map((row, i) => (
                        <TableRow sx={{ borderBottom: (theme) => i < specifications.length - 1 ? `1px solid ${theme.palette.grey[300]}` : '' }} key={i}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}