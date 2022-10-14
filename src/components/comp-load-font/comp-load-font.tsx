import { cloneElement, useEffect, Suspense, AriaRole } from 'react';
import WebFont from 'webfontloader';
// import { Font } from '../select-font/';

interface Props {
    fonts?: AriaRole[];
    children: JSX.Element;
}

const CompLoadFont = ({ fonts = [], children }: Props) => {
    useEffect(() => {
        if (fonts && fonts.length > 0) {
            WebFont.load({
                loading() {},
                google: {
                    families: fonts as string[],
                },
            });
        }
    }, [fonts]);

    const style = {
        fontFamily: fonts[0],
    };

    const renderComp = cloneElement(children, { style });

    return <Suspense fallback={<>loading...</>}>{renderComp}</Suspense>;
};

export { CompLoadFont };
