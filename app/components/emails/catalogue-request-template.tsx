const sans =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
const mono = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

const CatalogueRequestTemplate = ({
  fullName,
  equipment,

}: {
  fullName: string;
  equipment: string;
}) => {
  const firstName = fullName.split(" ")[0];

  return (
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
              Equipment Catalogue
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
              Here&apos;s your {equipment} catalogue, {firstName}.
            </h1>
          </td>
        </tr>

        {/* body */}
        <tr>
          <td style={{ padding: "16px 32px 8px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#f2f1ec",
                maxWidth: "52ch",
              }}
            >
              Thanks for reaching out — you mentioned you&apos;re looking into{" "}
              <strong style={{ color: "#f2f1ec" }}>{equipment}</strong>.
              We&apos;ve attached the catalogue covering everything we stock,
              distribute, and install in that category.
            </p>
          </td>
        </tr>


        {/* cta */}
        <tr>
          <td style={{ padding: "24px 32px 8px" }}>
            <a
              href="https://cytechworld.com/contact-us"
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
              }}
            >
              Talk to our team
            </a>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "12.5px",
                color: "#8f8f88",
              }}
            >
              Or call +234 802 342 4402 during business hours.
            </p>
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
              <a
                href="mailto:cytechworldcommunication@gmail.com"
                style={{ color: "#8f8f88" }}
              >
                cytechworldcommunication@gmail.com
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
              You&apos;re receiving this because you requested the equipment
              catalogue at cytechworld.com. This is a one-time reply to your
              request, not a subscription.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CatalogueRequestTemplate;
