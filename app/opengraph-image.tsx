import { ImageResponse } from "next/og";

import { introContent, siteMetadata } from "@/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, #f7f1e6 0%, #efe6d5 100%)",
          color: "#223746",
          padding: "56px",
          fontFamily: "Noto Sans KR, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "2px solid rgba(34, 55, 70, 0.12)",
            borderRadius: "36px",
            background: "rgba(255,255,255,0.72)",
            padding: "48px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: "720px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(34, 55, 70, 0.72)",
              }}
            >
              Frontend Portfolio
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 70,
                  fontWeight: 700,
                  lineHeight: 1.05,
                }}
              >
                {introContent.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  fontWeight: 600,
                }}
              >
                {introContent.role}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  lineHeight: 1.45,
                  color: "rgba(34, 55, 70, 0.86)",
                }}
              >
                {introContent.headline}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "rgba(34, 55, 70, 0.7)",
              }}
            >
              {siteMetadata.siteName}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "240px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "180px",
                height: "180px",
                borderRadius: "48px",
                background: "#223746",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "28px",
                  width: "124px",
                  height: "112px",
                  borderRadius: "32px",
                  background: "#f7f1e6",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "52px",
                  left: "48px",
                  width: "42px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#223746",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "68px",
                  left: "48px",
                  width: "28px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#223746",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "46px",
                  left: "106px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#c8734d",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "64px",
                  left: "126px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#d8a55a",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "42px",
                  left: "144px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#c8734d",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "108px",
                  left: "54px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#223746",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "90px",
                  left: "78px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#d8a55a",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "102px",
                  left: "100px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#223746",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "82px",
                  left: "126px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#d8a55a",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
