

export const metadata = {
    metadataBase: new URL("https://www.ibainternationaleducation.com.np/services-3"),
    title: "Blog",
    description:
      "Stay ahead in your journey to study abroad with IBA International Education Consultancy's blog. Dive into insightful articles, receive practical tips, and stay updated with the latest trends in international education. Engage with our community and transform your educational aspirations into reality.",
    twitter: {
      card: "summary_large_image",
    },
  };

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
