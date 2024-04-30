'use client';
import Link from 'next/link';
import React from 'react';

const ViewScreenshotButton = ({
  name,
  value,
  onChange,
  readonly,
  rawErrors,
}) => {
  return (
    <Link
      href={`/screenshot?url=${encodeURIComponent(value)}`}
      target="_blank"
      className="bg-blue-500 px-4 py-1 rounded-lg text-white"
    >
      View Screenshot
    </Link>
  );
};

export default ViewScreenshotButton;
