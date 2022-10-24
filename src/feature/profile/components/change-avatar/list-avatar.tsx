import { Box, Grid } from '@mui/material';
import { get } from 'lodash';
import { ImageS3 } from '../../../../components/generated/graphql';
import { Spinner } from '../../../../components/spinner/spinner';
import { useAuth } from '../../../../components/context/auth';
// import { useImagesUser } from '../../../../components/context/images'
import { AvatarItem } from './avatar-item';
import { AvatarUpload } from './avatar-upload';

interface Props {
    callback?: () => void;
}

const ListAvatar = ({ callback }: Props) => {
    // const { images, loading } = useImagesUser();
    const { user } = useAuth();

    // if (loading) {
    //     return <Spinner />;
    // }

    // if (images.length === 0) {
    //     return (
    //         <Box
    //             sx={{
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //             }}
    //         >
    //             <AvatarUpload />
    //         </Box>
    //     );
    // }

    return (
        <Grid container rowSpacing={2} columnSpacing={2}>
            {/* {images.map((image: ImageS3) => {
                const selected = get(user, 'avatarS3._id') === image._id;

                const onClick = () => {
                    callback && callback();
                };

                return (
                    <Grid item xs={3} sm={3} md={3} key={image._id}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <AvatarItem
                                avatar={image}
                                onClick={onClick}
                                active={selected}
                            />
                        </Box>
                    </Grid>
                );
            })} */}
            <Grid item xs={3} sm={3} md={3}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AvatarUpload />
                </Box>
            </Grid>
        </Grid>
    );
};

export { ListAvatar };
