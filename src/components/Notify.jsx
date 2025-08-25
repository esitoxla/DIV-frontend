import { useState } from "react";

export default function SettingsPage() {
  // Notification toggles
  const [notifications, setNotifications] = useState({
    productUpdates: true,
    analyticsReports: true,
    scanAlerts: true,
    promoEmails: true,
  });

  // Preferences
  const [language, setLanguage] = useState("English");
  const [timeZone, setTimeZone] = useState("UMT");

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Notification Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full bg-gray-50">
        <div className="md:w-1/3 p-6 ">
          <h2 className="text-lg font-semibold mb-4">Notification</h2>
          <p className="text-gray-600 mb-6">
            Customize what alerts you receive and how you get them.
          </p>
        </div>

        <div className="bg-white shadow  p-6 rounded-md md:w-2/3 ">
          <div className="space-y-4">
            <ToggleRow
              label="Receive product updates"
              description="Receive real-time notifications while using the app."
              enabled={notifications.productUpdates}
              onToggle={() => handleToggle("productUpdates")}
            />
            <ToggleRow
              label="Weekly analytics reports"
              description="Receive weekly summaries of your QR code performance."
              enabled={notifications.analyticsReports}
              onToggle={() => handleToggle("analyticsReports")}
            />
            <ToggleRow
              label="QR code scan alerts"
              description="Be notified when your QR codes are scanned in real time."
              enabled={notifications.scanAlerts}
              onToggle={() => handleToggle("scanAlerts")}
            />
            <ToggleRow
              label="Promotional emails"
              description="Get notified about special deals and feature releases."
              enabled={notifications.promoEmails}
              onToggle={() => handleToggle("promoEmails")}
            />
          </div>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full bg-gray-50">
        <div className="md:w-1/3 p-6">
          <h2 className="text-lg font-semibold mb-4">Preference</h2>
          <p className="text-gray-600 mb-6">
            Set your language, and time zone.
          </p>
        </div>

        <div className="bg-white shadow  p-6 rounded-md md:w-2/3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language */}
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              >
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Time Zone
              </label>
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option>GMT</option>
                <option>UMT</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>

          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable ToggleRow Component
function ToggleRow({ label, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
