import PersonIcon from '@mui/icons-material/Person';
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
    ENotificationType,
    // Notification,
    namedOperations,
    useDeleteNotificationMutation,
} from '../../components/generated/graphql';

interface Props {
    data?: any[]; // Notification[]
}

const ListNotification = ({ data = [] }: Props) => {
    const navigate = useNavigate();
    const [deleteNotification] = useDeleteNotificationMutation({
        refetchQueries: [namedOperations.Query.AllNotification],
    });

    return (
        <List>
            {data.map((item) => {
                const logo =
                    item.type === ENotificationType.Support
                        ? ''
                        : item.senderId?.avatarS3?.url;

                const handleClick = async () => {
                    try {
                        await deleteNotification({
                            variables: {
                                notificationId: item._id,
                            },
                        });

                        if (item.type === ENotificationType.Support) {
                            if (item.action) {
                                navigate(`/feedbacks/${item.action}`);
                            }
                            return;
                        }
                    } catch (error) {}
                };

                return (
                    <>
                        <ListItem key={item._id} onClick={handleClick} button>
                            <ListItemAvatar>
                                <Avatar src={logo}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={item.content}
                            />
                        </ListItem>
                        <Divider />
                    </>
                );
            })}
        </List>
    );
};

export { ListNotification };
