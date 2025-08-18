import React from 'react'
import QRCodeMainTable from '../components/QrCodeMainTable'
import DonutCharts from '../components/DonutCharts'
import QRScanActivityChart from '../components/QrScanActivityChart'
import AnalyticsIntro from '../components/analyticsIntro'

export default function QrFolder() {
  return (
    <div>
       <AnalyticsIntro/>
        <QRScanActivityChart/>
        <DonutCharts/>
        <QRCodeMainTable/>
    </div>
  )
}
