// @use client
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const WebflowContentComponent = () => {
    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://roami.webflow.io')
            .then((response) => response.text())
            .then((html) => setContent(html))
            .catch((error) => console.error('Error fetching content:', error));
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: content || '' }} />;
};

const WebflowContent = dynamic(() => Promise.resolve(WebflowContentComponent), {
    ssr: false,
});

const Page: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <WebflowContent />
        </main>
    );
};

export default Page;
