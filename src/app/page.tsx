import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nextra 4",
    description: "Nextra 4 is here.",
};
export default function Home() {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <div className="flex items-center justify-center flex-col">
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: 64,
                        margin: " 0",
                        fontWeight: "bold",
                    }}
                >
                    BA THINGS
                </h1>
                <div>by Viciousircle</div>
            </div>
        </div>
    );
}
