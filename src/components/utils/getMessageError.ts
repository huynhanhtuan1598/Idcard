import { get } from 'lodash';
import * as errors from '../error-code/group';

const DEFAULT_MESSAGE = 'Đã xảy ra lỗi';

export function getErrorMessage(
    errorCode: string | null | undefined,
    message?: string
): string {
    if (!errorCode) {
        return DEFAULT_MESSAGE;
    }
    const error = get(errors, errorCode);

    return get(error, 'message', message) || DEFAULT_MESSAGE;
}
