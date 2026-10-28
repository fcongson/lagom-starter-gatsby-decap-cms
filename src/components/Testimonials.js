import { Quote } from "@fcongson/lagom-ui";
import PropTypes from "prop-types";

export const Testimonials = ({ testimonials }) => (
  <>
    {testimonials.map((testimonial) => (
      <article key={crypto.randomUUID()}>
        <Quote>
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
          <cite> – {testimonial.author}</cite>
        </Quote>
      </article>
    ))}
  </>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};
