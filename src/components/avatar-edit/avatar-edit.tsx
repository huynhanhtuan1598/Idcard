import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Rotate90DegreesCwRoundedIcon from '@mui/icons-material/Rotate90DegreesCwRounded';
import { Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import get from 'lodash/get';
import { useEffect, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useDropzone } from 'react-dropzone';
// import AvatarEditor from 'react-avatar-editor';
// import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { IFileUpload } from '../../feature/profile/components/change-avatar/change-avatar';
import { uploadImageS3Api } from '../api/upload-image';
import { Button } from '../button/button';
import { COLORS } from '../constants/theme';
import { useAuth } from '../context/auth';
import { User } from '../generated/graphql';
// import { useAuth } from '../context';
// import { COLORS } from '../../constants';
// import { IFileUpload } from '../../feature/profile/components';
// import { User } from '../../generated/graphql';
// import { Button } from '../button';

const SIZE = 250;

const useStyle = makeStyles({
    wrap: {
        border: `2px dashed ${COLORS.blue}`,
        borderRadius: 10,
        width: SIZE,
        height: SIZE,
        margin: 'auto',
        position: 'relative',
        overflow: 'hidden',
    },
    label: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        fontWeight: 700,
        fontSize: '1.25em',
        color: COLORS.blue,
        cursor: 'pointer',
    },
    removeBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

type TRotate = 'right' | 'left';

interface BtnRotateProps {
    onChange: (value: TRotate) => void;
}

const BtnRotate = ({ onChange }: BtnRotateProps) => {
    const rotateRight = () => onChange('right');
    return (
        <IconButton style={{ margin: 0 }} onClick={rotateRight}>
            <Rotate90DegreesCwRoundedIcon />
        </IconButton>
    );
};

interface Props {
    label?: string;
    upload: (img: IFileUpload) => void;
    loading?: boolean;
}

const AvatarEdit = ({ label = 'Chọn ảnh', upload, loading = false }: Props) => {
    const { t } = useTranslation('editAvatar');
    const { user } = useAuth();
    const classes = useStyle();

    const [image, setImage] = useState<string | File>('');
    const [rotate, setRotate] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);

    const noImage = typeof image === 'string' ? image.length > 0 : !!image;
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            noClick: noImage,
            accept: {
                'image/jpeg': [],
                'image/png': [],
            },
        });

    const removeImage = () => {
        setImage('');
    };

    const editor = useRef<any>(null);

    const handleSave = async () => {
        if (editor.current) {
            const canvasScaled = editor.current
                .getImageScaledToCanvas()
                .toDataURL();

            const res = await fetch(canvasScaled);
            const blob = await res.blob();

            const file = new File(
                [blob],
                `${(user as User)._id}${Date.now()}`,
                {
                    type: 'image/png',
                }
            );

            const form = new FormData();
            form.append('image', file);

            const response = await uploadImageS3Api(form);

            const image = {
                key: get(response.data.image, 'key'),
                url: get(response.data.image, 'url'),
            };

            upload(image as IFileUpload);
        }
    };

    const handleChangeRotate = (value: TRotate) => {
        setRotate((v) => {
            const newValue = value === 'right' ? v + 1 : v - 1;
            return newValue;
        });
    };

    const handleChangeScale = (e: any) => {
        setScale(e.target.value);
    };

    useEffect(() => {
        setImage(acceptedFiles[0]);
    }, [acceptedFiles]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
        >
            <Grid item>
                <div className={classes.wrap}>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <AvatarEditor
                            ref={editor}
                            image={image}
                            width={SIZE}
                            height={SIZE}
                            border={0}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={scale}
                            rotate={rotate * 45}
                        />
                        {!noImage && (
                            <span className={classes.label}>{label}</span>
                        )}
                        <input {...getInputProps()} />
                    </div>
                    {!!noImage && (
                        <IconButton
                            className={classes.removeBtn}
                            onClick={removeImage}
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                    )}
                </div>
            </Grid>
            {!!noImage && (
                <Grid item>
                    <Grid
                        container
                        columnSpacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid style={{ paddingTop: 5 }}>
                            <input
                                type="range"
                                onChange={handleChangeScale}
                                min="1"
                                max="2"
                                step="0.01"
                                defaultValue="1"
                            />
                        </Grid>
                        <Grid item>
                            <BtnRotate onChange={handleChangeRotate} />
                        </Grid>
                    </Grid>
                </Grid>
            )}

            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={loading || !noImage}
                    loading={loading}
                >
                    {t('upload')}
                </Button>
            </Grid>
        </Grid>
    );
};

export { AvatarEdit };
