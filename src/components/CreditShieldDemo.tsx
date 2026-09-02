import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Activity 
} from 'lucide-react';

export const CreditShieldDemo: React.FC = () => {
  // Simulator input parameters
  const [income, setIncome] = useState<number>(65000);
  const [loanAmount, setLoanAmount] = useState<number>(18000);
  const [creditScore, setCreditScore] = useState<number>(710);
  const [employmentYears, setEmploymentYears] = useState<number>(4);
  const [existingDebt, setExistingDebt] = useState<number>(8500);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(36);

  // Compute calculated features
  const debtToIncomeRatio = useMemo(() => {
    if (income <= 0) return 100;
    return Math.min(100, Math.round(((existingDebt + (loanAmount / (loanTermMonths / 12))) / income) * 100));
  }, [income, existingDebt, loanAmount, loanTermMonths]);

  const loanToIncomeRatio = useMemo(() => {
    if (income <= 0) return 100;
    return Math.min(100, Math.round((loanAmount / income) * 100));
  }, [income, loanAmount]);

  // Simulated LightGBM inference model
  const prediction = useMemo(() => {
    let scoreWeight = 0;

    // Credit score impact (300 to 850)
    if (creditScore >= 750) scoreWeight -= 1.8;
    else if (creditScore >= 680) scoreWeight -= 0.9;
    else if (creditScore >= 620) scoreWeight += 0.4;
    else scoreWeight += 1.9;

    // Debt to income impact
    if (debtToIncomeRatio > 45) scoreWeight += 1.6;
    else if (debtToIncomeRatio > 35) scoreWeight += 0.8;
    else scoreWeight -= 0.6;

    // Loan to income
    if (loanToIncomeRatio > 50) scoreWeight += 1.2;
    else if (loanToIncomeRatio < 25) scoreWeight -= 0.5;

    // Employment length
    if (employmentYears >= 5) scoreWeight -= 0.7;
    else if (employmentYears < 1) scoreWeight += 0.8;

    // Logistic sigmoid transformation: P(default) = 1 / (1 + exp(-scoreWeight))
    const rawProb = 1 / (1 + Math.exp(-scoreWeight));
    const defaultProbability = Math.min(99.4, Math.max(1.2, +(rawProb * 100).toFixed(1)));

    let riskGrade: 'A (Prime Low Risk)' | 'B (Moderate Risk)' | 'C (High Risk)' = 'A (Prime Low Risk)';
    let recommendation = 'Approved for expedited funding with prime interest tier.';

    if (defaultProbability > 40) {
      riskGrade = 'C (High Risk)';
      recommendation = 'Flagged for manual underwriter review. High probability of default.';
    } else if (defaultProbability > 18) {
      riskGrade = 'B (Moderate Risk)';
      recommendation = 'Conditional approval recommended with collateral requirement.';
    }

    return {
      defaultProbability,
      riskGrade,
      recommendation,
      confidence: '97.56% AUC-ROC Validation'
    };
  }, [creditScore, debtToIncomeRatio, loanToIncomeRatio, employmentYears]);

  const resetToSampleGood = () => {
    setIncome(85000);
    setLoanAmount(15000);
    setCreditScore(760);
    setEmploymentYears(6);
    setExistingDebt(5000);
    setLoanTermMonths(36);
  };

  const resetToSampleRisk = () => {
    setIncome(32000);
    setLoanAmount(28000);
    setCreditScore(580);
    setEmploymentYears(0);
    setExistingDebt(18000);
    setLoanTermMonths(60);
  };

  return (
    <div 
      id="credit-shield-simulator"
      className="rounded-2xl bg-white border-2 border-[#0c1466]/25 p-6 sm:p-8 shadow-xl space-y-6 text-[#0c1466]"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0c1466]/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#0c1466]/10 text-[#0c1466] text-xs font-mono font-semibold border border-[#0c1466]/20">
              Interactive ML Demo
            </span>
            <span className="text-xs text-[#0c1466]/70 font-mono">LightGBM Pipeline (AUC 0.9756)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0c1466] flex items-center gap-2">
            CreditShield — Loan Default Risk Assessment
          </h3>
          <p className="text-xs text-[#0c1466]/75">
            Simulate real-time scoring calculations implemented in Muhammad Aman's production ML model.
          </p>
        </div>

        {/* Action links */}
        <div className="flex items-center gap-2">
          <a
            href="https://loan-credit-risk-2.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c1466] hover:bg-[#0c1466]/90 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            Live App Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/Aman-Siddiqui122/Loan_Credit_Risk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#0c1466]/5 text-[#0c1466] text-xs font-semibold transition-colors border border-[#0c1466]/20 shadow-xs"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Preset scenario shortcuts */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[#0c1466]/70 font-mono font-medium">Load Sample Profiles:</span>
        <button
          onClick={resetToSampleGood}
          type="button"
          className="px-2.5 py-1 rounded bg-[#0c1466]/5 hover:bg-[#0c1466]/10 text-[#0c1466] border border-[#0c1466]/20 font-medium transition-colors cursor-pointer"
        >
          Prime Applicant (Low Risk)
        </button>
        <button
          onClick={resetToSampleRisk}
          type="button"
          className="px-2.5 py-1 rounded bg-[#0c1466]/5 hover:bg-[#0c1466]/10 text-[#0c1466] border border-[#0c1466]/20 font-medium transition-colors cursor-pointer"
        >
          Subprime Applicant (High Risk)
        </button>
      </div>

      {/* Main Grid: Controls & Real-Time ML Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders / Inputs */}
        <div className="lg:col-span-7 space-y-4 bg-[#0c1466]/5 p-5 rounded-xl border border-[#0c1466]/15">
          
          {/* Annual Income */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#0c1466]/80">Annual Income ($)</span>
              <span className="text-[#0c1466] font-mono font-bold">${income.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="15000"
              max="200000"
              step="2500"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-[#0c1466] cursor-pointer"
            />
          </div>

          {/* Requested Loan Amount */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#0c1466]/80">Requested Loan Amount ($)</span>
              <span className="text-[#0c1466] font-mono font-bold">${loanAmount.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="60000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-[#0c1466] cursor-pointer"
            />
          </div>

          {/* Credit Score */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#0c1466]/80">Credit Score (FICO/Bureau)</span>
              <span className="text-[#0c1466] font-mono font-bold">{creditScore}</span>
            </div>
            <input
              type="range"
              min="350"
              max="850"
              step="5"
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
              className="w-full accent-[#0c1466] cursor-pointer"
            />
          </div>

          {/* Existing Debt & Employment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            
            {/* Existing Debt */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-[#0c1466]/80">Current Debt ($)</span>
                <span className="text-[#0c1466] font-mono font-bold">${existingDebt.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={existingDebt}
                onChange={(e) => setExistingDebt(Number(e.target.value))}
                className="w-full accent-[#0c1466] cursor-pointer"
              />
            </div>

            {/* Employment History */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-[#0c1466]/80">Employment (Years)</span>
                <span className="text-[#0c1466] font-mono font-bold">{employmentYears} yrs</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={employmentYears}
                onChange={(e) => setEmploymentYears(Number(e.target.value))}
                className="w-full accent-[#0c1466] cursor-pointer"
              />
            </div>

          </div>

          {/* Derived Features Indicator */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#0c1466]/15 text-[11px] font-mono text-[#0c1466]/75">
            <div>
              Debt-to-Income (DTI): <strong className="text-[#0c1466]">{debtToIncomeRatio}%</strong>
            </div>
            <div>
              Loan-to-Income: <strong className="text-[#0c1466]">{loanToIncomeRatio}%</strong>
            </div>
          </div>

        </div>

        {/* Model Inference Results Card */}
        <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-xl border border-[#0c1466]/20 flex flex-col justify-between space-y-4 shadow-sm">
          
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#0c1466]/70 uppercase tracking-wider font-semibold">
                Predicted Default Risk
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#0c1466]/20 bg-[#0c1466]/10 text-[#0c1466]">
                {prediction.riskGrade}
              </span>
            </div>

            {/* Default Probability Gauge */}
            <div className="mt-4 text-center py-2">
              <div className="text-4xl sm:text-5xl font-extrabold font-mono tracking-tight text-[#0c1466]">
                {prediction.defaultProbability}%
              </div>
              <div className="text-xs text-[#0c1466]/70 mt-1 font-mono">
                Estimated Probability of Default
              </div>
            </div>

            {/* Visual Probability Bar */}
            <div className="w-full bg-[#0c1466]/10 rounded-full h-2.5 overflow-hidden my-3 border border-[#0c1466]/15">
              <div 
                className="h-full bg-[#0c1466] transition-all duration-300"
                style={{ width: `${prediction.defaultProbability}%` }}
              />
            </div>

            {/* Assessment Note */}
            <div className="p-3 rounded-lg bg-[#0c1466]/5 border border-[#0c1466]/15 text-xs text-[#0c1466] space-y-1">
              <div className="font-semibold text-[#0c1466] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#0c1466]" />
                Underwriting Recommendation:
              </div>
              <p className="text-[11px] leading-relaxed text-[#0c1466]/80">
                {prediction.recommendation}
              </p>
            </div>
          </div>

          {/* Pipeline Specs */}
          <div className="pt-3 border-t border-[#0c1466]/15 text-[11px] text-[#0c1466]/70 font-mono flex items-center justify-between">
            <span className="flex items-center gap-1 text-[#0c1466] font-semibold">
              <Sparkles className="w-3 h-3 text-[#0c1466]" />
              LightGBM + Flask REST
            </span>
            <span className="font-medium">Dockerized on AWS</span>
          </div>

        </div>

      </div>
    </div>
  );
};
