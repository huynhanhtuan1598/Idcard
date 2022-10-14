import { useTranslation } from 'react-i18next';
import { EditColorTheme } from '../components/edit-color-theme/edit-color-theme';

const Color = () => {
    const { t } = useTranslation('theme');
    return <EditColorTheme title={t('appearance.color')} type="color" />;
};

export default Color;
