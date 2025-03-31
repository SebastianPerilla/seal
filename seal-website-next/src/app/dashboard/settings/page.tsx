"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type NotificationSetting = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

type SecuritySetting = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

const initialNotifications: NotificationSetting[] = [
  {
    id: 'process-complete',
    title: 'Process Complete',
    description: 'Get notified when a document processing is complete',
    enabled: true
  },
  {
    id: 'new-features',
    title: 'New Features',
    description: 'Receive updates about new features and improvements',
    enabled: true
  },
  {
    id: 'usage-alerts',
    title: 'Usage Alerts',
    description: 'Get notified when approaching usage limits',
    enabled: false
  }
];

const initialSecurity: SecuritySetting[] = [
  {
    id: 'two-factor',
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    enabled: false
  },
  {
    id: 'login-alerts',
    title: 'Login Alerts',
    description: 'Get notified of new login attempts',
    enabled: true
  },
  {
    id: 'api-access',
    title: 'API Access',
    description: 'Enable API access for automation',
    enabled: true
  }
];

export default function Settings() {
  const [notifications, setNotifications] = useState<NotificationSetting[]>(initialNotifications);
  const [security, setSecurity] = useState<SecuritySetting[]>(initialSecurity);
  const [theme, setTheme] = useState<'system' | 'dark' | 'light'>('system');
  const [language, setLanguage] = useState<string>('en');

  const toggleNotification = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, enabled: !notification.enabled }
        : notification
    ));
  };

  const toggleSecurity = (id: string) => {
    setSecurity(security.map(setting =>
      setting.id === id
        ? { ...setting, enabled: !setting.enabled }
        : setting
    ));
  };

  return (
    <div className="px-6 py-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-gray-400 mt-2">
          Customize your experience and security preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Appearance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#121212] border border-gray-700 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Appearance</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'system' | 'dark' | 'light')}
                className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg
                         focus:outline-none focus:border-[#69D0E5] text-white"
              >
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg
                         focus:outline-none focus:border-[#69D0E5] text-white"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </div>
        </motion.section>

        {/* Notifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#121212] border border-gray-700 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Notifications</h2>
          <div className="space-y-6">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium">{notification.title}</h3>
                  <p className="text-gray-400 text-sm">{notification.description}</p>
                </div>
                <button
                  onClick={() => toggleNotification(notification.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                           ${notification.enabled ? 'bg-[#69D0E5]' : 'bg-gray-700'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                             ${notification.enabled ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Security */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#121212] border border-gray-700 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
          <div className="space-y-6">
            {security.map((setting) => (
              <div key={setting.id} className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium">{setting.title}</h3>
                  <p className="text-gray-400 text-sm">{setting.description}</p>
                </div>
                <button
                  onClick={() => toggleSecurity(setting.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                           ${setting.enabled ? 'bg-[#69D0E5]' : 'bg-gray-700'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                             ${setting.enabled ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Danger Zone */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#121212] border border-red-900/20 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-red-500 mb-6">Danger Zone</h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20
                           transition-colors">
              Delete Account
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 