import React from 'react'
import DonutCharts from '../components/DonutCharts'
import QrScanActivityChart from "../components/QrScanActivityChart.jsx";
import AnalyticsIntro from '../components/AnalyticsIntro'

export default function QrFolder() {
  return (
    <div>
       <AnalyticsIntro/>
        <QrScanActivityChart/>
        <DonutCharts/>
        
    </div>
  )
}
