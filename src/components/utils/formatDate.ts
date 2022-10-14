import moment from 'moment';
import { DATE_FORMAT } from '../constants/theme';
// import { DATE_FORMAT } from '../../constants';

interface IFormatDate {
    date?: string;
    format?: string;
}
export const formatDate = ({ date, format = DATE_FORMAT }: IFormatDate) =>
    moment(date).format(format);
