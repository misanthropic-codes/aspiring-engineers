/**
 * API Configuration
 *
 * This file centralizes the API base URL configuration for the application.
 * The base URL MUST be set using the NEXT_PUBLIC_API_URL environment variable.
 */
import { logger } from "../logger";

if (!process.env.NEXT_PUBLIC_API_URL) {
  logger.warn(
    "⚠️ NEXT_PUBLIC_API_URL is not set. Please configure it in your .env file."
  );
}

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  TIMEOUT: 30000,
} as const;

export default API_CONFIG;
