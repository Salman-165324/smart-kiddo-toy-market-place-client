import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ShoppingCard from "./ShoppingCard";
import ShoppingCardBlock from "./ShoppingCardBlock";
import Aos from "aos";
import "aos/dist/aos.css";

const ShoppingByCategory = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="primary-container mt-20 md:mt-24 lg:mt-28"
      data-aos="flip-down"
    >
      <h2 className="section-title">Shop by Category</h2>
      <Tabs>
        <TabList>
          <div className="mt-16 inline-flex px-1">
            <Tab>
              <button className="font-semibold py-2 px-4 rounded-r-none rounded-l-lg hover:bg-[#a83b39] hover:border-[#a83b39] border-[#c15352] bg-accent text-neutral1">
                Language Toys
              </button>
            </Tab>
            <Tab>
              <button className="font-semibold py-2 px-4 rounded-l-none rounded-r-none hover:bg-[#a83b39] hover:border-[#e0c3c2] border-neutral1 border-r-2 border-l-2 bg-accent text-neutral1">
                Math Toys
              </button>
            </Tab>
            <Tab>
              <button className="font-semibold py-2 px-4 rounded-l-none rounded-r-lg hover:bg-[#a83b39] hover:border-[#a83b39] border-[#c15352] bg-accent text-neutral1">
                Engineering Toys
              </button>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <ShoppingCardBlock category="Language Toys"></ShoppingCardBlock>
        </TabPanel>
        <TabPanel>
          <ShoppingCardBlock category="Math Toys"></ShoppingCardBlock>
        </TabPanel>
        <TabPanel>
          <ShoppingCardBlock category="Engineering Toys"></ShoppingCardBlock>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShoppingByCategory;
