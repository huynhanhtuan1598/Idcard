import { Container } from '@mui/material';
import { pick } from 'lodash';
import { useTranslation } from 'react-i18next';
import { AppBar } from '../../../components/appbar/appbar';
import { Back } from '../../../components/appbar/back';
import { useAuth } from '../../../components/context/auth';
// import { ProviderImagesUser } from '../../../components/context/images';
import { ImageS3, useChangeConfigThemeMutation } from '../../../components/generated/graphql';
import { useMessage } from '../../../components/message/notification';
import { ListImages } from '../components/edit-theme/list-images';
// import { AppBar, Back, useMessage } from '../../../components';
// import { ProviderImagesUser, useAuth } from '../../../context';
// import {
//     ImageS3,
//     useChangeConfigThemeMutation,
// } from '../../../generated/graphql';

const BgImage = () => {
    const message = useMessage();
    const { user } = useAuth();
    const { t } = useTranslation('theme');

    const backgroundImage = user?.themeConfig?.backgroundImage;

    const [handleChangeConfigTheme, { loading }] = useChangeConfigThemeMutation(
        {
            onError(error) {
                console.log(error);
                message(t('change_config.error'), { variant: 'error' });
            },
            onCompleted(data) {
                if (data.changeConfigTheme?.success) {
                    message(t('change_config.success'), {
                        variant: 'success',
                    });
                } else {
                    message(t('change_config.error'), { variant: 'error' });
                }
            },
        }
    );

    const handelSelectBg = (image?: ImageS3) => {
        handleChangeConfigTheme({
            variables: {
                changeConfigThemeInput: {
                    ...pick(user?.themeConfig, [
                        'color',
                        'colorIcon',
                        'backgroundColor',
                        'fontFamily',
                    ]),
                    backgroundImage: image?._id,
                },
            },
        });
    };

    return (
        // <ProviderImagesUser>
        <div>
                <AppBar
                title={t('appearance.bgImage')}
                leftContent={<Back to="/appearance" />}
            />
            <Container maxWidth="sm" sx={{ mt: 9 }}>
                <ListImages
                    loading={loading}
                    imageSelectId={backgroundImage?._id}
                    selectBg={handelSelectBg}
                />
            </Container>
        </div>
            
        // </ProviderImagesUser>
    );
};

export default BgImage;
