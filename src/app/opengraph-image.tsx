
import { ImageResponse } from "next/og";

export const alt = "Nikolay Vaklev - Java Backend Developer";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

const technologies = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
];

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "72px 80px",
                    backgroundColor: "#0a0f1c",
                    color: "#f8fafc",
                    fontFamily: "Arial, sans-serif",
                    overflow: "hidden",
                }}
            >
                {/* Decorative background elements */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        width: 440,
                        height: 440,
                        top: -180,
                        right: -150,
                        borderRadius: "50%",
                        border: "90px solid rgba(14, 165, 233, 0.06)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        width: 580,
                        height: 580,
                        right: -300,
                        bottom: -340,
                        borderRadius: "50%",
                        border: "1px solid rgba(56, 189, 248, 0.18)",
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    {/* Branding */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 68,
                                height: 68,
                                borderRadius: 16,
                                border: "1px solid #075985",
                                backgroundColor: "#0f2238",
                                color: "#38bdf8",
                                fontSize: 27,
                                fontWeight: 700,
                            }}
                        >
                            NV
                        </div>

                        <div
                            style={{
                                display: "flex",
                                color: "#38bdf8",
                                fontSize: 19,
                                fontWeight: 700,
                                letterSpacing: 4,
                            }}
                        >
                            SOFTWARE ENGINEER
                        </div>
                    </div>

                    {/* Name and role */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: 76,
                                fontWeight: 700,
                                letterSpacing: -3,
                                lineHeight: 1.1,
                                color: "#f8fafc",
                            }}
                        >
                            Nikolay Vaklev
                        </div>

                        <div
                            style={{
                                display: "flex",
                                marginTop: 16,
                                fontSize: 39,
                                fontWeight: 500,
                                color: "#38bdf8",
                            }}
                        >
                            Java Backend Developer
                        </div>

                        <div
                            style={{
                                display: "flex",
                                marginTop: 22,
                                fontSize: 23,
                                color: "#94a3b8",
                            }}
                        >
                            Building reliable backend applications and APIs.
                        </div>
                    </div>

                    {/* Technologies */}
                    <div
                        style={{
                            display: "flex",
                            gap: 14,
                        }}
                    >
                        {technologies.map((technology) => (
                            <div
                                key={technology}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "11px 20px",
                                    borderRadius: 9,
                                    border: "1px solid #334155",
                                    backgroundColor: "#111c2c",
                                    color: "#cbd5e1",
                                    fontSize: 19,
                                }}
                            >
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        },
    );
}
