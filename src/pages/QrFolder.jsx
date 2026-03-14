import React from 'react'
import DonutCharts from '../components/DonutCharts'
import QrScanActivityChart from "../components/QrScanActivityChart";
import AnalyticsIntro from '../components/analyticsIntro'

export default function QrFolder() {
  return (
    <div>
       <AnalyticsIntro/>
        <QrScanActivityChart/>
        <DonutCharts/>
        
    </div>
  )
}
