"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has already been redirected (to avoid infinite loops)
    const hasRedirected = sessionStorage.getItem("locale-redirect-checked");
    if (hasRedirected) {
      return;
    }

    // Mark that we've checked for redirect
    sessionStorage.setItem("locale-redirect-checked", "true");

    // Helper function to check browser language preference
    const checkBrowserLanguage = () => {
      const userLanguage = navigator.language || navigator.languages?.[0];
      if (userLanguage?.startsWith("ja")) {
        router.push("/jp");
      }
    };

    // Use a geolocation API to detect the user's country
    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(1000) })
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        // If the user is in Japan, redirect to the Japanese page
        if (data.country_code === "JP") {
          router.push("/jp");
        }
      })
      .catch((error) => {
        // Fallback to browser language detection if geolocation fails
        console.warn(
          "Failed to detect location, falling back to browser language:",
          error,
        );
        checkBrowserLanguage();
      });
  }, [router]);

  return null; // This component doesn't render anything
}
