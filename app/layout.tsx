"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
