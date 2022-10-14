// import { Line } from '@ant-design/plots';
import { Line } from '@ant-design/plots';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
// import moment from 'moment';
import { memo, useMemo, useRef, useState } from 'react';
import { ETypeDate, useReport } from '../../../../components/context/report';
import { ReportItemContactInput, useReportItemContactQuery } from '../../../../components/generated/graphql';
// import { ETypeDate, useReport } from '../../../../components/context';
// import { ReportItemContactInput, useReportItemContactQuery } from '../../../../generated/graphql';

const useStyle = makeStyles({
    wrap: {
        position: 'relative',
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
interface Props {
    userId: string;
    itemId: string;
}

function formatLabel(typeDate: ETypeDate, label: string) {
    if (typeDate === ETypeDate.Year) {
        return moment(label, 'MM/YYYY').format('MMM');
    }

    return moment(label, 'DD/MM/YYYY').format('DD');
}

const useData = ({ userId, itemId }: Props) => {
    const { typeDate } = useReport();
    const [dataChart, setDataChart] = useState<Array<{ type: string; count: number }>>([]);
    const ref = useRef(Date.now());

    const reportItemContactInput: ReportItemContactInput = {
        userId,
        itemId,
        date: ref.current,
        type: typeDate,
    }

    const { loading, data } = useReportItemContactQuery({
        variables: {
            reportItemContactInput
        },
        onCompleted() {
            const dataReport = data?.reportItemContact.data || [];
            const dataColumn = dataReport.map((item) => {
                return {
                    type: formatLabel(typeDate, item.label),
                    count: Number(item.count),
                };
            })

            setDataChart(dataColumn);
        },
    })

    const values = useMemo(
        () => ({ loading, dataChart }),
        [loading, dataChart]
    );

    return values;
};

const Chart = memo(({ userId, itemId }: Props) => {
    const classes = useStyle();
    const { loading, dataChart } = useData({ userId, itemId });

    const config: any = {
        data: dataChart,
        padding: 'auto',
        xField: 'type',
        yField: 'count',
        xAxis: { tickCount: 5 },
        smooth: true,
        height: 150,
        meta: {
            type: { alias: 'Tháng' },
            count: { alias: 'Truy cập' },
        },
        point: {
            size: 3,
            shape: 'circle',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
    };

    return (
        <div className={classes.wrap}>
            {loading && (
                <div className={classes.loading}>
                    <CircularProgress />
                </div>
            )}

            <Line {...config} />
        </div>
    );
});

export { Chart };
