import React, { useState } from "react";
import Layout from "../components/layout";
import TweetCard from "../components/card";
import DisableScrolling from "../components/disableRubberBandScrolling";

import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Search from "../components/search";

import dummy from "../data/hook_tweet.json";

const debug = true;

const styles = {
  root: {
    height: "100vh",
    width: "100vw"
  },
  tweetTree: {
    height: "80%",
    overflow: "scroll"
  },
  search: {
    height: "20%",
    backgroundColor: "black"
  },
  loading: {
    position: "fixed",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFEEAD55",
    color: "#DB504A",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: "13px menlo"
  }
};

const fetchAPI = async url => {
  const search_url_base =
    "https://tweet-tree-backend.herokuapp.com/v1/tweets/tree?url=";

  // fetching data!
  console.log("fetching data from ");
  console.log(url);
  const response = await fetch(search_url_base + url);
  const data = await response.json();

  return data;
};

// fetching happens here
const Page = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(props.tweetTreeDummy);

  // url exists when user enters url at the bottom
  //console.log(url);
  async function handleAPICall(e) {
    const dummyUrl =
      "https%3A%2F%2Ftwitter.com%2Ffchollet%2Fstatus%2F1044465230317645824";
    let fetchUrl = "";
    if (e[0] != "h") {
      fetchUrl = dummyUrl;
    } else {
      fetchUrl = e;
    }
    setIsLoading(true);
    const response = await fetchAPI(fetchUrl);
    setIsLoading(false);
    setData(response);
  }

  // TODO: build tweet tree here
  const flatListCards = data => {
    let childCards = [];
    data.children.forEach((v, i) => {
      childCards.push(<TweetCard key={i} data={v} />);
    });

    return (
      <div style={styles.root}>
        {isLoading ? (
          <div style={styles.loading}>
            <h2>loading...</h2>
          </div>
        ) : null}
        <div style={styles.tweetTree}>
          <Layout>
            <TweetCard key={0} data={data} />
            {childCards}
          </Layout>
        </div>

        <div style={styles.search}>
          <Layout>
            <p style={{ margin: "0 auto", color: "white" }}>
              build a tweet tree by pasting in twitter URL
            </p>
            <Search handleAPICall={handleAPICall} />
          </Layout>
        </div>
      </div>
    );
  };

  return <DisableScrolling>{flatListCards(data)}</DisableScrolling>;
};

// componentDidMount
Page.getInitialProps = async function(context) {
  const search_url_base =
    "https://tweet-tree-backend.herokuapp.com/v1/tweets/tree?url=";

  if (debug === false) {
    // option to call something live as an initial load
    return {
      tweetTreeDummy: await fetchAPI(
        "https%3A%2F%2Ftwitter.com%2Ffchollet%2Fstatus%2F1044465230317645824"
      )
    };
  } else {
    const data = dummy;
    return {
      tweetTreeDummy: data
    };
  }
};

export default Page;
