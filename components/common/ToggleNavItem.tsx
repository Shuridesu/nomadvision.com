'use client';


import React, { useState, useRef, useEffect } from 'react';

interface Props{
    title:string;
    children:React.ReactNode;
}

const ToggleNavItem = ({ title, children }:Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // 外側のクリックを検出するためのイベントリスナー
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // ドキュメント全体にイベントリスナーを追加
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // コンポーネントがアンマウントされた時にイベントリスナーを削除
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} className="nav-item">
            <button onClick={() => setIsOpen(!isOpen)} className="nav-item-button">
                {title}
            </button>
            {isOpen && (
                <div className="nav-item-content">
                    {children}
                </div>
            )}
        </div>
        
    );
};

export default ToggleNavItem;
