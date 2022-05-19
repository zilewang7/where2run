import React from "react";
import { FilterTag } from "./FilterTag";
import { Typography, Divider, DatePicker, Cascader } from "antd";
import { areaData } from "./areaData";

const { Text } = Typography;

interface PropsType {
  title: string;
  tags: string[];
}

export const Filter: React.FC<PropsType> = ({ title, tags }) => {
  return (
    <div>
      <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>
        {title} :{" "}
      </Text>
      {tags.map((t, index) => {
        if (index === tags.length - 1) {
          switch (title) {
            case "出发城市":
              {
                return (
                  <span key={`filter-${title}-${index}`}>
                    <FilterTag>{t}</FilterTag>
                    <Divider type="vertical" />
                    <Cascader options={areaData} placeholder="Please select" style={{ overflow: "hidden" }} />
                  </span>)
              }
            case "出发时间":
              {
                return (
                  <span key={`filter-${title}-${index}`}>
                    <FilterTag>{t}</FilterTag>
                    <Divider type="vertical" />
                    <DatePicker />
                  </span>)
              }
            default:
              return <FilterTag key={`filter-${title}-${index} `}>{t}</FilterTag>;
          }
        }
        return (
          <span key={`filter-${title}-${index}`}>
            <FilterTag>{t}</FilterTag>
            <Divider type="vertical" />
          </span>
        );
      })}
    </div>
  );
};
