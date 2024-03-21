import { GetServerSideProps, GetServerSidePropsContext } from "next";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
    <loc>https://koratkos.org</loc>
<lastmod>2024-02-26</lastmod>
    </url>
    <url>
    <loc>https://admin.koratkos.org</loc>
<lastmod>2024-02-26</lastmod>
    </url>
    <url>
    <loc>https://farmer.koratkos.org</loc>
<lastmod>2024-02-26</lastmod>
    </url>
  </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  const sitemap = generateSiteMap();
  context.res.write(sitemap);
  context.res.end();
  return {
    props: {},
  };
};

export default SiteMap;
