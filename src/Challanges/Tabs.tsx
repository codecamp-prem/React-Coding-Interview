import { ReactNode, createContext, useContext, useState } from "react";
import "./common.css";

const tabContent = createContext({
  activeTabValue: "",
  setActiveTabValue: (value: string) => {},
});

function TabProvider({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [activeTabValue, setActiveTabValue] = useState(defaultValue);

  return (
    <tabContent.Provider value={{ activeTabValue, setActiveTabValue }}>
      {children}
    </tabContent.Provider>
  );
}

function TabTrigger({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const { activeTabValue, setActiveTabValue } = useContext(tabContent);

  const handleSetActiveTabValue = () => {
    setActiveTabValue(value);
  };

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

function TabContent({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const { activeTabValue } = useContext(tabContent);
  if (activeTabValue !== value) {
    return null;
  }
  return children;
}

const Tabs = () => {
  return (
    <div className="container">
      <section>
        <h1>Tabs</h1>
        <TabProvider defaultValue="tab-1">
          <div className="tabs">
            <TabTrigger value="tab-1">Tab 1</TabTrigger>
            <TabTrigger value="tab-2">Tab 2</TabTrigger>
            <TabTrigger value="tab-3">Tab 3</TabTrigger>
          </div>
          <TabContent value="tab-1">Tab Content 1</TabContent>
          <TabContent value="tab-2">Tab Content 2</TabContent>
          <TabContent value="tab-3">Tab Content 3</TabContent>
        </TabProvider>
      </section>
    </div>
  );
};

export default Tabs;
