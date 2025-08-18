import React from 'react'
import Generate from '../components/Generate'
import QRCodeGenerator from '../components/QrCodeGenerator'
import QrFolderDashboard from "../components/QrFolderDashboard";

export default function QrCodesPage() {
  return (
    <div>
        <QrFolderDashboard/>
        
        <QRCodeGenerator/>
    </div>
  )
}
