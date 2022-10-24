import { Backdrop } from '@mui/material';
import { makeStyles } from '@mui/styles';
import get from 'lodash/get';
import { useAuth } from '../../../../components/context/auth';
// import { useImagesUser } from '../../../../components/context/images';
import { ImageS3, useCreateImageS3Mutation } from '../../../../components/generated/graphql';
import { Spinner } from '../../../../components/spinner/spinner';
import { UploadImage } from '../../../admin/components/select-background/upload-image';
import { IFileUpload } from '../change-avatar/avatar-upload';
import { ThumbBg } from './thumb-bg';

const useStyle = makeStyles({
    wrap: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: 10,
    },
});

interface Props {
    selectBg: (image?: ImageS3) => void;
    loading?: boolean;
    imageSelectId?: string;
}

function ListImages({ selectBg, loading = false, imageSelectId }: Props) {
    const classes = useStyle();
    const { user } = useAuth();
    // const { images, refetchImagesUser } = useImagesUser();

    const [createImageS3, { loading: loadingUpload }] =
        useCreateImageS3Mutation();

    const handleUpload = (image: IFileUpload) => {
        createImageS3({
            variables: {
                createImageS3Input: {
                    ...image,
                    userId: get(user, '_id'),
                },
            },
        }).then(() => {
            // refetchImagesUser();
        });
    };

    return (
        <>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                <Spinner color="inherit" />
            </Backdrop>
            <div className={classes.wrap}>
                <UploadImage
                    upload={handleUpload}
                    style={{ width: '100%', height: '100%' }}
                />

                {/* {images.map((image) => (
                    <ThumbBg
                        selected={image._id === imageSelectId}
                        image={image}
                        onSelect={selectBg}
                    />
                ))} */}

                {loadingUpload && <Spinner />}
            </div>
        </>
    );
}

export { ListImages };
