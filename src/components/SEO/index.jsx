import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Sun Gaming - Casino Provider and Development",
  description = "Sun Gaming stands as a prominent software provider for online casino games within the iGaming sector, delivering cutting-edge, user-friendly, and seamlessly integratable casino software solutions.!",
  type = "website",
  url = "https://sungaming.netlify.app",
  img = "https://sungaming.netlify.app/img/SunGaming.png",
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <title>{title}</title>
      <meta itemProp="name" content={title} />
      <meta name="description" content={description} data-rh="true" />
      <meta itemProp="description" content={description} />
      <meta
        name="keywords"
        content="Sun Gaming, casino software provider, slots game development, iGaming solutions, online casino platforms, gaming software development"
      />
      <meta name="description" content={description} />
      <meta name="author" content="Hatutyunyan" />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#222434" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="YES" />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta
        name="google-site-verification"
        content="Q2wVHub-ZyyR42Oi8ZfckWP4iYdtDOIot0KJzOysC5g"
      />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta property="twitter:card" content={type} />
      <meta property="twitter:domain" content="https://sungaming.netlify.app" />
      <meta property="twitter:image" content={img} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:creator" content={"Harutyunyan"} />
      {/* End Twitter tags */}
      {/* Icon tags */}
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/favicon/manifest.webmanifest
  "
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#222434"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#222434" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      {/* End Icon tags */}
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
