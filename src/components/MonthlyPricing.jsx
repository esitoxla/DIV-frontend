import React from 'react'

export default function MonthlyPricing() {
  return (
    <div>
        <div>
            <h3>Free</h3>
            <span>$0/mth</span>
            <p>Start for free, no strings attached.</p>
            <div>
                <span>icon</span>
                <p>Basic QR codes</p>
            </div>
            <div>
                <span>icon</span>
                <p>Limited scans</p>
            </div>
            <div>
                <span>icon</span>
                <p>PNG Download</p>
            </div>
            <div>
                <span>icon</span>
                <p>Limited Payments per month</p>
            </div>
            {/* horizontal line */}
            <div>
                <p>Additional Feature:</p>
                <p>Basic QR customization (colors, shapes)</p>
            </div>
            <button>Choose</button>
        </div>



        <div>Pro Plan</div>
        <div>Business</div>
    </div>
  )
}
