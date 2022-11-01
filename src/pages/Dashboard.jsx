import React from "react";
import Layout from "../Container/Layout";
import Ads from "../components/Ads/Ads";
import Banners from "../components/Banner/Banners";
import Widgets from "../components/Widget/Widget";
import useFetch from "../hooks/useFetch";
function Dashboard() {
  const { data } = useFetch(
    "https://run.mocky.io/v3/4f3d84bf-9cc5-45cb-b3c8-3636e5b54c0e"
  );
  return (
    <Layout>
      <div className="content">
        <div className="content__wrapper">
          <div className="widgets">
            {data?.widgets?.map((item) => (
              <Widgets key={item.id} item={item} />
            ))}
          </div>

          <Banners />

          <div className="ads">
            {data?.ads?.map((item) => (
              <Ads key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
