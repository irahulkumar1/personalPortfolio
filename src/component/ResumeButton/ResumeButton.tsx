import { useState } from 'react';

export const Resume = () => {
    const [showProgressBar, setShowProgressBar] = useState(false);

    const handleDownloadClick = () => {
        setShowProgressBar(true);

        const downloadFile = () => {
            return new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 3000);
            });
        };

        downloadFile()
            .then(() => {
                const link = document.createElement('a');
                link.href = '/src/assets/Resume/Rahul_cv.pdf';
                link.download = 'Rahul_cv.pdf';
                link.click();
            })
            .catch((error) => {
                console.error('Download error:', error);
            })
            .finally(() => {
                setShowProgressBar(false);
            });
    };

    return (
        <>
            <button
                className={`relative bg-highLighter hover:bg-[#ff577f] mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg ${showProgressBar ? 'hidden' : ''
                    }`}
                onClick={handleDownloadClick}
                disabled={showProgressBar}
            >
                Download CV
            </button>
            {showProgressBar && (
                <div className="relative w-[7rem] h-2 bg-[#ff577f] mt-3 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-full bg-highLighter"
                        style={{ width: `${showProgressBar}%` }}
                    />
                </div>
            )}
        </>
    );
};
