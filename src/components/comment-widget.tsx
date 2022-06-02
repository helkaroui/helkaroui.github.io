import React from 'react';
import Giscus from '@giscus/react';

export function CommentWidget(props) {
    return (
        <>
            <Giscus
                id="comments"
                repo="helkaroui/helkaroui.github.io"
                repoId="MDEwOlJlcG9zaXRvcnkzNzUxMDI0MzY="
                category="Comments"
                categoryId="DIC_kwDOFlub5M4CPa1g"
                mapping="url"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="light"
                lang="en"
                loading="lazy"
            />
        </>
    );
}