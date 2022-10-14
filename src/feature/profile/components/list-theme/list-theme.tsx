import { CircularProgress, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Button } from '../../../../components/button/button';
import { useAllTemplateUserQuery } from '../../../../components/generated/graphql';
// import { Button } from '../../../../components';
// import { useAllTemplateUserQuery } from '../../../../generated/graphql';
import { ThumbTemplate } from './thumb-theme';

const useStyles = makeStyles({
    wrap: {
        overflow: 'hidden',
    },
    inner: {
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '10px 0',
    },
    item: {
        display: 'inline-block',
        padding: 0,
        margin: 7,
    },
});

function ListTheme() {
    const classes = useStyles();
    const params = useParams();

    const { loading, data } = useAllTemplateUserQuery();

    if (loading) {
        return <CircularProgress />;
    }

    const templates = data?.allTemplateUser.data || [];
    return (
        <div className={classes.wrap}>
            <div className={classes.inner}>
                {templates.map((item) => {
                    const active = item._id === params.idTheme;

                    return (
                        <Paper
                            component={Button}
                            key={item._id}
                            className={classes.item}
                        >
                            <ThumbTemplate active={active} template={item} />
                        </Paper>
                    );
                })}
            </div>
        </div>
    );
}

export { ListTheme };
