import React, { useState } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});

    // insoo added on Oct 7, 2021 (Not working)
    const HOMEMSG1 = process.env.DEV_MSG_HOME1;
    const HOMEMSG2 = process.env.DEV_MSG_HOME2;
    console.log(`HOMEMSG1: ${HOMEMSG1}`);
    console.log(`HOMEMSG2: ${HOMEMSG2}`);
  
    return (
        <ApolloProvider client={client}>
          <div className="search">
              <h2> Local Restaurants:</h2>
              {/* <small> Docker Hub img: insoo223/prjrest:ngrtimsvr </small> */}
              <small> Home by Docker Hub img: insoo223/prjrest:insoodocker </small>
              {/* <small> ${HOMEMSG1} </small> */}
              {/* <small> ${HOMEMSG2} </small> */}
              <small> /backend resides in /app; Strapi by running native on insooDocker Droplet </small>
              {/* <small> Built on insooDocker Droplet</small> */}
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            <RestaurantList search={query} />
            <Cart> </Cart>
        </ApolloProvider>
    );
  }
  export default Home;
  