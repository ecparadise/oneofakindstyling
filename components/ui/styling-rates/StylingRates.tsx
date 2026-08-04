import React from 'react';
import './StylingRates.css';
import { tiers } from '@/app/constants/services-list';

const StylingRates: React.FC = () => {
  return (
    <div className="styling-rates-container">
      <div className="sheet">
        <h1 className="brand mb-2">
          Services
        </h1>
        {/* <div className="tagline">
          One-on-one wardrobe styling for local clients - every occasion, head to toe.
        </div> */}
        <hr className="header-rule" />

        <div className="ladder">
          {tiers.map((tier, index) => (
            <div key={index} className="tier">
              <div className="tier-top">
                <span className="tier-name">
                  {tier.name}
                  {tier.meta && <span className="tier-meta">{tier.meta}</span>}
                </span>
                <span className="tier-price">{tier.price}</span>
              </div>
              <div className="tier-desc">{tier.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="footer-grid">
            <div className="footer-note">
              Rates reflect styling time and expertise only. Cost of any clothing,
              alterations, or purchases made during a session is separate. Custom
              packages available on request.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingRates;