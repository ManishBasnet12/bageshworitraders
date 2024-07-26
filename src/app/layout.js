import { Inter,Outfit } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/flaticon.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/odometer.css"
import "/public/assets/css/swiper-bundle.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/default.css"
import "/public/assets/css/main.css"

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: [ '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    variable: "--tg-heading-font-family",
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://www.bageshworitraders.com.np'),
    title:{
      default:'Bageshwori Traders and Media Hub Private Limited',
      template:'%s - Bageshwori Traders and Media Hub Private Limited'
    },
    description:'Bageshwori Traders and Media Hub Private Limited',
    twitter: {
      card:'summary_large_image'
    }
  };

// export const metadata = {
//   metadataBase: new URL('https://www.bageshworitraders.com.np'),
//   title: {
//     default: 'Bageshwori Traders and Media Hub Private Limited',
//     template: '%s - Bageshwori Traders and Media Hub Private Limited'
//   },
//   description: 'Bageshwori Traders and Media Hub Private Limited',
//   twitter: {
//     card: 'summary_large_image',
//     site: '@IBAConsultancy',
//     creator: '@IBAConsultancy',
//     title: 'IBA International Education Consultancy',
//     description: 'Your trusted study abroad consultant in Nepal. Benefit from our expert guidance as we navigate you through the journey to international education success.',
//     image: 'https://www.ibainternationaleducation.com.np/twitter-image.jpg'
//   },
//   openGraph: {
//     type: 'website', 
//     locale: 'en_US',
//     url: 'https://www.ibainternationaleducation.com.np',
//     title: 'IBA International Education Consultancy || Study Abroad Consultant in Nepal - Expert Guidance for International Education',
//     description: 'Explore your global education opportunities with IBA International Education Consultancy, your trusted study abroad consultant in Nepal. Benefit from our expert guidance as we navigate you through the journey to international education success. Choose excellence, choose IBA.',
//     site_name: 'IBA International Education Consultancy',
//     images: [
//       {
//         url: 'https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721726474/9974_tbcwwr.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Bageshwori Traders and Media Hub Private Limited'
//       }
//     ]
//   },
//   alternates: {
//     canonical: 'https://www.ibainternationaleducation.com.np',
//     languages: {
//       'en-US': 'https://www.ibainternationaleducation.com.np',
//     }
//   },
//   robots: {
//     index: true,
//     follow: true,
//     'max-snippet': -1,
//     'max-image-preview': 'large',
//     'max-video-preview': -1
//   },
//   generator: 'Next.js',
//   applicationName: 'IBA International Education Consultancy',
//   referrer: 'no-referrer-when-downgrade',
//   authors: [{ name: 'IBA International Education Consultancy', url: 'https://www.ibainternationaleducation.com.np' }],
//   creator: 'IBA International Education Consultancy',
//   publisher: 'IBA International Education Consultancy'
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <Analytics/>
            <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
        </html>
    )
}
