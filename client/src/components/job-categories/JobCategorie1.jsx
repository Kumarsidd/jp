import React from 'react';
import { Link } from "react-router-dom";
import { paths } from "@/services/paths";
import { categories } from "@/data/category";

// Icon mapping for categories
const categoryIcons = {
  'Basic Chemicals': 'fas fa-flask',
  'Specialty Chemicals': 'fas fa-vials',
  'Agrochemicals': 'fas fa-leaf',
  'Petrochemicals': 'fas fa-oil-can',
  'Polymers': 'fas fa-atom',
  'Fine Chemicals': 'fas fa-microscope',
  'Biochemicals': 'fas fa-vial',
  'Industrial Gases': 'fas fa-wind',
  'Chemical Engineering': 'fas fa-cogs',
  'Dyes and Pigments': 'fas fa-palette',
  'Surfactants': 'fas fa-spray-can',
  'Adhesives and Sealants': 'fas fa-sticky-note',
  'Catalysts': 'fas fa-star',
  'Lubricants and Greases': 'fas fa-oil',
  'Explosives': 'fas fa-bolt',
  'Water Treatment Chemicals': 'fas fa-water',
  'Flavors and Fragrances': 'fas fa-flower',
  'Nutraceuticals': 'fas fa-pills',
  'Cosmetic Chemicals': 'fas fa-makeup-brush',
  'Other': 'fas fa-question'
};

const JobCategorie1 = () => {
  return (
    <>
      {categories.slice(0, 9).map((item, index) => {
        // Get the icon, default to a generic icon if not found
        const iconClass = categoryIcons[item.label] || 'fas fa-flask';
        
        return (
          <div
            className="category-block col-lg-4 col-md-6 col-sm-12"
            key={item.label + index}
          >
            <div className="inner-box">
              <div className="content">
                
                <span className={`icon ${iconClass}`}></span>
                <h4>
                  <Link to={paths.job_list + "?categories=" + item.value}>
                    {item.label}
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default JobCategorie1;

// Optional: If you want to export the icon mapping for use elsewhere
export { categoryIcons };