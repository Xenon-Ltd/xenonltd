import { ImageResponse } from "next/og";

const imageSize = {
  width: 1200,
  height: 630,
};

export default function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f9f4f1",
          color: "#182235",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "68px 76px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(19, 122, 199, 0.24)",
            borderRadius: 86,
            display: "flex",
            height: 420,
            position: "absolute",
            right: -70,
            top: 84,
            transform: "rotate(-5deg)",
            width: 420,
          }}
        />
        <div
          style={{
            border: "2px solid rgba(248, 176, 50, 0.36)",
            borderRadius: 999,
            display: "flex",
            height: 126,
            position: "absolute",
            right: 310,
            top: 58,
            width: 126,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            position: "relative",
            width: 760,
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 7,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                background: "#f56630",
                borderRadius: 999,
                display: "flex",
                height: 13,
                marginRight: 16,
                width: 13,
              }}
            />
            Xenon
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Arial, sans-serif",
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: -3.5,
                lineHeight: 0.98,
                maxWidth: 740,
              }}
            >
              Africa&apos;s Financial
              <br />
              Operating System.
            </div>
            <div
              style={{
                color: "#667185",
                display: "flex",
                fontFamily: "Arial, sans-serif",
                fontSize: 24,
                lineHeight: 1.35,
                marginTop: 30,
                maxWidth: 690,
              }}
            >
              Stablecoin-powered payments, transaction security, and compliance
              infrastructure built for Africa.
            </div>
          </div>

          <div
            style={{
              color: "#475367",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            xenonlimited.co
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 470,
            position: "absolute",
            right: -20,
            top: 100,
            width: 470,
          }}
        >
          <div
            style={{
              background: "linear-gradient(138deg, #fafafa 34%, #137ac7 100%)",
              border: "10px solid rgba(255,255,255,0.72)",
              borderRadius: 34,
              display: "flex",
              height: 206,
              left: 56,
              position: "absolute",
              top: 16,
              transform: "rotate(45deg)",
              width: 206,
            }}
          />
          <div
            style={{
              background: "linear-gradient(138deg, #fafafa 34%, #f56630 100%)",
              border: "10px solid rgba(255,255,255,0.72)",
              borderRadius: 34,
              display: "flex",
              height: 206,
              left: 204,
              position: "absolute",
              top: 116,
              transform: "rotate(45deg)",
              width: 206,
            }}
          />
          <div
            style={{
              background: "linear-gradient(138deg, #fafafa 34%, #00a099 100%)",
              border: "10px solid rgba(255,255,255,0.72)",
              borderRadius: 34,
              display: "flex",
              height: 206,
              left: 56,
              position: "absolute",
              top: 224,
              transform: "rotate(45deg)",
              width: 206,
            }}
          />
          <div
            style={{
              background: "linear-gradient(138deg, #fafafa 34%, #f8b032 100%)",
              border: "10px solid rgba(255,255,255,0.72)",
              borderRadius: 34,
              display: "flex",
              height: 142,
              left: 260,
              opacity: 0.88,
              position: "absolute",
              top: -52,
              transform: "rotate(45deg)",
              width: 142,
            }}
          />
        </div>
      </div>
    ),
    imageSize,
  );
}
