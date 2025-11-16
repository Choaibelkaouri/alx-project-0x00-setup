import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="flex gap-4 mb-6">
        <Button title="Small Rounded" className="text-sm rounded-sm" />
        <Button title="Medium Rounded" className="text-base rounded-md" />
        <Button title="Large Rounded" className="text-lg rounded-full" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;
