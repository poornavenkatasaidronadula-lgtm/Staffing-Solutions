import React from 'react';
import './BlkBackground.css';

export default function BlkBackground() {
  return (
    <>
      {/* ── Fixed base: dark navy + dots texture ── */}
      <div className="blk-fixed-base" />

      {/* ── Absolute container (full page height) ── */}
      <div className="blk-page-layer">

        {/* === HERO SECTION: 7 Animated Squares === */}
        <div className="blk-square blk-sq1" />
        <div className="blk-square blk-sq2" />
        <div className="blk-square blk-sq3" />
        <div className="blk-square blk-sq4" />
        <div className="blk-square blk-sq5" />
        <div className="blk-square blk-sq6" />
        <div className="blk-square blk-sq7" />

      </div>
    </>
  );
}
