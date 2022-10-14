import get from 'lodash/get';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../../src/components/context/auth';
import { ContactItem } from '../../../../components/generated/graphql';
import { ReportWrap } from '../report-wrap/report-wrap';
import { ReportListItem } from './report-list-item';

function ReportDetail() {
    const { t } = useTranslation('report');
    const { user } = useAuth();

    if (!user) {
        return <></>;
    }

    const list = get(user, 'list', []) as ContactItem[];

    return (
        <ReportWrap title={t('detail')}>
            <ReportListItem list={list} />
        </ReportWrap>
    );
}

export { ReportDetail };
