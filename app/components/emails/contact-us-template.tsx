import type { ServiceRequestValues } from "@/app/lib/schemas/service-request";

const sans =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
const mono = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

const field = (label: string, value: string) => (
  <tr>
    <td
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #262726",
        fontFamily: mono,
        fontSize: "11px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#8f8f88",
        verticalAlign: "top",
        width: "150px",
      }}
    >
      {label}
    </td>
    <td
      style={{
        padding: "10px 0",
        borderBottom: "1px solid #262726",
        fontSize: "15px",
        color: "#f2f1ec",
      }}
    >
      {value}
    </td>
  </tr>
);

const ContactUsTemplate = ({
  fullName,
  email,
  phone,
  serviceCategory,
  details,
}: ServiceRequestValues) => (
  <table
    role="presentation"
    width="100%"
    cellPadding={0}
    cellSpacing={0}
    style={{
      maxWidth: "600px",
      margin: "0 auto",
      fontFamily: sans,
      background: "#0f1011",
    }}
  >
    <tbody>
      {/* header */}
      <tr>
        <td
          style={{
            padding: "24px 32px",
            background: "#161718",
            borderBottom: "1px solid #262726",
          }}
        >
          <img
            src="https://res.cloudinary.com/dmkomqw3p/image/upload/v1786012633/WHITE_LOGO_r5i6pp.png"
            alt="Cytech World Communication"
            width={76}
            height={42}
            style={{ display: "block", width: "76px", height: "42px" }}
          />
        </td>
      </tr>

      {/* headline */}
      <tr>
        <td style={{ padding: "32px 32px 8px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontFamily: mono,
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ff9500",
            }}
          >
            New Service Request
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              lineHeight: 1.3,
              fontWeight: 700,
              color: "#f2f1ec",
            }}
          >
            {fullName} is requesting {serviceCategory}
          </h1>
        </td>
      </tr>

      {/* lead details */}
      <tr>
        <td style={{ padding: "16px 32px 0" }}>
          <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
          >
            <tbody>
              {field("Full name", fullName)}
              {field("Email", email)}
              {field("Phone", phone)}
              {field("Service category", serviceCategory)}
            </tbody>
          </table>
        </td>
      </tr>

      {/* message */}
      <tr>
        <td style={{ padding: "20px 32px 8px" }}>
          <p
            style={{
              margin: "0 0 8px",
              fontFamily: mono,
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#8f8f88",
            }}
          >
            What they need
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#f2f1ec",
              whiteSpace: "pre-wrap",
            }}
          >
            {details}
          </p>
        </td>
      </tr>

      {/* cta */}
      <tr>
        <td style={{ padding: "28px 32px 8px" }}>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              background: "#ff9500",
              color: "#14140f",
              fontFamily: sans,
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "999px",
              marginRight: "10px",
            }}
          >
            Reply to {fullName.split(" ")[0]}
          </a>
          <a
            href={`https://wa.me/${phone.replace(/\D/g, "")}`}
            style={{
              display: "inline-block",
              background: "#075E54",
              color: "#ffffff",
              fontFamily: sans,
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "999px",
            }}
          >
            WhatsApp {fullName.split(" ")[0]}
          </a>
        </td>
      </tr>

      {/* footer */}
      <tr>
        <td style={{ padding: "32px" }}>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #262726",
              margin: "0 0 20px",
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              lineHeight: 1.7,
              color: "#8f8f88",
            }}
          >
            Cytech World Communication
            <br />
            23 Col. Asieluwe St, Ifako-Ijaiye, Lagos 101232
            <br />
            <a href="mailto:cytechsound@yahoo.com" style={{ color: "#8f8f88" }}>
              cytechsound@yahoo.com
            </a>
            {" · "}
            <a href="tel:+2348023424402" style={{ color: "#8f8f88" }}>
              +234 802 342 4402
            </a>
          </p>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: "11px",
              lineHeight: 1.6,
              color: "#8f8f88",
              opacity: 0.75,
            }}
          >
            Sent automatically from the Contact Us form on
            cytechworld.com
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

export default ContactUsTemplate;
