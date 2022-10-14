import { CheckCircle } from '@mui/icons-material';
import { Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { ImageS3 } from '../../../../components/generated/graphql';
// import { ImageS3 } from '../../../../generated/graphql';

const useStyle = makeStyles({
    thumb: {
        width: '100%',
        paddingBottom: '100%',
        border: '1px solid #ddd',
        backgroundSize: 'cover',
        cursor: 'pointer',
        position: 'relative',
    },
});

interface Props {
    image: ImageS3;
    onSelect: (image?: ImageS3) => void;
    selected?: boolean;
}

function ThumbBg({ image, onSelect, selected }: Props) {
    const classes = useStyle();

    const handleClick = () => {
        onSelect(selected ? undefined : image);
    };

    const sx = {
        backgroundImage: `url(${image.url})`,
    };

    return (
        <Box className={classes.thumb} onClick={handleClick} sx={sx}>
            {selected && (
                <CheckCircle
                    sx={{
                        color: blue[500],
                        position: 'absolute',
                        right: '5px',
                        top: '5px',
                    }}
                />
            )}
        </Box>
    );
}

export { ThumbBg };
