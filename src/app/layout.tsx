import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import SideBar from "@/components/Navigation/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Ifan Ashari",
  description: "Personal portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        <AntdRegistry>
          <ConfigProvider theme={{
            token: {
              colorPrimary: "#343231",
            }
          }}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
