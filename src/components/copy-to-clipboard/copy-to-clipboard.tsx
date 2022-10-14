import React, { ReactNode } from 'react';
import { CopyToClipboard as ComCopy } from 'react-copy-to-clipboard';

interface Props {
    children: ReactNode;
    text: string;
    onCopy?: () => void;
}

const CopyToClipboard = ({ children, text, onCopy }: Props) => {
    return (
        <ComCopy text={text} onCopy={onCopy}>
            {children}
        </ComCopy>
    );
};

export { CopyToClipboard };
