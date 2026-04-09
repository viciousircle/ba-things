import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "BA THINGS",
    description: "BA THINGS by Viciousircle",
};

const banner = <Banner storageKey="some-key">Xin chào các tình yêu 🎉</Banner>;
const footer = (
    <Footer>MIT {new Date().getFullYear()} © BA THINGS by Viciousircle.</Footer>
);

export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head />
            <body>
                <Layout
                    banner={banner}
                    navbar={
                        <Navbar
                            logo={
                                <h1 className="text-2xl font-medium font-serif">
                                    BA THINGS
                                </h1>
                            }
                            projectLink="https://github.com/viciousircle/"
                        />
                    }
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/viciousircle/"
                    editLink="Edit this page on GitHub"
                    sidebar={{
                        defaultMenuCollapseLevel: 1,
                        autoCollapse: true,
                    }}
                    footer={footer}
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
