import React from "react";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

export default Settings;

Settings.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
