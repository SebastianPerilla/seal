"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type UserProfile = {
  name: string;
  email: string;
  role: string;
  company: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  usage: {
    documents: number;
    storage: string;
  };
};

const mockProfile: UserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Product Manager',
  company: 'Acme Inc.',
  plan: 'Pro',
  usage: {
    documents: 145,
    storage: '2.3 GB'
  }
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>(mockProfile);

  const handleSave = () => {
    setIsEditing(false);
    // TODO: Implement save functionality with backend
  };

  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Profile
        </h1>
        <p className="text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-[#121212] border border-gray-700 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-[#69D0E5]/10 flex items-center justify-center
                            text-[#69D0E5] text-2xl font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
                  <p className="text-gray-400">{profile.email}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#69D0E5]/10 text-[#69D0E5] hover:bg-[#69D0E5]/20
                         transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Role</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg
                             focus:outline-none focus:border-[#69D0E5] text-white"
                  />
                ) : (
                  <p className="text-white">{profile.role}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.company}
                    onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                    className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded-lg
                             focus:outline-none focus:border-[#69D0E5] text-white"
                  />
                ) : (
                  <p className="text-white">{profile.company}</p>
                )}
              </div>

              {isEditing && (
                <button
                  onClick={handleSave}
                  className="w-full px-4 py-2 bg-[#69D0E5] text-white rounded-lg hover:bg-[#5BC0D6]
                           transition-colors"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Subscription & Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Current Plan */}
          <div className="bg-[#121212] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Plan Type</span>
              <span className="text-white font-medium">{profile.plan}</span>
            </div>
            <button className="w-full px-4 py-2 border border-[#69D0E5] text-[#69D0E5] rounded-lg
                           hover:bg-[#69D0E5]/10 transition-colors">
              Upgrade Plan
            </button>
          </div>

          {/* Usage Stats */}
          <div className="bg-[#121212] border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Documents Processed</span>
                  <span className="text-white">{profile.usage.documents}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#69D0E5] rounded-full"
                    style={{ width: `${Math.min((profile.usage.documents / 200) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Storage Used</span>
                  <span className="text-white">{profile.usage.storage}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#69D0E5] rounded-full"
                    style={{ width: '45%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 