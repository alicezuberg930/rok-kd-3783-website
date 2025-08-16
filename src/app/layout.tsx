import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SnackbarProvider from "@/components/snackbar";
import HomeLayout from "@/layouts/home";
import ThemeProvider from "@/theme/ThemeProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import { Analytics } from "@vercel/analytics/next"

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MotionLazyContainer } from "@/components/animate";
import QueryClientProvider from "./QueryClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <ThemeProvider>
            <MotionLazyContainer>
              <SnackbarProvider>
                <QueryClientProvider>
                  <HomeLayout>
                    {children}
                  </HomeLayout>
                </QueryClientProvider>
              </SnackbarProvider>
            </MotionLazyContainer>
          </ThemeProvider>
        </ReduxProvider>
        {/* for website traffic analytics */}
        <Analytics />
      </body>
    </html>
  );
}
