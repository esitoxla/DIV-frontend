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
  );
}
