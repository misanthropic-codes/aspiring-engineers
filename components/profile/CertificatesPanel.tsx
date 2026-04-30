"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, FileText, DownloadCloud } from "lucide-react";

interface CertificateItem {
  _id: string;
  domain: string;
  domainCode?: string;
  certificateId?: string;
  certificateNumber?: string;
  fileUrl?: string;
  qrUrl?: string;
  issuedAt?: string;
}


export default function CertificatesPanel() {
  const { isAuthenticated } = useAuth();
  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) return;
      try {
        setLoading(true);
        const res = await apiClient.get("/certificates/my");
        const items = (res.data && res.data.data) || [];
        setCertificates(items);
        if (items.length > 0) setSelected(items[0]);
      } catch (err) {
        // silent
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  // select certificate for preview
  const handleSelect = (c: CertificateItem) => {
    setSelected(c);
  };

  const handleDownload = async (certificate: CertificateItem) => {
    if (!certificate.fileUrl) return;

    try {
      const response = await fetch(certificate.fileUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${certificate.certificateNumber || certificate.certificateId || "certificate"}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Best-effort fallback to browser download behavior.
      const link = document.createElement("a");
      link.href = certificate.fileUrl;
      link.download = `${certificate.certificateNumber || certificate.certificateId || "certificate"}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <div className="p-5 rounded-lg border border-bg-700 bg-bg-800/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <FileText size={18} className="text-brand" />
          <h3 className="text-lg font-semibold text-text-primary">Certificates</h3>
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-500">
            New
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin text-brand" size={28} />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-text-secondary text-sm mb-2">Issued Certificates</p>
            {certificates.length === 0 ? (
              <p className="text-sm text-text-secondary">No certificates issued yet.</p>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {certificates.map((c) => (
                  <div
                    key={c._id}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleSelect(c)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleSelect(c);
                      }
                    }}
                    className={`w-full text-left rounded-md border border-bg-700 p-3 flex items-start justify-between cursor-pointer ${selected?._id === c._id ? "ring-2 ring-brand/40" : ""}`}
                  >
                    <div>
                      <p className="font-medium text-text-primary">{c.certificateNumber || c.certificateId || c.domain}</p>
                      <p className="text-xs text-text-secondary">{c.domain}</p>
                      {c.issuedAt && (
                        <p className="text-xs text-text-secondary mt-1">Issued on {new Date(c.issuedAt).toLocaleDateString()}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {c.fileUrl ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(c);
                          }}
                          className="inline-flex items-center gap-2 text-sm text-brand"
                        >
                          <DownloadCloud size={16} />
                          <span>Download</span>
                        </button>
                      ) : (
                        <span className="text-xs text-text-secondary">No file</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-text-secondary text-sm mb-2">Preview</p>
            <div className="rounded-md border border-bg-700 p-3 min-h-[220px] flex items-center justify-center">
              {!selected ? (
                <p className="text-text-secondary">Select a certificate to preview</p>
              ) : selected.fileUrl ? (
                <div className="w-full">
                  <div className="mb-3 text-xs text-text-secondary">{selected.certificateNumber || selected.certificateId}</div>
                  <img src={selected.fileUrl} alt="certificate preview" className="w-full max-h-[420px] object-contain rounded-md" />

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-text-secondary">Issued: {selected.issuedAt ? new Date(selected.issuedAt).toLocaleDateString() : "-"}</div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleDownload(selected)}
                        className="inline-flex items-center gap-2 text-sm text-brand"
                      >
                        <DownloadCloud size={16} />
                        <span>Download</span>
                      </button>
                      {selected.qrUrl && (
                        <a href={selected.qrUrl} target="_blank" rel="noreferrer" className="text-sm text-text-secondary">Verify</a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-text-secondary">No preview available for this certificate.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
