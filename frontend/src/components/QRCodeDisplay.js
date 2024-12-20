import React from 'react';

function QRCodeDisplay() {
  return (
    <div>
      <h2>Scan this QR code</h2>
      <img src="/qr-codes/qr_code.png" alt="QR Code" style={{ width: '200px', height: '200px' }} />
    </div>
  );
}

export default QRCodeDisplay;
