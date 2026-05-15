import React from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import GstCalculator from '@/pages/GstCalculator';
import InvoiceNumberGenerator from '@/pages/InvoiceNumberGenerator';
import HsnCodeLookup from '@/pages/HsnCodeLookup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gst-calculator" element={<GstCalculator />} />
        <Route path="/invoice-number-generator" element={<InvoiceNumberGenerator />} />
        <Route path="/hsn-code-lookup" element={<HsnCodeLookup />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
