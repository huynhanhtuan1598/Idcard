import React, { useState } from 'react';
import { ContactItem } from '../../../../components/generated/graphql';
// import { ContactItem } from '../../../../generated/graphql';
import { CardReportItem } from './card-report-item';

interface Props {
    list: ContactItem[];
}

function ReportListItem({ list }: Props) {
    const [activeId, setActiveId] = useState<string>();

    function toggleExpand(idItem: string) {
        const newActiveId = idItem === activeId ? undefined : idItem;
        setActiveId(newActiveId);
    }

    function renderList() {
        return list.map((item) => {
            return (
                <CardReportItem
                    key={item._id}
                    expanded={item._id === activeId}
                    toggleExpand={toggleExpand}
                    item={item}
                />
            );
        });
    }

    return <>{renderList()}</>;
}

export { ReportListItem };
