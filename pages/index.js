import Head from 'next/head';
import Home from './Home';

const TITLE = 'Nithin Pulla — Software Engineer | Distributed Systems & Machine Learning';
const DESCRIPTION =
  'Nithin Pulla is a Software Engineer with 3+ years of production experience in distributed systems, machine learning, and full-stack development. MS CS at University at Buffalo (GPA 3.9). Ex-GE Healthcare — built HIPAA-critical systems processing 2M+ events/day, achieved 99.88% uptime, and cut deployment cycles by 85%. Specialises in Java, Python, AWS, Kubernetes, PyTorch, and Spring Boot.';
const KEYWORDS =
  'Nithin Pulla, Software Engineer, Distributed Systems Engineer, Machine Learning Engineer, Backend Engineer, Full Stack Developer, Java Engineer, Python Developer, AWS Engineer, Kubernetes, Spring Boot, PyTorch, Computer Vision, NLP, DevOps Engineer, GE Healthcare, University at Buffalo, HIPAA systems, high availability, low latency systems, fault tolerance, AI agents, RAG, federated learning';
const URL = 'https://nithin-pulla.github.io/';
const OG_IMAGE = 'https://nithin-pulla.github.io/images/hero.png';

export default function Index() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content="Nithin Pulla" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Nithin Pulla" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nithin Pulla',
              url: URL,
              image: OG_IMAGE,
              jobTitle: 'Software Engineer',
              description: DESCRIPTION,
              email: 'nithinp.deploy@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fremont',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'University at Buffalo',
                  url: 'https://www.buffalo.edu',
                },
                {
                  '@type': 'EducationalOrganization',
                  name: 'Amrita School of Engineering',
                },
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'University at Buffalo',
              },
              knowsAbout: [
                'Distributed Systems',
                'Machine Learning',
                'Java',
                'Python',
                'AWS',
                'Kubernetes',
                'Spring Boot',
                'PyTorch',
                'Computer Vision',
                'Natural Language Processing',
                'DevOps',
                'High Availability Systems',
              ],
              sameAs: [
                'https://github.com/nithin-pulla',
                'https://linkedin.com/in/nithin-pulla',
              ],
            }),
          }}
        />
      </Head>
      <Home />
    </>
  );
}
