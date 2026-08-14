import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "../components/site-footer";
import { SiteNavigation } from "../components/site-navigation";

export const metadata: Metadata = {
  title: "电驱智学｜智能电驱 AI 知识与工程实践平台",
  description: "围绕业务、数据、模型、应用四层架构，连接车辆诊断、AI 自主标定与声学故障的智能电驱 AI 学习与工程实践平台",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "电驱智学｜把 AI 学成电驱工程能力",
    description: "从业务问题出发，理解数据、模型和 AI 应用，并落到真实智能电驱项目",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteNavigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
