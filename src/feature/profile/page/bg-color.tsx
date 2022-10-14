import { useTranslation } from 'react-i18next';
import { EditColorTheme } from '../components/edit-color-theme/edit-color-theme';

const BgColor = () => {
	const { t } = useTranslation('theme');
	return <EditColorTheme title={t('appearance.bgColor')} type="backgroundColor" />;
};

export default BgColor;
