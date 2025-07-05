'use client';

import { useState } from 'react';

// 🔍 تعریف نوع props
type CopyTextProps = {
    text?: string;
    label?: string; // برچسب اختیاری برای نمایش (اگر نخواهیم مقدار دقیق رو نشون بدیم)
    className?: string; // کلاس استایل خارجی
};

export default function CopyText({text,label,className = ''}: CopyTextProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            if (typeof text === 'string') {
                await navigator.clipboard.writeText(text);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('❌ کپی با خطا مواجه شد:', error);
        }
    };

    return (
        <div
            onClick={handleCopy}
            className={`copyable-text ${className}`}
            style={{
                cursor: 'pointer',
                padding: '2px 6px',
                backgroundColor: '#f5f5f5',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s ease',
            }}
        >
            <span>{label ?? text}</span>
            {copied && <span style={{ color: 'green' }}>✅</span>}
        </div>
    );
}