import React from "react";
import "../../styles/chestDrawer.css"; // Asegúrate de crear este archivo CSS

const ChestDrawer = () => {
  return (
    <div className="chest-wrapper">
      <div className="chest">
        <div className="chest__panel chest__panel--back"></div>
        <div className="chest__panel chest__panel--top"></div>
        <div className="chest__panel chest__panel--bottom"></div>
        <div className="chest__panel chest__panel--right"></div>
        <div className="chest__panel chest__panel--front">
          <div className="chest__panel chest__panel--front-frame"></div>
        </div>
        <div className="chest__panel chest__panel--left"></div>

        {/* Cajones */}
        <div className="chest__drawer drawer" data-position="1">
          <details>
            <summary></summary>
            <div className="drawer__structure">
              <div className="drawer__panel drawer__panel--back"></div>
              <div className="drawer__panel drawer__panel--bottom"></div>
              <div className="drawer__panel drawer__panel--right"></div>
              <div className="drawer__panel drawer__panel--left"></div>
              <div className="drawer__panel drawer__panel--front"></div>
            </div>
          </details>
        </div>
        <div className="chest__drawer drawer" data-position="2">
          <details>
            <summary></summary>
            <div className="drawer__structure">
              <div className="drawer__panel drawer__panel--back"></div>
              <div className="drawer__panel drawer__panel--bottom"></div>
              <div className="drawer__panel drawer__panel--right"></div>
              <div className="drawer__panel drawer__panel--left"></div>
              <div className="drawer__panel drawer__panel--front"></div>
            </div>
          </details>
        </div>
        <div className="chest__drawer drawer" data-position="3">
          <details>
            <summary></summary>
            <div className="drawer__structure">
              <div className="drawer__panel drawer__panel--back"></div>
              <div className="drawer__panel drawer__panel--bottom"></div>
              <div className="drawer__panel drawer__panel--right"></div>
              <div className="drawer__panel drawer__panel--left"></div>
              <div className="drawer__panel drawer__panel--front"></div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ChestDrawer;
