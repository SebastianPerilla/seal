"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented with Supabase later
    console.log('Login attempted:', { email, password });
    // For now, just redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15]" />
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25]" />
      
      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 rounded-2xl border border-[#69D0E5] bg-[#121212] shadow-[0_0_20px_rgba(105,208,229,0.3)] relative z-10"
      >
        {/* Logo or Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-2">Sign in to your SEAL account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333333] text-white focus:outline-none focus:border-[#69D0E5] transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#333333] text-white focus:outline-none focus:border-[#69D0E5] transition-colors"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-[#69D0E5] focus:ring-[#69D0E5]"
              />
              <label htmlFor="remember" className="ml-2 text-gray-300">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-[#69D0E5] hover:text-[#8BA4FF] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#69D0E5] hover:text-[#8BA4FF] transition-colors">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
} 