import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    AppBar,
    Container,
    Dialog,
    DialogContent,
    Divider,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { get } from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '../../../../react-router-dom';
import { AvatarEdit } from '../../../../components/avatar-edit/avatar-edit';
import { Transition } from '../../../../components/transition/transtion';
import { useAuth} from '../../../../components/context/auth';
import { useImagesUser } from '../../../../components/context/images';
import {
    useCreateImageS3Mutation,
    useUpdateUserInfoMutation,
} from '../../../../components/generated/graphql';

import { ListAvatar } from './list-avatar';
import { MainAvatar } from './main-avatar';

export interface IFileUpload {
    url: string;
    key: string;
}

const ChangeAvatar = () => {
    const { t } = useTranslation('profile');
    const navigate = useNavigate();
    const { user, updateInfo } = useAuth();
    const { addImage } = useImagesUser();
    const [open, setOpen] = useState<boolean>(false);
    const [createImageS3, { loading }] = useCreateImageS3Mutation();
    const [updateUserInfo] = useUpdateUserInfoMutation({
        onCompleted(data) {
            if (data.updateUserInfo?.success) {
                updateUserInfo(data?.updateUserInfo.user as any);
            }
        },
    });

    const toggle = () => setOpen(!open);

    const handleUploadAvatar = async (fileUrl: IFileUpload) => {
        try {
            const response = await createImageS3({
                variables: {
                    createImageS3Input: {
                        ...fileUrl,
                        userId: user?._id as string,
                    },
                },
            });

            const image: any = response.data?.createImageS3.image; // TODO: fix type
            if (image) {
                addImage(image);

                updateInfo({
                    ...user,
                    avatarS3: image,
                });

                updateUserInfo({
                    variables: {
                        updateUserInfoInput: { avatarS3: image._id },
                    },
                    // refetchQueries: [{ query: QUERY_GET_IMAGES_S3 }],
                });

                toggle();
            }
        } catch (error) {}
    };

    const handleSelectAvatar = () => {
        toggle();
    };

    return (
        <>
            <MainAvatar
                avatarConfig={get(user, 'avatarConfig')}
                onClick={() => navigate('/edit-avatar')}
                src={get(user?.avatarS3, 'url')}
                isEdit
            />

            <Dialog
                open={open}
                fullScreen
                onClose={toggle}
                TransitionComponent={Transition}
            >
                <AppBar color="transparent" position="static">
                    <Toolbar>
                        <IconButton edge="start" onClick={toggle}>
                            <ArrowBackIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            // className={classes.leftContent}
                        >
                            {t('avatar.title')}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <DialogContent sx={{ px: 0 }}>
                    <Container maxWidth="sm">
                        <MainAvatar
                            avatarConfig={get(user, 'avatarConfig')}
                            onClick={() => navigate('/edit-avatar')}
                            src={get(user?.avatarS3, 'url')}
                        />
                        {
                            // <UploadNewAvatar
                            //     upload={handleUploadAvatar}
                            //     loading={loading}
                            // />
                        }

                        <AvatarEdit
                            upload={handleUploadAvatar}
                            loading={loading}
                        />

                        <Divider style={{ margin: '30px 0' }} />
                        <ListAvatar callback={handleSelectAvatar} />
                    </Container>
                </DialogContent>
            </Dialog>
        </>
    );
};

export { ChangeAvatar };
