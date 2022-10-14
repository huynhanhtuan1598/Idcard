import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../components/context/auth';
import { useSortAddressMutation } from '../../../../components/generated/graphql';
// import { useAuth } from '../../../../components/context';
// import { useSortAddressMutation } from '../../../../generated/graphql';
import { ContactItem } from './contact-item';

const getItemStyle = (_isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',

    padding: '7px 0',

    // change background colour if dragging
    // background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = (_isDraggingOver: any) => ({});

const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const ListContact = () => {
    const { t } = useTranslation('profile');
    const { user } = useAuth();
    const [items, setItems] = useState<any[]>([]);
    const [sortAddress] = useSortAddressMutation();

    useEffect(() => {
        if (user) {
            setItems(user.list || []);
        } else {
        }
    }, [user]);

    if (items.length === 0) {
        return <></>;
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }

        const itemsNew = reorder(
            items,
            result.source.index,
            result.destination.index
        );

        sortAddress({
            variables: {
                startIndex: `${result.source.index}`,
                endIndex: `${result.destination.index}`,
            },
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        setItems(itemsNew);
    };

    return (
        <div>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="subtitle2">
                        {t('title.info')}
                    </Typography>
                </Grid>
            </Grid>
            <div style={{ marginTop: 7 }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => {
                            return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(
                                        snapshot.isDraggingOver
                                    )}
                                >
                                    {items.map((item: any, index: number) => {
                                        return (
                                            <Draggable
                                                draggableId={item._id}
                                                index={index}
                                                key={item._id}
                                            >
                                                {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided
                                                                    .draggableProps
                                                                    .style
                                                            )}
                                                        >
                                                            <ContactItem
                                                                profile={item}
                                                            />
                                                        </div>
                                                    );
                                                }}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            );
                        }}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
};

export { ListContact };
