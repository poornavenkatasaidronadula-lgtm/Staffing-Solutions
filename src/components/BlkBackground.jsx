import React from 'react';
import './BlkBackground.css';

export default function BlkBackground() {
  return (
    <>
      {/* ── Fixed base: dark navy + dots texture ── */}
      <div className="blk-fixed-base" />

      {/* ── Absolute container (full page height) ── */}
      <div className="blk-page-layer">
        {/* No floating shapes, just clean background */}
      </div>
    </>
  );
}
