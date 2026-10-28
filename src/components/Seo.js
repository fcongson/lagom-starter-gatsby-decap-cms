import PropTypes from "prop-types";
import { useSiteMetadata } from "../utils/useSiteMetadata";

/**
 * Renders the per-page <title> and meta description for a page or
 * template's `Head` export. Global tags that don't change per page
 * (html lang, favicon, viewport, the initial dark-mode attribute) live in
 * gatsby-ssr.js instead.
 */
export const Seo = ({ title, description, titleSuffix }) => {
  const siteMetadata = useSiteMetadata();
  const suffix = titleSuffix || siteMetadata.title;
  const pageTitle = title ? `${title} | ${suffix}` : siteMetadata.title;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description || siteMetadata.description} />
    </>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleSuffix: PropTypes.string,
};

export default Seo;
