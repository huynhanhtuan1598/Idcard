import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { pick } from 'lodash';
import * as queryString from 'query-string';
import { useTranslation } from 'react-i18next';
import { Link, Navigate } from 'react-router-dom';
import { Loading } from '../../../../components/loading/loading';
import { useUserRegisterQuery } from '../../../../components/generated/graphql';

interface Props {
    id?: string;
}

const useStyle = makeStyles({
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        minHeight: '100vh',
        textAlign: 'center',
    },
    title: {
        fontSize: 100,
        fontWeight: 700,
        color: '#ff0051',
    },
    text: {
        fontSize: 16,
        fontWeight: 500,

        marginBottom: 30,
        lineHeight: 1.8,
    },
});

function NotProfile({ id }: Props) {
    const { t } = useTranslation();

    const { loading, data } = useUserRegisterQuery({
        variables: {
            idRegister: id,
        },
    });

    const classes = useStyle();

    if (loading) {
        // return <Loading full />;
        return <Loading/>
    }

    if (data) {
        let searchObj: any = {
            ...pick(data.userRegister, [
                'code',
                'email',
                // 'name',
                'phoneNumber',
            ]),
            new: true,
        };
        if (!data.userRegister.userBuyCardGroupId?._id) {
            searchObj.name = data.userRegister.name;
        }

        const search = queryString.stringify(searchObj);

        return (
            <Navigate
                to={{
                    pathname: '/signup',
                    search: `?${search}`,
                }}
                replace
            />
        );
    }

    return (
        <div className={classes.wrap}>
            <Typography variant="h2" className={classes.title}>
                404
            </Typography>

            <Typography className={classes.text}>
                {t('account_not_found_description')}
            </Typography>
            <Button
                component={Link}
                to="/signup"
                variant="contained"
                size="large"
                color="secondary"
            >
                {t('signup_now')}
            </Button>
        </div>
    );
}

export { NotProfile };
