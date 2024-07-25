import Link from "next/link";

export default function Marquee1() {
  return (
    <>
      <div className="marquee__area">
        <div className="marquee__wrap">
          <div className="marquee__box">
            <Link data-hover="Academic Planning" href="/services-details">
              laptops
            </Link>
            <Link data-hover="College Admissions" href="/services-details">
              laptops accessories
            </Link>
            <Link data-hover="Tutoring Services" href="/services-details">
              sports gears
            </Link>
            <Link data-hover="Career Guidance" href="/services-details">
              software
            </Link>
          </div>
          <div className="marquee__box">
            <Link data-hover="Academic Planning" href="/services-details">
              laptops
            </Link>
            <Link data-hover="College Admissions" href="/services-details">
              laptops accessories
            </Link>
            <Link data-hover="Tutoring Services" href="/services-details">
              sports gears
            </Link>
            <Link data-hover="Career Guidance" href="/services-details">
              software
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
