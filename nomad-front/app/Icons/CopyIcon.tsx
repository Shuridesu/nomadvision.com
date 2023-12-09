'use client'
import React from 'react'

export default function CopyIcon() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        window.alert('succeed copy');
      })
      .catch(() => {
        window.alert('クリップボードへのコピーに失敗しました:');
      });
  };
  return (
    <>
      <button onClick = {copyToClipboard}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.5 16.5L19.5 4.5L18.75 3.75H9L8.25 4.5L8.25 7.5L5.25 7.5L4.5 8.25V20.25L5.25 21H15L15.75 20.25V17.25H18.75L19.5 16.5ZM15.75 15.75L15.75 8.25L15 7.5L9.75 7.5V5.25L18 5.25V15.75H15.75ZM6 9L14.25 9L14.25 19.5L6 19.5L6 9Z"
            fill="#080341"
          />
        </svg>
      </button>
    </>
  );
}
