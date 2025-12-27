'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import apiClient from '@/lib/api-client';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (success: boolean) => void;
  email: string;
  darkMode?: boolean;
}

export default function OTPModal({ isOpen, onClose, onVerify, email, darkMode = false }: OTPModalProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    // Reset state when modal opens
    if (isOpen) {
      setOtp(['', '', '', '', '', '']);
      setError('');
      setSuccess(false);
    }
  }, [isOpen]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);

    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await apiClient.post('/auth/verify-email', {
        email: email,
        code: otpString,
      });

      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          onVerify(true);
        }, 1500);
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.error?.message || 'Invalid OTP. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setOtp(['', '', '', '', '', '']);
    setError('');
    setLoading(true);
    
    try {
      // If there's a resend endpoint, call it here
      await apiClient.post('/auth/resend-otp', { email });
      setError('');
    } catch (err) {
      // Silently fail or show a message
      console.log('Resend OTP:', email);
    } finally {
      setLoading(false);
      inputRefs.current[0]?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`w-full max-w-md p-6 sm:p-8 rounded-2xl border shadow-2xl ${
        darkMode ? 'bg-[#071219] border-white/10' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#2596be]'}`}>
            Verify Your Email
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
          >
            <X className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>

        <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          We've sent a 6-digit verification code to <span className="font-semibold">{email}</span>. Please enter it below.
        </p>

        {success && (
          <div className={`p-3 rounded-lg mb-4 ${
            darkMode ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'
          }`}>
            <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              ✓ Email verified successfully! Redirecting...
            </p>
          </div>
        )}

        {error && (
          <div className={`p-3 rounded-lg mb-4 ${
            darkMode ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{error}</p>
          </div>
        )}

        <div className="flex gap-2 mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={loading || success}
              className={`w-full h-14 text-center text-2xl font-bold rounded-lg border-2 transition-all ${
                darkMode
                  ? 'bg-white/5 border-white/10 text-white focus:border-[#2596be] focus:bg-white/10'
                  : 'bg-white border-gray-200 text-gray-900 focus:border-[#2596be] focus:bg-blue-50'
              } outline-none disabled:opacity-50`}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={loading || otp.some(d => !d) || success}
          className="w-full py-3 px-4 bg-[#2596be] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1e7ca0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Verifying...
            </>
          ) : success ? (
            '✓ Verified!'
          ) : (
            'Verify Email'
          )}
        </button>

        <div className="text-center">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Didn't receive the code?{' '}
          </span>
          <button
            onClick={handleResend}
            disabled={loading || success}
            className={`text-sm font-semibold disabled:opacity-50 ${darkMode ? 'text-[#60DFFF] hover:text-[#2596be]' : 'text-[#2596be] hover:text-[#1e7ca0]'}`}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
}
