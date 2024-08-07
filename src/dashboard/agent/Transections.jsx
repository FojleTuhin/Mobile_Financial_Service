import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Transections = () => {
    return (
        <div className="px-4 md:px-[70px] lg:px-[100px] text-center bg-white min-h-screen py-5">
            <Tabs>
                <TabList>
                    <Tab>Send Money</Tab>
                    <Tab>Cash in</Tab>
                    <Tab>Cash out</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Transections;