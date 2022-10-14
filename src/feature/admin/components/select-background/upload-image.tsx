import AddIcon from '@mui/icons-material/Add';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import pick from 'lodash/pick';
import React, { CSSProperties, useState } from 'react';
import { uploadImageS3Api } from '../../../../components/api/upload-image';

interface Props {
    upload: (image: any) => void;
    loading?: boolean;
    multiple?: boolean;
    style?: CSSProperties;
}

const useStyle = makeStyles({
    wrap: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        border: '1px solid #f1f1f1',
        cursor: 'pointer',
    },
    input: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        opacity: 0,
    },
});

const UploadImage = ({ upload, multiple = false, style = {} }: Props) => {
    const classes = useStyle();
    const [loading, setLoading] = useState<boolean>(false);

    const handleUpload = async (e: any) => {
        try {
            setLoading(true);
            const file = e.target.files[0];
            const form = new FormData();
            form.append('image', file);

            const response = await uploadImageS3Api(form);

            const image = pick(response.data.image, ['key', 'url']);

            upload(image);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={classes.wrap} style={style}>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <AddIcon />
                    <input
                        type="file"
                        multiple={multiple}
                        onChange={handleUpload}
                        className={classes.input}
                        disabled={loading}
                    />
                </>
            )}
        </div>
    );
};

export { UploadImage };
