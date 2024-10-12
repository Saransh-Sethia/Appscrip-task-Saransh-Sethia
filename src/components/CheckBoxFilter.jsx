import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styles from "./CheckBoxFilter.module.css";
import chevronDown from "./chevron-down.svg";

const CheckBoxFilter = () => {

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );


  const accordionContent = [
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  return (
    <div>
      {accordionContent?.map((content) => (
        <Accordion className="accordian">
          <AccordionItem header={content} className="accordian-item">
            {categories?.map((item) => (
              <div key={item.id} className="categories-item">
              <input type="checkbox" id="" name="" value="" />
              <label>{item}</label>
              </div>

            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CheckBoxFilter;
