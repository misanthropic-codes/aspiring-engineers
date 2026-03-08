"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Lock,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";
import authService from "@/services/auth.service";

function ResetPasswordContent() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const resetToken = searchParams.get("token");
    if (!resetToken) {
      setError(
        "Invalid or missing reset token. Please request a new password reset link.",
      );
    } else {
      setToken(resetToken);
    }
  }, [searchParams]);

  const darkMode = mounted && resolvedTheme === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError(
        "Invalid reset token. Please request a new password reset link.",
      );
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await authService.resetPassword(token, password);
      setSuccess(true);

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login?reset=success");
      }, 3000);
    } catch (err: any) {
      const errorMessage =
        err?.message ||
        "Failed to reset password. Please try again or request a new reset link.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${
        darkMode ? "bg-[var(--color-dark-bg)]" : "bg-gray-50"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl transition-all ${
            darkMode
              ? "bg-[var(--color-brand)]/10"
              : "bg-[var(--color-brand)]/20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl transition-all ${
            darkMode
              ? "bg-[var(--color-brand-accent)]/15"
              : "bg-[var(--color-brand-accent)]/25"
          }`}
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div
          className={`p-8 rounded-2xl border backdrop-blur-2xl shadow-2xl ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/90 border-gray-200"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-4">
              <span className="font-clash text-3xl font-bold text-[var(--color-brand)]">
                AE
              </span>
            </Link>
            <h1
              className={`text-3xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-[var(--color-brand)]"
              }`}
            >
              Reset Password
            </h1>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {success
                ? "Password reset successful!"
                : "Enter your new password below"}
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div
              className={`mb-6 p-4 rounded-lg border flex items-start gap-3 ${
                darkMode
                  ? "bg-green-500/10 border-green-500/20 text-green-400"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
              role="alert"
              aria-live="polite"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Password reset successfully!</p>
                <p
                  className={`text-sm mt-1 ${
                    darkMode ? "text-green-300" : "text-green-600"
                  }`}
                >
                  Redirecting you to login...
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div
              className={`mb-6 p-4 rounded-lg border flex items-start gap-3 ${
                darkMode
                  ? "bg-red-500/10 border-red-500/20 text-red-400"
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          {!success && token && (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* New Password */}
              <div>
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  New Password
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-all ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="Enter new password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    autoFocus
                    disabled={loading}
                    aria-required="true"
                    aria-invalid={!!error}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                      darkMode
                        ? "text-gray-500 hover:text-gray-300"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p
                  className={`text-xs mt-1 ${darkMode ? "text-gray-500" : "text-gray-500"}`}
                >
                  Must be at least 6 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-all ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="Confirm new password"
                    required
                    minLength={6}
                    autoComplete="new-password"
                    disabled={loading}
                    aria-required="true"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                      darkMode
                        ? "text-gray-500 hover:text-gray-300"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] active:scale-[0.98]"
                } text-white shadow-lg shadow-[var(--color-brand)]/25`}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <Loader2
                      className="w-5 h-5 animate-spin"
                      aria-hidden="true"
                    />
                    Resetting Password...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" aria-hidden="true" />
                    Reset Password
                  </>
                )}
              </button>
            </form>
          )}

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-gray-400 hover:text-[var(--color-brand)]"
                  : "text-gray-600 hover:text-[var(--color-brand)]"
              }`}
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
