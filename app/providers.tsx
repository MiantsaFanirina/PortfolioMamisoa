"use client";

import * as React from "react";
import { LocaleProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
