import React, { useEffect, useState } from "react";
import faqData from "./faq.js"
const FaqChild = () => {
 

  return (
    <>
    <div className="accordion" id="accordionExample">
      {faqData.map((faq) => (
        <div key={faq.id} className="accordion-item accordion block active-block">
          <h2 className="accordion-header">
            <button
              className={`accordion-button acc-btn ${faq.id === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded={faq.id === 1}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${faq.id}`}
            className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="content">
                {faq.answer.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FaqChild;
