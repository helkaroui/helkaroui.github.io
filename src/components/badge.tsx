import React from 'react';

export default function Collapse(props: { children: React.ReactNode; color: string }) {
    const { children, color = "Collapse" } = props;
    return (<span
        style={{
            backgroundColor: color,
            borderRadius: '8px',
            color: '#fff',
            padding: '0.2rem',
            border: "1px solid var(--ifm-alert-border-color)"
        }}>
        {children}
    </span>
    );
}