"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import apiClient from "@/lib/api-client";
import { Loader2, Check, X, ExternalLink } from "lucide-react";

interface ArchiveResponse {
  status: "valid" | "invalid";
  name?: string;
  domain?: string;
  certificateNumber?: string;
  issuedAt?: string;
  dateOfBirth?: string;
  universityRollNumber?: string;
  collegeName?: string;
  branch?: string;
  certificateImageUrl?: string;
  message?: string;
}

export default function ArchivePage() {
  const { certificateId } = useParams() as { certificateId?: string };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArchiveResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!certificateId) return;
      try {
        setLoading(true);
        setError(null);
        const res = await apiClient.get(`/archive/${certificateId}`);
        const payload = res.data && res.data.data ? res.data.data : null;
        setData(payload);
      } catch (err: any) {
        setError("Unable to verify certificate. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [certificateId]);

  return (
    <div className="min-h-screen bg-linear-to-b from-bg-900 to-bg-800">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-6 rounded-lg border border-bg-700 bg-bg-800/50">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Certificate Verification</h1>

          {loading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin text-brand" />
              <span className="text-text-secondary">Verifying certificate...</span>
            </div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : !data ? (
            <div className="text-text-secondary">No data returned from server.</div>
          ) : data.status === "valid" ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <h2 className="text-lg font-semibold text-text-primary">Valid Certificate</h2>
              </div>

              <div className="mt-2">
                <p className="text-sm text-text-secondary">Name</p>
                <p className="font-medium text-text-primary">{data.name}</p>
              </div>

              <div>
                <p className="text-sm text-text-secondary">Domain</p>
                <p className="font-medium text-text-primary capitalize">{data.domain}</p>
              </div>

              <div>
                <p className="text-sm text-text-secondary">Certificate Number</p>
                <p className="font-medium text-text-primary">{data.certificateNumber}</p>
              </div>

              {data.dateOfBirth && (
                <div>
                  <p className="text-sm text-text-secondary">Date of Birth</p>
                  <p className="font-medium text-text-primary">{new Date(data.dateOfBirth).toLocaleDateString()}</p>
                </div>
              )}

              {data.universityRollNumber && (
                <div>
                  <p className="text-sm text-text-secondary">University Roll Number</p>
                  <p className="font-medium text-text-primary">{data.universityRollNumber}</p>
                </div>
              )}

              {data.collegeName && (
                <div>
                  <p className="text-sm text-text-secondary">College Name</p>
                  <p className="font-medium text-text-primary">{data.collegeName}</p>
                </div>
              )}

              {data.branch && (
                <div>
                  <p className="text-sm text-text-secondary">Branch</p>
                  <p className="font-medium text-text-primary">{data.branch}</p>
                </div>
              )}

              {data.issuedAt && (
                <div>
                  <p className="text-sm text-text-secondary">Issued At</p>
                  <p className="font-medium text-text-primary">{new Date(data.issuedAt).toLocaleString()}</p>
                </div>
              )}

              {data.certificateImageUrl && (
                <div className="pt-2">
                  <a
                    href={data.certificateImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand hover:underline font-medium"
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <X className="text-red-500" />
                <h2 className="text-lg font-semibold text-text-primary">Invalid Certificate</h2>
              </div>
              <p className="text-text-secondary">{data.message || "No certificate found with this ID."}</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
