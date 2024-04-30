'use client';

import { downloadCSVAction } from '@/app/actions/downloadCSVAction';

export const DownloadButton = ({ event }) => {
  const handleDownload = async () => {
    const csv = await downloadCSVAction(event.id);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title}- Registrations.csv`;
    a.click();
  };
  return (
    <button
      className="bg-purple-700 text-white px-4 py-2 rounded-md"
      onClick={() => {
        handleDownload();
      }}
    >
      Download CSV
    </button>
  );
};
