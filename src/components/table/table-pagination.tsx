import { TablePagination as MuiTablePagination } from '@mui/material';
import { useTable } from './context';

const rowsPerPageOptions = [10, 50, 100];

const TablePagination = () => {
    const { pagination, changePagination } = useTable();

    if (!pagination) {
        return <></>;
    }

    const { perPage, page, total } = pagination;

    if (total === 0) {
        return <></>;
    }

    const onPageChange = (_evt: unknown, numberPage: number) => {
        changePagination({
            perPage: pagination?.perPage as number,
            page: numberPage,
        });
    };

    const onPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePagination({
            page: 0,
            perPage: parseInt(event.target.value, 10),
        });
    };

    const onBack = () => {
        changePagination({
            page: page - 1,
            perPage: pagination?.perPage as number,
        });
    };
    const onNext = () => {
        changePagination({
            page: page + 1,
            perPage: perPage,
        });
    };

    return (
        <MuiTablePagination
            labelRowsPerPage="Trang"
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={total || 0}
            rowsPerPage={perPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onPerPageChange}
            backIconButtonProps={{
                'aria-label': 'Quay lại',
                onClick: onBack,
            }}
            nextIconButtonProps={{
                'aria-label': 'Trang tiếp',
                onClick: onNext,
            }}
        />
    );
};

export { TablePagination };
