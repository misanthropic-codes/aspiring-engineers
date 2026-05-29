"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import apiClient from "@/lib/api-client";
import { Loader2, Check, X, ExternalLink, Trash2 } from "lucide-react";

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
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ArchiveResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

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

  const handleDelete = async () => {
    if (!certificateId) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this certificate? This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      setDeleting(true);
      setError(null);
      await apiClient.delete(`/admin/certificates/${certificateId}`);
      setDeleted(true);
    } catch (err: any) {
      setError("Failed to delete certificate. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-bg-900 to-bg-800">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-6 rounded-lg border border-bg-700 bg-bg-800/50">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Certificate Verification</h1>

          {deleted ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <h2 className="text-lg font-semibold text-text-primary">Certificate Deleted</h2>
              </div>
              <p className="text-text-secondary">
                The certificate has been successfully deleted.
              </p>
              <button
                onClick={() => router.push("/archive")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Back to Archive
              </button>
            </div>
          ) : loading ? (
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
                <div className="pt-4 space-y-3">
                  <p className="text-sm text-text-secondary">Certificate</p>
                  {/* <div className="rounded-lg overflow-hidden border border-bg-700">
                    <img
                      src={data.certificateImageUrl}
                      alt={`Certificate for ${data.name}`}
                      className="w-full h-auto object-contain"
                    />
                  </div> */}
                  <a
                    href={data.certificateImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 text-brand hover:underline font-medium text-sm"
                  >
                    Download Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Delete Certificate */}
              <div className="pt-6 border-t border-bg-700">
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete Certificate
                    </>
                  )}
                </button>
              </div>
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

