import React from 'react'
import DonutCharts from '../components/DonutCharts'
import QRScanActivityChart from "../components/QRScanActivityChart.jsx";
import AnalyticsIntro from '../components/AnalyticsIntro'

export default function QrFolder() {
  return (
    <div>
       <AnalyticsIntro/>
        <QRScanActivityChart/>
        <DonutCharts/>
    </div>
  )
}
