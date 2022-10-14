import {
    Backdrop,
    Box,
    Checkbox,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableProps,
    TableRow,
} from '@mui/material';
import { get } from 'lodash';
import { CSSProperties, useMemo, useState } from 'react';
import { Spinner } from '../spinner/spinner';
// import { Spinner } from '../spinner';
import {
    ITableChangeOrder,
    ITablePagination,
    TableContextProvider,
} from './context';
import { TableEmptyData } from './table-empty-data';
import { TablePagination } from './table-pagination';
import { Th } from './th';

export type TAlign = 'right' | 'left' | 'center';

export type Order = 'asc' | 'desc';

export interface ITableColumn {
    label?: string;
    render?: Function;
    dataIndex?: string;
    align?: TAlign;
    width?: number;
    style?: CSSProperties;
    isOrder?: boolean;
}

type TTableProps = TableProps & {
    pagination?: ITablePagination;
    onPaginationChange?: ({ page, perPage }: ITablePagination) => void;
    data: any[];
    columns: Array<ITableColumn>;
    loading?: boolean;
    isSelect?: boolean;
    rowsKey: string;
    // rowsSelected?: any[];
    onSelectRows?: (data: any[]) => void;
    order?: Order;
    orderBy?: string;
    isHasOrder?: boolean;
    onChangeOrder?: ({ order, orderBy }: ITableChangeOrder) => void;
};

const Table = ({
    pagination,
    onPaginationChange,
    columns,
    data,
    loading,
    isSelect,
    rowsKey,
    onSelectRows,
    order = 'desc',
    orderBy,
    isHasOrder = true,
    onChangeOrder,
    ...props
}: TTableProps) => {
    const [rowsSelected, setRowsSelected] = useState<any>([]);

    const numSelected = useMemo(() => rowsSelected.length, [rowsSelected]);
    const rowCount = useMemo(() => data.length, [data]);

    const renderContent = () => {
        if (data.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={columns.length + 1}>
                        <TableEmptyData />
                    </TableCell>
                </TableRow>
            );
        }

        return data.map((row, index) => {
            const key = get(row, rowsKey);
            const isItemSelected = rowsSelected.indexOf(key) !== -1;

            const handleSelectItem = (
                event: React.ChangeEvent<HTMLInputElement>
            ) => {
                const newRowsSelected = rowsSelected;
                const newSelecteds = event.target.checked
                    ? [...newRowsSelected, key]
                    : newRowsSelected.filter((n: any) => n !== key);

                setRowsSelected(newSelecteds);

                onSelectRows && onSelectRows(newSelecteds);
            };

            return (
                <TableRow key={key}>
                    {isSelect ? (
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                onChange={handleSelectItem}
                                inputProps={{
                                    'aria-labelledby': key,
                                }}
                            />
                        </TableCell>
                    ) : (
                        <TableCell align="center" width={50}>
                            {index +
                                1 +
                                (pagination?.perPage || 0) *
                                    (pagination?.page || 0)}
                        </TableCell>
                    )}

                    {columns.map((col, index) => {
                        const value = col.dataIndex ? row[col.dataIndex] : row;

                        const renderValue = () => {
                            if (col.dataIndex) {
                                return col.render ? col.render(value) : value;
                            }

                            return col.render ? col.render(value) : '';
                        };

                        const columnKey = col.dataIndex || index;

                        return (
                            <TableCell
                                key={columnKey}
                                align={col.align}
                                width={col.width}
                                style={col.style}
                            >
                                {renderValue()}
                            </TableCell>
                        );
                    })}
                </TableRow>
            );
        });
    };
    const handlePaginationChange = (value: {
        page: number;
        perPage: number;
    }) => {
        if (onPaginationChange) {
            onPaginationChange(value);
        }
    };

    const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSelecteds = event.target.checked
            ? data.map((n) => get(n, rowsKey))
            : [];

        setRowsSelected(newSelecteds);

        onSelectRows && onSelectRows(newSelecteds);
    };

    const handleChangeOrder = (value: ITableChangeOrder) => {
        if (onChangeOrder) {
            onChangeOrder(value);
        }
    };

    return (
        <TableContextProvider
            order={order}
            orderBy={orderBy}
            pagination={pagination}
            onChangePagination={handlePaginationChange}
            onChangeOrder={handleChangeOrder}
        >
            {loading && (
                <Backdrop
                    open
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Spinner color="inherit" />
                </Backdrop>
            )}
            <Box>
                <TableContainer>
                    <MuiTable {...props}>
                        <TableHead>
                            <TableRow>
                                {isSelect ? (
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            indeterminate={
                                                numSelected > 0 &&
                                                numSelected < rowCount
                                            }
                                            checked={
                                                rowCount > 0 &&
                                                numSelected === rowCount
                                            }
                                            onChange={onSelectAll}
                                            inputProps={{
                                                'aria-label':
                                                    'select all desserts',
                                            }}
                                        />
                                    </TableCell>
                                ) : (
                                    <Th width={50} label="STT" />
                                )}
                                {columns.map((headCell, index) => (
                                    <Th
                                        key={index}
                                        align={headCell.align}
                                        label={headCell.label}
                                        orderBy={headCell.dataIndex}
                                        isOrder={isHasOrder && headCell.isOrder}
                                        order={order}
                                        onOrder={handleChangeOrder}
                                    />
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>{renderContent()}</TableBody>
                    </MuiTable>
                </TableContainer>
                <TablePagination />
            </Box>
        </TableContextProvider>
    );
};

export { Table };
