import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { introContent } from "@/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

function readFont(filename: string) {
  return readFile(path.join(process.cwd(), "app", "fonts", filename));
}

export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([
    readFont("Pretendard-OG-Regular.woff"),
    readFont("Pretendard-OG-Bold.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "52px 58px",
          background: "#f3f0e7",
          color: "#1b1e1b",
          fontFamily: "Pretendard",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderTop: "2px solid #1b1e1b",
            borderBottom: "2px solid #1b1e1b",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "52px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "704px",
              height: "100%",
              padding: "34px 0",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                color: "#a93e29",
              }}
            >
              {introContent.name} / {introContent.role}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "11px",
                fontSize: 62,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              {introContent.headline.map((line) => (
                <div key={line} style={{ display: "flex" }}>
                  {line}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 15,
                color: "#5c6059",
              }}
            >
              CHATPLANET · KAKAOPAY · THREE.JS
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "310px",
              height: "356px",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#1b1e1b",
              color: "#faf8f2",
              boxShadow: "14px 14px 0 #a93e29",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "#b7bbb2",
              }}
            >
              <span style={{ color: "#a93e29" }}>PORTFOLIO · 2026</span>
              <span>FRONTEND</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 86,
                fontWeight: 700,
                letterSpacing: "-0.08em",
              }}
            >
              <span>유</span>
              <span style={{ color: "#a93e29", transform: "translateY(9px)" }}>종</span>
              <span>석</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: "#b7bbb2",
              }}
            >
              <span>WEB · REALTIME</span>
              <span style={{ color: "#a93e29" }}>3D · MOBILE</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: regular, style: "normal", weight: 400 },
        { name: "Pretendard", data: bold, style: "normal", weight: 700 },
      ],
    },
  );
}
