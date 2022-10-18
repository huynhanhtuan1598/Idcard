import { grey } from '@mui/material/colors';
import { ContactItem } from '../../feature/profile/components/contact-item/contact-item';
// import { hexToRGBA } from '.';
import  IThemeColorTemplate  from '../feature/admin/types';
// import { ContactItem } from '../feature/profile/components/contact-item';
import { hexToRGBA } from './hexToRgba';

export function getHtmlList(listSocial: any, theme: IThemeColorTemplate) {
    if (listSocial.length === 0) return '';

    const htmlString = listSocial.map((item: any) => {
        return (
            <ContactItem
                contact={item}
                colorIcon={theme.colorIcon}
                color={theme.color}
            />
        );
    });

    const borderColor = theme.color ? hexToRGBA(theme.color, 0.2) : grey[200];

    return (
        <div
            className="list-contact"
            style={{ borderTop: `1px solid ${borderColor}` }}
        >
            {htmlString}
        </div>
    );
}
