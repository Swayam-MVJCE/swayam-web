'use client';
import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TicketScanner = () => {
  const [result, setResult] = useState('');
  const router = useRouter();
  const handleScan = (text, result) => {
    console.log(text, result);
    setResult(text);
    router.push(`/verify/${result}`);
  };

  return (
    <div className="purple-card-gradient text-white h-dvh font-satoshi py-10 px-6 flex flex-col items-center justify-center gap-6">
      <Image src="/images/swayam-logo.svg" width={140} height={140} />

      <h1 className="text-3xl font-bold text-center">Verify Ticket</h1>

      {!result && (
        <Scanner
          options={{
            audio: false,
            video: { facingMode: 'environment' },
            delayBetweenScanAttempts: 50,
            delayBetweenScanSuccess: 100,
          }}
          components={{
            tracker: true,
            onOff: true,
            count: true,
          }}
          onResult={(text, result) => handleScan(text, result)}
          onError={(error) => console.log(error?.message)}
        />
      )}
      <h1 className="text-xl font-semibold text-center">
        {result ? `Loading Ticket: ${result}` : 'Scan a ticket'}
      </h1>
    </div>
  );
};

export default TicketScanner;
