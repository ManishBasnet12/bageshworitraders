

export const metadata = {
    metadataBase: new URL("https://www.ibainternationaleducation.com.np/about-2"),
    title: "About",
    description:
      "Discover the story behind IBA International Education Consultancy, your premier study abroad consultant in Nepal. Learn how our team of dedicated professionals guides students towards achieving their dreams of international education. Join us on this journey of excellence and innovation in educational consulting.",
    twitter: {
      card: "summary_large_image",
    },
  };

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
