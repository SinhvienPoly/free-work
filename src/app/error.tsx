'use client';

const error = ({ reset }: { error: Error; reset: () => void }) => {
    return (
        <div className="relative h-screen w-screen flex  justify-center items-center">
            <div
                style={{
                    background: 'url(/bg-error.webp)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                }}
                className="absolute z-0 top-0 left-0 right-0 bottom-0 bg-scroll bg-no-repeat opacity-70"
            ></div>
            <div className="relative z-10 w-[800px] px-2 grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-full">
                <div className="col-span-1 hidden lg:block">
                    <img src="/404.webp" className="w-full" alt="" />
                </div>
                <div className="bg-gray-50 text-center p-4 col-span-2 border-t-4 border-gray-500 rounded">
                    <div className="space-y-1">
                        <h1 className="text-6xl font-semibold">404</h1>
                        <h3 className="text-2xl font-semibold">Page not found</h3>
                        <p className="text-xl">Are you lost,traveler?</p>
                        <p className="text-xl">Don't worry,Paimon is here to guide you back</p>
                    </div>
                    <div className="mt-6 space-x-1">
                        <button
                            className="border mr-2 border-gray-500 rounded px-4 py-2 bg-black text-white"
                            onClick={reset}
                        >
                            Try again
                        </button>
                        <a href={'/'}>Back to home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default error;
