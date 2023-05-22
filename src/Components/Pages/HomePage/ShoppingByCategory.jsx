import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ShoppingCard from './ShoppingCard';
import ShoppingCardBlock from './ShoppingCardBlock';

const ShoppingByCategory = () => {

    return (
        <div className='primary-container'>
            <h2 className='text-center font-semibold text-3xl md:text-5xl'>Shop by Category</h2>
            <Tabs>
                <TabList>
                    <div className="mt-8 inline-flex px-1">

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
                    <ShoppingCardBlock category='Language Toys'></ShoppingCardBlock>
                </TabPanel>
                <TabPanel>
                    <ShoppingCardBlock category='Math Toys'></ShoppingCardBlock>
                </TabPanel>
                <TabPanel>
                    <ShoppingCardBlock category='Engineering Toys'></ShoppingCardBlock>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShoppingByCategory;