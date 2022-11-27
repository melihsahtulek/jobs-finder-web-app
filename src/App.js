import Layout from "components/Layouts/Layout";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Container from "components/Container";
import JobCard from "components/JobCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      description
      slug
      applyUrl
      tags {
        id
        name
        slug
      }
      isFeatured
      isPublished
      locationNames
      userEmail
      commitment {
        id
        title
      }
      company {
        name
        logoUrl
        slug
        websiteUrl
        twitter
        emailed
      }
      remotes {
        name
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  console.log(loading, error, data);

  return (
    <Router>
      <Layout>
        <Header />
        <HeroSection />
        <main>
          <section>
            <Container mt="mt-2">
              <h3 className="font-semibold text-gray-700 text-2xl capitalize">Open 75 jobs</h3>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7 mt-5">
                {data &&
                  data.jobs.map((job, key) => (
                    <div key={key}>
                      <JobCard data={job} />
                    </div>
                  ))}
              </div>
            </Container>
          </section>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
