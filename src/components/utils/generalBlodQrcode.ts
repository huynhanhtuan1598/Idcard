const promiseZipFile = (file: string) =>
    new Promise((resolve, reject) => {
        return fetch(file)
            .then((res) => res.blob())
            .then((blod) => {
                const blodFile = new File([blod], 'image.jpeg', {
                    type: blod.type,
                });
                resolve(blodFile);
            }).catch((err) => reject())
    });

export const generalBlodQrcode = (
    files: string[]
): Promise<any[]> => {
    return Promise.all(
        files.map((file) => {
            return promiseZipFile(file);
        })
    );

};
