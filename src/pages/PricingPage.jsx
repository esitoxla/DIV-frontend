import React from 'react'
import PricingTab from '../components/PricingTab';
import MonthlyPricing from '../components/MonthlyPricing';
import { useState } from 'react';

export default function PricingPage() {
    const [activePlan, setActivePlan] = useState("month");
  return (
    <>
      <PricingTab activePlan={activePlan} changeTab={setActivePlan}/>
      <MonthlyPricing/>
    </>

import YearlyPricing from '../components/YearlyPricing';

import { useState } from 'react';

export default function PricingPage() {
    const [activePlan, setActivePlan] = useState("monthly");
  return (
    <div className="my-12">
      <PricingTab activePlan={activePlan} changeTab={setActivePlan} />

      <div className="mt-6">
        {activePlan === "monthly" ? <MonthlyPricing /> : <YearlyPricing />}
      </div>
    </div>
  );
}
