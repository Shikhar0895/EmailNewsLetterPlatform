import React from "react";
import useSettingsFilter from "../../hooks/useSettingFilter";
import { Tabs, Tab } from "@nextui-org/react";

const SettingsTabs = () => {
  const { activeItem, setActiveItem } = useSettingsFilter();
  return (
    <Tabs
      variant={"underlined"}
      aria-label="Tabs variants"
      selectedKey={activeItem}
      onSelectionChange={() => setActiveItem}
    >
      <Tab key="API Access" title="API Access" />
      <Tab key="Customize Profile" title="Customize Profile" />
    </Tabs>
  );
};

export default SettingsTabs;
