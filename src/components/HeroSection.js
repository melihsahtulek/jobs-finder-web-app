import React from "react";
import Container from "components/Container";
import Input from "components/Input";
import Button from "components/Button";

const HeroSection = () => {
  return (
    <Container borderRadius="rounded-md" mt="mt-5">
      <div className="flex bg-white rounded-md overflow-hidden h-[52px] shadow-sm">
        <div className="flex-1 pl-2">
          <Input
            type="text"
            placeHolder="location"
            icon={{
              name: "MdOutlineLocationOn",
              iconColor: "#2563eb",
              size: 30,
            }}
          />
        </div>
        <div className="w-[100px]">
          <Button type="button" value="Search" bg="bg-blue-600" />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
