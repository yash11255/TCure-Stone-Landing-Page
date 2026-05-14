"use client";

import React, { useState } from "react";

const SCRIPT_URL = process.env.NEXT_PUBLIC_APPOINTMENT_FORM_SHEET_URL || "";

export default function LocationLeadForm({ locationName = "your area" }: { locationName?: string }) {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Create the payload for Google Sheets matching the App Script expectations
    const data = {
      source: `Lead from ${locationName}`,
      name: formData.get("fullName"),
      phone: "+91 " + formData.get("phone"),
      state: locationName,
      stoneSize: "Not Provided",
      consultationType: formData.get("consultationType"),
      email: "Not Provided",
      description: `Patient requested callback from the ${locationName} landing page.`,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was a connection issue. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
          <span className="material-symbols-outlined text-3xl">check</span>
        </div>
        <h4 className="font-sans text-xl font-bold text-blue-900 mb-2">Request Received</h4>
        <p className="text-sm text-slate-600">Our medical coordinator will contact you shortly to confirm your slot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Patient Name</label>
        <input name="fullName" required className="w-full bg-slate-50 border-transparent focus:border-blue-900 focus:ring-0 rounded-xl py-4 px-5 text-slate-900" placeholder="Enter full name" type="text" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">WhatsApp Number</label>
        <div className="flex">
          <span className="bg-slate-50 border-r border-slate-200 py-4 px-4 rounded-l-xl text-slate-600 font-medium">+91</span>
          <input name="phone" required className="w-full bg-slate-50 border-transparent focus:border-blue-900 focus:ring-0 rounded-r-xl py-4 px-5 text-slate-900" placeholder="10-digit mobile" type="tel" pattern="[0-9]{10}" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Procedure Search</label>
        <select name="consultationType" required className="w-full bg-slate-50 border-transparent focus:border-blue-900 focus:ring-0 rounded-xl py-4 px-5 text-slate-900">
          <option value="Laser Stone Removal (RIRS)">Laser Stone Removal (RIRS)</option>
          <option value="PCNL (Large/Staghorn Stones)">PCNL (Large/Staghorn Stones)</option>
          <option value="ESWL (Shockwave Lithotripsy)">ESWL (Shockwave Lithotripsy)</option>
          <option value="URS (Ureteroscopic Stone Removal)">URS (Ureteroscopic Stone Removal)</option>
          <option value="Not Sure - Need Diagnosis">Not Sure - Need Diagnosis</option>
        </select>
      </div>
      <button disabled={loading} type="submit" className="w-full editorial-gradient text-white font-sans font-bold py-5 rounded-full mt-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70">
        {loading ? "Submitting..." : "Book OPD Appointment"} <span className="material-symbols-outlined">event_available</span>
      </button>
    </form>
  );
}
