import React from 'react'
import WidgetTopFilterBox from './WidgetTopFilterBox'
import WidgetContentBox from './WidgetContentBox'

const Index = () => {
  return (
      <div className="ls-widget">
        <div className="tabs-box">
          <div className="widget-title">
            <WidgetTopFilterBox  />
          </div>
          {/* End top widget filter bar */}

          <WidgetContentBox  />
          {/* End widget-content */}
        </div>
      </div>
   
  )
}

export default Index